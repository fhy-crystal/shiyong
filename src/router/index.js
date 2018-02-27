import Vue from 'vue'
import Router from 'vue-router'


const prolist = () => import('@/pages/front/prolist')

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			name: 'prolist',
			component: prolist
		}, {
			path: '/index',
			redirect: {
				name: 'prolist'
			}
		}
	]
})
