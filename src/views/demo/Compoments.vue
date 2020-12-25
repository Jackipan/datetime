<template>
  <div class="all">
    <user-card
      class="user-card"
      v-for="userList in userLists"
      v-bind:key="userList.index"
      v-bind:userList="userList"
      v-on:showMore="showMore"
    ></user-card>
    <el-dialog
      class="user-desc-dialog"
      :title="dialog.title"
      :visible.sync="dialog.visible"
      :width="dialog.width"
      :center="true"
      :modal="true"
    >
      <div class="user-desc-item avatar-item">
        <img :src="userDetailsList.avatar" />
      </div>
      <div class="user-desc-item">
        <span class="name-item">{{ userDetailsList.name }}</span>
      </div>
      <div class="user-desc-item">
        <span class="tel-item">{{ userDetailsList.tel }}</span>
        <span class="unit-item">{{ userDetailsList.unit }}</span>
      </div>
      <div class="user-desc-item">
        <span class="city-item">{{ userDetailsList.city }}</span>
        <span class="gender-item">{{ userDetailsList.gender }}</span>
      </div>
      <div class="user-desc-item">
        <span class="desc-item">{{ userDetailsList.desc }}</span>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialog.visible = false">取 消</el-button>
        <el-button type="primary" @click="dialog.visible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import UserCard from '@/components/UserCard'

export default {
  components: { UserCard },
  data() {
    return {
      userLists: [
        {
          index: 1,
          avatar: 'https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2105658516,708055147&fm=26&gp=0.jpg',
          name: '李白',
          tel: '15265896523',
          unit: '福田区交警支队',
        },
        {
          index: 2,
          avatar: 'https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2282652345,4057723797&fm=26&gp=0.jpg',
          name: '妲己',
          tel: '18354896526',
          unit: '福田区交警支队',
        },
        {
          index: 3,
          avatar: 'https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2911312608,3746394374&fm=26&gp=0.jpg',
          name: '明世隐',
          tel: '17589654256',
          unit: '福田区交警支队',
        },
        {
          index: 4,
          avatar: 'https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2326024529,3323604973&fm=26&gp=0.jpg',
          name: '诸葛亮',
          tel: '13958462563',
          unit: '福田区交警支队',
        },
        {
          index: 5,
          avatar: 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=550554809,3814987846&fm=115&gp=0.jpg',
          name: '王大锤',
          tel: '15478596523',
          unit: '福田区交警支队',
        },
        {
          index: 6,
          avatar: 'https://alipic.lanhuapp.com/psfd3fc32f78d4c330-6272-41bc-9ae4-651f08da0def',
          name: '大妹子',
          tel: '15478596523',
          unit: '福田区交警支队',
        },
        // 重复
        {
          index: 7,
          avatar: 'https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2105658516,708055147&fm=26&gp=0.jpg',
          name: '孙悟空',
          tel: '15265896523',
          unit: '福田区交警支队',
        },
        {
          index: 8,
          avatar: 'https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2282652345,4057723797&fm=26&gp=0.jpg',
          name: '瑶',
          tel: '18354896526',
          unit: '福田区交警支队',
        },
        {
          index: 9,
          avatar: 'https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2911312608,3746394374&fm=26&gp=0.jpg',
          name: '孙尚香',
          tel: '17589654256',
          unit: '福田区交警支队',
        },
        {
          index: 10,
          avatar: 'https://c-ssl.duitang.com/uploads/item/202007/15/20200715135554_ewonc.thumb.1000_0.jpeg',
          name: '貂蝉',
          tel: '13958462563',
          unit: '福田区交警支队',
        },
      ],
      userDetailsList: {
        index: 1,
        avatar: 'https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2105658516,708055147&fm=26&gp=0.jpg',
        name: '李白',
        tel: '15265896523',
        unit: '福田区交警支队',
        city: '湖南',
        gender: '女',
        desc:
          '我是阳光开朗的女汉子，我是阳光开朗的女汉子，曾获个人二等功，曾获个人二等功，曾获个人二等功，曾获个人二等功，曾获个人二等功',
      },
      dialog: {
        visible: false,
        title: '警员详情',
        width: '25%'
      },
    }
  },
  methods: {
    showMore: function(index, name) {
      console.log(index, name)
      this.dialog.visible = true
    },
  },
}
</script>
<style lang="scss">
.all {
  display: flex;
  justify-content: space-around;
  align-content: flex-start;
  flex-wrap: wrap;
  padding: 10px 0 0 0;
  height: calc(100vh - 220px);
  overflow-y: auto;
}
.user-card {
  color: chocolate;
  background-color: rgba(255, 255, 255, 0.222);
  -webkit-transition: all 0.18s ease-in-out;
  transition: all 0.18s ease-in-out;
}
.user-card:hover {
  -webkit-transform: translateY(-3px);
  -ms-transform: translateY(-3px);
  transform: translateY(-3px);
  -webkit-box-shadow: 0 0 12px #0e34f0;
  box-shadow: 0 0 12px #0e34f0;
  -webkit-transition: all 0.22s ease-in-out;
  transition: all 0.22s ease-in-out;
}
.user-desc-dialog {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  .el-dialog{
    min-width: 300px;
  }
  .avatar-item {
    position: relative;
    width: 100px;
    height: 100px;
    margin: 0 auto;
    img {
      width: 100%;
      height: 100%;
      border-radius: 50px;
    }
  }
  .avatar-item::after {
    content: '男';
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20px;
    height: 20px;
    border: 3px solid white;
    border-radius: 20px;
    position: absolute;
    right: 0;
    bottom: 0;
    background-color: #ff6699;
  }
  .user-desc-item {
    display: block;
    color: #ababb3;
    line-height: 24px;
    margin-top: 10px;
    text-align: center;
    .name-item{
      color: #313133;
      font-size: 18px;
    }
    .desc-item {
      display: block;
      width: 60%;
      margin: 0 auto;
      text-align: left;
    }
  }
}
</style>
