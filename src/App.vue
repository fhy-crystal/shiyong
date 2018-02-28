<template>
	<div id="app">
		<top v-if="islogin"></top>
		<topBack v-else></topBack>
		<router-view/>
		<footblock></footblock>
	</div>
</template>

<script>
import top from '@/components/top'
import topBack from '@/components/topBack'
import footblock from '@/components/footer'

export default {
	name: 'App',
	components: {
		top,
		topBack,
		footblock,
	},
	data() {
		return {
			islogin: false,// 是否登陆
		}
	},
	watch: {
		$route() {
			if (this.$route.path == '/login' || this.$route.path == '/register') {
				this.islogin = false;
			} else {
				this.islogin = true;
			}
		}
	},
}
</script>

<style lang="scss">
@import '../static/css/normalize.scss';

body {
	font-family: "Helvetica Neue", Helvetica, Arial, "Hiragino Sans GB", 微软雅黑, tahoma, simsun, 宋体;
	background-color: #f6f6f6;
	font-size: 12px;
	box-sizing: border-box;
}
</style>
