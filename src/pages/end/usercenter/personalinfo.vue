<template>
	<el-form ref="form" :model="form" label-width="110px">
		<el-form-item class="inp_width" label="用户名称">
			<el-input v-model="form.username"></el-input>
		</el-form-item>
		<el-form-item label="用户头像">
			<el-upload
					class="upload-demo"
					action="123"
					:before-upload="beforeUpload"
					:on-change="onchange"
					:limit="1"
					:file-list="filelist"
					:data="postImg"
					list-type="picture">
				<el-button size="small" type="primary">点击上传</el-button>
				
				<div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
			</el-upload>
			<input type="file" @change="upload($event)">
		</el-form-item>
		<el-form-item label="性别">
			<el-radio-group v-model="form.resource">
				<el-radio label="1">男</el-radio>
				<el-radio label="2">女</el-radio>
			</el-radio-group>
		</el-form-item>
		<el-form-item class="inp_width" label="QQ">
			<el-input v-model="form.qq"></el-input>
		</el-form-item>
		<el-form-item class="inp_width" label="Email">
			<el-input v-model="form.email"></el-input>
		</el-form-item>
		<el-form-item class="inp_width" label="淘宝任务账号">
			<el-input v-model="form.taobao_account"></el-input>
		</el-form-item>
		<el-form-item class="inp_width" label="京东任务账号">
			<el-input v-model="form.jd_account"></el-input>
		</el-form-item>
		<el-form-item label="接收任务开关">
			<el-switch v-model="form.open_status"></el-switch>
		</el-form-item>

		<el-form-item>
			<el-button type="primary" @click="onSubmit">确定</el-button>
		</el-form-item>
	</el-form>
</template>

<script>
	import API from '../../../utils/api'
    export default {
        data() {
            return {
                fileList2: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}],
                form: {
                    name: '',
                    region: '',
                    date1: '',
                    date2: '',
                    delivery: false,
                    type: [],
                    resource: '',
                    desc: ''
                },
                filelist: [],
                postImg: {
                	token: ''
                }
            }
        },
        methods: {
        	beforeUpload(file) {
        		let postBody = {
        			extension: file.name.split('.')[1]
        		};
        		API.getToken(postBody).then((data) => {
        			if (data.succ) {
        				this.postImg.token = data.data.token;
						var formData = new FormData();
				        formData.append('file', file);
				        formData.append('token', data.data.token);
        				API.upload(formData).then((data) => {
        					if (data.succ) {
        						
        					} else {
        						this.$message({
        							showClose: true,
        							message: data.msg,
        							type: 'error'
        						})
        					}
        				}, (e) => {
        					this.$message({
        						showClose: true,
        						message: e,
        						type: 'error'
        					})
        				})
        			} else {
        				this.$message({
        					showClose: true,
        					message: data.msg,
        					type: 'error'
        				})
        			}
        		}, (e) => {
        			this.$message({
        				showClose: true,
        				message: e,
        				type: 'error'
        			})
        		})
        	},
        	onchange(event, file) {
        		console.log(this.postImg.token)
        		console.log(event, file);
        	},
        	upload(e) {
        		let file = e.target.files[0];
        		var formData = new FormData();
                formData.append('file', file);
                let postBody = {
                	extension: file.name.split('.')[1]
                };
                API.getToken(postBody).then((data) => {
                	if (data.succ) {
                		formData.append('token', data.data.token);

                		API.upload(formData).then((data) => {
                			if (data.succ) {
	                			
                			} else {
                				this.$message({
                					showClose: true,
                					message: data.msg,
                					type: 'error'
                				})
                			}
                		}, (e) => {
                			this.$message({
                				showClose: true,
                				message: e,
                				type: 'error'
                			})
                		})
                	} else {
                		this.$message({
                			showClose: true,
                			message: data.msg,
                			type: 'error'
                		})
                	}
                }, (e) => {
                	this.$message({
                		showClose: true,
                		message: e,
                		type: 'error'
                	})
                })
                
        	},
            onSubmit() {
                console.log('submit!');
            }
        }
    }
</script>
<style lang="scss" scoped>
	@import '../../../../static/css/common.scss';
	.inp_width{
		width:380px;
	}
</style>