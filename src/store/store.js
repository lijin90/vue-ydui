import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const state = {
  cc :"自定义modules"
};

const modulesA = {
  // state:{
  //   cc:modules,
  // }
  state,
}
export default new Vuex.Store({
  modules: {
    a: modulesA
  },
  state:{
    aa:'store自定义获取',
    count:0,
    baseUrl:'https://www.liangqiujiang.com',
    num:0,
    todos: [
      { id: 1, text: '水果类', done: true,score:60 },
      { id: 2, text: '苹果', done: true,score:80 },
      { id: 3, text: '苹果', done: false,score:40}
    ],
    name: '李金',
    age: 22
  },
  getters: {
    personInfo(state) {
      return `My name is ${state.name}, I am ${state.age}`;
    },
    doneTodos: state => {//通过方法访问
      return state.todos.filter(todo => todo.done)
    },
    doneTodosCount: (state, getters) => {//通过属性访问
      return getters.doneTodos.length
    },
    arrlist:function(state){
      return state.todos.map(function(item){
        return item.score>=60?"及格":'不及格';
      })
    }
  },

  mutations:{
    increment:state => state.count ++,
    decrement:state => state.count --,
    jia (state,n) {
      // 变更状态
      state.num+=n
    },
    jian (state,n) {
      // 变更状态
      state.num-=n
    }
  }
})
