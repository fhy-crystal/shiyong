<template>
	<el-form ref="form" :model="form" :rules="rules" label-width="100px">
		<el-form-item label="商品店铺">
			<el-select v-model="form.store_id" placeholder="请选商品店铺" disabled>
				<el-option v-for="item in storeList" :label="item.store_name" :value="item.store_id" :key="item.store_id"></el-option>
			</el-select>
		</el-form-item>
		<el-form-item label="商品名称" prop="goods_name">
			<el-input v-model="form.goods_name"></el-input>
		</el-form-item>
		<el-form-item label="商品链接">
			<el-input v-model="form.goods_url" disabled></el-input>
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
					class="upload-demo"
					action="https://jsonplaceholder.typicode.com/posts/"
					:limit="1"
					:file-list="filelist"
					list-type="picture">
				<el-button size="small" type="primary">点击上传</el-button>
				<div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
			</el-upload>
		</el-form-item>

		<el-form-item>
			<el-button type="primary" @click="onSubmit('form')">立即创建</el-button>
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
			this.getDetail()
		},
		methods: {
			getDetail() {
				API.goodDetail({id: this.$route.params.goodid}).then((data) => {
					if (data.succ) {
						this.form = {
							store_id: data.data.store_id,
							goods_name: data.data.goods_name,
							goods_url: data.data.goods_url,
							goods_price: data.data.goods_price,
						}
						let delKeywords = data.data.goods_keywords.split('|');
						delKeywords.forEach(item => {
							this.goods_keywords.push({key: item})
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
					}
				}, (e) => {
					this.$message({
						showClose: true,
						message: e,
						type: 'error'
					})
				})
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
</style>