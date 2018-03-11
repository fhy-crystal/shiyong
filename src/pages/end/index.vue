<template>
	<div>
		<topBack></topBack>
		<div class="layout_1200 content_block">
			<leftMenu class="left"></leftMenu>
			<router-view class="right"/>
		</div>
	</div>
</template>
<script>
	import leftMenu from '@/components/leftMenu'
	import topBack from '@/components/topBack'
	export default {
		components: {
			leftMenu,
			topBack
		},
		data() {
			return {
				
			}
		}
	}
</script>
<style lang="scss" scoped>
	@import '../../../static/css/common.scss';
	.content_block {
		display: flex;
		margin-top: 40px;
	}
	.left {
		display: inline-block;
		margin-right: 20px;
		width: 250px;
		min-height: 500px;
		height: 100%;
	}
	.right {
		padding: 30px;
		width: 100%;
		background-color: #fff;
		min-height: 500px;
		height: 100%;
	}
</style>