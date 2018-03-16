<template>
	<el-form ref="form" :model="form" label-width="150px">
		<el-form-item label="选择绑定类型">
			<el-radio v-model="store_type" label="1">淘宝</el-radio>
			<el-radio v-model="store_type" label="2">京东</el-radio>
		</el-form-item>
		<el-form-item label="店铺名称">
			<el-input  v-model="store_name" placeholder="请输入店铺名称"></el-input>
		</el-form-item>
		<el-form-item label="店铺主旺旺ID" v-show="store_type==1">
			<el-input  v-model="store_name" placeholder="请输入店铺主旺旺"></el-input>
		</el-form-item>
		<el-form-item label="店铺链接">
			<el-input  v-model="real_name" placeholder="请输入店铺链接"></el-input>
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
                store_type: '1'
            };
        },

        methods: {
            onSubmit() {
                API.login(this.info).then((data) => {
                    if (data.succ) {
                        console.log(1);
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
	.el-form-item__content{
		width:480px;
	}
</style>