<template>
	<div>
		<p class="title">账户充值<p/>
		<div class="item"><span class="span_name">收款帐号:</span>
			<el-select v-model="value" placeholder="请选择">
				<el-option
						v-for="item in options"
						:key="item.value"
						:label="item.label"
						:value="item.value">
				</el-option>
			</el-select>
		</div>
		<div class="item"><span class="span_name">付款账号:</span><input type="text" name="task_name"  class="shop_name"/></div>
		<div class="item"><span class="span_name">充值金额:</span><input type="text" name="amount"  class="shop_name"/></div>
		<div class="item"><span class="span_name">交易流水号:</span><input type="text" name="trade_number"  class="shop_name"/></div>
		<div class="item" style="overflow:hidden">
			<span class="span_name goodspic">交易凭证:</span>
			<el-upload
					class="upload-demo"
					action="https://jsonplaceholder.typicode.com/posts/"
					:on-preview="handlePreview"
					:on-remove="handleRemove"
					:limit="1"
					:file-list="fileList2"
					list-type="picture">
				<el-button size="small" type="primary">点击上传</el-button>
				<div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
			</el-upload>
		</div>
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