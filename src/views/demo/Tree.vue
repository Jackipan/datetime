<template>
  <el-row :gutter="24">
    <el-col class="left-col" :span="12">
      <div class="treeOrgation">
        <pan-tree :model="testdata" />
      </div>
    </el-col>
    <el-col :span="11">
      <vue2-org-tree
        :data="data"
        @on-node-click="onNodeMouseClick"
      >
      </vue2-org-tree>

      <el-input v-model="input1" :clearable=clearable></el-input>
      <bus />
    </el-col>
  </el-row>
</template>

<script>
import { bus } from '../../main';
import Bus from '../components/Bus';
import PanTree from '@/components/PanTree/index.vue'
export default {
  components: {
    PanTree,
    Bus
  },
  data() {
    return {
      testdata: [
        {
          id: 1,
          name: '一级菜单',
          children: [
            {
              name: '二级菜单',
              children: [
                {
                  name: '三级菜单',
                },
                {
                  name: '三级菜单',
                },
              ],
            },
            {
              name: '二级菜单',
              children: [
                {
                  name: '三级菜单',
                  children: [
                    {
                      name: '四级菜单',
                    },
                    {
                      name: '四级菜单',
                    },
                    {
                      name: '四级菜单',
                    },
                  ],
                },
                {
                  name: '三级菜单',
                  children: [
                    {
                      name: '四级菜单',
                    },
                  ],
                },
              ],
            },
            {
              name: '二级菜单',
              children: [
                {
                  name: '三级菜单',
                },
                {
                  name: '三级菜单',
                },
              ],
            },
          ],
        },
      ],
      data: {
        id: 1,
        name: '科运',
        enabled: true,
        pid: 0,
        children: [
          {
            id: 7,
            name: '研发部',
            enabled: true,
            pid: 1,
            createTime: 1553511890000,
            label: '研发部',
          },
          {
            id: 17,
            name: '测试部门',
            enabled: true,
            pid: 1,
            createTime: 1596761442000,
            label: '测试部门',
          },
        ],
        createTime: 1553505245000,
        label: '科运',
      },
      bus: '',
      input1: 5,
      clearable: true
    }
  },
  created() {
    // console.log('PanTree', PanTree)
    bus.$on('listeninput', (val)=>{
      this.input1 = val
    })
  },
  methods: {
    onNodeMouseClick(e, data) {
      this.$notify({
        title: data.name,
        type: 'success',
        duration: 1000
      })
      // console.log('CLICK', data)
    },
  },
}
</script>

<style>
.treeOrgation {
  text-align: left;
}
.right-col {
  outline: 1px solid sienna;
  height: 500px;
}
.tree {
  width: 200px;
  height: 200px;
}
</style>
