<template>
	<div id="app">
		<top></top>
		<router-view/>
		<footblock></footblock>
	</div>
</template>

<script>
import top from '@/components/top'
import footblock from '@/components/footer'

export default {
	name: 'App',
	components: {
		top,
		footblock
	},
	data() {
		return {

		}
	}
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
