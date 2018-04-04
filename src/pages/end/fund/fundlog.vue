<template>
	<div>
		<el-table :data="tableData" stripe style="width: 100%">
			<el-table-column prop="id" label="id" width="80"></el-table-column>
			<el-table-column prop="amount" label="总金额"></el-table-column>
			<el-table-column prop="actual_amount" label="实际金额"></el-table-column>
			<el-table-column prop="commission" label="佣金"></el-table-column>
			<!-- <el-table-column prop="record_status" width ="280" label="备注"></el-table-column> -->
			<el-table-column prop="remarks" label="备注"></el-table-column>
			<el-table-column prop="record_type" label="交易时间" width="120"></el-table-column>
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
				currentPage: 1,
				total: 0,
				tableData: []
			}
		},
		created() {
			this.getList();
		},
		methods: {
			getList() {
				let postBody= {
					store_id: this.storeid,
					goods_name: this.goods_name,
					page: this.currentPage
				}
				API.fundrecordlist(postBody).then((data) => {
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
		}
	}
</script>
<style lang="scss" scoped>
	@import '../../../../static/css/common.scss';
</style>