<template>
  <div>
    
    <el-button @click="getByPzbh">测试查询接口</el-button>
    <el-table :data="tableData">
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