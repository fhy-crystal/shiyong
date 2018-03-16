<template>
	<div class="shopBind_right myfl">
		<h3>账户绑定</h3>
		<form style="margin-top: 20px">
			<div class="shopBind_right_name">
				<span id="DP_XM">淘宝账号:</span>
				<input type="text"  name="taobao_account" id="shopNameA" class="shop_name"/>
				<button type="button" style="color: #fff;background: #0075ec;border: 0px;width: 50px;height:25px;margin-left: 10px;">设置</button>
			</div>

			<div class="shopBind_WW_name" ref="jdaccount" v-show="test">
				<span id="WW_XM">京东账号:</span>
				<input type="text"  name="jd_account" id="shopBind_WW"/>
				<button type="button" style="color: #fff;background: #0075ec;border: 0px;width: 50px;height:25px;margin-left: 10px;">设置</button>

			</div>

		</form>
	</div>
</template>

<script>
    import API from '../../../utils/api'
    export default {
        data() {
            return {
                errorMsg: '出错信息',
                info: {
                    mobile: '',
                    password: ''
                },
                test: true
            }
        },
        methods: {


        }
    }
</script>
<style lang="scss" scope>
	@import '../../../../static/css/common.scss';
	@import '../../../assets/css/reset.scss';
	@import '../../../assets/css/animate.scss';
	@import '../../../assets/css/business.scss';
</style>