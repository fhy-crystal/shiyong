<template>
	<div class="shopBind_right myfl">
		<form ref="myform">
			<div class="shopBind_right_choice clearfix">
				<span class="myfl">选择绑定类型:</span>
				<input type="radio" name="shopType" value="1" checked="checked" style="margin-left: 10px;" class="shopBind_shoptype_tb" id="taobao"/><label for="taobao" style="margin: 0 10px;vertical-align: middle;">淘宝</label>
				<input type="radio" name="shopType" value="2" class="shopBind_shoptype_tm" style="margin-left: 50px;" id="tianmao"/><label for="tianmao" style="margin: 0 10px;vertical-align: middle;">天猫</label>
			</div>
			<div style="clear: both;margin-top: 20px;"></div>
			<div class="shopBind_right_name">
				<span id="DP_XM">店铺名称:</span>
				<input type="text" placeholder="请输入店铺名称" name="shopname" id="shopNameA" class="shop_name"/>
			</div>
			<div class="shopBind_DP_account">
				<em style="visibility: hidden;" class="nose_DP_error">请输入店铺名称</em>
				<em class="DP_error"></em>
			</div>
			<div class="shopBind_WW_name">
				<span id="WW_XM">旺旺名称:</span>
				<input type="text" placeholder="请输入店主旺旺ID" name="taobaoNick" id="shopBind_WW"/>
			</div>
			<div class="shopBind_WW_account">
				<em style="visibility: hidden;" class="nose_WW_error">请输入旺旺账号</em><em class="WW_error"></em>
			</div>
			<div class="shopBind_link">
				<span>店铺链接:</span>
				<input type="text" placeholder="请输入店铺链接" name="shoplink" id="shop_link"/>
			</div>
			<div class="shopBind_link_account">
				<em style="visibility: hidden;line-height: 30px;" class="nose_shoplink_error">请输入店铺链接</em>
			</div>
			<input type="hidden" datacode="65876" value="0" id="Merchant_store_link_verification"/>
			<div class="shopBind_refer">
				<input type="botton" @click="onSubmit" id="shop_Bind" value="提交" style="border: none;"/>
			</div>
		</form>
	</div>
</template>

<script>
    import API from '../../../utils/api'
    export default {
        data() {
            var storenameCheck = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('店铺名称不能为空'));
                } else {
                    callback();
                }
            };
            var urlCheck = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('店铺地址不能为空'));
                }
            };
            var wangwangCheck = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('旺旺名称不能为空'));
                }
            }
            return {
                errorMsg: '出错信息',
                info: {
                    mobile: '',
                    password: ''
                },
                rules: {
                    mobile: [{
                        validator: userCheck, trigger: 'blur'
                    }],
                    password: [{
                        validator: pwdCheck, trigger: 'blur'
                    }]
                }
            }
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
	@import '../../../assets/css/reset.scss';
	@import '../../../assets/css/animate.scss';
	@import '../../../assets/css/business.scss';
</style>