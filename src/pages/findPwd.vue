<template>
	<article class="content">
		<el-steps :active="active" finish-status="success" align-center>
			<el-step title="验证身份"></el-step>
			<el-step title="修改密码"></el-step>
			<el-step title="修改完成"></el-step>
		</el-steps>

		<div class="step-block">
			<div v-show="active==0">
				<el-form :model="info" :rules="rules" ref="form1" class="form" label-position="right" label-width="110px">
					<el-form-item label="已绑定手机号" prop="mobile">
						<el-input v-model="info.mobile" placeholder="请输入手机号"></el-input>
					</el-form-item>
					<el-form-item label="核对手机验证码" prop="captcha">
						<el-input class="sm_input" v-model="info.captcha" placeholder="请输入短信验证码"></el-input>
						<span>
							<a class="get_sms" @click="getCapcha">短信获取</a>
						</span>
					</el-form-item>
				</el-form>

				<div class="btn-block">
					<el-button class="btn" style="margin-top: 12px;" @click="next(0, 'form1')">下一步</el-button>
				</div>
			</div>
			<div v-show="active==1">
				<el-form :model="info" :rules="rules" ref="form2" class="form" label-position="right" label-width="110px">
					<el-form-item label="新密码" prop="password">
						<el-input type="password" v-model="info.password" placeholder="6位以上字符，包含英文、数字"></el-input>
					</el-form-item>
					<el-form-item label="确认密码" prop="confirm_password">
						<el-input type="password" v-model="info.confirm_password" placeholder="6位以上字符，包含英文、数字"></el-input>
					</el-form-item>
				</el-form>

				<div class="btn-block">
					<el-button class="btn" style="margin-top: 12px;" @click="next(1, 'form2')">下一步</el-button>
				</div>
			</div>
			<div v-show="active==2">
				<div class="txt-center"><i class="el-icon-circle-check"></i></div>
				<div class="btn-block">
					<el-button class="btn" style="margin-top: 12px;" @click="next(2)">完成</el-button>
				</div>
			</div>

			
		</div>


		
	</article>
</template>
<script>
	import API from '../utils/api'
	export default {
		data() {
			var phoneCheck = (rule, value, callback) => {
				if (value === '') {
					callback(new Error('手机号不能为空'));
				} else if (!(/^1(3|4|5|7|8)\d{9}$/.test(value))) {
					callback(new Error('手机号不正确'));
				} else {
					callback();
				}
			}
			var captchaCheck = (rule, value, callback) => {
				if (value === '') {
					callback(new Error('验证码不能为空'));
				} else {
					callback();
				}
			}
			var pwdCheck = (rule, value, callback) => {
				if (value === '') {
					callback(new Error('密码不能为空'));
				} else {
					if (value && value.length < 6) {
						callback(new Error('密码长度不能小于6位'));
					} else {
						callback();
					}
				}
			}
			var pwdConfirmCheck = (rule, value, callback) => {
				if (value === '') {
					callback(new Error('密码不能为空'));
				} else {
					if (value !== this.info.password) {
						callback(new Error('两次输入密码不一致'));
					} else {
						callback();
					}
				}
			}
			return {
				active: 0,
				info: {
					mobile: '',
					captcha: '',
					password: '',
					confirm_password: ''
				},
				rules: {
					mobile: [{
						validator: phoneCheck, trigger: 'blur'
					}],
					captcha: [{
						validator: captchaCheck, tigger: 'blur'
					}],
					password: [{
						validator: pwdCheck, trigger: 'blur'
					}],
					confirm_password: [{
						validator: pwdConfirmCheck, trigger: 'blur'
					}],
				}
			}
		},
		methods: {
			next(step, formName) {
				if (step == 0) {
					this.$refs[formName].validate((valid) => {
						if (valid) {
							this.active ++
						}
					})
				} else if (step == 1) {
					this.$refs[formName].validate((valid) => {
						if (valid) {
							this.active ++
						}
					})
				} else {
					API.reset(this.info).then((data) => {
						if (data.succ) {
							this.$message({
								showClose: true,
								message: '密码修改成功',
								type: 'success'
							})
							this.$router.push('/login');
						} else {
							this.$message({
								showClose: true,
								message: data.msg,
								type: 'error'
							})
						}
					}, (e) => {
						this.$message({
							showClose: true,
							message: e,
							type: 'error'
						})
					})
				}
			},
			getCapcha() {
				if (!this.info.mobile) {
					this.$message({
						showClose: true,
						message: '请填写手机号',
						type: 'error'
					})
				} else {
					API.smscaptcha(this.info.mobile).then((data) => {
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
	}
</script>
<style lang="scss" scoped>
	@import '../../static/css/common.scss';
	.content {
		padding: 50px;
		margin: 60px auto 0;
		width: 1100px;
		font-size: 14px;
		background-color: #fff;


		.step-block {
			margin: 50px auto 0;
			width: 400px;
			height: 200px;

			.el-step__title.is-process {
				color: $main_color!important;
			}

			.btn-block {
				margin-top: 50px;
				width: 100%;
				text-align: center;
				.btn {
					margin-top: 15px;
					padding: 0 10px;
					width: 50%;
					height: 42px;
					background-color: $main_color;
					color: #fff;
					outline: none;
					cursor: pointer;
					border: 0;
					font-size: 16px;
				}
			}

			.el-icon-circle-check {
				font-size: 100px;
				color: #67c23a;
			}
		}

		.sm_input {
			display: inline-block;
			width: 150px;
		}
		// 短信获取
		.get_sms {
			margin-left: 25px;
			display: inline-block;
			width: 100px;
			height: 40px;
			line-height: 40px;
			text-align: center;
			color: $main_color;
			border: 1px solid $main_color;
			border-radius: 5px;
			&.disabled {
				color: #999;
				border: 1px solid #EBEBEC;
			}
		}
	}
</style>