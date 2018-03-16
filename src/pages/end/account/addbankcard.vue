<template>

	<el-form ref="form" :model="form" label-width="80px">
		<p class="title">绑定提现账号<p/>
		<el-form-item label="银行名称">
			<el-input  v-model="bank" placeholder="请输入内容"></el-input>
		</el-form-item>
		<el-form-item label="银行卡号">
			<el-input  v-model="bank_card" placeholder="请输入内容"></el-input>
		</el-form-item>
		<el-form-item label="持卡人">
			<el-input  v-model="real_name" placeholder="请输入内容"></el-input>
		</el-form-item>

		<el-form-item>
			<el-button type="primary" @click="onSubmit">提交</el-button>
		</el-form-item>
	</el-form>
</template>



<script>
    export default {
        data() {
            return {
                form: {
                    name: '',
                    region: '',
                    date1: '',
                    date2: '',
                    delivery: false,
                    type: [],
                    resource: '',
                    desc: ''
                }
            }
        },
        methods: {
            onSubmit() {
                console.log('submit!');
            }
        }
    }
</script>



<style lang="scss" scoped>
	@import '../../../../static/css/common.scss';
	.el-form-item{
		width:400px;
	}
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

</style>














<!--<template>-->
	<!--<div>-->
		<!--<p class="title">绑定提现账号<p/>-->
		<!--<div class="item"><span class="span_name">银行名称:</span><input type="text" placeholder="请输入银行名称" name="task_name"  class="shop_name"/></div>-->
		<!--<div class="item"><span class="span_name">银行卡号:</span><input type="text" placeholder="请输入银行卡号" name="goods_price"  class="shop_name"/></div>-->
		<!--<div class="item"><span class="span_name">持卡人:</span><input type="text" placeholder="请输持卡人姓名" name="total_order_number"  class="shop_name"/></div>-->
		<!--<div style="text-align:center">-->
			<!--<el-button type="primary" @click="submit">提  交</el-button>-->
		<!--</div>-->
	<!--</div>-->
<!--</template>-->
<!--<script>-->
    <!--export default {-->
        <!--data() {-->
            <!--return {-->

            <!--}-->
        <!--}-->
    <!--}-->
<!--</script>-->
<!--<style lang="scss" scoped>-->
	<!--@import '../../../../static/css/common.scss';-->
	<!--.title{-->
		<!--height: 40px;-->
		<!--text-align: left;-->
		<!--color: #3B3B3B;-->
		<!--font-weight: bold;-->
		<!--font-size: 16px;-->
		<!--border-bottom: 1px solid #9F9F9f;-->
		<!--line-height: 60px;-->
		<!--padding-bottom:50px;-->
		<!--margin-bottom: 20px;-->
	<!--}-->
	<!--.el-select-dropdown__item{-->
		<!--margin-left: 20px;-->
	<!--}-->
	<!--.span_name{-->
		<!--display: inline-block;-->
		<!--width: 100px;-->
		<!--text-align: right;-->
		<!--color: #2E2D3C;-->
		<!--margin-right: 10px;-->
		<!--font-size: 13px;-->
	<!--}-->
	<!--.shop_name {-->
		<!--font-size: 12px;-->
		<!--outline: none;-->
		<!--width: 218px;-->
		<!--height: 40px;-->
		<!--line-height: 40px;-->
		<!--border: 1px solid #EFEFEF;-->
		<!--border-radius: 3px;-->
		<!--padding-left: 10px;-->
		<!--vertical-align: middle;-->
	<!--}-->
	<!--.goodspic{-->
		<!--float:left;-->
	<!--}-->
	<!--.upload-demo{-->
		<!--float: left;-->
	<!--}-->
	<!--.item{-->
		<!--margin-top: 20px;-->
	<!--}-->
<!--</style>-->