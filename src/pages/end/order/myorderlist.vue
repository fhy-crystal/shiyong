<template>
    <div>
        <el-form ref="form" label-width="80px">
            <el-form-item label="选择活动">
                <el-select v-model="storeid">
                    <el-option v-for="item in storeList" :label="item.store_name" :value="item.id" :key="item.id"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="订单状态">
                <el-select v-model="order_status">
                    <el-option v-for="item in orderStatusList" :label="item.value" :value="item.key" :key="item.key"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="search">搜索</el-button>
            </el-form-item>
        </el-form>
                
        <el-table :data="tableData" stripe style="width: 100%">
            <el-table-column prop="id" label="ID" width="50"></el-table-column>
            <el-table-column  prop="order_status"  label="订单状态" width="100"></el-table-column>
            <el-table-column  label="创建时间" width="100">
                <template slot-scope="scope">
                    <span>{{scope.row.created_at | time}}</span>
                </template>
            </el-table-column>
            <el-table-column  label="订单号" width="100">
                <template slot-scope="scope">
                    <span v-if="scope.row.order_id">{{scope.row.order_id}}</span>
                    <span v-else>-</span>
                </template>
            </el-table-column>
            <el-table-column  label="价格" width="100">
                <template slot-scope="scope">
                    <span v-if="scope.row.price">{{scope.row.price/100}}元</span>
                    <span v-else>-</span> 
                </template> 
            </el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button type="text" size="small" v-if="scope.row.order_status==1&&role==2" @click="audit(scope.row.id)">审核</el-button>
                  
                    <el-button v-if="scope.row.order_status==2&&role==1" type="text" size="small" @click="start(scope.row.id,scope.row.task_id)">开始任务</el-button>
                  
                    <el-button type="text" size="small" v-if="scope.row.order_status==3&&role==2" @click="confirm(scope.row.id)">核对订单</el-button>
                  
                    <el-button type="text" size="small" v-if="scope.row.order_status==4&&role==1" @click="recept(scope.row.id)">确认收货</el-button>
                   
                    <el-button type="text" size="small"  v-if="scope.row.order_status==5&&role==2" @click="orderDone(scope.row.id)">返款</el-button>
                    
                    <el-button type="text" size="small"  v-if="scope.row.order_status==5&&role==2" @click="freeze(scope.row.id)">冻结</el-button>

                    <el-button type="text" size="small" @click="delorder(scope.row.id)">删除订单</el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-pagination style="float:right;margin-top:10px"
            @current-change="handleCurrentChange"
            :current-page.sync="currentPage"
            :page-size="10"
            layout="total, prev, pager, next"
            :total="total">
        </el-pagination>
    </div>
</template>
<script>
    import API from '../../../utils/api'
    import * as Cookies from 'js-cookie'
    export default {
        data() {
            return {
                tableData: [],
                order_status: '',
                orderStatusList: [{
                    key: 1,
                    value: '状态1'
                }, {
                    key: 2,
                    value: '状态2'
                }, {
                    key: 3,
                    value: '状态3'
                }, {
                    key: 4,
                    value: '状态4'
                }, {
                    key: 5,
                    value: '状态5'
                }, {
                    key: 6,
                    value: '状态6'
                }, {
                    key: 7,
                    value: '状态7'
                }, {
                    key: 8,
                    value: '状态8'
                }],
                role: '',
                currentPage: 1,
                total: 0,
                storeid: '',
                storeList: []
            }
        },
        created() {
            this.getStoreList();
            // 页面加载的时候调用getlist方法获取列表数据
            this.getList();
            this.role = Cookies.get('role'); // 2：卖家
        },
        methods: {
            handleCurrentChange(val) {
                this.currentPage = val;
                this.getList();
            },
            getStoreList() {
                API.storelist().then((data) => {
                    if (data.succ) {
                        this.storeList = data.data
                    } else {
                        this.$message({
                            showClose: true,
                            message: data.msg,
                            type: 'error'
                        })
                        if (data.data.code === '20122') {
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
            getList() {
                //调用API方法获取列表
                //假设list就是获取的列表
                var bodydata = {
                    page:this.currentPage,
                    order_status: this.orderid
                };
                if (this.$route.params.activityid) {
                    bodydata.task_id = this.$route.params.activityid
                }
                API.myorderlist(bodydata).then((data) => {
                    if (data.succ) {
                        this.tableData = data.data.data;
                        console.log(data.data.data);
                        this.currentPage = parseInt(data.data.current_page);
                        this.total = parseInt(data.data.total);
                    } else {
                        this.$message({
                            showClose: true,
                            message: data.msg,
                            type: 'error'
                        })
                        if (data.data.code === '20122') {
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
            search() {
                this.getList();
            },
            audit(id) {
                API.verifyorder(id).then((data) => {
                    if (data.succ) {
                        this.getList();
                    } else {
                        this.$message({
                            showClose: true,
                            message: data.msg,
                            type: 'error'
                        })
                        if (data.data.code === '20122') {
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
            start(id, tid) {
                this.$router.push({name: 'startorder', params: {orderid:id,taskid:tid}})
            },
            confirm(id) {
                API.sellerConfirmOrder(id).then((data) => {
                    if (data.succ) {
                        this.$message({
                            showClose: true,
                            message: '审核成功',
                            type: 'success'
                        })
                        this.getList();
                    } else {
                        this.$message({
                            showClose: true,
                            message: data.msg,
                            type: 'error'
                        })
                        if (data.data.code === '20122') {
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
            recept(id) {
                API.buyerConfirmOrder(id).then((data) => {
                    if (data.succ) {
                        this.$message({
                            showClose: true,
                            message: '确认成功',
                            type: 'success'
                        })
                        this.getList();
                    } else {
                        this.$message({
                            showClose: true,
                            message: data.msg,
                            type: 'error'
                        })
                        if (data.data.code === '20122') {
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
            orderDone(id) {
                API.revert(id).then((data) => {
                    if (data.succ) {
                        this.$message({
                            showClose: true,
                            message: '返款成功',
                            type: 'success'
                        })
                        this.getList();
                    } else {
                        this.$message({
                            showClose: true,
                            message: data.msg,
                            type: 'error'
                        })
                        if (data.data.code === '20122') {
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
            freeze(id) {
                API.freeze(id).then((data) => {
                    if (data.succ) {
                        this.$message({
                            showClose: true,
                            message: '冻结成功',
                            type: 'success'
                        })
                        this.getList();
                    } else {
                        this.$message({
                            showClose: true,
                            message: data.msg,
                            type: 'error'
                        })
                        if (data.data.code === '20122') {
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
            delorder(id) {
                API.delorder(id).then((data) => {
                    if (data.succ) {
                        this.$message({
                            showClose: true,
                            message: '删除成功',
                            type: 'success'
                        })
                        this.getList();
                    } else {
                        this.$message({
                            showClose: true,
                            message: data.msg,
                            type: 'error'
                        })
                        if (data.data.code === '20122') {
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
            }
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