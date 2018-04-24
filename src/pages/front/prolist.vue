<template>
	<div>
		<header class="logo_box">
			<div class="layout_1200 clearfix">
				<div class="logo">
					<router-link to="/index">
						<img src="../../assets/logo.png" alt="图片加载失败">
					</router-link>
				</div>
				<form class="search_bar" action="" method="">
					<input type="text" value="" name="itemName" id="search_frame" placeholder="搜一个商品，开始立即申请吧！">
					<input type="submit" id="search_btn" value="搜 索">
				</form>
			</div>
		</header>

		<!-- navigation -->
		<article class="navigation clearfix">
			<ul class="layout_1200 clearfix">
				<a href="#" class="item active white">
					<li class="padding_0_25">首页</li>
				</a>
				<a href="#" class="item white">
					<li class="padding_0_25">新人专享</li>
				</a>
				<a href="#" class="item white">
					<li class="padding_0_25">商家入驻</li>
				</a>
			</ul>
		</article>
		<!-- banner -->
		<div class="layout_1200 relative">
			<div class="carousel">
				<el-carousel height="400px">
					<el-carousel-item v-for="item in 4" :key="item">
						<h3>{{ item }}</h3>
					</el-carousel-item>
				</el-carousel>
			</div>
			<div class="notice_box">
				<div class="main_title">
					官方公告
				</div>
				<ul class="main_content">
					<li class="notice_item">
						<a href="#" class="notice_item_active" target="_blank"><i>▪</i>2017年国庆节假期安排通知</a>
					</li>
					<li class="notice_item">
						<a href="#" target="_blank"><i>▪</i>精选试用中奖秘籍</a>
					</li>
					<li class="notice_item">
						<a href="#" target="_blank"><i>▪</i>领啦试客规范</a>
					</li>
					<li class="notice_item">
						<a href="#" target="_blank"><i>▪</i>如何提高通过机会</a>
					</li>
				</ul>
				<div class="login_box">
					<router-link to="/login" class="btn login">登录</router-link>
					<router-link to="/register" class="btn resginer">注册</router-link>
				</div>
				<div class="statis_box">
					<ul class="clearfix">
						<li class="statis_item top eve">
							<p class="num">111735</p>
							<p class="sm_title">商品在线</p>
						</li>
						<li class="statis_item top">
							<p class="num">167186</p>
							<p class="sm_title">商家入驻</p>
						</li>
						<li class="statis_item eve">
							<p class="num">1012904</p>
							<p class="sm_title">活动发布</p>
						</li>
						<li class="statis_item">
							<p class="num">274567</p>
							<p class="sm_title">活跃用户</p>
						</li>
					</ul>
				</div>
			</div>
		</div>

		<!-- 商品展示 -->
		<article class="content_box layout_1200">
			<article class="content_block" id="0">新品试用</article>
			<article>
				<section class="goods_block layout_1200">
					<div class="goods_wrap clearfix">
						<div class="detail_wrap" v-for="activity in activityList">
							<a class="pic">					
								<img class="pro_img" :src='activity.goods_image' title="pro">
							</a>
							<div class="pro_info clearfix">						
								<h3 class="title">	
									<a class="title_link">{{activity.task_name}}</a>
									<a>{{activity.goods_name}}</a>	
								</h3>
								<p class="price">
									<strong><span class="symbol"><b></b>¥</span>{{activity.goods_price}}</strong>
								</p>
								<a class="cart_btn" @click="justbuy(activity.id)" title="立即购买">立即购买</a>				
							</div>
						</div>
						
					</div>
				</section>
			</article>
		</article>
	</div>
</template>
<script>
	import API from '../../utils/api'
    export default {
        data() {
            return {
                currentPage:1,
				total: 0,
                activityList:[],
            }
        },
        created() {
            // 页面加载的时候调用getlist方法获取列表数据
            this.getTaskList();
        },
        methods: {
			getTaskList() {

				API.tasklist().then((data) => {
					if (data.succ) {
						console.log(data.data.data);
						this.activityList = data.data.data;
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

			justbuy(id){
				let bodydata ={
					task_id:id
				};
				API.checkiforder(bodydata).then((data) => {
					if (data.succ) {
						API.applyactivity(bodydata).then((data) => {
							if (data.succ){
								this.$message({
									showClose: true,
									message: '申请成功',
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




			}


            
        }
    }
</script>
<style lang='scss' scoped>
	@import '../../../static/css/common.scss';
	.carousel {
		width: 1030px;
	}
	.el-carousel__item h3 {
		color: #475669;
		font-size: 14px;
		opacity: 0.75;
		line-height: 400px;
		margin: 0;
		text-align: center
	}

	.el-carousel__item:nth-child(2n) {
		background-color: #99a9bf;
	}
	
	.el-carousel__item:nth-child(2n+1) {
		background-color: #d3dce6;
	}

	/*导航条*/
	.navigation {
		position: relative;
		background-color: $main_color;
		min-width: 1200px;
		.active {
			background: $hover_color;
			border-bottom: 4px solid $active_border_color;
			box-sizing: border-box;
		}

		.item {
			display: inline-block;
			float: left;
			height: 50px;
			line-height: 50px;
			font-size: 15px;
		}
		
	}


	/*公告*/ 
	.notice_box {
		position: absolute;
		top: 0;
		right: 0;
		z-index: 50;
		width: 170px;
		height: 400px;
		background-color: #fff;
		border: 1px solid #e6e6e6;
	}
	.main_title {
		padding: 0 12px;
		height: 37px;
		line-height: 36px;
		font-weight: bold;
		color: #444;
		font-size: 14px;
	}
	.main_content {
		margin: 0 auto;
		padding: 8px 13px;
		border-bottom: 1px dashed #ebebeb;
		border-top: 1px solid #e6e6e6;
		overflow: hidden;
		box-sizing: border-box;

		.notice_item {
			display: block;
			width: 145px;
			height: 26px;
			line-height: 26px;
			font-size: 12px;
			a {
				color: $grey;
				display: block;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;

				i {
					margin-right: 5px;
					color: $grey;
				}
			}
			.notice_item_active {
				color: $main_color;
			}
		}
	}

	/* 登录 */
	.login_box {
		height: 61px;
		border-bottom: 1px dashed #ebebeb;
		.btn {
			float: left;
			width: 70px;
			height: 30px;
			line-height: 30px;
			background: $main_color url(../../assets/index/assa.png) 11px 7px no-repeat;
			color: #fff;
			font-weight: bold;
			font-size: 12px;
			text-indent: 30px;
			border-radius: 2px;
			-moz-border-radius: 2px;
			-webkit-border-radius: 2px;
			margin: 15px 0 0 10px;
		}
		.login {
			background-position: 11px 7px;
		}
		.resginer {
			background-position: -79px 7px;
		}
	}
	/* 统计 */
	.statis_box {
		.statis_item {
			display: inline-block;
			float: left;
			width: 84px;
			height: 89px;
			font-size: 14px;
			
			.num {
				margin-top: 25px;
				height: 19px;
				line-height: 19px;
				color: $main_color;
				text-align: center;
			}
			.sm_title {
				height: 19px;
				line-height: 19px;
				text-align: center;
				color: $grey;
			}
		}
		.top {
			border-bottom: 1px solid #EAEAEA;
		}
		.eve {
			border-right: 1px solid #EAEAEA;
		}
	}

	/* 商品展示 */
.content_box {
	.content_block {
		margin: 20px auto 10px;
		width: 100%;
		height: 60px;
		line-height: 60px;
		text-align: center;
		font-size: 28px;
		background-color: $main_color;
		color:#fff;
	}

	/*goods*/
	.goods_block {
		margin: 0 auto;
		padding-bottom: 17px;

		.detail_wrap {
			display: inline-block;
			width: 230px;
			margin: 0 0 5px 5px;
			padding-top: 5px;
			background: #fff;
			text-align: center;
			.pic {
				display: inline-block;
				width: 197px;
				height: 197px;
				cursor: pointer;
				.pro_img {
					width: 100%;
				}
			}

			.pro_info {
				padding: 0px 12px;
				margin-bottom: 15px;

				.title {
					margin-top: 0;
					font-size: 12px;
					height: 36px;
					line-height: 18px;
					overflow: hidden;
					text-align: left;
					a, a:hover {
						color: #555;
					}

					.title_link {
						display: block;
						white-space: nowrap;
						overflow: hidden;
						text-overflow: ellipsis;
						-o-text-overflow: ellipsis;
						font-weight: bold;
					}
				}

				.price {
					display: inline-block;
					float: left;
					line-height: 22px;
					max-height: 25px;
					overflow: hidden;

					strong {
						color: $main_color;
						font-size: 18px;

						.symbol {
							display: inline-block;
							margin-right: 1px;
							font-weight: normal;
							line-height: 12px;
							font-size: 12px;
						}
					}
				}

				.cart_btn {
					display: inline-block;
					float: right;
					padding: 0 6px;
					height: 26px;
					line-height: 26px;
					background-color: $main_color;
					color: #fff;
					text-align: center;
				}
			}
		}
	}
}
</style>