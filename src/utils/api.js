import ajaxMehod from './ajaxMethod'

export default {
//
	login: (params) => (ajaxMehod.post('account/v1/login', params)),	  				//登陆
	register: (params) => (ajaxMehod.post('account/v1/register', params)),   			//注册
	reset: (params) => (ajaxMehod.post('account/v1/password/reset', params)),			//忘记密码
	logout: () => (ajaxMehod.post('account/v1/logout')),					//退出登录
	smscaptcha: (params) => (ajaxMehod.get('account/v1/sms-captcha', params)),			//发送验证码

// 个人中心
 	password: (params) => (ajaxMehod.put('account/v1/password', params)),				//修改密码
 	setmyinfo:(params) =>(ajaxMehod.put('user/v1',params)),
 	getmyinfo:() =>(ajaxMehod.get('user/v1')),

//店铺

	createstore: (params) => (ajaxMehod.post('seller/store/v1', params)),
	editstore: (id, params) => (ajaxMehod.put('seller/store/v1/' + id, params)),
	deletestore: (id) => (ajaxMehod.delete('seller/store/v1/' + id)),
	storelist: () => (ajaxMehod.get('seller/store/v1')),
	storeDetail: (id) => (ajaxMehod.get('seller/store/v1/' + id)),

//银行账户
	createFund: (params) => (ajaxMehod.post('user-fund/account/v1', params)),
	deleteFund: (id) => (ajaxMehod.delete('user-fund/account/v1/' +id)),
	editFund: (id,params) => (ajaxMehod.put('user-fund/account/v1/' + id, params)),
	getFundList: () => (ajaxMehod.get('user-fund/account/v1')),

	getSysAccount: () =>(ajaxMehod.get('user-fund/account/v1/system-list')),



//充值提现

	recharge: (params) => (ajaxMehod.post('user-fund/wallet/v1/recharge', params)),
	rechargelist: (params) => (ajaxMehod.get('user-fund/wallet/v1/recharge', params)),
	closerecharge: (id) => (ajaxMehod.delete('user-fund/wallet/v1/recharge/'+id)),

	withdraw: (params) => (ajaxMehod.post('user-fund/wallet/v1/withdraw', params)),
	withdrawlist: (params) => (ajaxMehod.get('user-fund/wallet/v1/withdraw',params)),
	closewithdraw: (id) => (ajaxMehod.delete('user-fund/wallet/v1/withdraw/'+id)),

	fundrecordlist:(params) => (ajaxMehod.get('user-fund/wallet/v1/fund-record',params)),

	mywallet:()=>(ajaxMehod.get('user-fund/wallet/v1')),								//我的钱包详情 放在后台首页

	


//商品
	creategoods: (params) => (ajaxMehod.post('seller/goods/v1', params)),						
	editgoods: (id,params) => (ajaxMehod.put('seller/goods/v1/'+ id, params)),
	deletegoods: (id) => (ajaxMehod.delete('seller/goods/v1/' + id)),
	goodslist: (params) => (ajaxMehod.get('seller/goods/v1', params)),
	goodDetail: (id) => (ajaxMehod.get('seller/goods/v1/' + id)),


//后台活动管理
	checkiftask: () => (ajaxMehod.get('task/check/v1')),  //创建活动权限校验
	createtask: (params) => (ajaxMehod.post('task/v1', params)),
	edittask: (id,params) => (ajaxMehod.put('task/v1/' + id, params)),
	deltask: (id) => (ajaxMehod.delete('task/v1/' + id)),
	mytasklist: (params) => (ajaxMehod.get('task/v1/my', params)),
	taskdetail: (id) => (ajaxMehod.get('task/v1/'+id)),


//流程
//首页活动列表
	tasklist: (params) => (ajaxMehod.get('task/v1', params)),
	checkiforder: (params) => (ajaxMehod.get('task-order/v1/check-permission', params)),
	applyactivity: (params) => (ajaxMehod.post('task-order/v1', params)),                  //申请


//订单相关
	myorderlist: (params) => (ajaxMehod.get('task-order/v1', params)),
	verifyorder: (id) => (ajaxMehod.put('task-order/v1/verify/' + id)),
	makesure: (id,params) =>(ajaxMehod.post('task-order/v1/confirm/' + id,params)),
	submitOrder: (id,params) =>(ajaxMehod.put('task-order/v1/' + id,params)),
	sellerConfirmOrder: (id) => (ajaxMehod.put('task-order/v1/seller-confirm/' + id)),
	buyerConfirmOrder: (id) => (ajaxMehod.put('task-order/v1/buyer-confirm/' + id)),
	revert: (id) => (ajaxMehod.put('task-order/v1/done/' + id)),
	freeze: (id) => (ajaxMehod.put('task-order/v1/freeze/' + id)),
	delorder: (id) => (ajaxMehod.delete('task-order/v1/' + id)), 

	




	

	//图片上传

	getToken: (params) => (ajaxMehod.get('common/v1/upload-token', params)),

	upload: (params) => (ajaxMehod.file(params)),




}