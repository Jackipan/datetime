<template>
  <div>
    <div class="query">
      <el-form :inline="true" :model="searchForm" class="form-inline">
        <el-form-item label="凭证编号">
          <el-autocomplete
            v-model="searchForm.pzbh"
            placeholder="请输入凭证编号"
            :clearable="true"
            :fetch-suggestions="getOption"
            :trigger-on-focus="false"
            @select="handleSelect"
          ></el-autocomplete>
        </el-form-item>
      </el-form>
      <el-button class="clear" @click="getByPzbh">测试查询接口</el-button>
      <div class="curd">
        <el-button class="add-btn" type="success" @click="dialogVisible = true">添加</el-button>
      </div>
    </div>
    <el-dialog title="添加醉驾信息" :visible.sync="dialogVisible">
      <el-form :model="addForm" :label-width="formLabelWidth">
        <el-row>
          <el-col :span="12">
            <el-form-item label="凭证编号">
              <el-input v-model="addForm.pzbh"></el-input>
            </el-form-item>
            <el-form-item label="违法时间">
              <el-input v-model="addForm.wfsj"></el-input>
            </el-form-item>
            <el-form-item label="发现机关">
              <el-input v-model="addForm.fxjg"></el-input>
            </el-form-item>
            <el-form-item label="执勤民警">
              <el-input v-model="addForm.zqmj"></el-input>
            </el-form-item>
            <el-form-item label="案件来源">
              <el-input v-model="addForm.ajly"></el-input>
            </el-form-item>
            <el-form-item label="是否立案">
              <el-input v-model="addForm.sfla"></el-input>
            </el-form-item>
            <el-form-item label="刑事立案日期">
              <el-input v-model="addForm.xslarq"></el-input>
            </el-form-item>
            <el-form-item label="不立案原因">
              <el-input v-model="addForm.blayy"></el-input>
            </el-form-item>
            <el-form-item label="侦办情况">
              <el-input v-model="addForm.zczt"></el-input>
            </el-form-item>
            <el-form-item label="撤销原因">
              <el-input v-model="addForm.cxyy"></el-input>
            </el-form-item>
            <el-form-item label="退补原因">
              <el-input v-model="addForm.tbyy"></el-input>
            </el-form-item>
            <el-form-item label="是否拘传">
              <el-input v-model="addForm.sfjc"></el-input>
            </el-form-item>
            <el-form-item label="拘传到案日期">
              <el-input v-model="addForm.jcdarq"></el-input>
            </el-form-item>
            <el-form-item label="是否拘留">
              <el-input v-model="addForm.sfjl"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="拘留日期">
              <el-input v-model="addForm.jlrq"></el-input>
            </el-form-item>
            <el-form-item label="是否取保候审">
              <el-input v-model="addForm.sfqbhs"></el-input>
            </el-form-item>
            <el-form-item label="取保候审日期">
              <el-input v-model="addForm.qbhsrq"></el-input>
            </el-form-item>
            <el-form-item label="是否监视居住">
              <el-input v-model="addForm.sfjsjz"></el-input>
            </el-form-item>
            <el-form-item label="监视居住日期">
              <el-input v-model="addForm.jsjzrq"></el-input>
            </el-form-item>
            <el-form-item label="是否逮捕">
              <el-input v-model="addForm.sfdb"></el-input>
            </el-form-item>
            <el-form-item label="逮捕日期">
              <el-input v-model="addForm.dbrq"></el-input>
            </el-form-item>
            <el-form-item label="不批准原因">
              <el-input v-model="addForm.bpbyy"></el-input>
            </el-form-item>
            <el-form-item label="判决结果代码">
              <el-input v-model="addForm.pjjgcode"></el-input>
            </el-form-item>
            <el-form-item label="判决结果描述">
              <el-input v-model="addForm.pjjg"></el-input>
            </el-form-item>
            <el-form-item label="判决书编号">
              <el-input v-model="addForm.pjsbh"></el-input>
            </el-form-item>
            <el-form-item label="判刑月数">
              <el-input v-model="addForm.pxys"></el-input>
            </el-form-item>
            <el-form-item label="判决时间">
              <el-input v-model="addForm.pjsj"></el-input>
            </el-form-item>
            <el-form-item label="备注">
              <el-input v-model="addForm.bz"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="handleAdd">确 定</el-button>
      </div>
    </el-dialog>
    <el-table :data="tableData" :empty-text="emptyText" width="100%">
      <el-table-column type="index" width="50"></el-table-column>
      <!-- <el-table-column type="expand">
        <template slot-scope="props">
          <el-form>
            <el-form-item label="凭证编号">
              <span>{{ props.row.pzbh }}</span>
            </el-form-item>
            <el-form-item label="违法时间">
              <span>{{ props.row.wfsj }}</span>
            </el-form-item>
            <el-form-item label="发现机关">
              <span>{{ props.row.fxjg }}</span>
            </el-form-item>
            <el-form-item label="执勤民警">
              <span>{{ props.row.zqmj }}</span>
            </el-form-item>
            <el-form-item label="案件来源">
              <span>{{ props.row.ajly }}</span>
            </el-form-item>
            <el-form-item label="是否立案">
              <span>{{ props.row.sfla }}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column> -->
      <el-table-column
        prop="pzbh"
        label="凭证编号"
        width="180px"
      ></el-table-column>
      <el-table-column
        prop="wfsj"
        label="违法时间"
        width="180px"
      ></el-table-column>
      <el-table-column
        prop="fxjg"
        label="发现机关"
        width="180px"
      ></el-table-column>
      <el-table-column
        prop="zqmj"
        label="执勤民警"
        width="180px"
      ></el-table-column>
      <el-table-column label="案件来源" width="180px">
        <template slot-scope="props">
          <div>
            {{ ajly[props.row.ajly] }}
          </div>
        </template>
      </el-table-column>
      <el-table-column label="是否立案" width="180px">
        <template slot-scope="props">
          <el-tag>{{ sfla[props.row.sfla] }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="xslarq" label="刑事立案日期" width="180px">
      </el-table-column>
      <el-table-column
        prop="blayy"
        label="不立案原因"
        width="180px"
      ></el-table-column>
    </el-table>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      tableData: [],
      emptyText: '无数据',
      searchForm: {
        pzbh: '',
      },
      easyResults: [],
      dialogVisible: false,
      addForm: {
        id: null,
        pzbh: '',
        wfsj: '',
        fxjg: '',
        zqmj: '',
        ajly: '',
        sfla: null,
        xslarq: null,
        blayy: null,
        zczt: null,
        cxyy: null,
        tbyy: null,
        sfjc: null,
        jcdarq: null,
        sfjl: null,
        jlrq: null,
        sfqbhs: null,
        qbhsrq: null,
        sfjsjz: null,
        jsjzrq: null,
        sfdb: null,
        dbrq: null,
        bpbyy: null,
        pjjgcode: null,
        pjjg: null,
        pjsbh: null,
        pxys: null,
        pjsj: null,
        bz: null,
      },
      formLabelWidth: '120px',
      // 案件来源
      ajly: {
        1: '现场查处',
        2: '事故写入',
        3: '群众举报',
        4: '其他部门移交',
        5: '其他',
      },
      // 是否立案
      sfla: {
        1: '立案',
        2: '不立案',
      },
      // 侦办情况
      zczt: {
        1: '正在侦查',
        2: '侦查终结撤销案件',
        3: '侦查终结移送检察院',
        4: '检察院退补',
      },
      // 是否拘传
      sfjc: {
        1: '拘传',
        2: '不拘传',
      },
      // 是否拘留
      sfjl: {
        1: '拘留',
        2: '不拘留',
      },
      // 是否取保候审
      sfqbhs: {
        1: '是',
        2: '否',
        3: '解除',
        4: '在逃',
      },
      // 是否监视居住
      sfjsjz: {
        1: '是',
        2: '否',
        3: '解除',
      },
      // 是否逮捕
      sfdb: {
        1: '是',
        2: '否',
        3: '不批准',
        4: '在逃',
      },
      // 判决结果代码
      pjjgcode: {
        1: '检察院未起诉',
        2: '法院未认定犯罪',
        3: '法院免于刑事处罚',
        4: '缓刑',
        5: '实刑',
      },
    }
  },
  created() {
    this.getList()

    // this.getOptionPzbh()
  },
  methods: {
    getOption(queryString, cb) {
      var easyResults = this.easyResults
      var results = queryString
        ? easyResults.filter(this.createFilter(queryString))
        : easyResults
      console.log('result in getoption: ', results)
      cb(results)
    },
    createFilter(queryString) {
      return (easyResult) => {
        console.log(easyResult)
        return (
          easyResult.toLowerCase().indexOf(queryString.toLowerCase()) === 0
        )
      }
    },
    // getOptionPzbh() {
    //   axios.get('/user/easy/' + this.searchForm.pzbh).then((response) => {
    //     console.log(response.data)
    //     this.easyResult = response.data.pzbh
    //     // console.log(this.easyResult);
    //   })
    // },
    handleSelect(item) {
      console.log(item)
    },
    getList() {
      axios.get('/user').then((response) => {
        console.log('getList: ', response.data)
        this.tableData = response.data
        // this.easyResults = response.data
        for (let i = 0; i < response.data.length; i++) {
          this.easyResults.push(response.data[i].pzbh)
        }
        console.log('this.easyResult', this.easyResults);

        // console.log(' created list', this.easyResults)
      })
    },
    getByPzbh() {
      axios.get('/user/' + this.searchForm.pzbh).then((response) => {
        console.log(response.data)
        this.tableData = response.data
      })
    },
    handleAdd() {
      console.log(this.addForm) // 发送请求
      axios
        .post('/user', this.addForm)
        .then((response) => {
          console.log(response)
          // this.dialogVisible = false
          // this.addForm = {}
        })
        .catch((err) => {
          console.log(err)
        })
    },
  },
}
</script>

<style>
.add-btn{
  background-color: #42b983;
}
.query {
  padding-top: 10px;
  text-align: left;
  margin-left: 60px;
}
.form-inline {
  display: inline;
}
.clear {
  margin-left: 10px;
  clear: both;
}
.curd {
  display: inline;
  margin-left: 20px;
}
</style>
