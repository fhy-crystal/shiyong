<template>
	<div>
		<el-form ref="form" label-width="80px">
			<el-form-item label="选择店铺">
				<el-select v-model="storeid">
					<el-option v-for="item in storeList" :label="item.store_name" :value="item.id" :key="item.id"></el-option>
				</el-select>
			</el-form-item>
			<el-form-item label="商品名称">
				<el-input v-model="goods_name"></el-input>
			</el-form-item>
			<el-form-item>
				<el-button type="primary" @click="search">搜索</el-button>
			</el-form-item>
		</el-form>


		<el-table :data="tableData" stripe style="width: 100%">
			<el-table-column prop="goods_name" label="商品名称" width="150"></el-table-column>
			<el-table-column label="商品价格" width="100">
				<template slot-scope="scope">
					<span>{{scope.row.goods_price / 100}}元</span>
				</template>
			</el-table-column>
			<el-table-column prop="goods_url" label="商品链接" width="200"></el-table-column>
			<el-table-column	label="商品主图">
				<template slot-scope="scope">
					<img style="height: 100px;width: 100px;" :src="scope.row.goods_image">
				</template>
			</el-table-column>
			<el-table-column prop="goods_status" label="商品状态"></el-table-column>
			<el-table-column  label="更新时间">
				<template slot-scope="scope">
					<span>{{scope.row.created_at | time}}</span>
				</template>
			</el-table-column>
			<el-table-column label="操作">
				<template slot-scope="scope">
					<el-button type="text" size="small" @click="delData(scope.row.id)">删除</el-button>
					<el-button type="text" size="small" @click="edit(scope.row.id)">编辑</el-button>
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
				storeid: '',
				goods_name: '',
				currentPage: 1,
				total: 0,
				storeList: [],
				tableData: []
			}
		},
		created() {
			// 页面加载的时候调用getlist方法获取列表数据
			this.getStoreList();
			this.getList();
		},
		methods: {
			getStoreList() {
				API.storelist().then((data) => {
					if (data.succ) {
						this.storeList = data.data
					} else {
						this.$message({
							showClose: true,
							message: data.msg,
							type: 'error'
						})
						if (data.data.code === '20122') {
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
			getList() {
				let postBody= {
					store_id: this.storeid,
					goods_name: this.goods_name,
					page: this.currentPage
				}
				API.goodslist(postBody).then((data) => {
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
						if (data.data.code === '20122') {
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

			delData(id) {
				API.deletegoods(id).then((data) => {
					if (data.succ) {
						this.getList();
					} else {
						this.$message({
							showClose: true,
							message: data.msg,
							type: 'error'
						})
						if (data.data.code === '20122') {
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
			edit(id) {
				this.$router.push({name: 'editgoods', params: {goodid: id}})
			},
			search() {
				this.getList();
			}
		}
	}
</script>
<style lang="scss" scoped>
	@import '../../../../static/css/common.scss';
	.el-select{
		width: 300px;
	}
	.el-form-item{
		float: left;
	}
</style>