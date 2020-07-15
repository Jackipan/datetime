<template>
  <div>
    
    <el-button @click="getByPzbh">测试查询接口</el-button>
    <el-table :data="tableData">
      <el-table-column type="index" width="50"></el-table-column>
      <el-table-column prop="pzbh" label="凭证编号" width="180px"></el-table-column>
      <el-table-column prop="wfsj" label="违法时间" width="180px"></el-table-column>
      <el-table-column prop="fxjg" label="发现机关" width="180px"></el-table-column>
      <el-table-column prop="zqmj" label="执勤民警" width="180px"></el-table-column>
      <el-table-column prop="ajly" label="案件来源" width="180px"></el-table-column>
      <el-table-column prop="sfla" label="是否立案" width="180px"></el-table-column>
      <el-table-column prop="xslarq" label="刑事立案日期" width="180px"></el-table-column>
      <el-table-column prop="blayy" label="不立案原因" width="180px"></el-table-column>
      <el-table-column prop="zczt" label="侦办情况" width="180px"></el-table-column>
      <el-table-column prop="cxyy" label="撤销原因" width="180px"></el-table-column>
      <el-table-column prop="tbyy" label="退补原因" width="180px"></el-table-column>
    </el-table>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      tableData: [],
      searchForm: {
        pzbh: ''
      }
    }
  },
  created() {
    this.getList();
  },
  methods: {
    getList(){
      axios.get('/user')
        .then(response=>{
          console.log(response.data);
          this.tableData = response.data
        })
    },
    getByPzbh(){
      axios.get('/user/149874341321')
        .then((response) => {
          console.log(response.data);
          this.tableData = response.data
        })
    }
  },
}
</script>

<style>

</style>