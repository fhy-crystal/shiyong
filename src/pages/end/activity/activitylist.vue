<template>
	<div>
		<el-form ref="form" :model="form" label-width="80px">
			<el-form-item class="f_left" label="选择店铺">
				<el-select v-model="form.store_id">
					<el-option label="罗蒙旗舰店" value="1"></el-option>
					<el-option label="高雄港旗舰店" value="1"></el-option>
				</el-select>
			</el-form-item>
			<el-form-item class="f_left" label="选择商品">
				<el-select v-model="form.store_id">
					<el-option label="罗蒙旗舰店" value="1"></el-option>
					<el-option label="高雄港旗舰店" value="1"></el-option>
				</el-select>
			</el-form-item>
			<el-form-item class="f_left" label="进店方式">
				<el-select v-model="form.store_id">
					<el-option label="罗蒙旗舰店" value="1"></el-option>
					<el-option label="高雄港旗舰店" value="1"></el-option>
				</el-select>
			</el-form-item>
			<el-form-item class="f_left" label="活动状态">
				<el-select v-model="form.store_id">
					<el-option label="罗蒙旗舰店" value="1"></el-option>
					<el-option label="高雄港旗舰店" value="1"></el-option>
				</el-select>
			</el-form-item>
			<el-form-item class="f_left" label="商品名称">
				<el-input v-model="form.goods_name"></el-input>
			</el-form-item>
			<el-form-item>
				<el-button type="primary" @click="onSubmit">搜索</el-button>
			</el-form-item>
		</el-form>


		<el-table :data="tableData" stripe style="width: 100%">
			<el-table-column prop="id" label="ID" width="50"></el-table-column>
			<el-table-column prop="task_name" label="活动名称" width="100"></el-table-column>

			<el-table-column  label="申请方式" width="150">
				<template slot-scope="scope">
					<div class="actitem"><span>进店方式</span>:{{scope.row.platform}}</div>
					<div class="actitem"><span>申请方式</span>:{{scope.row.apply_type}}</div>
					<div class="actitem"><span>关键字</span>:{{scope.row.goods_keyword}}</div>
				</template>
			</el-table-column>


			<el-table-column  label="商品详情" width="120">
				<template slot-scope="scope">
					<div class="actitem"><span>商品名称</span>:{{scope.row.goods_name}}</div>
					<div class="actitem"><span>商品价格</span>:{{scope.row.goods_price}}元</div>
					<img style="height: 50px;width: 50px;" :src="scope.row.goods_image">
				</template>
			</el-table-column>
			<el-table-column  label="活动份数" width="100">
				<template slot-scope="scope">
					<div class="actitem"><span>总份数</span>:{{scope.row.total_order_number}}份</div>
					<div class="actitem"><span>进行中</span>:{{scope.row.doing_order_number}}份</div>
					<div class="actitem"><span>已完成</span>:{{scope.row.finished_order_number}}份</div>
					<div class="actitem"><span>待开始</span>:{{scope.row.waiting_order_number}}份</div>
					<div class="actitem"><span>失败</span>:{{scope.row.failed_order_number}}份</div>
				</template>
			</el-table-column>
			<el-table-column label="冻结金额" width="80">
				<template slot-scope="scope">
					{{scope.row.total_order_price}}元
				</template>
			</el-table-column>
			<el-table-column prop="task_status" label="任务状态"></el-table-column>
			<el-table-column prop="created_at" label="更新时间"></el-table-column>
			<el-table-column label="操作">
				<template slot-scope="scope">
					<router-link class ='shenhe' to="/backManage/applylist">审核用户</router-link>
                    <br>
					<router-link class ='shenhe' to="/backManage/orderlist">查看订单</router-link>
					<br>
					<span class ='shenhe'>结单</span>
				</template>
			</el-table-column>
		</el-table>
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
                    id:1,
                    task_name: '刷刷刷',
                    apply_type: '后台自选',
                    platform: '手机',
                    goods_image: '手机',
                    goods_name: '哇咔咔',
                    goods_price: '60',
                    goods_keyword: '毛绒大衣',
                    doing_order_number: '5',
                    waiting_order_number: '4',
                    failed_order_number: '0',
                    finished_order_number: '1',
                    total_order_number: '10',
                    task_status: '进行中',
                    single_order_price: '25',
                    total_order_price: '250',
                    created_at: '2018-5-25'
                }
                ]
                this.tableData = list;
                // API.storelist().then((data) => {
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
            onSubmit() {
                console.log('submit!');
            }
            // delData(id) {
            //     API.deletestore({id: id}).then.then((data) => {
            //         if (data.succ) {
            //             this.getList();
            //         } else {
            //             this.$message({
            //                 showClose: true,
            //                 message: data.msg,
            //                 type: 'error'
            //             })
            //         }
            //     }, (e) => {
            //         this.$message({
            //             showClose: true,
            //             message: e,
            //             type: 'error'
            //         })
            //     })
            // }
        }
    }
</script>
<style lang="scss" scoped>
	@import '../../../../static/css/common.scss';
	.actitem{
		font-size: 13px;
		color: #D50E2B;
		span{
			color:#5b5b5b;
		}
	}
	.shenhe{
		font-size: 12px;
		color: #66b1ff;
	}
	.f_left{
		width: 280px;
		float: left;
	}

</style>