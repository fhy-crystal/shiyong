<template>
	<div>
		<p class="title">创建活动<p/>
		<el-form ref="form" :model="form" :rules="rules" label-width="160px">
			<el-form-item label="活动名称" prop="task_name">
				<el-input v-model="form.task_name"></el-input>
			</el-form-item>
			<el-form-item label="活动商品" prop="goods_id">
				<el-select v-model="selectGood" @change="changeGood" value-key="id" placeholder="请选择">
				<el-option
						v-for="item in goodsList"
						:key="item.id"
						:label="item.goods_name"
						:value="item">
				</el-option>
				</el-select>
			</el-form-item>

			<el-form-item label="搜索关键字" prop="goods_keyword">
				<el-select v-model="form.goods_keyword" placeholder="请选择">
					<el-option
							v-for="(item, index) in goods_keywords"
							:key="index"
							:label="item"
							:value="item">
					</el-option>
				</el-select>
			</el-form-item>

			<el-form-item label="进店方式" prop="platform">
				<el-radio v-model="form.platform" label="1">电脑</el-radio>
				<el-radio v-model="form.platform" label="2">手机</el-radio>
			</el-form-item>
			<el-form-item label="份数" prop="total_order_number">
				<el-input v-model="form.total_order_number"></el-input>
			</el-form-item>

			<el-form-item>
				<el-button type="primary" @click="onSubmit('form')">立即创建</el-button>
			</el-form-item>
		</el-form>

	</div>
</template>
<script>
	import API from '../../../utils/api'
	export default {
		data() {
			var goodsCheck = (rule, value, callback) => {
				if (value === '') {
					callback(new Error('请选择商品'));
				} else {
					callback();
				}
			};
			var nameCheck = (rule, value, callback) => {
				if (value === '') {
					callback(new Error('活动名称不能为空'));
				} else {
					callback();
				}
			}
			var keywordCheck = (rule, value, callback) => {
				if (value === '') {
					callback(new Error('搜索关键字不能为空'));
				} else {
					callback();
				}
			}
			var numberCheck = (rule, value, callback) => {
				if (value === '') {
					callback(new Error('活动份数不能为空'));
				} else {
					callback();
				}
			}
			var platformCheck = (rule, value, callback) => {
				if (value === '') {
					callback(new Error('进店方式不能为空'));
				} else {
					callback();
				}
			}
			return {
				goodsList: [],
				goods_keywords: [],
				selectGood: '',
				form: {
					goods_id: '',
					task_name: '',
					goods_keyword: '',
					total_order_number: '',
					platform: '',
				},
				rules: {
					goods_id: [{
						validator: goodsCheck, trigger: 'blur'
					}],
					task_name: [{
						validator: nameCheck, trigger: 'blur'
					}],
					goods_keyword: [{
						validator: keywordCheck, trigger: 'blur'
					}],
					total_order_number: [{
						validator: numberCheck, trigger: 'blur'
					}],
					platform: [{
						validator: platformCheck, trigger: 'blur'
					}]
				},
				
			}
		},
		created() {
			this.getGoodsList();
		},
		methods: {
			getGoodsList() {
				API.goodslist().then((data) => {
					if (data.succ) {
						console.log(data.data);
						this.goodsList = data.data.data;
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
			changeGood() {
				this.goods_keywords = this.selectGood.goods_keywords.split('|');
				this.form.goods_id = this.selectGood.id;
				console.log(this.form)
			},
			onSubmit(formName) {
				this.$refs[formName].validate(valid => {
					if (valid) {
						API.createtask(this.form).then((data) => {
							if (data.succ) {
								this.$router.push('/backManage/activitylist');
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
						// API.checkiftask().then((data) => {
						// 	if (data.succ) {
								
								
						// 	} else {
						// 		this.$message({
						// 			showClose: true,
						// 			message: data.msg,
						// 			type: 'error'
						// 		})
						// 		if (data.code === "20112") {
						// 			this.$router.push('/login');
						// 		}
						// 	}
						// }, (e) => {
						// 	this.$message({
						// 		showClose: true,
						// 		message: e,
						// 		type: 'error'
						// 	})
						// })
						
					}
				})
			}
		}
	}
</script>
<style lang="scss" scoped>
	@import '../../../../static/css/common.scss';
	.title{
		height: 40px;
		text-align: left;
		color: #3B3B3B;
		font-weight: bold;
		font-size: 16px;
		border-bottom: 1px solid #9F9F9f;
		line-height: 60px;
		padding-bottom:50px;
		margin-bottom: 20px;
	}
	.el-select-dropdown__item{
		margin-left: 20px;
	}
	.el-input{
		width:300px;
	}
</style>