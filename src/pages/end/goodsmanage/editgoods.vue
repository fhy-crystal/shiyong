<template>
	<el-form ref="form" :model="form" :rules="rules" label-width="100px">
		<el-form-item label="商品店铺">
			<el-select v-model="form.store_id" placeholder="请选商品店铺" >
				<el-option v-for="item in storeList" :label="item.store_name" :value="item.id" :key="item.id"></el-option>
			</el-select>
		</el-form-item>
		<el-form-item label="商品名称" prop="goods_name">
			<el-input v-model="form.goods_name"></el-input>
		</el-form-item>
		<el-form-item label="商品链接" prop="goods_url">
			<el-input v-model="form.goods_url" ></el-input>
		</el-form-item>
		<el-form-item label="商品价格" prop="goods_price">
			<el-input v-model="form.goods_price"></el-input>
		</el-form-item>
		<el-form-item label="商品关键字" prop="goods_keywords">
			<div v-for="(item, index) in goods_keywords" :key="index">
				<el-input style="width:90%;margin:0 5px 5px 0;" v-model="item.key"></el-input>
			</div>
			<i class="el-icon-circle-plus addBtn" @click="addKey"></i>
		</el-form-item>
		<el-form-item label="商品主图">
			<el-upload
				class="avatar-uploader"
				action="123"
				:show-file-list="false"
				:before-upload="beforeUpload">
				<img v-if="form.goods_image" :src="form.goods_image" class="avatar">
				<i v-else class="el-icon-plus avatar-uploader-icon"></i>
			</el-upload>
		</el-form-item>

		<el-form-item>
			<el-button type="primary" @click="onSubmit('form')">保存</el-button>
			<el-button>取消</el-button>
		</el-form-item>
	</el-form>
</template>

<script>
	import API from '../../../utils/api'
	export default {
		data() {
			var nameCheck = (rule, value, callback) => {
				if (value === '') {
					callback(new Error('商品名称不能为空'));
				} else {
					callback();
				}
			}
			var priceCheck = (rule, value, callback) => {
				if (value === '') {
					callback(new Error('商品价格不能为空'));
				} else {
					callback();
				}
			}
			var keywordsCheck = (rule, value, callback) => {
				if (this.goods_keywords[this.goods_keywords.length - 1].key === '') {
					callback(new Error('请填写关键字'));
				} else {
					callback();
				}
			}
			return {
				storeList: [],
				goods_keywords: [],
				filelist: [],
				form: {},
				rules: {
					goods_name: [{
						validator: nameCheck, trigger: 'blur'
					}],
					goods_price: [{
						validator: priceCheck, trigger: 'blur'
					}],
					goods_keywords: [{
						validator: keywordsCheck, trigger: 'blur'
					}]
				},
				
			}
		},
		created() {
			this.getDetail();
			this.getStoreList();
		},
		methods: {
			getDetail() {
				API.goodDetail(this.$route.params.goodid).then((data) => {
					if (data.succ) {
						this.form = data.data;
						let delKeywords = data.data.goods_keywords.split('|');
						delKeywords.forEach(item => {
							this.goods_keywords.push({key: item})
						});

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
							this.form.goods_image = data.data.host + res.key;
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
			addKey() {
				let count = 0;
				this.goods_keywords.forEach(item => {
					if (item.key === '') {
						this.$message({
							showClose: true,
							message: '请输入关键字',
							type: 'error'
						})
						count ++
					}
				})
				if (count === 0) {
					this.goods_keywords.push({key: ''})
				}
			},
			onSubmit(formName) {
				this.$refs[formName].validate(valid => {
					if (valid) {
						let delKeywords = [];
						this.goods_keywords.forEach(item => {
							delKeywords.push(item.key)
						})
						this.form.goods_keywords = delKeywords;
						this.form.goods_price = this.form.goods_price*100;
						API.editgoods(this.form).then((data) => {
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
				})
			}
		}
	}
</script>
<style scoped lang='scss'>
	@import '../../../../static/css/common.scss';
	.addBtn {
		font-size: 20px;
		color: $main_color;
		cursor: pointer;
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