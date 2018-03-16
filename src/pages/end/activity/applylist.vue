<template>
	<div>
		<el-table :data="tableData" stripe style="width: 100%">
			<el-table-column prop="id" label="ID" width="50"></el-table-column>
			<el-table-column prop="user_name" label="申请人" width="100"></el-table-column>

			<el-table-column  label="申请信息" width="200">
				<template slot-scope="scope">
					<div class="actitem"><span>下单账户名:</span>{{scope.row.failed_order_number}}</div>
					<div class="actitem"><span>近期任务</span>:近期没做过您家任务</div>
				</template>
			</el-table-column>

			<el-table-column label="操作">
				<template slot-scope="scope">
					<el-button type="text" size="small" >通过申请</el-button>
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
                    user_name: '刷刷刷',
                    taobao_account: '后台自选',
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

</style>