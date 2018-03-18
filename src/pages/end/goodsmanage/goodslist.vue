<template>
	<div>
		<el-form ref="form" :model="form" label-width="80px">
			<el-form-item label="选择店铺">
				<el-select v-model="form.store_id">
					<el-option label="罗蒙旗舰店" value="1"></el-option>
					<el-option label="高雄港旗舰店" value="1"></el-option>
				</el-select>
			</el-form-item>
			<el-form-item label="商品名称">
				<el-input v-model="form.goods_name"></el-input>
			</el-form-item>
			<el-form-item>
				<el-button type="primary" @click="onSubmit">搜索</el-button>
			</el-form-item>
		</el-form>


		<el-table :data="tableData" stripe style="width: 100%">
			<el-table-column prop="goods_name" label="商品名称" width="150"></el-table-column>
			<el-table-column prop="goods_price" label="商品价格" width="100"></el-table-column>
			<el-table-column prop="goods_url" label="商品链接" width="200"></el-table-column>
			<el-table-column	label="商品主图">
				<template slot-scope="scope">
					<img style="height: 100px;width: 100px;" :src="scope.row.goods_image">
				</template>
			</el-table-column>
			<el-table-column prop="goods_status" label="商品状态"></el-table-column>
			<el-table-column prop="updated_at" label="更新时间"></el-table-column>
			<el-table-column label="操作">
				<template slot-scope="scope">
					<el-button type="text" size="small" @click="delData(scope.row.id)">删除</el-button>
					<el-button type="text" size="small" @click="edit(scope.row.id)">编辑</el-button>
				</template>
			</el-table-column>
		</el-table>
		<el-pagination style="float:right;margin-top:10px"
			@current-change="handleCurrentChange"
			:current-page.sync="currentPage"
			:page-size="15"
			layout="total, prev, pager, next"
			:total="total">
		</el-pagination>
	</div>
</template>
<script>
    import API from '../../../utils/api'
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
                },
                tableData: []
            }
        },
        created() {
            // 页面加载的时候调用getlist方法获取列表数据
            this.getList();
        },
        methods: {
            getList() {
                //调用API方法获取列表
                //假设list就是获取的列表
                var list = [{
                    id: 2,
                    goods_name: '小兵张乾子',
                    goods_price: '150元',
                    goods_url: 'https://item.jd.com/10424550272.html?jd_pop=bf92d847-53d2-4ca0-a7f1-1f3c11aaea13&abt=0',
                    goods_image: 'https://ss0.bdstatic.com/-0U0bnSm1A5BphGlnYG/tam-ogel/299c55e31d7f50ae4dc85faa90d6f445_121_121.jpg',
                    goods_status: '审核通过',
                    updated_at: '2018-5-25'
                }]
                this.tableData = list;
                // API.goodslist().then((data) => {
                // 	if (data.succ) {
                // 		this.tableData = data.data
                // 	} else {
                // 		this.$message({
                // 			showClose: true,
                // 			message: data.msg,
                // 			type: 'error'
                // 		})
                // 	}
                // }, (e) => {
                // 	this.$message({
                // 		showClose: true,
                // 		message: e,
                // 		type: 'error'
                // 	})
                // })
            },
            delData(id) {
                API.deletegoods({id: id}).then.then((data) => {
                    if (data.succ) {
                        this.getList();
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
	.el-select{
		width: 300px;
	}
	.el-form-item{
		float: left;
	}
</style>