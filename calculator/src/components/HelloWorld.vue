<template>
  <div class="container"> 
    <div class="result">{{ result }}</div>
    <div class="enter">{{ enter === "" ? 0 : enter }}</div>
    <div class="keys">
        <div class="list">
            <keyboard v-for="item in keys" :value="item"></keyboard>
        </div>
    </div>
    <p class="demo" @click="openDemo">Demo</p>
  </div>
</template>

<script>
import keyboard from './keyboard';
export default {
  name: 'HelloWorld',
  data () {
    return {
      keys:[
          'clear', '+', '-', '*',
          '7', '8', '9', '/',
          '4', '5', '6', '0',
          '1', '2', '3', '='
      ]
    }
  },
  components: {
    keyboard
  },
  computed: {
    result() {
      //通过this.$store获取仓库的数据result
      return this.$store.state.result;
    },
    enter() {
      //通过this.$store获取仓库的数据result
      return this.$store.state.enter;
    }
  },
  methods: {
    openDemo(){
      this.$router.push('/demo')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  .result {
    width: 900px;
    height: 250px;
    line-height: 250px;
    text-align: right;
    font-size: 100px;
    font-weight: bold;
  }
  .enter {
    width: 900px;
    height: 180px;
    line-height: 180px;
    text-align: right;
    font-size: 60px;
  }
  .list {
    width: 1200px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  .demo {
    width: 100%;
    text-align: left;
  }
}
  
</style>
