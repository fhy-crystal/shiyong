<template>
	<div>
		<el-table :data="tableData" stripe style="width: 100%">
			<el-table-column prop="id" label="id" width="80"></el-table-column>
			<el-table-column prop="created_at" label="交易时间" width="120"></el-table-column>
			<el-table-column prop="remarks" width ="280" label="备注"></el-table-column>
			<el-table-column prop="actual_income" label="收入"></el-table-column>
			<el-table-column prop="actual_pay" label="支出"></el-table-column>
			<el-table-column prop="total_amount" label="余额"></el-table-column>
		</el-table>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				tableData: [{
				    id:1,
                    created_at: '2016-05-04',
                    remarks: '上海市普陀区金沙江路 1518 弄',
                    actual_income:'',
                    actual_pay: '500',
                    total_amount: '5000',

				 }, {
                    id:2,
                    created_at: '2016-05-04',
                    remarks: '充值500',
                    actual_income:'500',
                    actual_pay: '',
                    total_amount: '5500',
				 }]
			}
		}
	}
</script>
<style lang="scss" scoped>
	@import '../../../../static/css/common.scss';
</style>