<template>
  <ul class="l_tree">
    <li class="l_tree_branch" v-for="item in model" :key="item.id">
      <div class="l_tree_click">
        <button
          type="button"
          class="l_tree_children_btn"
          v-if="item.children"
          @click="toggle(item)"
        >
          {{ !item.show ? '-' : '+' }}
        </button>
        <span
          class="l_folder"
          @click="clickSize(item.id)"
          :class="current === item.id ? 'current' : 'currentSize'"
          >{{ item.name }}</span
        >
      </div>
      <ew-tree
        v-show="!item.show"
        :model="item.children"
        :current="current"
        @change="changeCurrent"
      ></ew-tree>
    </li>
  </ul>
</template>
<script>
export default {
  name: 'EwTree',
  props: {
    model: {
      type: Array,
      default() {
        return []
      },
    },
    current: {
      type: String,
      default: '',
    },
  },
  methods: {
    toggle(item) {
      console.log(item)
      var idx = this.model.indexOf(item)
      this.$set(this.model[idx], 'show', !item.show)
    },
    clickSize(id) {
      console.log(1, id)
      this.$emit('change', id)
    },
    changeCurrent(id) {
      this.clickSize(id)
    },
  },
  mounted() {},
}
</script>
<style lang="less" scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
*:before,
*:after {
  box-sizing: border-box;
}
ul,
li {
  list-style: none;
}
.current {
  color: #e9c309 !important;
}
.l_tree_container {
  width: 100%;
  height: 100%;
  box-shadow: 0 0 3px #ccc;
  margin: 13px;
  position: relative;
}

.l_tree {
  width: calc(100%);
  padding-left: 15px;
}
.l_tree_branch {
  width: 100%;
  height: 100%;
  display: block;
  padding: 13px;
  position: relative;
}

.l_tree_branch .l_tree_children_btn {
  width: 12px;
  height: 12px;
  background-color: #515a68;
  font-size: 8px;
  text-align: center;
  color: #bbbec1;
  outline: none;
  border: 0;
  cursor: pointer;
  border: 1px solid #bbbec1;
  line-height: 11px;
  margin-left: 5px;
}

ul.l_tree:before {
  content: '';
  border-left: 1px solid #999999;
  height: calc(100% - 24px);
  position: absolute;
  left: 10px;
  top: 0px;
}
.l_tree,
.l_tree_branch {
  position: relative;
}

.l_tree_branch::after {
  content: '';
  width: 18px;
  height: 0;
  border-bottom: 1px dashed #bbbec1;
  position: absolute;
  right: calc(100% - 10px);
  top: 24px;
  left: -5px;
}

.l_tree_container > .l_tree::before,
.l_tree_container > .l_tree > .l_tree_branch::after {
  display: none;
}
.l_folder {
  font-size: 11px;
  margin-left: 5px;
  display: inline;
  color: #bbbec1;
  cursor: pointer;
}
</style>
