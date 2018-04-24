<template>
	<div>
		<p class="title">开始任务<p/>
		<div class="item"><span class="span_name">进店方式:</span><span>{{taskInfo.platform}}</span></div>
		<div class="item"><span class="span_name">关键字:</span><span>{{taskInfo.goods_keyword}}</span></div>

		<div class="item"><span class="span_name">任务淘宝号:</span><span>{{userInfo.taobao_account}}</span></div>
		<div class="item">
			<span class="span_name">核对商家:</span>
			<input type="text" placeholder="请输入商家旺旺" name="seller_store" v-model='seller_store'  class="shop_name" />
			<el-button type="primary" @click ='makesure' size="small">确认商家旺旺</el-button>
		</div>
		<div class="item"><span class="span_name">下单价格:{{taskInfo.goods_price}}</span></div>
		<div class="item"><span class="span_name">预计返款:{{taskInfo.goods_price}}</span></div>
		<div class="item" style="overflow:hidden">
			<span class="span_name goodspic">核对商品主图:</span>
			<img style="width:200px;height:200px;" :src="taskInfo.goods_image"/>
		</div>
		<div class="item"><span class="span_name">淘宝订单号:</span><input type="text" placeholder="淘宝订单号" name="order_id"  class="shop_name" v-model="taobaoId"/></div>
		<div style="text-align:center">
			<el-button type="primary" @click="submit">提  交</el-button>
		</div>
	</div>
</template>
<script>
	import API from '../../../utils/api'
    export default {
        data() {
            return {
                taskInfo: {},
                userInfo: {},
                seller_store:'',
                taobaoId: ''
            };
        },
        created() {
			this.getDetail();
			this.getUserInfo();
		},
        methods: {
        	getDetail() {
				API.taskdetail(this.$route.params.taskid).then((data) => {
					if (data.succ) {
						this.taskInfo = data.data;
						console.log(data.data);
					} else {
						this.$message({
							showClose: true,
							message: data.msg,
							type: 'error'
						})
						if (data.data.code === '20122') {
							this.$router.push('/login');
						}
					}
				}, (e) => {
					this.$message({
						showClose: true,
						message: e,
						type: 'error'
					})
				})
			},
			getUserInfo() {
				API.getmyinfo().then((data) => {
					if (data.succ) {
						this.userInfo = data.data;
					} else {
						this.$message({
							showClose: true,
							message: data.msg,
							type: 'error'
						})
						if (data.data.code === '20122') {
							this.$router.push('/login');
						}
					}
				}, (e) => {
					this.$message({
						showClose: true,
						message: e,
						type: 'error'
					})
				})
			},
			makesure(){
				let data ={
					store_account:this.seller_store
				};
				API.makesure(this.$route.params.orderid,data).then((data) => {
					if (data.succ) {
						this.$message({
							showClose: true,
							message: '商家正确',
							type: 'success'
						})
					} else {
						this.$message({
							showClose: true,
							message: data.msg,
							type: 'error'
						})
						if (data.data.code === '20122') {
							this.$router.push('/login');
						}
					}
				}, (e) => {
					this.$message({
						showClose: true,
						message: e,
						type: 'error'
					})
				})
			},
			submit(){
				let postBody = {
					order_id: this.taobaoId,
					price: this.taskInfo.goods_price
				};
				API.submitOrder(this.$route.params.orderid, postBody).then((data) => {
					if (data.succ) {
						this.$message({
							showClose: true,
							message: '已提交',
							type: 'success'
						})
						this.$router.push({name: 'myorderlist'})
					} else {
						this.$message({
							showClose: true,
							message: data.msg,
							type: 'error'
						})
						if (data.data.code === '20122') {
							this.$router.push('/login');
						}
					}
				}, (e) => {
					this.$message({
						showClose: true,
						message: e,
						type: 'error'
					})
				})
			}

            
        }
    }
</script>
<style lang="scss" scoped>
	@import '../../../../static/css/common.scss';
	.title{
		height: 40px;
		text-align: left;
		color: #3B3B3B;
		font-weight: bold;
		font-size: 16px;
		border-bottom: 1px solid #9F9F9f;
		line-height: 60px;
		padding-bottom:50px;
		margin-bottom: 20px;
	}
	.span_name{
		display: inline-block;
		width: 100px;
		text-align: right;
		color: #2E2D3C;
		margin-right: 10px;
		font-size: 13px;
	}
	input {
		font-size: 12px;
		outline: none;
		width: 218px;
		height: 40px;
		line-height: 40px;
		border: 1px solid #EFEFEF;
		border-radius: 3px;
		padding-left: 10px;
		vertical-align: middle;
	}
	.goodspic{
		float:left;
	}
	.upload-demo{
		float: left;
	}
	.item{
		margin-top: 20px;
	}
</style>