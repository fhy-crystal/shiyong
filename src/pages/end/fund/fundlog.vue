<template>
	<div>
		<el-table :data="tableData" stripe style="width: 100%">
			<el-table-column prop="id" label="id" width="80"></el-table-column>
			<el-table-column label="总金额">
				<template slot-scope="scope">
					<span>{{scope.row.amount/100}}元</span>
				</template>
			</el-table-column>
			<el-table-column label="实际金额">
				<template slot-scope="scope">
					<span>{{scope.row.actual_amount/100}}元</span>
				</template>
			</el-table-column>
			<el-table-column label="佣金">
				<template slot-scope="scope">
					<span>{{scope.row.commission/100}}元</span>
				</template>
			</el-table-column>
			<el-table-column prop="remarks" label="备注"></el-table-column>
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
						if (data.code === "20112") {
							this.$router.push('/login');
						}
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