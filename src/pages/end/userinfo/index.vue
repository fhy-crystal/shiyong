<template>
	<div class="business_rightmain myfl">
		<!-- 信息、数据展示 -->
		<div class="business_index_base myfl">
			<div class="business_index_msg clearfix" style="padding-bottom: 10px;">
				<a href="/user/person/info"><img class="userControl_index_userPic" src="../../../assets/backManage/business/business_index_user.png"/></a>
				<div class="myfl">
					<h1 class="business_index_userName">您好，<a href="/user/person/info" style="color:#333;max-width:200px;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;">zqk2018</a></h1>
					<input type="hidden" name="merchantIndex_isVip" id="merchantIndex_isVip" value="0">
					<input type="hidden" name="merchantIndex_firstLogin" id="merchantIndex_firstLogin" value="0">
					<p class="business_index_userLevel" style="display: inline-block">
						会员等级：您还不是VIP哦~
					</p>
					<a href="/merchant/vip/ground" class="business_index_memberBtn" style="float: right;">成为会员</a>
					<a href="/merchant/vip/ground" class="business_index_understandBtn" style="display: none;">了解特权</a>
				</div>
				<div class="business_index_money myfl">
					<p>
						冻结金额 <b> ￥0.00</b> 元
					</p>
					<p>
						可用余额 <em> ￥0.00</em> 元
					</p>
					<a href="/recharge/amount" class="business_index_rechargeBtn">充值</a>
				</div>
			</div>
			<h1 class="business_index_title1">当前活动情况</h1>
			<div class="clearfix">
				<div class="business_index_activity">
					<a href="/shop/activity?activityStatus=0" target="_blank">
						<h2 style="line-height: 58px;padding-top: 0;">未编辑完成（<em>0</em>）</h2>
					</a>
				</div>
				<div class="business_index_actArrowRight">
				</div>
				<div class="business_index_activity">
					<a href="/shop/activity?activityStatus=2" target="_blank">
						<h2 style="line-height: 58px;padding-top: 0;">进行中（<em>0</em>）</h2>
					</a>
				</div>
				<div class="business_index_actArrowRight">
				</div>
				<div class="business_index_activity">
					<a href="/shop/activity?activityStatus=0" target="_blank">
						<h2 style="line-height: 58px;padding-top: 0;">待发货（<em>0</em>）</h2>
					</a>
				</div>
			</div>
			<div class="clearfix">
				<div class="business_index_actArrowDown">
				</div>
			</div>
			<div class="clearfix">
				<div class="business_index_activity">
					<a href="/shop/activity?activityStatus=0" target="_blank">
						<h2 style="line-height: 58px;padding-top: 0;">追评待审核（<em>0</em>）</h2>
					</a>
				</div>
				<div class="business_index_actArrowLeft">
				</div>
				<div class="business_index_activity">
					<a href="/shop/activity?activityStatus=3" target="_blank">
						<h2 style="line-height: 58px;padding-top: 0;">已完成（<em>0</em>）</h2>
					</a>
				</div>
				<div class="business_index_actArrowLeft">
				</div>
				<div class="business_index_activity">
					<a href="/shop/activity?activityStatus=0" target="_blank">
						<h2 style="line-height: 58px;padding-top: 0;">待审核（<em>0</em>）</h2>
					</a>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
    import API from '../../../utils/api'
	export default {
		data() {
			return {
				tableData: []
			}
		},
		created() {
		    // 页面加载的时候调用getlist方法获取列表数据
		  this.getList();
		},
		methods: {
		    getList() {
				//调用API方法获取列表
				//假设list就是获取的列表
				var list = [{
                    store_type: '淘宝',
                    store_name: 'GXG官方旗舰店',
                    store_account: 'GXG官方旗舰店',
                    verify_status: '审核通过',
                    created_at: '2018-5-25'
                }, {
                    store_type: '京东',
                    store_name: 'zara官方旗舰店',
                    store_account: ' - ',
                    verify_status: '审核通过',
                    created_at: '2018-5-29'
                }]
				this.tableData = list;
			}
		}
	}
</script>
<style lang="scss" scoped>
	@import '../../../../static/css/common.scss';
	@import '../../../assets/css/reset.scss';
	@import '../../../assets/css/animate.scss';
	@import '../../../assets/css/business_L.scss';
	@import '../../../assets/css/main.scss';

	.business_index_actArrowRight{ width: 50px; height: 60px; background: url(../../../assets/backManage/business/business_icon_arrow_right1.png) no-repeat center; float: left;}
	.business_index_actArrowDown{ width: 200px; height: 34px; background: url(../../../assets/backManage/business/business_icon_arrow_down1.png) no-repeat center; float: right;}
	.business_index_actArrowLeft{ width: 50px; height: 60px; background: url(../../../assets/backManage/business/business_icon_arrow_left1.png) no-repeat center; float: left;}
</style>