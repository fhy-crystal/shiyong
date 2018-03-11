<template>
	<article class="content">
		<div class="register_center layout_1200 clearfix">
			<ul class="clearfix">
				<!--用户内容-->
				<li class="register_user fl">
					<div class="title clearfix">
						<em class="fl">用户注册</em>
						<span class="fr">已有账户，直接<router-link to="/login" class="login_btn">登录</router-link></span>
					</div>
					<span class="title_line"><i></i></span>
					<div class="descript">
						<p>社区粉丝分享模式：</p>
						<p>1、新人100%中奖！</p>
						<p>2、海量正品好货，统统免费抽奖，中奖即送！</p>
						<p>3、领奖即成代言人，分享好货送现金！</p>
					</div>
					<router-link :to="{name: 'register', params: {role: 1}}" class="register_btn"><img src="../assets/register/user.png"><span>用户注册</span></router-link>
				</li>
				<!--中间竖线-->
				<li class="mid_line fl"></li>
				<!--商家内容-->
				<li class="register_seller fl">
					<div class="title clearfix">
						<em class="fl">商家注册</em>
						<span class="fr">已有账户，直接<router-link to="/login" class="login_btn">登录</router-link></span>
					</div>
					<span class="title_line"><i></i></span>
					<div class="descript">
						<p>精细化全纬度模式：</p>
						<p>1、免费流量普遍提升300%！</p>
						<p>2、海量精准买家标签+兴趣点！</p>
						<p>3、专属计划，海量收藏加购！</p>
						<p>4、多纬度/多天数/提升UV价值！</p>
					</div>
					<router-link :to="{name: 'register', params: {role: 2}}" class="register_btn seller_btn"><img src="../assets/register/seller.png"><span>商家注册</span></router-link>
				</li>
			</ul>
		</div>

	</article>
</template>
<script>
	export default {
		data() {
			return {

			}
		}
	}
</script>
<style lang="scss" scoped>
	@import '../../static/css/common.scss';
	.content {
		padding: 60px 0;
		.register_center {
			width: 1200px;
			height: 390px;
			padding: 50px;
			background-color: white;
			border-radius: 5px;
			
			.mid_line {
				width: 1px;
				margin: 0 2.5%;
				height: 291px;
				background: url(../assets/register/mid_line.png) no-repeat;
			}

			.register_user, .register_seller {
				width: 45%;
				font-size: 14px;
				.title {
					margin-bottom: 24px;
					em {
						font-size: 18px;
						color: #333333;
					}
					span {
						color: $light_grey;
						.login_btn {
							margin-left: 5px;
							color: $main_color;
						}
					}
				}
				.title_line {
					display: block;
					width: 400px;
					height: 1px;
					background: #EAEAEA;
					position: relative;
					i {
						display: block;
						height: 1px;
						position: absolute;
						width: 72px;
						top: 0;
						left: 0;
						background-color: $main_color;
					}
				}
				.descript {
					margin-top: 25px;
					height: 155px;
					color: $light_grey;
					line-height: 24px;
					p:first-child {
						color: $grey;
					}
				}

				
			}
		}
	}
	.register_btn {
		margin: 0 0 24px 100px;
		display: block;
		width: 200px;
		height: 54px;
		line-height: 54px;
		border-radius: 27px;
		text-align: center;
		color: white;
		font-size: 18px;
		background-color: $main_color;
		img {
			vertical-align: middle;
			margin: -6px 14px 0 0;
		}
	}
</style>