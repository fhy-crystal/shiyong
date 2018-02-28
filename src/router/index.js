import Vue from 'vue'
import Router from 'vue-router'


const prolist = () => import('@/pages/front/prolist');
const login = () => import('@/pages/login');

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
		}
	]
})
