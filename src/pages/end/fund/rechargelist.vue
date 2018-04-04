<template>
	<div>
		<el-form :inline="true" class="demo-form-inline">
            <el-form-item label="提现状态">
                <el-select v-model="rechargeStatus" placeholder="提现状态">
                    <el-option label="待审核" value="0"></el-option>
                    <el-option label="已审核" value="1"></el-option>
                    <el-option label="未通过" value="2"></el-option>
                    <el-option label="已关闭" value="3"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">查询</el-button>
            </el-form-item>
        </el-form>
		<el-table :data="tableData" stripe style="width: 100%">
			<el-table-column prop="id" label="ID" width="80"></el-table-column>
			<el-table-column prop="destination_account_id" label="收款账号" width="180"></el-table-column>
			<el-table-column prop="amount" label="充值金额"></el-table-column>
			<el-table-column prop="created_at" label="提交时间"></el-table-column>
			<el-table-column prop="verify_time" label="处理时间"></el-table-column>
			<el-table-column prop="recharge_status" label="处理结果"></el-table-column>
			<el-table-column prop="verify_remark" label="备注"></el-table-column>
			<el-table-column label="操作">
				<template slot-scope="scope">
					<el-button type="text" @click="closeRecharge(scope.row.id)">关闭</el-button>
				</template>
			</el-table-column>
		</el-table>
		<el-pagination style="float:right;margin-top:10px"
			@current-change="handleCurrentChange"
			:current-page.sync="currentPage"
			:page-size="10"
			layout="total, prev, pager, next"
			:total="total">
		</el-pagination>
	</div>
</template>
<script>
	import API from '../../../utils/api'
	export default {
		data() {
			return {
				tableData: [],
				rechargeStatus:'',
				source_account_type:'1',
				currentPage: 1,
				total: 0
			}
		},
		created() {
			this.getList();
		},
		methods: {
			getList() {
				let postBody = {
					page: this.currentPage
				}
				API.rechargelist(postBody).then((data) => {
					if (data.succ) {
						this.tableData = data.data.data;
						this.currentPage = parseInt(data.data.current_page);
						this.total = parseInt(data.data.total);
					} else {
						this.$message({
							showClose: true,
							message: data.msg,
							type: 'error'
						})
					}
				}, (e) => {
					this.$message({
						showClose: true,
						message: e,
						type: 'error'
					})
				})
			},
			handleCurrentChange(val) {
				this.currentPage = val;
				this.getList();
			},
			closeRecharge(id) {
				API.closerecharge(id).then((data) => {
					if (data.succ) {
						this.$message({
							showClose: true,
							message: '已关闭',
							type: 'success'
						})
					} else {
						this.$message({
							showClose: true,
							message: data.msg,
							type: 'error'
						})
					}
				}, (e) => {
					this.$message({
						showClose: true,
						message: e,
						type: 'error'
					})
				})
			},
			   onSubmit() {
                this.currentPage = 1;
                this.getList();
            }
		}
	}
</script>
<style lang="scss" scoped>
	@import '../../../../static/css/common.scss';
</style>