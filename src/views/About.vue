<template>
  <div class="date-info" :style="styleObj">
    <div class="date-info__left">{{ time }}</div>
    <div class="date-info__right">
      <div>{{ date }}</div>
      <div>{{ day }}</div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  props: {
    styleObj: {
      required: false,
      type: Object,
    },
  },
  data() {
    return {
      time: '',
      date: '',
      day: '',
      timeInterval: null,
    }
  },
  created() {
    const momentNow = moment()
    this.time = momentNow.format('HH:mm:ss')
    this.date = momentNow.format('YYYY-MM-DD')
    const dayNameMapping = [
      '星期一',
      '星期二',
      '星期三',
      '星期四',
      '星期五',
      '星期六',
      '星期日',
    ]
    console.log('dsadas', momentNow.format('e'))
    this.day = dayNameMapping[momentNow.format('e')]
    this.updateTime()
  },
  methods: {
    updateTime() {
      const _this = this
      this.timeInterval = setInterval(function() {
        _this.time = moment().format('HH:mm:ss')
      }, 1000)
    },
  },
}
</script>

<style lang="scss">
.date-info {
  // float: right;
  padding-top: 30px;
  padding-right: 30px;
  & > * {
    display: inline-block;
    vertical-align: middle;
  }
  .date-info__left {
    font-size: 64px;
    margin-right: 5px;
  }
  .date-info__right {
    font-size: 20px;
    line-height: 1.5em;
  }
}
</style>
