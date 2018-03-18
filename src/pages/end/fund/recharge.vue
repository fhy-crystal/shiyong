<template>

	<el-form ref="form" :model="form" label-width="80px">

		<el-form-item label="收款帐号">
			<el-select v-model="value" placeholder="请选择">
				<el-option class = 'cz_width'
						v-for="item in options"
						:key="item.value"
						:label="item.label"
						:value="item.value">
				</el-option>
			</el-select>
		</el-form-item>

		<el-form-item label="付款账号">
			<el-select v-model="value" placeholder="请选择">
				<el-option class = 'cz_width'
						v-for="item in options"
						:key="item.value"
						:label="item.label"
						:value="item.value">
				</el-option>
			</el-select>
		</el-form-item>

		<el-form-item label="转账时间" class='date_width'>
			<el-col :span="11">
				<el-date-picker type="date" placeholder="选择日期" v-model="form.date1"></el-date-picker>
			</el-col>
			<el-col class="line" :span="1">-</el-col>
			<el-col :span="11">
				<el-time-picker type="fixed-time" placeholder="选择时间" v-model="form.date2"></el-time-picker>
			</el-col>
		</el-form-item>

		<el-form-item label="充值金额">
			<el-input class="sm_width" v-model="form.name"></el-input>
		</el-form-item>
		<el-form-item>
			<el-button type="primary" @click="onSubmit">立即创建</el-button>
			<el-button>取消</el-button>
		</el-form-item>
	</el-form>




	<!--<div>-->
		<!--<p class="title">账户充值<p/>-->
		<!--<div class="item"><span class="span_name">收款帐号:</span>-->

		<!--</div>-->
		<!--<div class="item"><span class="span_name">付款账号:</span><input type="text" name="task_name"  class="shop_name"/></div>-->
		<!--<div class="item"><span class="span_name">充值金额:</span><input type="text" name="amount"  class="shop_name"/></div>-->
		<!--<div class="item"><span class="span_name">交易流水号:</span><input type="text" name="trade_number"  class="shop_name"/></div>-->
		<!--<div class="item" style="overflow:hidden">-->
			<!--<span class="span_name goodspic">交易凭证:</span>-->
			<!--<el-upload-->
					<!--class="upload-demo"-->
					<!--action="https://jsonplaceholder.typicode.com/posts/"-->
					<!--:on-preview="handlePreview"-->
					<!--:on-remove="handleRemove"-->
					<!--:limit="1"-->
					<!--:file-list="fileList2"-->
					<!--list-type="picture">-->
				<!--<el-button size="small" type="primary">点击上传</el-button>-->
				<!--<div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>-->
			<!--</el-upload>-->
		<!--</div>-->
		<!--<div style="text-align:center">-->
			<!--<el-button type="primary">提  交</el-button>-->
		<!--</div>-->
	<!--</div>-->
</template>
<script>
    export default {
        data() {
            return {
                form: {
                    name: '',
                    region: '',
                    date1: '',
                    date2: '',
                    delivery: false,
                    type: [],
                    resource: '',
                    desc: ''
                },
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
	.sm_width {
		width:120px;
	}
	.date_width{
		width:580px;
	}
	.cz_width{
		width:300px;
		margin-left:20px;
	}


</style>