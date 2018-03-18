import Vue from 'vue'
import Router from 'vue-router'
const prolist = () => import('@/pages/front/prolist');//前台页面
const login = () => import('@/pages/login');//登陆
const register = () => import('@/pages/register');//注册
const regConfirm = () => import('@/pages/regConfirm');//注册选择商家or普通用户
const findPwd = () => import('@/pages/findPwd');//忘记密码

//后台////////////
const backIndex = () => import('@/pages/end/index');//后台首页
//后台用户信息
const userinfo = () => import('@/pages/end/userinfo/index');//后台用户信息


//商品管理
const creategoods = () => import('@/pages/end/goodsmanage/creategoods');//创建商品
const goodslist = () => import('@/pages/end/goodsmanage/goodslist');//商品列表
const editgoods = () => import('@/pages/end/goodsmanage/editgoods');//订单列表包含订单号金额等信息
// const delgoods = () => import('@/pages/end/goodsmanage/delgoods');//订单列表包含订单号金额等信息


// 活动管理
//商家   //确认订单 确认返款 弹窗处理
const createact = () => import('@/pages/end/activity/createact');//创建活动
const editact = () => import('@/pages/end/activity/editact');//修改活动  //删除弹窗
const activitylist = () => import('@/pages/end/activity/activitylist');//活动列表
const applylist =  () => import('@/pages/end/activity/applylist');//申请人/要选择的用户列表
const orderlist = () => import('@/pages/end/activity/orderlist');//订单列表包含订单号金额等信息

//普通用户
const myorderlist = () => import('@/pages/end/order/myorderlist');//订单列表包含订单号金额等信息
const startorder = () => import('@/pages/end/order/startorder');//开始任务  确认收货  放弃可以通过弹窗实现




//提现/充值账户管理
const addbankcard = () => import('@/pages/end/account/addbankcard');//添加银行卡
const editbankcard = () => import('@/pages/end/account/editbankcard');//编辑银行卡
const bankcardlist = () => import('@/pages/end/account/bankcardlist');//银行卡列表



//资金管理
const recharge = () => import('@/pages/end/fund/recharge');//充值
const rechargelist = () => import('@/pages/end/fund/rechargelist');//充值list
const withdraw = () => import('@/pages/end/fund/withdraw');//提现   关闭充值或者提现用弹窗解决
const withdrawlist = () => import('@/pages/end/fund/withdrawlist');//提现list
const fundlog = () => import('@/pages/end/fund/fundlog');//资金日志


//绑定店铺  //删除弹窗处理
const storelist = () =>import('@/pages/end/storemanage/storelist');//店铺列表
const addstore = () =>import('@/pages/end/storemanage/addstore');//添加店铺
const editstore = () =>import('@/pages/end/storemanage/editstore');//添加店铺

//个人中心
const editpassword = () =>import('@/pages/end/usercenter/editpassword');//修改密码
const personalinfo = () =>import('@/pages/end/usercenter/personalinfo');//修改密码



Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/index',
			name: 'prolist',
			component: prolist
		}, {
			path: '/',
			redirect: {
				name: 'prolist'
			}
		}, {
			path: '/login',
			name: 'login',
			component: login
		}, {
			path: '/regConfirm',
			name: 'regConfirm',
			component: regConfirm
		}, {
			path: '/register',
			name: 'register',
			component: register
		}, {
			path: '/findPwd',
			name: 'findPwd',
			component: findPwd
		}, {
			path: '/backManage',
			name: 'backManage',
			component: backIndex,
			children: [
				{
					path: '/backManage/userinfo',
					name: 'userinfo',
					component: userinfo
				},

				//活动管理
				{
				path: '/backManage/activity',
				name: 'activity',
				component: activitylist
				},

				{
					path: '/backManage/createact',
					name: 'createact',
					component: createact
				},
				{
					path: '/backManage/editact',
					name: 'editact',
					component: editact
				},
				{
					path: '/backManage/applylist',
					name: 'applylist',
					component: applylist
				},
				{
					path: '/backManage/orderlist',
					name: 'orderlist',
					component: orderlist
				},
				{
					path: '/backManage/myorderlist',
					name: 'myorderlist',
					component: myorderlist
				},
				{
					path: '/backManage/startorder',
					name: 'startorder',
					component: startorder
				},
				//商品管理
				{
					path: '/backManage/creategoods',
					name: 'creategoods',
					component: creategoods
				},
				{
					path: '/backManage/goodslist',
					name: 'goodslist',
					component: goodslist
				},
				{
					path: '/backManage/editgoods/:goodid',
					name: 'editgoods',
					component: editgoods
				},
				// {
				//	 path: '/backManage/delgoods',
				//	 name: 'delgoods',
				//	 component: delgoods
				// },

				//提现绑定
				{
					path: '/backManage/editpassword',
					name: 'editpassword',
					component: editpassword
				},
				{
					path: '/backManage/addbankcard',
					name: 'addbankcard',
					component: addbankcard
				},
				{
					path: '/backManage/editbankcard',
					name: 'editbankcard',
					component: editbankcard
				},
				{
					path: '/backManage/bankcardlist',
					name: 'bankcardlist',
					component: bankcardlist
				},

				//资金管理
				{
					path: '/backManage/recharge',
					name: 'recharge',
					component: recharge
				},
				{
					path: '/backManage/rechargelist',
					name: 'rechargelist',
					component: rechargelist
				},
				{
					path: '/backManage/withdraw',
					name: 'withdraw',
					component: withdraw
				},
				{
					path: '/backManage/withdrawlist',
					name: 'withdrawlist',
					component: withdrawlist
				},
				{
					path: '/backManage/fundlog',
					name: 'fundlog',
					component: fundlog
				},

				//绑定店铺
				{
					path: '/backManage/addstore',
					name: 'addstore',
					component: addstore
				},
				{
					path: '/backManage/editstore/:storeid',
					name: 'editstore',
					component: editstore
				},
				{
					path: '/backManage/storelist',
					name: 'storelist',
					component: storelist
				},

				//个人中心
                {
                    path: '/backManage/editpassword',
                    name: 'editpassword',
                    component: editpassword
                },
                {
                    path: '/backManage/personalinfo',
                    name: 'personalinfo',
                    component: personalinfo
                },
			]
		}
	]
})

