<template>
	<div>
		<p class="title">修改密码<p/>
		<div class="item">
			<span class="span_name">原密码:</span>
			<input type="text" v-model="info.password" placeholder="原密码" name="task_name" class="shop_name"/>
		</div>
		<div class="item">
			<span class="span_name">新密码:</span>
			<input type="text" v-model="info.new_password" placeholder="新密码" name="goods_price" class="shop_name"/>
		</div>
		<div class="item">
			<span class="span_name">确认新密码:</span>
			<input type="text" v-model="info.new_confirm_password" placeholder="再次输入新密码" name="total_order_number" class="shop_name"/>
		</div>
		<div style="text-align:center">
			<el-button type="primary" @click="submit">提  交</el-button>
		</div>
	</div>
</template>
<script>
	import API from '../../../utils/api'
	export default {
		data() {
			return {
				info: {
					password: '',
					new_password: '',
					new_confirm_password: ''
				}
			}
		},
		methods: {
			submit() {
				if (!this.password) {
					this.$message({
						showClose: true,
						message: '请输入原密码',
						type: 'error'
					})
					return false;
				}
				if (this.info.new_password && this.info.new_password.length < 6) {
					this.$message({
						showClose: true,
						message: '密码长度不能小于6位',
						type: 'error'
					})
					return false;
				}
				if (this.info.new_password !== this.info.new_confirm_password) {
					this.$message({
						showClose: true,
						message: '新密码输入不一致',
						type: 'error'
					})
					return false;
				}
				API.password(this.info).then((data) => {
					if (data.succ) {
						this.$message({
							showClose: true,
							message: '密码修改成功',
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
	.span_name{
		display: inline-block;
		width: 100px;
		text-align: right;
		color: #2E2D3C;
		margin-right: 10px;
		font-size: 13px;
	}
	.shop_name {
		font-size: 12px;
		outline: none;
		width: 218px;
		height: 40px;
		line-height: 40px;
		border: 1px solid #EFEFEF;
		border-radius: 3px;
		padding-left: 10px;
		vertical-align: middle;
	}
	.goodspic{
		float:left;
	}
	.upload-demo{
		float: left;
	}
	.item{
		margin-top: 20px;
	}
</style>