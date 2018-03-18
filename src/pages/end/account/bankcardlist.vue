<template>
	<div>
		<el-table :data="tableData" stripe style="width: 100%">
			<el-table-column prop="bank" label="银行名称" width="180"></el-table-column>
			<el-table-column prop="bankfiliale" label="所属支行" width="180"></el-table-column>
			<el-table-column prop="bank_card" label="银行卡号" width="180"></el-table-column>
			<el-table-column prop="real_name" label="持卡人"></el-table-column>
			<el-table-column prop="id_card" label="持卡人身份证号码"></el-table-column>
			<el-table-column label="操作">
				<template slot-scope="scope">
					<el-button type="text" @click="editData(scope.row)">修改</el-button>
					<el-button type="text" @click="delData(scope.row.id)">删除</el-button>
				</template>
			</el-table-column>
		</el-table>

		<el-dialog title="收货地址" :visible.sync="dialogVisible">
		<el-form ref="form" :model="info" :rules="rules" label-width="80px">
			<p class="title">绑定提现账号<p/>
			<el-form-item class="le_width" label="银行名称" prop="bank">
				<el-input  v-model="info.bank" placeholder="请输入内容"></el-input>
			</el-form-item>
			<el-form-item class="le_width" label="所属支行">
				<el-input  v-model="info.bankfiliale" placeholder="请输入内容"></el-input>
			</el-form-item>
			<el-form-item class="le_width" label="银行卡号" prop="bank_card">
				<el-input  v-model="info.bank_card" placeholder="请输入内容"></el-input>
			</el-form-item>
			<el-form-item class="le_width" label="持卡人" prop="real_name">
				<el-input  v-model="info.real_name" placeholder="请输入内容"></el-input>
			</el-form-item>
			<el-form-item class="le_width" label="身份证号" prop="id_card">
				<el-input  v-model="info.id_card" placeholder="请输入内容"></el-input>
			</el-form-item>
		</el-form>
		<div slot="footer" class="dialog-footer">
			<el-button @click="dialogVisible = false">取 消</el-button>
			<el-button type="primary" @click="onSubmit('form')">确 定</el-button>
		</div>
		</el-dialog>
	</div>
</template>
<script>
	import API from '../../../utils/api'
	export default {
		data() {
			return {
				tableData: [],
				dialogVisible: false,
				info: {},
				rules: {
					bank: [{required: true, message: '请输入银行名称', trigger: 'blur'}],
					bank_card: [{required: true, message: '请输入银行卡号', trigger: 'blur'}],
					real_name: [{required: true, message: '请输入真实姓名', trigger: 'blur'}],
					id_card: [{required: true, message: '请输入身份证号', trigger: 'blur'}]
				}
			}
		},
		methods: {
			getList() {
				API.getFundList().then((data) => {
					if (data.succ) {
						this.tableData = data.data;
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
			editData(obj) {
				this.dialogVisible = true;
				this.info = obj;
			},
			onSubmit(formName) {
				this.$refs[formName].validate(valid => {
					if (valid) {
						API.editFund(this.info).then((data) => {
							if (data.succ) {
								this.getList();
								this.dialogVisible = false;
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
				})
			},
			delData(id) {
				API.deleteFund({id: id}).then((data) => {
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
			}
		}
	}
</script>
<style lang="scss" scoped>
	@import '../../../../static/css/common.scss';
</style>