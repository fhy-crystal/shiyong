<template>
	<div>
		<el-table :data="tableData" stripe style="width: 100%">
			<el-table-column prop="id" label="ID" width="80"></el-table-column>
			<el-table-column prop="amount" label="提现金额"></el-table-column>
			<el-table-column prop="withdraw_time" label="申请时间"></el-table-column>
			<el-table-column prop="verify_time" label="提现时间"></el-table-column>
			<el-table-column prop="recharge_status" label="提现状态"></el-table-column>
			<el-table-column  label="提现信息">
				<template slot-scope="scope">
					<div class="actitem"><span>开户行:</span>{{scope.row.failed_order_number}}</div>
					<div class="actitem"><span>卡号</span>:{{scope.row.failed_order_number}}</div>
					<div class="actitem"><span>执卡人</span>:{{scope.row.failed_order_number}}</div>
				</template>
			</el-table-column>
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
                    recharge_status: '',
                    verify_remark: '',

                }, {
                    id: '2',
                    destination_account: '622565487952',
                    amount: '6666',
                    trade_number: '20161125164643',
                    created_at: '2016-05-02',
                    updated_at: '2016-05-03',
                    recharge_status: '',
                    verify_remark: '',
                }]
            }
        }
    }
</script>
<style lang="scss" scoped>
	@import '../../../../static/css/common.scss';
	.actitem{
		font-size: 12px;
		span{
			color:#5b5b5b;
		}
	}
</style>