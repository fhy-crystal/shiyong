<template>
	<article class="content layout_1200 clearfix">
		<div class="fl banner">
			<img src="../assets/login/login_banner.png">
		</div>
		<div class="fr content_right">
			<div class="title">
				账户登录
			</div>
			<div class="form_box">
				<div class="error_message">{{errorMsg}}</div>
				<el-form :model="info" :rules="rules" ref="loginForm" class="form">
					<el-form-item prop="mobile">
						<!-- <el-input v-model="info.mobile" placeholder="用户名"></el-input> -->
						<input type="text" class="inputBox" v-model="info.mobile" placeholder="用户名">
					</el-form-item>
					<el-form-item prop="password">
						<input type="password" class="inputBox" v-model="info.password" placeholder="6位以上字符，包含英文、数字">
						<!-- <el-input type="password" v-model="info.password" placeholder="6位以上字符，包含英文、数字"></el-input> -->
					</el-form-item>
					<li class="forgot_pwd clearfix">
						<router-link class="fr" to="/findPwd">忘记密码？</router-link>
					</li>
					<el-form-item>
						<el-button class="login_btn" type="primary" @click="onSubmit('loginForm')">立即登录</el-button>
					</el-form-item>
					<li class="register">
						<router-link to="/register" class="fr">快速注册</router-link>
					</li>
				</el-form>
			</div>
		</div>
	</article>
</template>
<script>
	import API from '../utils/api'
	import * as Cookies from 'js-cookie'
	export default {
		data() {
			var userCheck = (rule, value, callback) => {
				if (value === '') {
					callback(new Error('用户名不能为空'));
				} else {
					callback();
				}
			};
			var pwdCheck = (rule, value, callback) => {
				if (value === '') {
					callback(new Error('密码不能为空'));
				} else if (value && value.length < 6) {
					callback(new Error('密码长度不能小于6位'));
				} else {
					callback();
				}
			}
			return {
				errorMsg: '',
				info: {
					mobile: '',
					password: ''
				},
				rules: {
					mobile: [{
						validator: userCheck, trigger: 'blur'
					}],
					password: [{
						validator: pwdCheck, trigger: 'blur'
					}]
				}
			}
		},
		methods: {
			onSubmit(formName) {
				this.$refs[formName].validate((valid) => {
					if (valid) {
						API.login(this.info).then((data) => {
							if (data.succ) {
								this.$router.push('/prolist');
								Cookies.set('token', data.data.token);
								Cookies.set('username', data.data.username);
								Cookies.set('role', data.data.role);
							} else {
								this.errorMsg = data.msg;
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
	/* 内容 */
	.content {
		padding: 20px 0 50px 0;
		margin-top: 60px;
		font-size: 14px;
		background-color: #fff;

		.content_right {
			margin: 30px 122px 0 0;
			padding-bottom: 20px;
			width: 348px;
			border: 1px solid #EAEAEA;
			border-radius: 3px;

			.title {
				line-height: 52px;
				text-align: center;
				background:#f2f3f7;
				color: $main_color;
			}

			.form_box {
				padding: 10px;
				text-align: center;

				.error_message {
					height: 26px;
					line-height: 26px;
					color: red;
					text-align: left;
				}

				.form {
					margin-top: 10px;

					.el-form-item {
						margin-bottom: 0;
						margin-top: 22px;
					}
					.el-form-item:first-child {
						margin-top: 10px;
					}
				}
				.login_btn {
					width: 100%;
					border: 0;
					background-color: $main_color;
				}

				.forgot_pwd, .register {
					a {
						display: inline-block;
						margin-top: pxtorem(10);
						color: $light_grey;
						line-height: 24px;
					}
				}

			}
			
		}
	}
	.inputBox {
		font-size: 12px;
		outline: none;
		width: 100%;
		height: 40px;
		line-height: 40px;
		border: 1px solid #EFEFEF;
		border-radius: 3px;
		padding-left: 10px;
		vertical-align: middle;
	}
</style>