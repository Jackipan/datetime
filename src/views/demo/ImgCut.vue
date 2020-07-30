<template>
  <div class="app-container">
    <!-- <el-form
      :model="ruleForm"
      status-icon
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="密码" prop="pass">
        <el-input
          type="password"
          v-model="ruleForm.pass"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="checkPass">
        <el-input
          type="password"
          v-model="ruleForm.checkPass"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item label="年龄" prop="age">
        <el-input v-model.number="ruleForm.age"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')"
          >提交</el-button
        >
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form> -->
    <el-tree
      :data="data"
      node-key="id"
      default-expand-all
      @node-drag-start="handleDragStart"
      @node-drag-enter="handleDragEnter"
      @node-drag-leave="handleDragLeave"
      @node-drag-over="handleDragOver"
      @node-drag-end="handleDragEnd"
      @node-drop="handleDrop"
      draggable
      :allow-drop="allowDrop"
      :allow-drag="allowDrag"
    >
    </el-tree>
  </div>
</template>

// export default {
//   data() {
//     var validatePass = (rule, value, callback) => {
//       if (value) {
//         const regex = new RegExp('(?=.*[0-9])(?=.*[a-zA-Z]).{8,30}')
//         if (!regex.test(value)) {
//           callback(new Error('密码必须同时包括数字和字母'))
//         } else {
//           callback()
//         }
//       } else {
//         callback(new Error('请再次输入密码'))
//       }
//     }
//     var validatePass2 = (rule, value, callback) => {
//       if (value === '') {
//         callback(new Error('请再次输入密码'))
//       } else if (value !== this.ruleForm.pass) {
//         callback(new Error('两次输入密码不一致!'))
//       } else {
//         callback()
//       }
//     }
//     return {
//       ruleForm: {
//         pass: '',
//         checkPass: '',
//         age: '',
//       },
//       rules: {
//         pass: [{ validator: validatePass, trigger: 'blur' }],
//         checkPass: [{ validator: validatePass2, trigger: 'blur' }],
//       },
//     }
//   },
//   methods: {
//     submitForm(formName) {
//       this.$refs[formName].validate((valid) => {
//         if (valid) {
//           alert('submit!')
//         } else {
//           console.log('error submit!!')
//           return false
//         }
//       })
//     },
//     resetForm(formName) {
//       this.$refs[formName].resetFields()
//     },
//   },
// }
//
/* // .app-container {
//   margin: 0 auto;
//   width: 40%;
// }
// .editor{
//   text-align: left;
// } */

<script>
export default {
  data() {
    return {
      data: [
        {
          id: 1,
          label: '一级 1',
          children: [
            {
              id: 4,
              label: '二级 1-1',
              children: [
                {
                  id: 9,
                  label: '三级 1-1-1',
                },
                {
                  id: 10,
                  label: '三级 1-1-2',
                },
              ],
            },
          ],
        },
        {
          id: 2,
          label: '一级 2',
          children: [
            {
              id: 5,
              label: '二级 2-1',
            },
            {
              id: 6,
              label: '二级 2-2',
            },
          ],
        },
        {
          id: 3,
          label: '一级 3',
          children: [
            {
              id: 7,
              label: '二级 3-1',
            },
            {
              id: 8,
              label: '二级 3-2',
              children: [
                {
                  id: 11,
                  label: '三级 3-2-1',
                },
                {
                  id: 12,
                  label: '三级 3-2-2',
                },
                {
                  id: 13,
                  label: '三级 3-2-3',
                },
              ],
            },
          ],
        },
      ],
      defaultProps: {
        children: 'children',
        label: 'label',
      },
    }
  },
  methods: {
    handleDragStart(node) {
      console.log('drag start', node)
    },
    handleDragEnter(draggingNode, dropNode) {
      console.log('tree drag enter: ', dropNode.label)
    },
    handleDragLeave(draggingNode, dropNode) {
      console.log('tree drag leave: ', dropNode.label)
    },
    handleDragOver(draggingNode, dropNode) {
      console.log('tree drag over: ', dropNode.label)
    },
    handleDragEnd(draggingNode, dropNode, dropType) {
      console.log('tree drag end: ', dropNode && dropNode.label, dropType)
    },
    handleDrop(draggingNode, dropNode, dropType) {
      console.log('tree drop: ', dropNode.label, dropType)
    },
    allowDrop(draggingNode, dropNode, type) {
      if (dropNode.data.label === '二级 3-1') {
        return type !== 'inner'
      } else {
        return true
      }
    },
    allowDrag(draggingNode) {
      return draggingNode.data.label.indexOf('三级 3-2-2') === -1
    },
  },
}
</script>