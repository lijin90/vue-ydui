<template>
  <div class="tab">
    <p style="color: green;" class="yanse">接受兄弟通信{{jieshou}}</p>
    <p>{{methodsTest()}}</p>
    <div ref="mybox">dfdgfd</div>
    <p @click="own" v-once>{{msg}}</p>
    <p>{{msg}}</p>
    <input type="text" v-model="msg">
    <!-- 准备实现需求：
    在h1标签上面，加上一个按钮，当点击按钮时候，对count实现一次
    自增操作，当count等于5的时候，在控制台输出‘it is a test’
    -->
    <button @click="handleClick">clickMe</button>
    <h1
      v-if="count < 6"
      v-change="count">it is a custom directive</h1>
    <div >#动态组件实现tab切换效果#{{jisuan}}</div>　　
    <ul>
      <li @click="typeStyle" v-for="item in arr"><span>ewrew</span>{{item}}</li>
    </ul>
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
  import bus from "../assets/bus"
  import first from './tabs/dataList';
  import second from './tabs/pregress';
  export default {
    name: "tab",
    data() {
      return {

        jieshou:'',
        msg: 'Hello Vue',
        count:0,
        num:1,
        arr:[111,222,333,444,555],
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
    computed:{
      jisuan:function(){
        return this.num*3
      },
    },
    components: {
      first,
      second,
    },
    methods: {
      methodsTest:function(){
        return this.msg
      },
      own:function(){
        console.log(this.msg)
      },
      handleClick: function () {
        //按钮单击，count自增
        this.count++;
        this.$set(this.arrList,0,{name:"Change Test",index:'10'})

      },
      typeStyle: function (e) {

        var el = e.target;
        // var el = e.currentTarget;
        $(el).css("border","1px solid  #e4007f");

        $(el).children("span").css("display","block");

      },
      init() {
        const self = this;
        this.$refs.mybox.style.color = 'green';
        setTimeout(() => {
          self.$refs.mybox.style.color = 'yellow';
        },2000)
      },

      tab: function (index, module) {
        this.currentIndex = index
        this.currentView = module;
      }
      ,
      // toggleTabs(tabText) {
      //   this.currentView = tabText;
      // }
    },
    created(){
      var that=this;
      bus.$on("eventTarget",v=>{
        that.jieshou=v
      });
      that.cc=that.$route.query.id
      console.log(that.cc)
      that.msg='nexttik'
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
  mounted(){
    this.init();
  },

    directives:{
      change:{
        bind: function (el,bindings) {
          console.log('指令已经绑定到元素了');
          console.log(el);
          console.log(bindings);
          //准备将传递来的参数
          // 显示在调用该指令的元素的innerHTML
          el.innerHTML = bindings.value;
        },
        update: function (el,bindings) {
          console.log('指令的数据有所变化');
          console.log(el);
          console.log(bindings);
          el.innerHTML = bindings.value;
          if(bindings.value == 5)
          {
            console.log(' it is a test');
          }
        },
        unbind: function () {
          console.log('解除绑定了');
        }
      }
    }
  }
</script>

<style scoped>
  /* 隐藏未编译的变量 */

  [v-cloak] {
    display: none;
  }

  *{
    margin:0;
    padding:0;
  }

  body{
    font:15px/1.3 'Open Sans', sans-serif;
    color: #5e5b64;
    text-align:center;
  }

  a, a:visited {
    outline:none;
    color:#389dc1;
  }

  a:hover{
    text-decoration:none;
  }

  section, footer, header, aside, nav{
    display: block;
  }


.yanse{
  color: red !important;
}
</style>
