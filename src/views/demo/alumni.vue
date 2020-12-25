<template>
  <div class="app-container">
    {{$route}}
    <el-button @click="getByName">by name</el-button>
    <div>
      <el-table :data="tabledata">
        <el-table-column align="center" label="序号">
          <template slot-scope="scope">{{
            (query.page - 1) * query.pagesize + scope.$index + 1
          }}</template>
        </el-table-column>
        <el-table-column prop="id" label="id" width="180"> </el-table-column>
        <el-table-column prop="donate_id" label="捐献id" width="180">
        </el-table-column>
        <el-table-column prop="total" label="总金额" width="180">
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="180">
        </el-table-column>
        <el-table-column prop="mobile" label="电话" width="180">
        </el-table-column>
        <el-table-column prop="created_at" label="捐献时间" width="180">
        </el-table-column>
        <el-table-column prop="donate_title" label="title"></el-table-column>
      </el-table>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="query.currentPage"
        :page-sizes="[20, 120, 300, 600]"
        :page-size="query.pagesize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
const url = 'http://xymanage.alumni.stdu.edu.cn/api/home/article/donate_record'
export default {
  data() {
    return {
      tabledata: [],
      total: 0,
      query: {
        page: 1,
        pagesize: 20,
      },
    }
  },
  created() {
    this.getData()
  },
  methods: {
    getByName() {
      console.log('by name')
      axios
        .get(url, {
          params: {
            mobile: '13503185932',
          },
        })
        .then((res) => {
          console.log(res.data.data)
          // this.total = res.data.data.total
          // this.tabledata = res.data.data.data
        })
        .catch((err) => {
          console.log(err)
        })
    },
    getData() {
      axios
        .get(url, {
          params: this.query,
        })
        .then((res) => {
          console.log(res.data.data)
          this.total = res.data.data.total
          this.tabledata = res.data.data.data
        })
        .catch((err) => {
          console.log(err)
        })
    },
    handleSizeChange(val) {
      this.query.pagesize = val
      this.getData()
    },
    handleCurrentChange(val) {
      this.query.page = val
      this.getData()
    },
  },
}
</script>

<style></style>
