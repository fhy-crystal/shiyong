<template>
	<article class="content">
		<div class="reg_detail layout_1200 clearfix">
			<el-form :model="info" :rules="rules" ref="registerForm" label-position="right" label-width="80px">
				<el-form-item label="手机号" prop="mobile">
					<el-input v-model="info.mobile" placeholder="请输入手机号"></el-input>
				</el-form-item>
				<el-form-item label="密码" prop="password">
					<el-input type="password" v-model="info.password" placeholder="6位以上字符，包含英文、数字"></el-input>
				</el-form-item>
				<el-form-item label="确认密码" prop="confirm_password">
					<el-input type="password" v-model="info.confirm_password" placeholder="6位以上字符，包含英文、数字"></el-input>
				</el-form-item>
				<el-form-item label="邀请码">
					<el-input v-model="info.invite_code" placeholder="请填写邀请码"></el-input>
				</el-form-item>
				<el-form-item label="验证码" prop="captcha">
					<el-input class="sm_input" v-model="info.captcha" placeholder="请输入短信验证码"></el-input>
					<span>
						<a class="get_sms" @click="getCapcha">短信获取</a>
					</span>
				</el-form-item>
				<!-- <li class="agreement">
					<input name="agreement" type="checkbox" value="1" checked="checked">
					<span>我已仔细阅读并同意接受</span>
					<a class="protocol" href="#" target="_blank">用户使用协议</a>
				</li> -->
				<el-form-item>
					<el-button type="primary" class="submitBtn" @click="submit('registerForm')">确认</el-button>
				</el-form-item>
			</el-form>
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
			var captchaCheck = (rule, value, callback) => {
				if (value === '') {
					callback(new Error('验证码不能为空'));
				} else {
					callback();
				}
			}

			return {
				info: {
					mobile: '',
					password: '',
					confirm_password: '',
					captcha: '',
					invite_code: ''
				},
				rules: {
					mobile: [{
						required: true, validator: phoneCheck, trigger: 'blur'
					}],
					password: [{
						required: true, validator: pwdCheck, trigger: 'blur'
					}],
					confirm_password: [{
						required: true, validator: pwdConfirmCheck, trigger: 'blur'
					}],
					captcha: [{
						required: true, validator: captchaCheck, trigger: 'blur'
					}]
				},
				role: ''
			}
		},
		created() {
			// 获取用户角色
			this.role = this.$route.params.role;
		},
		methods: {
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
				
			},
			submit(formName) {
				this.$refs[formName].validate((valid) => {
					if (valid) {
						API.register(this.info).then((data) => {
							if (data.succ) {
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
				})
			}
		}
	}
</script>
<style lang="scss" scoped>
	@import '../../static/css/common.scss';
	// 注册详情页
	.reg_detail {
		margin-top: 50px;
		width: 600px;
		padding: 50px;
		background-color: white;
		border-radius: 5px;

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

		.agreement {
			margin-left: 90px;
			.protocol {
				color: $main_color;
			}
		}
		.submitBtn {
			margin-top: 15px;
			padding: 0 10px;
			width: 100%;
			height: 42px;
			background-color: $main_color;
			color: #fff;
			outline: none;
			cursor: pointer;
			border: 0;
			font-size: 16px;
		}
	}
</style>