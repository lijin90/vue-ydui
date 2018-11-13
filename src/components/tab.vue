<template>
  <div class="tab">
    <div >#动态组件实现tab切换效果#</div>　　
    <div>
      <ul>
        <li v-for="item,index in arrList" :class="{active:currentIndex==index}" @click=tab(index,item.index)>
          {{item.name}}
        </li>
      </ul>
      <!--　<a href="javascript:void(0);" @click="toggleTabs(first);">{{first}}</a>-->
      <!--　 <a href="javascript:void(0);" @click="toggleTabs(second);">{{second}}</a>-->
    </div>
    <!--　　　　<first :ff="cc"></first>-->
    <span :is="currentView" keep-alive :cc="cc"></span>
  </div>
</template>

<script>
  import first from './tabs/dataList';
  import second from './tabs/pregress';
  export default {
    name: "tab",
    data() {
      return {
        arrList: [
          {'name': '数据', index: 'first'},
          {'name': '进度', index: 'second'},
        ],
        // expertList: [],
        cc:'李金传值',
        currentIndex: 0,
        first: "first", //导航栏文本1
        second: "second", //导航栏文本2
        currentView: 'first', //默认选中first子组件
      }
    },
    components: {
      first,
      second,
    },
    created(){
      var that=this;
      that.cc=that.$route.query.id
      console.log(that.cc)
    },
    // created() {
    //   var that = this;
    //   that.$axios.get('https://www.liangqiujiang.com/api/entry/getSpecialists').then(function (res) {
    //     if (res.data.status.code == 0) {
    //       console.log(res)
    //       that.expertList = res.data.datalist.slice(0, 10)
    //     }
    //     // console.log(that.arrList)
    //   }).catch(function (res) {
    //     console.log(res);
    //   });
    // },
    // components: {
    //   first: { //第一个子组件
    //     template: "<div>123</div>",
    //     data() {
    //       return {}
    //     },
    //   },
    //   second: { //第一个子组件
    //     template: "<div>{{aa}}</div>",
    //     data() {
    //       return {
    //         aa: '这里是子组件2'
    //       }
    //     }
    //   },
    // },

    methods: {
      tab: function (index, module) {
        this.currentIndex = index
        this.currentView = module;
      }
      ,
      // toggleTabs(tabText) {
      //   this.currentView = tabText;
      // }
    }
  }
</script>

<style scoped>
  .active {
    color: red;
  }

  ul {
    width: 100%;
  }

  ul li {
    float: left;
    width: 50%;
    text-align: center;
    font-size: 0.24rem;
    line-height: 0.4rem;
  }
</style>
