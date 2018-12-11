<template>
  <div class="container"> 
    <div class="result">{{ result }}</div>
    <div class="enter">{{ enter === "" ? 0 : enter }}</div>
    <div class="keys">
        <div class="list">
            <keyboard v-for="item in keys" :value="item"></keyboard>
        </div>
    </div>
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
    font-size: 36px;
  }
  .enter {
    font-size: 22px;
  }
  .list {
    width: 320px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
}
  
</style>
