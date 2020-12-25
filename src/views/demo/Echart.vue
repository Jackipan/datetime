<template>
  <div ref="ele" class="ele" onscroll="test">
    <span class="stic"> {{ ratio }}</span>
    <div ref="text" class="text"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ratio: '',
    }
  },
  mounted() {
    this.test()
  },
  methods: {
    io() {
      const io =  new IntersectionObserver(
        entries => {
          console.log('entries: ',entries[0].intersectionRatio)
        },
        {
          threshold: [0, 0.25, 0.5, 0.75, 1],
        }
      )
      console.log(io);
      return io
    },
    test(){
      this.ratio = this.io().observe(this.$refs.text)
    }
  },
}
</script>

<style lang="scss">
.ele {
  width: 100%;
  height: 3000px;
  .text {
    width: 50px;
    height: 200px;
    margin: 0 auto;
    background-color: rgb(56, 3, 3);
    margin-top: 600px;
    border: 1px solid darkgoldenrod;
  }
  .stic{
    color: #000;
    position: sticky;
    top: 200px;
  }
}
</style>
