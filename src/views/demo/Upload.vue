<template>
  <div class="app-container">
    <!-- <el-badge type="primary" :value="count">
      <el-button size="small">数量</el-button>
    </el-badge> -->
    <el-button
      style="margin-left: 10px;"
      size="small"
      type="success"
      @click="submitUpload"
      >确认上传</el-button
    >
    <el-upload
      class="avatar-upload"
      ref="upload"
      drag
      name="uploadFile"
      action="/upload/"
      multiple
      :file-list="fileList"
      :on-preview="handlePreview"
      :on-remove="handleRemove"
      :auto-upload="false"
      :before-upload="before"
    >
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
      <div class="el-upload__tip" slot="tip">jpg/png</div>
    </el-upload>
  </div>
</template>

<script>
// import Axios from 'axios'
export default {
  data() {
    return {
      fileList: [],
    }
  },
  computed: {
    // count() {
    //   console.log(this.fileList)
    //   return this.fileList.length
    // },
  },
  methods: {
    before() {
      console.log('action')
      // Axios.post("http://192.168.1.226:8080/upload/", )
    },
    submitUpload() {
      this.$refs.upload.submit()
    },
    handleRemove(file, fileList) {
      console.log('file', file, 'fileList', fileList)
    },
    handlePreview(file) {
      console.log(file)
    },
  },
}
</script>

<style scoped>
.app-container {
  width: 360px;
  margin: 0 auto;
}
</style>
