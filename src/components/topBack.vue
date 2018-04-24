<template>
	<header class="relative">
		<div class="layout_1200">
			<ul class="clearfix">
				<li class="logo fl">
					<router-link to="/index">
						<img src="../assets/logo.png">
					</router-link>
				</li>
				<li class="back_index fr">
					<router-link to="/index" v-show="islogin">返回首页</router-link>
				</li>
			</ul>
		</div>
	</header>
</template>
<script>
	export default {
		data() {
			return {
				islogin: false,// 是否登陆
			}
		}
	}
</script>
<style lang="scss" scoped>
	@import '../../static/css/common.scss';
	/* 头部 */
	header {
		padding: 0 20px;
		width: 100%;
		min-width: 1200px;
		line-height: 90px;
		background-color: #fff;
		box-shadow: 1px 1px 10px #ddd;
		box-sizing: border-box;
		.logo {
			height: 91px;
			a {
				display: inline-block;
				width: 200px;
				height: 86px;
				margin-top: 5px;
				img {
					width: 100%;
				}
			}
		}
		.back_index {
			a {
				font-size: 14px;
				color: $light_grey;
			}
		}
	}
</style>