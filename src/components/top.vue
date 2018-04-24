<template>
	<nav class="public_top">
		<div class="layout_1200 clearfix">
			<div class="fl">
				<router-link to="/login" class="font_red">登录</router-link>
				<router-link to="/register" class="font_red">免费注册</router-link>
				<router-link to="/backManage/userinfo" v-show="!user">商家中心</router-link>
				<router-link to="/backManage/userinfo" v-show="user">用户中心</router-link>
			</div>
			<div class="fr">
				您好 {{userName}}
				<a class="font_red" @click="logout">退出</a>
			</div>
		</div>
	</nav>
</template>
<script>
	import API from '../utils/api'
	import * as Cookies from 'js-cookie'
	export default {
		data() {
			return {
				user: true,
				userName: ''
			}
		},
		watch: {
			$route() {
				if (this.$route.name == 'login' || this.$route.name == 'regConfirm' || this.$route.name == 'register' || this.$route.name == 'findPwd') {
					this.islogin = false;
				} else {
					this.islogin = true;
				}
			}
		},
		created() {
			this.userName = Cookies.get('username') || '';
		},
		methods: {
			logout() {
				API.logout().then((data) => {
					if (data.succ) {
						Cookies.remove('token');
						Cookies.remove('username');
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
		}
	}
</script>
<style lang="scss" scoped>
	@import '../../static/css/common.scss';
</style>