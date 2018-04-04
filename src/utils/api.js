import ajaxMehod from './ajaxMethod'

export default {
//
	login: (params) => (ajaxMehod.post('account/v1/login', params)),      				//登陆
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


//
	
	edittask: (params) => (ajaxMehod.put('task/v1/{id}', params)),
	createtask: (params) => (ajaxMehod.post('task/v1', params)),
	deltask: (params) => (ajaxMehod.delete('task/v1', params)),
	mytasklist: (params) => (ajaxMehod.get('task/my/v1', params)),
	checkiftask: (params) => (ajaxMehod.get('task/check/v1', params)),
	tasklist: (params) => (ajaxMehod.get('task/v1', params)),
	orderlist: (params) => (ajaxMehod.get('task-order/v1', params)),
	myorderlist: (params) => (ajaxMehod.put('task-order/v1/{id}', params)),
	finishorderlist: (params) => (ajaxMehod.put('task-order/v1/done/{id}', params)),
	checkiforder: (params) => (ajaxMehod.get('task-order/v1/check-permission', params)),
	assign: (params) => (ajaxMehod.post('task-order/v1/assign', params)),

	

	getToken: (params) => (ajaxMehod.get('common/v1/upload-token', params)),

	upload: (params) => (ajaxMehod.file(params)),




}