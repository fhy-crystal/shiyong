<template>
	<div>
		<p class="title">账户提现<p/>
		<el-form ref="form" :model="form" label-width="120px">
			<el-form-item label="选择银行卡">
				<el-select v-model="form.account_id" placeholder="请选择">
					<el-option
						v-for="item in destinations"
						:key="item.id"
						:label="item.bank_card + '(' + item.real_name + ')'"
						:value="item.id">
					</el-option>
				</el-select>
			</el-form-item>

			<el-form-item label="提现金额">
				<el-input class="sm_width" v-model="form.amount"></el-input>
			</el-form-item>
			<el-form-item label="验证码">
				<el-input class="sm_width" v-model="form.captcha"></el-input>
				<el-button type="text" @click="getCaptcha">发送验证码到{{mobile}}</el-button>
			</el-form-item>
			<el-form-item>
				<el-button type="primary" @click="save">提现</el-button>
			</el-form-item>
		</el-form>
	</div>
</template>
<script>
	import API from '../../../utils/api'
	export default {
		data() {
			return {
				form: {
					account_id: '',
					amount:'',
					captcha:'',
				},
				destinations:[],
				mobile: ''
				
			}
		},
		created(){
			this.getUserInfo();
			this.getList();
		},
		methods: {
			getUserInfo() {
				API.getmyinfo().then((data) => {
					if (data.succ) {
						this.mobile = data.data.mobile;
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
			},
			getList() {
				API.getFundList().then((data) => {
					if (data.succ) {
						this.destinations = data.data;
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
			},
			getCaptcha() {
				API.smscaptcha({mobile: this.mobile}).then((data) => {
					if (data.succ) {
						this.$message({
							showClose: true,
							message: '验证码已发送，请查收',
							type: 'success'
						})
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
			},
			save() {
				this.form.amount = this.form.amount*100;
				API.withdraw(this.form).then((data) => {
				if (data.succ) {
					this.$message({
						showClose: true,
						message: '充值成功',
						type: 'success'
					})
					this.$router.push('/backManage/rechargelist')
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
	.el-select-dropdown__item{
		margin-left: 10px;
		margin-right: 20px;
	}
	.span_name{
		display: inline-block;
		width: 100px;
		text-align: right;
		color: #2E2D3C;
		margin-right: 10px;
		font-size: 13px;
	}
	.shop_name {
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

	.sm_width {
		width:200px;
	}
</style>