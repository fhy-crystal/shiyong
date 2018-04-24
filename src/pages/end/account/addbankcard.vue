<template>
	<el-form ref="form" :model="info" :rules="rules" label-width="80px">
		<p class="title">绑定提现账号<p/>
		<el-form-item class="le_width" label="银行名称" prop="bank">
			<el-input  v-model="info.bank" placeholder="请输入内容"></el-input>
		</el-form-item>
		<el-form-item class="le_width" label="所属支行">
			<el-input  v-model="info.bankfiliale" placeholder="请输入内容"></el-input>
		</el-form-item>
		<el-form-item class="le_width" label="银行卡号" prop="bank_card">
			<el-input  v-model="info.bank_card" placeholder="请输入内容"></el-input>
		</el-form-item>
		<el-form-item class="le_width" label="持卡人" prop="real_name">
			<el-input  v-model="info.real_name" placeholder="请输入内容"></el-input>
		</el-form-item>
		<el-form-item class="le_width" label="身份证号" prop="id_card">
			<el-input  v-model="info.id_card" placeholder="请输入内容"></el-input>
		</el-form-item>

		<el-form-item>
			<el-button type="primary" @click="onSubmit('form')">提交</el-button>
		</el-form-item>
	</el-form>
</template>



<script>
	import API from '../../../utils/api'
	export default {
		data() {
			return {
				info: {
					bank: '',
					bankfiliale: '',
					bank_card: '',
					real_name: '',
					id_card: ''
				},
				rules: {
					bank: [{required: true, message: '请输入银行名称', trigger: 'blur'}],
					bank_card: [{required: true, message: '请输入银行卡号', trigger: 'blur'}],
					real_name: [{required: true, message: '请输入真实姓名', trigger: 'blur'}],
					id_card: [{required: true, message: '请输入身份证号', trigger: 'blur'}]
				}
			}
		},
		methods: {
			onSubmit(formName) {
				this.$refs[formName].validate(valid => {
					if (valid) {
						API.createFund(this.info).then((data) => {
							if (data.succ) {
								this.$router.push('/backManage/bankcardlist')
							} else {
								this.$message({
									showClose: true,
									message: data.msg,
									type: 'error'
								})
								if (data.code === "20112") {
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
				})
			}
		}
	}
</script>



<style lang="scss" scoped>
	@import '../../../../static/css/common.scss';
	.le_width{
		width:400px;
	}
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

</style>














<!--<template>-->
	<!--<div>-->
		<!--<p class="title">绑定提现账号<p/>-->
		<!--<div class="item"><span class="span_name">银行名称:</span><input type="text" placeholder="请输入银行名称" name="task_name"  class="shop_name"/></div>-->
		<!--<div class="item"><span class="span_name">银行卡号:</span><input type="text" placeholder="请输入银行卡号" name="goods_price"  class="shop_name"/></div>-->
		<!--<div class="item"><span class="span_name">持卡人:</span><input type="text" placeholder="请输持卡人姓名" name="total_order_number"  class="shop_name"/></div>-->
		<!--<div style="text-align:center">-->
			<!--<el-button type="primary" @click="submit">提  交</el-button>-->
		<!--</div>-->
	<!--</div>-->
<!--</template>-->
<!--<script>-->
	<!--export default {-->
		<!--data() {-->
			<!--return {-->

			<!--}-->
		<!--}-->
	<!--}-->
<!--</script>-->
<!--<style lang="scss" scoped>-->
	<!--@import '../../../../static/css/common.scss';-->
	<!--.title{-->
		<!--height: 40px;-->
		<!--text-align: left;-->
		<!--color: #3B3B3B;-->
		<!--font-weight: bold;-->
		<!--font-size: 16px;-->
		<!--border-bottom: 1px solid #9F9F9f;-->
		<!--line-height: 60px;-->
		<!--padding-bottom:50px;-->
		<!--margin-bottom: 20px;-->
	<!--}-->
	<!--.el-select-dropdown__item{-->
		<!--margin-left: 20px;-->
	<!--}-->
	<!--.span_name{-->
		<!--display: inline-block;-->
		<!--width: 100px;-->
		<!--text-align: right;-->
		<!--color: #2E2D3C;-->
		<!--margin-right: 10px;-->
		<!--font-size: 13px;-->
	<!--}-->
	<!--.shop_name {-->
		<!--font-size: 12px;-->
		<!--outline: none;-->
		<!--width: 218px;-->
		<!--height: 40px;-->
		<!--line-height: 40px;-->
		<!--border: 1px solid #EFEFEF;-->
		<!--border-radius: 3px;-->
		<!--padding-left: 10px;-->
		<!--vertical-align: middle;-->
	<!--}-->
	<!--.goodspic{-->
		<!--float:left;-->
	<!--}-->
	<!--.upload-demo{-->
		<!--float: left;-->
	<!--}-->
	<!--.item{-->
		<!--margin-top: 20px;-->
	<!--}-->
<!--</style>-->