import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        result: '',
        enter: ''
    },
    mutations: {
      calculate(state, value) {
        if (value === '=') {
          //按键的值为=，进行结果计算
          state.result = eval(state.enter);
          state.enter += value;
        } else if (value === 'clear') {
          //按键的值为clear，清空数据
          state.result = state.enter = "";
        } else {
          //输入结果enter进行拼接
          state.enter += value;
        }
      }
    }
})