<template>
	<el-form ref="form" :model="form" label-width="110px">
		<el-form-item class="inp_width" label="用户名称">
			<el-input v-model="form.username"></el-input>
		</el-form-item>
		<el-form-item label="用户头像">
			<el-upload
				class="avatar-uploader"
				action="123"
				:show-file-list="false"
				:before-upload="beforeUpload">
				<img v-if="form.avatar" :src="form.avatar" class="avatar">
				<i v-else class="el-icon-plus avatar-uploader-icon"></i>
			</el-upload>
		</el-form-item>
		<el-form-item label="性别">
			<el-radio-group v-model="form.gender">
				<el-radio label="0">女</el-radio>
				<el-radio label="1">男</el-radio>
				<el-radio label="2">未知</el-radio>
			</el-radio-group>
		</el-form-item>
		<el-form-item class="inp_width" label="QQ">
			<el-input v-model="form.qq"></el-input>
		</el-form-item>
		<el-form-item class="inp_width" label="Email">
			<el-input v-model="form.email"></el-input>
		</el-form-item>
		<el-form-item class="inp_width" label="淘宝任务账号">
			<el-input v-model="form.taobao_account"></el-input>
		</el-form-item>
		<el-form-item class="inp_width" label="京东任务账号">
			<el-input v-model="form.jd_account"></el-input>
		</el-form-item>
		<el-form-item label="接收任务开关">
			<el-switch v-model="form.open_status"></el-switch>
		</el-form-item>

		<el-form-item>
			<el-button type="primary" @click="onSubmit">确定</el-button>
		</el-form-item>
	</el-form>
</template>

<script>
	import API from '../../../utils/api'
	export default {
		data() {
			return {
				form: {
					username: '',
					gender: '',
					avatar:'',
					qq: '',
					email: '',
					open_status: '',
					taobao_account: '',
					jd_account: '',
				},
			}
		},
		created() {
			this.getUserInfo()
		},
		methods: {
			getUserInfo() {
				API.getmyinfo().then((data) => {
					if (data.succ) {
						this.form = data.data;
						this.form.open_status = this.form.open_status === "1" ? true : false;
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
			beforeUpload(file) {
				let postBody = {
					extension: file.name.split('.')[1]
				};
				API.getToken(postBody).then((data) => {
					if (data.succ) {
						var formData = new FormData();
						formData.append('file', file);
						formData.append('token', data.data.token);
						formData.append('key', data.data.key);
						// this.imgHost = data.data.host
						API.upload(formData).then((res) => {
							this.form.avatar = data.data.host + res.key;
						}, (e) => {
							this.$message({
								showClose: true,
								message: e,
								type: 'error'
							})
						})
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
				return false;
			},
			onSubmit() {
				this.form.open_status = this.form.open_status === true ? 1 : 0;
				API.setmyinfo(this.form).then((data) => {
				if (data.succ) {
					this.getUserInfo();
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
<style lang="scss" scoped>
	@import '../../../../static/css/common.scss';
	.inp_width{
		width:380px;
	}
	.avatar-uploader .el-upload {
		border: 1px dashed #d9d9d9;
		border-radius: 6px;
		cursor: pointer;
		position: relative;
		overflow: hidden;
	}
	.avatar-uploader .el-upload:hover {
		border-color: #409EFF;
	}
	.avatar-uploader-icon {
		font-size: 28px;
		color: #8c939d;
		width: 178px;
		height: 178px;
		line-height: 178px;
		text-align: center;
	}
	.avatar {
		width: 178px;
		height: 178px;
		display: block;
	}
</style>