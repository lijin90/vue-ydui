<template>
  <div id="expert">
   <first></first>
    <second></second>
    <img src="../../static/images/gif.gif" alt="" class="loading" v-show="show">
    <div class="everyOne" v-for="item in expertList">
      <yd-flexbox>
        <div>
          <img :src="item.icon" alt="">
        </div>
        <yd-flexbox-item>
          <div class="">
            <span>{{item.nickname}}</span>
            <p>人工智能专家</p>
          </div>
        </yd-flexbox-item>
      </yd-flexbox>
      <yd-flexbox direction="vertical">
        <yd-flexbox-item>{{item.out_description}}</yd-flexbox-item>
      </yd-flexbox>
    </div>

  </div>
</template>

<script>
  // import bus from "../assets/bus"
  import first from './tabs/dataList';
  import second from './tabs/pregress';
  export default {
    name: 'expert',
    data() {
      return {
        expertList: [],
        show: true
      }
    },
    components: {
      first,
      second,
    },
    methods:{
      handle() {
        //通过emit触发事件，并传值
        bus.$emit("eventTarget", "我要加油");
      }
    },
    created() {
      console.log(localStorage.getItem('aa'))
      var that = this;
      that.$axios.get('https://www.liangqiujiang.com/api/entry/getSpecialists').then(function (res) {
        if (res.data.status.code == 0) {
          console.log(res)
          that.show = false
          that.expertList = res.data.datalist.slice(0, 10)
        }
        // console.log(that.arrList)
      }).catch(function (res) {
        console.log(res);
      });
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .loading {
    position: absolute;
    top: 45%;
    z-index: 999;
    left: 45%;
  }

  #expert {
    text-align: left;
    padding-bottom: 1.08rem;
  }

  #expert .everyOne {
    padding: 0.1rem 0.1rem;
    border-bottom: 1px dashed #cecece;
  }

  #expert .everyOne img {
    width: 1rem;
    height: 1rem;
    margin-right: 0.1rem;
  }
</style>
