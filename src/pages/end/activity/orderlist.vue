<template>
	<div>
		<el-table :data="tableData" stripe style="width: 100%">
			<el-table-column prop="id" label="ID" width="50"></el-table-column>
			<el-table-column prop="user_name" label="申请人" width="100"></el-table-column>

			<el-table-column  label="订单信息" width="200">
				<template slot-scope="scope">
					<div class="actitem"><span>下单账户名:</span>{{scope.row.failed_order_number}}</div>
					<div class="actitem"><span>订单号:</span>{{scope.row.failed_order_number}}</div>
					<div class="actitem"><span>商品价格:</span>{{scope.row.goods_price}}</div>
					<div class="actitem"><span>奖励金:</span>{{scope.row.user_reward}}</div>
					<div class="actitem"><span>返款金额:</span>{{scope.row.total_order_price}}</div>
				</template>
			</el-table-column>
			<el-table-column  prop="created_at"  label="创建时间" width="100"></el-table-column>
			<el-table-column  prop="updated_at"  label="最后更新时间" width="120">}</el-table-column>
			<el-table-column label="操作">
				<template slot-scope="scope">
					<el-button type="text" size="small" >确认订单</el-button>
					<el-button type="text" size="small" >返款</el-button>
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
                    taobao_account: 'dsfsf',
                    order_status: '进行中',
                    goods_price: '250',
                    user_reward:5,
                    total_order_price: '255',


                    created_at: '2018-5-25',
                    updated_at: '2018-5-25',
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