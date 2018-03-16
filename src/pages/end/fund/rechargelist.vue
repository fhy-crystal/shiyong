<template>
	<div>
		<el-table :data="tableData" stripe style="width: 100%">
			<el-table-column prop="id" label="ID" width="80"></el-table-column>
			<el-table-column prop="destination_account" label="收款账号" width="180"></el-table-column>
			<el-table-column prop="amount" label="充值金额"></el-table-column>
			<el-table-column prop="trade_number" label="流水号"></el-table-column>
			<el-table-column prop="created_at" label="提交时间"></el-table-column>
			<el-table-column prop="updated_at" label="处理时间"></el-table-column>
			<el-table-column prop="recharge_status" label="处理结果"></el-table-column>
			<el-table-column prop="verify_remark" label="备注"></el-table-column>
		</el-table>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				tableData: [{
                    id: '1',
                    destination_account: '622565487952',
                    amount: '6666',
                    trade_number: '20161125164643',
                    created_at: '2016-05-02',
                    updated_at: '2016-05-03',
                    recharge_status: '已充值',
                    verify_remark: '已充值',

				 }, {
                    id: '2',
                    destination_account: '622565487952',
                    amount: '6666',
                    trade_number: '20161125164643',
                    created_at: '2016-05-02',
                    updated_at: '2016-05-03',
                    recharge_status: '已充值',
                    verify_remark: '已充值',
				 }]
			}
		}
	}
</script>
<style lang="scss" scoped>
	@import '../../../../static/css/common.scss';
</style>