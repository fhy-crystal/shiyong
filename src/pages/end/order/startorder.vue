<template>
	<div>
		<p class="title">开始任务<p/>
		<div class="item"><span class="span_name">进店方式:</span><span>普通</span></div>
		<div class="item"><span class="span_name">关键字:</span><span>计较斤斤</span></div>

		<div class="item"><span class="span_name">任务淘宝号:</span><span>旺旺名称</span></div>
		<div class="item">
			<span class="span_name">核对商家:</span>
			<input type="text" placeholder="请输入商家旺旺" name="taobao_account"  class="shop_name" />
			<button  style="color: #fff;background-color: #409EFF;border-color: #409EFF;height:30px;width:100px;">确认商家旺旺</button>
		</div>
		<div class="item"><span class="span_name">下单价格:250元</span></div>
		<div class="item"><span class="span_name">预计返款:255元</span></div>
		<div class="item" style="overflow:hidden">
			<span class="span_name goodspic">核对商品主图:</span>
			<img style="width:200px;height:200px;" src="https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"/>
		</div>
		<div class="item"><span class="span_name">淘宝订单号:</span><input type="text" placeholder="淘宝订单号" name="order_id"  class="shop_name"/></div>
		<div class="item"><span class="span_name">任务遇到问题:</span>
			以下方式联系商家：电话  15057465733 QQ 409199338
		</div>
		<div style="text-align:center">
			<el-button type="primary" @click="submit">提  交</el-button>
		</div>
	</div>
</template>
<script>
    export default {
        data() {
            return {
                goodInfo: {
                    goods_name: '',
                    goods_url: '',
                    goods_price: ''
                },
                fileList2: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}]
            };
        },
        methods: {
            handleRemove(file, fileList) {
                console.log(file, fileList);
            },
            handlePreview(file) {
                console.log(file);
            },
            submit() {

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
	.span_name{
		display: inline-block;
		width: 100px;
		text-align: right;
		color: #2E2D3C;
		margin-right: 10px;
		font-size: 13px;
	}
	input {
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