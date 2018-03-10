import axios from 'axios'
import * as Cookies from 'js-cookie'

axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
axios.defaults.baseURL = 'http://127.0.0.1:9977/api/';

export default {
	post(url, postBody, header) {
		return new Promise((resolve, reject) => {
			header = Object.assign(axios.defaults.headers.common, header);
			console.log(url);
			axios.post(url, JSON.stringify(postBody), header).then((res) => {
				resolve(res.data);
			}, (error) => {
				reject(error);
			})
		})
	},
	get(url, params, header) {
		return new Promise((resolve, reject) => {
			header = Object.assign(axios.defaults.headers.common, header);
			axios.get(url, params, header).then((res) => {
				resolve(res.data);
			}, (error) => {
				reject(error);
			})
		})
	},
	file(url, data, header) {
		return new Promise((resolve, reject) => {
			header = Object.assign(axios.defaults.headers.common, header);
			let formData = new FormData();
			formData.append('file', data);
			axios.post(url, formData, {headers:{'Content-Type':'multiple/form-data'}}).then((res) => {
				resolve(res.data);
			}, (error) => {
				reject(error);
			})
		})
	},
    delete(url, postBody, header) {
        return new Promise((resolve, reject) => {
            header = Object.assign(axios.defaults.headers.common, header);
            console.log(url);
            axios.delete(url, JSON.stringify(postBody), header).then((res) => {
                resolve(res.data);
            }, (error) => {
                reject(error);
            })
        })
    },
    put(url, postBody, header) {
        return new Promise((resolve, reject) => {
            header = Object.assign(axios.defaults.headers.common, header);
            console.log(url);
            axios.put(url, JSON.stringify(postBody), header).then((res) => {
                resolve(res.data);
            }, (error) => {
                reject(error);
            })
        })
    },
}