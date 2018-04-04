<template>

	<el-form ref="form" :model="form" label-width="80px">

		<el-form-item label="收款帐号">
			<el-select v-model="form.destination_account_id" placeholder="请选择">
				<el-option class = 'cz_width'
						v-for="item in destinations"
						:key="item.id"
						:label="item.bank_card + '(' + item.realname + ')'"
						:value="item.id">
				</el-option>
			</el-select>
		</el-form-item>

		<el-form-item label="付款账号">
			<el-select v-model="form.source_account_id" placeholder="请选择">
				<el-option class = 'cz_width'
						v-for="item in sources"
						:key="item.id"
						:label="item.bank_card"
						:value="item.id">
				</el-option>
			</el-select>
		</el-form-item>

		<el-form-item label="转账时间" class='date_width'>
			<el-date-picker
				v-model="form.time"
				type="datetime"
				placeholder="选择日期时间"
				align="right">
			</el-date-picker>
		</el-form-item>

		<el-form-item label="充值金额">
			<el-input class="sm_width" v-model="form.amount"></el-input>
		</el-form-item>
		<el-form-item>
			<el-button type="primary" @click="save">立即创建</el-button>
			<el-button>取消</el-button>
		</el-form-item>
	</el-form>
</template>
<script>
	import API from '../../../utils/api'
	export default {
		data() {
			return {
				form: {
					destination_account_id: '',
					destination_account_type: 1,
					source_account_id: '',
					source_account_type: 1,
					date: '',
					time: ''
				},
				destinations:[
				{
					id:1,
					bank_card:515464564645,
					realname:'小巴'

				}
				],
				sources: []
			}
		},
		created(){
			this.getList();
		},
		methods: {
			getList() {
				API.getFundList().then((data) => {
					if (data.succ) {
						this.sources = data.data;
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
			save() {
				API.recharge(this.form).then((data) => {
				if (data.succ) {
					this.$message({
						showClose: true,
						message: '充值成功',
						type: 'success'
					})
					this.$router.push('/backManage/rechargelist')
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
<style lang="scss" scoped>
	@import '../../../../static/css/common.scss';
	.sm_width {
		width:120px;
	}
	.date_width{
		width:580px;
	}
	.cz_width{
		width:300px;
		margin-left:20px;
	}


</style>