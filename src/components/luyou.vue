<template>
  <div id="luyou">
    <p>自定义{{$store.state.a.cc}}</p>
    <p>{{$store.state.aa}}</p>
    <p>{{getGetters}}</p>
    <P>通过属性访问：{{doneTodosCount}}</p>
    <P>通过方法访问：{{todos}}</p>
    <ul>
      <!--<li v-for="item in arrlist">{{item}}</li>-->
      <li v-for="item in newArry">{{item}}</li>
    </ul>
    {{num}}
    <button @click="jian(5)">-</button>
    <button @click="jia(5)">+</button>
    <h1>动态路由</h1>
    <router-link to="/luyouChild/on">child</router-link>
    <!--<router-view></router-view>-->
    <!--<router-link :to="{path:'/luyouChild/on',query:{name:'child'}}">child</router-link>-->
    <input type="text" v-model="add.name">
    <input type="text" v-model="add.email">
    <button @click="zeng">增加</button>
    <ul>
      <li v-for="(item,index) in list">
        <input type="checkbox" v-model="item.checkbox">
        <span :class="{select:item.checkbox}">{{item.name}}-{{item.email}}</span>
        <span @click="remove(index)">X</span>
      </li>
    </ul>
  </div>
</template>

<script>
  import { mapMutations,mapGetters } from 'vuex'
  export default {
    name: "luyou",
    data() {
      return {
        add: {},
        list: [
          {name: 'lijin', email: '476382695@qq.com', checkbox: false},
          {name: 'lijin2', email: '476382695@qq.com', checkbox: false},
          {name: 'lijin3', email: '476382695@qq.com', checkbox: false,}
        ]
      }
    },
    computed:{
      num(){
        return this.$store.state.num
      },
      todos:function() {  //通过方法访问
        return this.$store.getters.doneTodos;
      },
      doneTodosCount () {
        return this.$store.getters.doneTodosCount
      },
      getGetters:function() {  //通过方法访问
        return this.$store.getters.personInfo;
      },
      // arrlist:function(){
      //   return this.$store.getters.arrlist
      // }
      // ...mapGetters(['arrlist'])
      ...mapGetters({
        newArry:'arrlist'
      })
    },
    methods: {
      remove: function (index) {
        console.log(index)
        this.list.splice(index, 1)
      },
      zeng: function () {
        this.list.push({name: this.add.name, email: this.add.email});
        this.add = {}
      },
      ...mapMutations([
        'jia',
        'jian'
      ])
      // jia(){
      //   console.log(1)
      //   //调用type，触发handler（state）
      //   this.$store.commit('add',10);
      // }

    },

  }
</script>

<style scoped>
  ul li {
    list-style: none;
  }

  .select {
    text-decoration: line-through;
  }
</style>
