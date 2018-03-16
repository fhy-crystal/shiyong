<template>
	<div>
		<el-table :data="tableData" stripe style="width: 100%">
			<el-table-column prop="bank" label="银行名称" width="180"></el-table-column>
			<el-table-column prop="bank_card" label="银行卡号" width="180"></el-table-column>
			<el-table-column prop="real_name" label="持卡人"></el-table-column>
			<el-table-column label="操作">
				<template slot-scope="scope">
					<el-button type="text" size="small" >修改</el-button>
					<el-button type="text" size="small" >删除</el-button>
				</template>
			</el-table-column>
		</el-table>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				tableData: [{
                    bank: '2016-05-02',
                    bank_card: '656496841674968',
                    real_name: '大商股份'
				 }]
			}
		}
	}
</script>
<style lang="scss" scoped>
	@import '../../../../static/css/common.scss';
</style>