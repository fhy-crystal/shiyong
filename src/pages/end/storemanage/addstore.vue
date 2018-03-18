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
				info: {
					store_type: '1',
					store_name: '',
					store_account: '',
					store_url: ''
				}
			}
		},

		methods: {
			onSubmit() {
				if (this.info.store_type == 1) {
					if (!this.info.store_name || !this.info.store_account || !this.info.store.store_url) {
						this.$message({
							showClose: true,
							message: '请完善信息',
							type: 'error'
						})
						return false;
					}
				} else {
					if (!this.info.store_name || !this.info.store.store_url) {
						this.$message({
							showClose: true,
							message: '请完善信息',
							type: 'error'
						})
						return false;
					}
				}
				API.creategoods(this.info).then((data) => {
					if (data.succ) {
						this.$router.push('/backManage/storelist')
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