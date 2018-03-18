<template>
	<el-menu class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" unique-opened default-active="/backManage/userinfo"  active-text-color="#f25f55" router>
		<el-submenu index="0">
			<template slot="title">
				<i class="el-icon-location"></i>
				<span>店铺管理</span>
			</template>
			<el-menu-item-group>
				<el-menu-item index="/backManage/storelist">我的店铺</el-menu-item>
				<el-menu-item index="/backManage/addstore">添加店铺</el-menu-item>
			</el-menu-item-group>
		</el-submenu>

		<el-submenu index="1">
			<template slot="title">
				<i class="el-icon-location"></i>
				<span>商品管理</span>
			</template>
			<el-menu-item-group>
				<el-menu-item index="/backManage/creategoods">添加商品</el-menu-item>
				<el-menu-item index="/backManage/goodslist">我的商品</el-menu-item>
			</el-menu-item-group>
		</el-submenu>
		<el-submenu index="2">
			<template slot="title">
				<i class="el-icon-location"></i>
				<span>活动管理</span>
			</template>
			<el-menu-item-group>
				<el-menu-item index="/backManage/createact">创建活动</el-menu-item>
				<el-menu-item index="/backManage/activity">活动管理</el-menu-item>
				<el-menu-item index="/backManage/myorderlist">我的订单</el-menu-item>
			</el-menu-item-group>
		</el-submenu>

		<el-submenu index='3'>
			<template slot="title">
				<i class="el-icon-location"></i>
				<span>资金账户管理</span>
			</template>
			<el-menu-item-group>
				<el-menu-item index="/backManage/addbankcard">资金账户设置</el-menu-item>
				<el-menu-item index="/backManage/bankcardlist">我的资金账户</el-menu-item>
			</el-menu-item-group>

		</el-submenu>

		<el-submenu index="4">
			<template slot="title">
				<i class="el-icon-location"></i>
				<span>资金管理</span>
			</template>
			<el-menu-item-group>
				<el-menu-item index="/backManage/recharge">账户充值</el-menu-item>
				<el-menu-item index="/backManage/rechargelist">我的充值</el-menu-item>
				<el-menu-item index="/backManage/withdraw">账户提现</el-menu-item>
				<el-menu-item index="/backManage/withdrawlist">我的提现</el-menu-item>
				<el-menu-item index="/backManage/fundlog">资金明细</el-menu-item>
			</el-menu-item-group>
		</el-submenu>

		<el-submenu index="5">
			<template slot="title">
				<i class="el-icon-location"></i>
				<span>个人中心</span>
			</template>
			<el-menu-item-group>
				<el-menu-item index="/backManage/editpassword">修改密码</el-menu-item>
				<el-menu-item index="/backManage/personalinfo">个人信息设置</el-menu-item>
			</el-menu-item-group>
		</el-submenu>
	</el-menu>
</template>
<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			handleOpen(key, keyPath) {
				console.log(key, keyPath);
			},
			handleClose(key, keyPath) {
				console.log(key, keyPath);
			}
		}
	}
</script>
<style lang="scss" scoped>
	@import '../../static/css/common.scss';
</style>