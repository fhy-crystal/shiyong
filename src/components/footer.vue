<template>
	<footer class="footer_box">
		<section class="footer_top">
			<ul>
				<li>
					<img src="../assets/index/home_icon_lightning.png">
					<span><b>闪电到账</b><br><em>收货评价直接现金到账</em></span>
				</li>
				<li>
					<img src="../assets/index/home_icon_safeguard.png">
					<span><b>好货保障</b><br><em>商品平均客单价200元</em></span>
				</li>
				<li>
					<img src="../assets/index/home_icon_award.png">
					<span><b>高中奖率</b><br><em>高达平均30%中奖率</em></span>
				</li>
				<li>
					<img src="../assets/index/home_icon_spokesman.png">
					<span><b>代言人奖</b><br><em>邀请送10元现金+必中</em></span>
				</li>
			</ul>
		</section>

		<section class="about_us">
			<a href="#" target="_blank" title="About NetEase">About NetEase</a>
			 - 
			<a href="#" target="_blank" title="公司简介">公司简介</a>
			 - 
			<a href="#" target="_blank" title="联系方法">联系方法</a>
			 - 
			<a href="#" target="_blank" title="友情链接">友情链接</a>
			 - 
			<a href="#" target="_blank" title="招聘信息">招聘信息</a>
			 - 
			<a href="#" target="_blank" title="客户服务">客户服务</a>
			 - 
			<a href="#" target="_blank" title="隐私政策">隐私政策</a>
			 - 
			<a href="#" target="_blank" title="网络营销">网络营销</a>
			 - 
			<a href="#" target="_blank" title="网站地图">网站地图</a>
			 - 
			<a href="#" target="_blank" title="网易考拉海购">网易考拉海购</a>
			<br>
			<span class="license">网络文化经营许可证：浙网文[2016]0155-055号</span>
			<span class="license">增值电信业务经营许可证：浙B2-20160288</span>
			<span class="license"><a href="#" target="_blank" title="自营经营者信息">自营经营者信息</a></span>
			<br>
			<a target="_blank" href="#" class="license">
				<img src="../assets/index/f28aa8ee818a42bf832341f605eccefb.png">
			</a>
			<a target="_blank" href="#">
				<span style="margin: 0px 0px 0px 5px;">浙公网安备 33010802002216号</span>
			</a>
			<span class="license">网易公司版权所有©1997-2017</span>
			<div class="tac">
				<a href="#" target="_blank">
					<img style="height:30px; margin:5px 15px 0 0;" src="../assets/index/86998579-754f-4f2c-b800-5dae6404a1f6.png" border="0">
				</a>
				<span id="KXYZ">
					<a href="#" tabindex="-1" target="_blank" style="display:inline-block;">
						<img src="../assets/index/d720d83b55a04b6f932ea845c673c5bf.png" alt="可信网站">
					</a>
				</span>
				<a class="shield" href="#" target="_blank">
					<img src="../assets/index/d071c0de-5360-4dcb-915a-f9f9bb62a9d5.gif" alt="工商营业执照网上标识">
				</a>
			</div>
		</section>
	</footer>
</template>
<script>
	
</script>
<style lang="scss" scoped>
	@import '../../static/css/common.scss';
	.footer_box {
		min-width: 1200px;
		/*footer top*/
		.footer_top {
			margin-top: 70px;
			height: 120px;
			width: 100%;
			border-top: 1px solid #eaeaea;
			background-color: #fff;

			ul {
				margin: 0 auto;
				width: 1000px;

				li {
					padding-top: 40px;
					float: left;
					width: 25%;
					text-align: left;

					img {
						float: left;
						vertical-align: middle;
						margin-right: 15px;
					}

					span {
						float: left;

						b {
							display: inline-block;
							margin-top: 3px;
							color: $grey;
							font-size: 16px;
						}

						em {
							vertical-align: bottom;
							line-height: 18px;
							color: $light_grey;
						}
					}
				}
			}
		}

		/* about us */
		.about_us, .about_us a, .about_us a:hover {
			color: #c2c2c2;
		}
		.about_us {
			position: relative;
			padding: 20px 0;
			background-color: #333;
			line-height: 26px;
			text-align: center;
			.license {
				margin-left: 20px;
			}

			.tac {
				text-align: center;

				#KXYZ {
					img {
						margin-top: 5px;
						border-radius: 5px;
						width: 80px;
						height: 30px;
					}
				}
				.shield {
					img {
						height: 30px;
						margin: 5px 0 0 10px;
					}
				}
			}
		}
	}
</style>