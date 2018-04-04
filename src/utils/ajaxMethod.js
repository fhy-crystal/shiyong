import axios from 'axios'
import * as Cookies from 'js-cookie'

axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
axios.defaults.baseURL = 'http://120.55.41.190/api/';

export default {
	
	get(url, params, header) {
		return new Promise((resolve, reject) => {
			var body = {}
			if (!params) {
				body['_token'] = Cookies.get('token') || '';
			} else {
				params['_token'] = Cookies.get('token') || '';
			}
			params = Object.assign(body, params);
			header = Object.assign(axios.defaults.headers.common, header);
			axios.get(url, {params: params}, header).then((res) => {
				resolve(res.data);
			}, (error) => {
				reject(error);
			})
		})
	},
	file(data, header) {
		return new Promise((resolve, reject) => {
			header = Object.assign(axios.defaults.headers.common, header);
			// let formData = new FormData();
			// formData.append('file', data, data.name);
			axios.post('//upload.qiniu.com/', data, {headers:{'Content-Type':'multiple/form-data'}}).then((res) => {
				resolve(res.data);
			}, (error) => {
				reject(error);
			})
		})
	},
	delete(url, params, header) {
		return new Promise((resolve, reject) => {
			var body = {}
			if (!params) {
				body['_token'] = Cookies.get('token') || '';
			} else {
				params['_token'] = Cookies.get('token') || '';
			}
			params = Object.assign(body, params);
			header = Object.assign(axios.defaults.headers.common, header);
			console.log(url);
			axios.delete(url,{params: params}, header).then((res) => {
				resolve(res.data);
			}, (error) => {
				reject(error);
			})
		})
	},
	put(url, postBody, header) {
		return new Promise((resolve, reject) => {
			var body = {}
			if (!postBody) {
				body['_token'] = Cookies.get('token') || '';
			} else {
				postBody['_token'] = Cookies.get('token') || '';
			}
			postBody = Object.assign(body, postBody);
			header = Object.assign(axios.defaults.headers.common, header);
			axios.put(url, postBody, header).then((res) => {
				resolve(res.data);
			}, (error) => {
				reject(error);
			})
		})
	},
	post(url, postBody, header) {
		return new Promise((resolve, reject) => {
			var body = {}
			if (!postBody) {
				body['_token'] = Cookies.get('token') || '';
			} else {
				postBody['_token'] = Cookies.get('token') || '';
			}
			postBody = Object.assign(body, postBody);
			header = Object.assign(axios.defaults.headers.common, header);
			axios.post(url, JSON.stringify(postBody), header).then((res) => {
				resolve(res.data);
			}, (error) => {
				reject(error);
			})
		})
	},
}