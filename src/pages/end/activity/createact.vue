<template>
	<div>
		<p class="title">创建活动<p/>
		<el-form ref="form" :model="form" label-width="160px">
			<el-form-item label="活动名称">
				<el-input v-model="form.goods_name"></el-input>
			</el-form-item>
			<el-form-item label="活动商品">
				<el-select v-model="form.goods_id" placeholder="请选择">
				<el-option
						v-for="item in options"
						:key="item.value"
						:label="item.label"
						:value="item.value">
				</el-option>
				</el-select>
			</el-form-item>

			<el-form-item label="搜索关键字">
				<el-select v-model="form.goods_keywords" placeholder="请选择">
					<el-option
							v-for="item in goods_keywords"
							:key="item.value"
							:label="item.value"
							:value="item.value">
					</el-option>
				</el-select>
			</el-form-item>

			<el-form-item label="进店方式">
				<el-radio v-model="form.platform" label="1">电脑</el-radio>
				<el-radio v-model="form.platform" label="2">手机</el-radio>
			</el-form-item>
			<el-form-item label="份数">
				<el-input v-model="form.total_order_number"></el-input>
			</el-form-item>

			<el-form-item label="单份冻结金额">
				<el-input v-model="single_order_price"></el-input>
			</el-form-item>
			<el-form-item label="总冻结金额">
				<el-input v-model="single_order_price"></el-input>
			</el-form-item>
			<el-form-item>
				<el-button type="primary" @click="onSubmit">立即创建</el-button>
			</el-form-item>
		</el-form>

	</div>
</template>
<script>
    export default {
        data() {
            return {
                options: [{
                    value: '1',
                    label: '黄金糕'
                }, {
                    value: '2',
                    label: '双皮奶'
                }, {
                    value: '3',
                    label: '蚵仔煎'
                }, {
                    value: '4',
                    label: '盛大龙须面'
                }, {
                    value: '5',
                    label: '北京烤鸭'
                }],
                goods_keywords: [{
                    value: '黄金糕',
                }, {
                    value: '双皮奶',
                }],
                form: {
                    name: '',
                    region: '',
                    date1: '',
                    date2: '',
                    delivery: false,
                    type: [],
                    resource: '',
                    desc: ''
                },
                single_order_price: '6666',
                total_order_price: '6666',
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