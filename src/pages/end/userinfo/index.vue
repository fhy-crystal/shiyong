<template>
	<div class="business_rightmain myfl">
		<!-- 信息、数据展示 -->
		<div class="business_index_base myfl">
			<div class="business_index_msg clearfix" style="padding-bottom: 10px;">
				<a href="/user/person/info"><img class="userControl_index_userPic" src="../../../assets/backManage/business/business_index_user.png"/></a>
				<div class="myfl">
					<h1 class="business_index_userName">您好，<a href="/user/person/info" style="color:#333;max-width:200px;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;">{{userName}}</a></h1>
				</div>
				<div class="business_index_money myfl">
					<p>
						余额 <b> ￥{{form.amount/100}}</b> 元
					</p>
					<p>
						冻结金额 <em> ￥{{form.locked/100}}</em> 元
					</p>
					<p>
						总收入 <em> ￥{{form.total_earn/100}}</em> 元
					</p>
					<p>
						总支出 <em> ￥{{form.total_pay/100}}</em> 元
					</p>
					<p>
						总提现 <em> ￥{{form.total_withdraw/100}}</em> 元
					</p>
					<p>
						总充值 <em> ￥{{form.total_recharge/100}}</em> 元
					</p>

					<router-link to="/backManage/recharge" class="business_index_rechargeBtn">充值</router-link>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
    import API from '../../../utils/api'
    import * as Cookies from 'js-cookie'
	export default {
		data() {
			return {
				form: {
					amount:'',
					locked:'',
					total_earn:'',
					total_pay:'',
					total_withdraw:'',
					total_recharge:'',
				},
				userName: ''
			}
		},
		created() {
		    // 页面加载的时候调用getlist方法获取列表数据
		  this.getwallet();
		  this.userName = Cookies.get('username');
		},
		methods: {
		    getwallet() {
				API.mywallet().then((data) => {
					if (data.succ) {
						this.form = data.data;
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
		}
	}
</script>
<style lang="scss" scoped>
	@import '../../../../static/css/common.scss';
	@import '../../../assets/css/reset.scss';
	@import '../../../assets/css/animate.scss';
	@import '../../../assets/css/business_L.scss';
	@import '../../../assets/css/main.scss';

	.business_index_actArrowRight{ width: 50px; height: 60px; background: url(../../../assets/backManage/business/business_icon_arrow_right1.png) no-repeat center; float: left;}
	.business_index_actArrowDown{ width: 200px; height: 34px; background: url(../../../assets/backManage/business/business_icon_arrow_down1.png) no-repeat center; float: right;}
	.business_index_actArrowLeft{ width: 50px; height: 60px; background: url(../../../assets/backManage/business/business_icon_arrow_left1.png) no-repeat center; float: left;}
</style>