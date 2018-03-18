<template>
	<div>
		<el-table :data="tableData" stripe style="width: 100%">
			<el-table-column prop="store_type" label="店铺类型" width="80"></el-table-column>
			<el-table-column prop="store_name" label="店铺名称" width="180"></el-table-column>
			<el-table-column prop="store_account" label="旺旺名称"></el-table-column>
			<el-table-column prop="verify_status" label="审核状态"></el-table-column>
			<el-table-column prop="store_status" label="店铺状态"></el-table-column>
			<el-table-column prop="created_at" label="绑定时间"></el-table-column>
			<el-table-column label="操作">
				<template slot-scope="scope">
					<el-button type="text" @click="delData(scope.row.id)">删除</el-button>
					<br>
					<el-button type="text" @click="editData(scope.row.id)">编辑</el-button>
					<!--<router-link to="/backManage/editstore">编辑</router-link>-->
				</template>
			</el-table-column>
		</el-table>
	</div>
</template>
<script>
	import API from '../../../utils/api'
	export default {
		data() {
			return {
				tableData: []
			}
		},
		created() {
			// 页面加载的时候调用getlist方法获取列表数据
		  this.getList();
		},
		methods: {
			getList() {
				//调用API方法获取列表
				//假设list就是获取的列表
				var list = [{
					id: 1,
					store_type: '淘宝',
					store_name: 'GXG官方旗舰店',
					store_account: 'GXG官方旗舰店',
					verify_status: '审核通过',
					created_at: '2018-5-25'
				}, {
					id: 2,
					store_type: '京东',
					store_name: 'zara官方旗舰店',
					store_account: ' - ',
					verify_status: '审核通过',
					created_at: '2018-5-29'
				}]
				this.tableData = list;
				// API.storelist().then((data) => {
				// 	if (data.succ) {
				// 		this.tableData = data.data
				// 	} else {
				// 		this.$message({
				// 			showClose: true,
				// 			message: data.msg,
				// 			type: 'error'
				// 		})
				// 	}
				// }, (e) => {
				// 	this.$message({
				// 		showClose: true,
				// 		message: e,
				// 		type: 'error'
				// 	})
				// })
			},
			delData(id) {
				API.deletestore({id: id}).then.then((data) => {
					if (data.succ) {
						this.getList();
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
			editData(id) {
				this.$router.push({name: 'editstore', params: {storeid: id}})
			}
		}
	}
</script>
<style lang="scss" scoped>
	@import '../../../../static/css/common.scss';
</style>