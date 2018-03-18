<template>
	<el-form ref="form" :model="form" label-width="80px">
		<el-form-item label="商品店铺">
			<el-select v-model="form.store_id" placeholder="请选商品店铺">
				<el-option label="罗蒙旗舰店" value="1"></el-option>
				<el-option label="高雄港旗舰店" value="2"></el-option>
			</el-select>
		</el-form-item>
		<el-form-item label="商品名称">
			<el-input v-model="form.goods_name"></el-input>
		</el-form-item>
		<el-form-item label="商品链接">
			<el-input v-model="form.goods_url"></el-input>
		</el-form-item>
		<el-form-item label="商品价格">
			<el-input v-model="form.goods_price"></el-input>
		</el-form-item>
		<el-form-item label="商品主图">
			<el-upload
					class="upload-demo"
					action="https://jsonplaceholder.typicode.com/posts/"
					:on-preview="handlePreview"
					:on-remove="handleRemove"
					:limit="1"
					:file-list="fileList2"
					list-type="picture">
				<el-button size="small" type="primary">点击上传</el-button>
				<div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
			</el-upload>
		</el-form-item>

		<el-form-item>
			<el-button type="primary" @click="onSubmit">立即创建</el-button>
			<el-button>取消</el-button>
		</el-form-item>
	</el-form>
</template>

<script>
    export default {
        data() {
            return {
                form: {
                    name: '',
                    region: '',
                    date1: '',
                    date2: '',
                    delivery: false,
                    type: [],
                    resource: '',
                    desc: ''
                }
            }
        },
        methods: {
            onSubmit() {
                console.log('submit!');
            }
        }
    }
</script>