<template>
	<div>
		<p class="title">账户提现<p/>
		<div class="item"><span class="span_name">选择银行卡:</span>
			<el-select v-model="value" placeholder="请选择">
				<el-option
						v-for="item in options"
						:key="item.value"
						:label="item.label"
						:value="item.value">
				</el-option>
			</el-select>
		</div>
		<div class="item"><span class="span_name">开户行:</span>招商银行</div>
		<div class="item"><span class="span_name">银行卡号:</span>655244756145866</div>
		<div class="item"><span class="span_name">持卡人:</span>无忧虑</div>
		<div class="item"><span class="span_name">提现金额:</span><input type="text" name="real_name"  class="shop_name"/></div>


		<div style="text-align:center">
			<el-button type="primary">提  交</el-button>
		</div>
	</div>
</template>
<script>
    export default {
        data() {
            return {
                options: [{
                    value: '1',
                    label: '农业银行 62235156463574635656 小沫'
                }, {
                    value: '2',
                    label: '招商银行 62235156463574635656 小沫'
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
		margin-left: 10px;
		margin-right: 20px;
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