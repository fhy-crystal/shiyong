<template>
	<nav class="public_top">
		<div class="layout_1200 clearfix">
			<div class="fl">
				<router-link to="/login" class="font_red">登录</router-link>
				<router-link to="/regConfirm" class="font_red">免费注册</router-link>
				<router-link to="/backManage/userinfo" v-show="!user">商家中心</router-link>
				<router-link to="/backManage/userinfo" v-show="user">用户中心</router-link>
			</div>
		</div>
	</nav>
</template>
<script>
	export default {
		data() {
			return {
				user: true
			}
		}
	}
</script>
<style lang="scss" scoped>
	@import '../../static/css/common.scss';
</style>