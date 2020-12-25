<template>
  <div>
    <div class="user-info">
      <div class="user-avatar"
           title="username"
           alt="图片加载失败"
           :style="{'background-image':'url('+userList.avatar+')' }"></div>
      <div class="user-base-info">
        <div class="user-username">
          <span>{{userList.name}}</span>
        </div>
        <div class="user-self">
          <span class="tel">{{userList.tel}}</span>
          <span class="unit">{{userList.unit}}</span>
        </div>
      </div>
    </div>
    <div class="oprt">
      <a class="oprt-item" @click="showMore">警员详情</a>
      <a class="oprt-item" @click="showOprtRecord">操作记录</a>
      <a class="oprt-item oprt-item3" @click="showTestRecord">检测统计</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserCard',
  props: {
    userList: {
      type: Object,
      default: function () {
        return []
      }
    }
  },
  methods: {
    showMore(){
      this.$emit('showMore', this.userList.index, this.userList.name)
    },
    showOprtRecord(){
      console.log(this.userList.name, ' 的 操作记录');
    },
    showTestRecord(){
      console.log(this.userList.name, ' 的 检测统计');
    }
  },
}
</script>