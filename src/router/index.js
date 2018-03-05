import Vue from 'vue'
import Router from 'vue-router'

const login = () => import('@/pages/login');
const regConfirm = () => import('@/pages/regConfirm');
const register = () => import('@/pages/register');
const findPwd = () => import('@/pages/findPwd');

const prolist = () => import('@/pages/front/prolist');

const backIndex = () => import('@/pages/end/index');

// 活动管理
const activity = () => import('@/pages/end/activity/index');

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
			children: [{
				path: '/backManage/activity',
				name: 'activity',
				component: activity
			}]
		}
	]
})
