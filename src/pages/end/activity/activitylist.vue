<template>
	<div>
		<el-form ref="form" label-width="80px">

			<el-form-item   label="选择店铺" prop="store_id">
			<el-select v-model="store_id" @change="changeStore" placeholder="请选商品店铺">
				<el-option v-for="item in storeList" :label="item.store_name" :value="item.id" :key="item.id"></el-option>
			</el-select>
			</el-form-item>

			
			<el-form-item label="活动商品" prop="goods_id">
				<el-select v-model="goods_id" value-key="id" placeholder="请选择">
				<el-option
						v-for="item in goods_List"
						:key="item.id"
						:label="item.goods_name"
						:value="item.id">
				</el-option>
				</el-select>
			</el-form-item>

			<el-form-item  label="进店方式">
				<el-select v-model="platform">
					<el-option label="电脑" value="1"></el-option>
					<el-option label="手机" value="2"></el-option>
				</el-select>
			</el-form-item>
			<el-form-item  label="活动状态">
				<el-select v-model="task_status">
					<el-option label="待审核" value="1"></el-option>
					<el-option label="待开始" value="2"></el-option>
					<el-option label="待确认订单" value="3"></el-option>
					<el-option label="待收货" value="4"></el-option>
					<el-option label="待返款" value="5"></el-option>
					<el-option label="已完成" value="6"></el-option>
					<el-option label="已关闭" value="6"></el-option>
					<el-option label="已冻结" value="6"></el-option>
				</el-select>
			</el-form-item>
			<el-form-item  label="商品名称">
				<el-input v-model="goods_name"></el-input>
			</el-form-item>
			<el-form-item>
				<el-button type="primary" @click="onSubmit">搜索</el-button>
			</el-form-item>
		</el-form>


		<el-table :data="taskList" stripe style="width: 100%">
			<el-table-column prop="id" label="ID" width="50"></el-table-column>
			<el-table-column prop="task_name" label="活动名称" width="100"></el-table-column>

			<el-table-column  label="申请方式" width="150">
				<template slot-scope="scope">
					<div class="actitem"><span>进店方式</span>:{{scope.row.platform}}</div>
					<div class="actitem"><span>关键字</span>:{{scope.row.goods_keyword}}</div>
				</template>
			</el-table-column>


			<el-table-column  label="商品详情" width="180">
				<template slot-scope="scope">
					<div class="actitem"><span>商品名称</span>:{{scope.row.goods_name}}</div>
					<div class="actitem"><span>商品价格</span>:{{scope.row.goods_price/100}}元</div>
					<img style="height: 50px;width: 50px;" :src="scope.row.goods_image">
				</template>
			</el-table-column>
			<el-table-column  label="活动份数" width="100">
				<template slot-scope="scope">
					<div class="actitem"><span>总份数</span>:{{scope.row.total_order_number}}份</div>
					<div class="actitem"><span>进行中</span>:{{scope.row.doing_order_number}}份</div>
					<div class="actitem"><span>已完成</span>:{{scope.row.finished_order_number}}份</div>
					<div class="actitem"><span>待开始</span>:{{scope.row.waiting_order_number}}份</div>
				</template>
			</el-table-column>
			<el-table-column prop="task_status" label="任务状态"></el-table-column>
			<el-table-column label="创建时间">
				<template slot-scope="scope">
					<span>{{scope.row.created_at | time}}</span>
				</template>
			</el-table-column>
			<el-table-column label="操作">
				<template slot-scope="scope">
					<el-button type="text" size="small" @click="delData(scope.row.id)">关闭</el-button>
					<!-- <el-button type="text" size="small" @click="edit(scope.row.id)">编辑</el-button> -->
					<el-button type="text" size="small" @click="audit(scope.row.id)">审核</el-button>
					<el-button type="text" size="small" @click="createOrder(scope.row.id)">派发</el-button>
					<!-- <el-button type="text" size="small" @click="edit(scope.row.id)">编辑</el-button> -->
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
    export default {
        data() {
            return {
               
                store_id: '',
                goods_id: '',
                platform: '',
                task_status: '',
                goods_name: '',
                currentPage:1,
				total: 0,
                storeList:[],
                taskList:[],
                goods_List: []
            }
        },
        created() {
            // 页面加载的时候调用getlist方法获取列表数据
            this.getStoreList();
            this.getTaskList();
        },
        methods: {
        	changeStore(){
        		let postBody= {
					store_id: this.store_id,
				}

        		API.goodslist(postBody).then((data) => {
					if (data.succ) {
						console.log(data.data);
						this.goods_List = data.data.data;
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

			getTaskList() {
				let postBody= {
					store_id: this.store_id,
					goods_id: this.goods_id,
					goods_name: this.goods_name,
					task_status: this.task_status,
					platform: this.platform,
					page: this.currentPage
				}

				API.mytasklist(postBody).then((data) => {
					if (data.succ) {
						console.log(data.data);
						this.taskList = data.data.data;
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
				this.getTaskList();
			},
			edit(id) {
				this.$router.push({name: 'editact', params: {activityid: id}})
			},
			audit(id) {
				this.$router.push({name: 'orderlist',params: {activityid: id}})
			},
			createOrder(id) {
				this.$router.push({name: 'orderlist',params: {activityid: id}})
			},

			delData(id) {
				API.deltask(id).then((data) => {
					if (data.succ) {
						this.getTaskList();
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
			onSubmit() {
                this.currentPage = 1;
                this.getTaskList();
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
	.shenhe{
		font-size: 12px;
		color: #66b1ff;
	}
	.f_left{
		width: 280px;
		float: left;
	}

</style>