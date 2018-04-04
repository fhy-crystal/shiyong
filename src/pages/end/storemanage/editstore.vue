<template>
	<el-form ref="form" label-width="150px">
		<el-form-item label="选择绑定类型">
			<el-radio-group v-model="info.store_type">
				<el-radio label="1">淘宝</el-radio>
				<el-radio label="2">京东</el-radio>
			</el-radio-group>
		</el-form-item>
		<el-form-item label="店铺名称">
			<el-input class="i_width" v-model="info.store_name" placeholder="请输入店铺名称"></el-input>
		</el-form-item>
		<el-form-item label="店铺主旺旺ID" v-show="info.store_type==1">
			<el-input class="i_width" v-model="info.store_account" placeholder="请输入店铺主旺旺"></el-input>
		</el-form-item>
		<el-form-item label="店铺链接">
			<el-input class="i_width" v-model="info.store_url" placeholder="请输入店铺链接"></el-input>
		</el-form-item>

		<el-form-item>
			<el-button type="primary" @click="onSubmit">提交</el-button>
		</el-form-item>
	</el-form>

</template>

<script>
	import API from '../../../utils/api'
	export default {
		data () {
			return {
				info: {},
				id: ''
			}
		},
		created() {
			this.getDetail()
		},
		methods: {
			getDetail() {
				API.storeDetail(this.$route.params.storeid).then((data) => {
					if (data.succ) {
						this.info = {
							store_type: data.data.store_type,
							store_url: data.data.store_url,
							store_account: data.data.store_account,
							store_name: data.data.store_name
						}
						this.id = data.data.id
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
				if (this.info.store_type == 1) {
					if (!this.info.store_name || !this.info.store_account || !this.info.store_url) {
						this.$message({
							showClose: true,
							message: '请完善信息',
							type: 'error'
						})
						return false;
					}
				} else {
					if (!this.info.store_name || !this.info.store_url) {
						this.$message({
							showClose: true,
							message: '请完善信息',
							type: 'error'
						})
						return false;
					}
				}
				API.editstore(this.id, this.info).then((data) => {
					if (data.succ) {
						this.$message({
							showClose: true,
							message: '修改成功',
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
			}

		}
	}
</script>
<style lang="scss" scope>
	@import '../../../../static/css/common.scss';
	.i_width{
		width:300px;
	}
</style>