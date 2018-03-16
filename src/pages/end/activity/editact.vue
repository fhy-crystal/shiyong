<template>
	<div>
		<div class="shopBind_right_name">
			<p class="title">创建活动<p/>
			<div class="item"><span class="span_name">活动名称:</span><input type="text" placeholder="请输入商品名称" name="task_name"  class="shop_name"/></div>
			<div class="item">
				<span class="span_name">进店方式:</span>
				<input type="radio" name="platform"  value="1" checked="checked" style="margin-left: 10px;" class="shopBind_shoptype_tb" id="taobao"/><label for="taobao" style="margin: 0 10px;vertical-align: middle;">普通搜索</label>
				<input type="radio"  name="platform" value="2"  style="margin-left: 50px;" id="tianmao"/><label for="tianmao" style="margin: 0 10px;vertical-align: middle;">手机搜索</label>
			</div>

			<div class="item"><span class="span_name">活动商品:</span>
				<el-select v-model="value" placeholder="请选择">
					<el-option
							v-for="item in options"
							:key="item.value"
							:label="item.label"
							:value="item.value">
					</el-option>
				</el-select>
			</div>
			<div class="item"><span class="span_name">商品价格:</span><input type="text" placeholder="请输入商品价格" name="goods_price"  class="shop_name"/></div>

			<div class="item">
				<span class="span_name" style="float:left">商品主图:</span>
				<img src="https://ss0.bdstatic.com/-0U0bnSm1A5BphGlnYG/tam-ogel/299c55e31d7f50ae4dc85faa90d6f445_121_121.jpg" />
			</div>
			<div class="item"><span class="span_name">份数:</span><input type="text" placeholder="请输入份数" name="total_order_number"  class="shop_name"/></div>
			<div class="item"><span class="span_name">单个冻结金额:</span><input type="text" readonly placeholder="单份冻结金额" name="single_order_price"  class="shop_name"/></div>
			<div class="item"><span class="span_name">总冻结金额:</span><input type="text" readonly placeholder="单份冻结金额" name="total_order_price"  class="shop_name"/></div>
			<div style="text-align:center">
				<el-button type="primary" @click="submit">提  交</el-button>
			</div>
		</div>
	</div>
</template>
<script>
    export default {
        data() {
            return {
                options: [{
                    value: '1',
                    label: '黄金糕'
                }, {
                    value: '2',
                    label: '双皮奶'
                }, {
                    value: '3',
                    label: '蚵仔煎'
                }, {
                    value: '4',
                    label: '盛大龙须面'
                }, {
                    value: '5',
                    label: '北京烤鸭'
                }],
                value: ''
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