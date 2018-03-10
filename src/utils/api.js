import ajaxMehod from './ajaxMethod'

export default {
	login: (params) => (ajaxMehod.post('account/v1/login', params)),      				//登陆
    register: (params) => (ajaxMehod.post('account/v1/register', params)),   				//注册
    reset: (params) => (ajaxMehod.post('account/v1/password/reset', params)),			//忘记密码
    password: (params) => (ajaxMehod.put('account/v1/password', params)),				//修改密码
    logout: (params) => (ajaxMehod.post('account/v1/logout', params)),					//退出登录
    smscaptcha: (params) => (ajaxMehod.get('account/v1/smscaptcha', params)),			//发送验证码

	creategoods: (params) => (ajaxMehod.post('seller/goods/v1', params)),						//
	editgoods: (params) => (ajaxMehod.put('seller/goods/v1/{id}', params)),
	deletegoods: (params) => (ajaxMehod.delete('seller/goods/v1/{id}', params)),
	deletestore: (params) => (ajaxMehod.delete('seller/store/v1/{id}', params)),
	goodslist: (params) => (ajaxMehod.get('seller/goods/v1', params)),
	storelist: (params) => (ajaxMehod.get('seller/store/v1', params)),
	edittask: (params) => (ajaxMehod.put('task/v1/{id}', params)),
	createtask: (params) => (ajaxMehod.post('task/v1', params)),
	deltask: (params) => (ajaxMehod.delete('task/v1/{id}', params)),
	mytasklist: (params) => (ajaxMehod.get('task/my/v1', params)),
	checkiftask: (params) => (ajaxMehod.get('task/check/v1', params)),
	tasklist: (params) => (ajaxMehod.get('task/v1', params)),
	orderlist: (params) => (ajaxMehod.get('task-order/v1', params)),
	myorderlist: (params) => (ajaxMehod.put('task-order/v1/{id}', params)),
	finishorderlist: (params) => (ajaxMehod.put('task-order/v1/done/{id}', params)),
	checkiforder: (params) => (ajaxMehod.get('task-order/v1/check-permission', params)),
	assign: (params) => (ajaxMehod.post('task-order/v1/assign', params)),











}