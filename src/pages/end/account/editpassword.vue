<template>
	<div>
		<p class="title">修改密码<p/>
		<div class="item"><span class="span_name">原密码:</span><input type="text" placeholder="原密码" name="task_name"  class="shop_name"/></div>
		<div class="item"><span class="span_name">新密码:</span><input type="text" placeholder="新密码" name="goods_price"  class="shop_name"/></div>
		<div class="item"><span class="span_name">确认新密码:</span><input type="text" placeholder="再次输入新密码" name="total_order_number"  class="shop_name"/></div>
		<div style="text-align:center">
			<el-button type="primary" @click="submit">提  交</el-button>
		</div>
	</div>
</template>
<script>
    export default {
        data() {
            return {

            }
        }
    }
</script>
<style lang="scss" scoped>
	@import '../../../../static/css/common.scss';
	.title{
		height: 40px;
		text-align: left;
		color: #3B3B3B;
		font-weight: bold;
		font-size: 16px;
		border-bottom: 1px solid #9F9F9f;
		line-height: 60px;
		padding-bottom:50px;
		margin-bottom: 20px;
	}
	.el-select-dropdown__item{
		margin-left: 20px;
	}
	.span_name{
		display: inline-block;
		width: 100px;
		text-align: right;
		color: #2E2D3C;
		margin-right: 10px;
		font-size: 13px;
	}
	.shop_name {
		font-size: 12px;
		outline: none;
		width: 218px;
		height: 40px;
		line-height: 40px;
		border: 1px solid #EFEFEF;
		border-radius: 3px;
		padding-left: 10px;
		vertical-align: middle;
	}
	.goodspic{
		float:left;
	}
	.upload-demo{
		float: left;
	}
	.item{
		margin-top: 20px;
	}
</style>