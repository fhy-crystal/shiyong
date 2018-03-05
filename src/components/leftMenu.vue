<template>
	<el-menu class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" unique-opened default-active="/backManage/activity"  active-text-color="#f25f55" router>
		<el-submenu index="1">
			<template slot="title">
				<i class="el-icon-location"></i>
				<span>活动管理</span>
			</template>
			<el-menu-item-group>
				<el-menu-item index="/backManage/activity">活动管理</el-menu-item>
			</el-menu-item-group>
		</el-submenu>
		<el-submenu index="2">
			<template slot="title">
				<i class="el-icon-location"></i>
				<span>账户绑定</span>
			</template>
			<el-menu-item-group>
				<el-menu-item index="2-1">我的淘宝</el-menu-item>
			</el-menu-item-group>
		</el-submenu>
		<el-submenu index="3">
			<template slot="title">
				<i class="el-icon-location"></i>
				<span>店铺管理</span>
			</template>
			<el-menu-item-group>
				<el-menu-item index="3-1">我的店铺</el-menu-item>
				<el-menu-item index="3-2">绑定店铺</el-menu-item>
			</el-menu-item-group>
		</el-submenu>
		<el-submenu index="4">
			<template slot="title">
				<i class="el-icon-location"></i>
				<span>资金管理</span>
			</template>
			<el-menu-item-group>
				<el-menu-item index="4-1">账户充值</el-menu-item>
				<el-menu-item index="4-2">资金明细</el-menu-item>
				<el-menu-item index="4-3">保证金明细</el-menu-item>
				<el-menu-item index="4-4">扣分明细</el-menu-item>
				<el-menu-item index="4-5">待返款明细</el-menu-item>
				<el-menu-item index="4-6">积分明细</el-menu-item>
				<el-menu-item index="4-7">提现绑定</el-menu-item>
				<el-menu-item index="4-8">账户提现</el-menu-item>
			</el-menu-item-group>
		</el-submenu>
		<el-submenu index="5">
			<template slot="title">
				<i class="el-icon-location"></i>
				<span>个人资料</span>
			</template>
			<el-menu-item-group>
				<el-menu-item index="5-1">基本信息</el-menu-item>
				<el-menu-item index="5-2">账户安全</el-menu-item>
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