<template>
<div>
	<div class="shopBind_right_name">
		<span id="DP_XM">商品名称:</span>
		<input type="text" placeholder="请输入商品名称" name="shopname" id="shopNameA" class="shop_name"/>
	</div>
</div>
</template>
<script>
    export default {
        data() {
            return {
                input: ''
            }
        }
    }
</script>
<style lang="scss" scoped>
	@import '../../../../static/css/common.scss';
	.goodsname{
		display: inline-block;
		width: 100px;
		text-align: right;
		color: #999999;
		margin-right: 10px;
	}
</style>