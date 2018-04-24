<template>
	<div>
        <el-form :inline="true" class="demo-form-inline">
            <el-form-item label="提现状态">
                <el-select v-model="withdrawStatus" placeholder="提现状态">
                    <el-option label="待审核" value="0"></el-option>
                    <el-option label="已审核" value="1"></el-option>
                    <el-option label="未通过" value="2"></el-option>
                    <el-option label="已关闭" value="3"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">查询</el-button>
            </el-form-item>
        </el-form>
		<el-table :data="tableData" stripe style="width: 100%">
			<el-table-column prop="id" label="ID" width="80"></el-table-column>
			<el-table-column  label="提现金额">
                <template slot-scope="scope">
                    <span>{{scope.row.amount/100}}元</span>
                </template>         
            </el-table-column>
			<el-table-column prop="withdraw_time" label="申请时间">
                <template slot-scope="scope">
                    <span>{{scope.row.withdraw_time | time}}</span>
                </template>        
            </el-table-column>
			<el-table-column prop="verify_time" label="提现时间">
                <template slot-scope="scope">
                    <span>{{scope.row.verify_time | time}}</span>
                </template>         
            </el-table-column>
			<el-table-column prop="withdraw_status" label="提现状态"></el-table-column>
			<!-- <el-table-column  label="提现信息">
				<template slot-scope="scope">
					<div class="actitem"><span>开户行:</span>{{scope.row.failed_order_number}}</div>
					<div class="actitem"><span>卡号</span>:{{scope.row.failed_order_number}}</div>
					<div class="actitem"><span>执卡人</span>:{{scope.row.failed_order_number}}</div>
				</template>
			</el-table-column> -->
			<el-table-column prop="verify_remark" label="备注"></el-table-column>
		</el-table>
	</div>
</template>
<script>
    import API from '../../../utils/api'
    export default {
        data() {
            return {
                tableData: [],
                withdrawStatus: '',
                account_type:'1',
                currentPage: 1,
                total: 0
            }
        },
        created() {
            this.getList();
        },
        methods: {
            getList() {
               let postBody = {
                    withdraw_status: this.withdrawStatus,
                    account_type: this.account_type,
                    page: this.currentPage
                }
                API.withdrawlist(postBody).then((data) => {
                    if (data.succ) {
                        this.tableData = data.data.data;
                        this.currentPage = parseInt(data.data.current_page);
                        this.total = parseInt(data.data.total);
                    } else {
                        this.$message({
                            showClose: true,
                            message: data.msg,
                            type: 'error'
                        })
                        if (data.code === "20112") {
                            this.$router.push('/login');
                        }
                    }
                }, (e) => {
                    this.$message({
                        showClose: true,
                        message: e,
                        type: 'error'
                    })
                })
            },
            handleCurrentChange(val) {
                this.currentPage = val;
                this.getList();
            },
            closeWithdraw(id) {
                API.closewithdraw(id).then((data) => {
                    if (data.succ) {
                        this.$message({
                            showClose: true,
                            message: '已关闭',
                            type: 'success'
                        })
                    } else {
                        this.$message({
                            showClose: true,
                            message: data.msg,
                            type: 'error'
                        })
                        if (data.code === "20112") {
                            this.$router.push('/login');
                        }
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
                this.currentPage = 1;
                this.getList();
            }
        }
    }
</script>
<style lang="scss" scoped>
    @import '../../../../static/css/common.scss';
</style>