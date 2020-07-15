<template>
  <div class="app-container">
    <el-dropdown>
      <span class="el-dropdown-link">test</span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>english</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    <!--工具栏-->
    <p>{{ $t('message.hello') }} {{ $t('message.world') }}</p>
    <div class="head-container">
      <!--如果想在工具栏加入更多按钮，可以使用插槽方式， slot = 'left' or 'right'-->
      <!-- <crudOperation :permission="permission" /> -->
      <!--表单组件-->
      <el-dialog :close-on-click-modal="false" width="500px">
        <el-form ref="form" :rules="rules" size="small" label-width="80px">
          <el-form-item label="验证码类型" prop="type">
            <el-radio
              v-for="item in dict.captcha_type"
              :key="item.id"
              :label="item.value"
              >{{ item.label }}
            </el-radio>
          </el-form-item>
          <el-form-item label="字体名字">
            <el-radio
              v-for="item in dict.font_name"
              :key="item.id"
              :label="item.value"
              >{{ item.label }}
            </el-radio>
          </el-form-item>
          <el-form-item label="字体风格">
            <el-radio
              v-for="item in dict.captcha_fontstyle"
              :key="item.id"
              :label="item.value"
              >{{ item.label }}
            </el-radio>
          </el-form-item>
          <el-form-item label="字体大小"> </el-form-item>
          <el-form-item label="宽度"> </el-form-item>
          <el-form-item label="高度"> </el-form-item>
          <el-form-item label="位数"> </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button type="primary">确认</el-button>
        </div>
      </el-dialog>
      <!--表格渲染-->
      <el-table ref="table" size="small" style="width: 100%;">
        <el-table-column type="selection" width="55" />
        <el-table-column prop="type" label="验证码类型">
          <template slot-scope="scope">
            {{ dict.label.captcha_type[scope.row.type] }}
          </template>
        </el-table-column>
        <el-table-column prop="fontName" label="字体名字">
          <template slot-scope="scope">
            {{ dict.label.font_name[scope.row.fontName] }}
          </template>
        </el-table-column>
        <el-table-column prop="fontStyle" label="字体风格">
          <template slot-scope="scope">
            {{ dict.label.captcha_fontstyle[scope.row.fontStyle] }}
          </template>
        </el-table-column>
        <el-table-column prop="fontSize" label="字体大小" />
        <el-table-column prop="width" label="宽度" />
        <el-table-column prop="height" label="高度" />
        <el-table-column prop="len" label="位数" />
        <el-table-column label="操作" width="150px" align="center">
          <template> </template>
        </el-table-column>
      </el-table>
      <!--分页组件-->
      <!-- <pagination /> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'Captcha',
  data() {
    return {
      dict: ['captcha_type', 'font_name', 'captcha_fontstyle'],
      permission: {
        add: ['admin', 'captcha:add'],
        edit: ['admin', 'captcha:edit'],
        del: ['admin', 'captcha:del'],
      },
      rules: {
        id: [{ required: true, message: 'id不能为空', trigger: 'blur' }],
        type: [
          { required: true, message: '验证码类型不能为空', trigger: 'blur' },
        ],
      },
    }
  },
  methods: {},
}
</script>
<style scoped>
.el-dropdown-link {
  cursor: pointer;
  color: #409eff;
}
.el-icon-arrow-down {
  font-size: 12px;
}
</style>
