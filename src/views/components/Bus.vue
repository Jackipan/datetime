<template>
  <div class="bus">
    <p>{{ val }}</p>
    <div>
      <el-button @click="add()">+</el-button>
      <el-button @click="del()">-</el-button>
    </div>
  </div>
</template>

<script>
import { bus } from '../../main'
export default {
  data() {
    return {
      val: 0,
    }
  },
  methods: {
    add() {
      console.log('add', this.val)
      this.val++
      bus.$emit('listeninput', this.val)
    },
    del() {
      console.log('del', this.val)
      this.val--
      bus.$emit('listeninput', this.val)
    },
  },
}
</script>

<style lang="scss">
.bus {
  height: 30px;
  text-align: center;
  border: 1px solid seagreen;
}
</style>
