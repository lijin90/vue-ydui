<template>
  <div class="zxdetail">
    <img src="../../static/images/gif.gif" alt="" class="loading" v-show="show">
    <yd-layout>
      <yd-navbar slot="navbar" title="资讯详情">
        <router-link to="/" slot="left">
          <yd-navbar-back-icon></yd-navbar-back-icon>
        </router-link>
      </yd-navbar>
      <div class="one">
        <h1>{{list.news_title}}</h1>
        <p>{{list.editor_create}}</p>
        <div class="content">
         <p v-html="list.news_detail"></p>
        </div>
      </div>
    </yd-layout>
  </div>
</template>

<script>
  export default {
    name: "zxDetail",
    data() {
      return {
        list:[],
        show:true
      }
    },
    created() {
      console.log(localStorage.getItem('aa'))
      // console.log(this.$route.query.id)
      var that = this;
      var id = that.$route.query.id
      that.$axios.get('https://www.liangqiujiang.com/api/news/getNewsInfo', {
        params: {
          new_id: id
        }
      }).then(function (res) {
        if (res.data.status.code == 0) {
          that.show=false
          that.list = res.data.data
        }
        // console.log(that.list.news_title)
      }).catch(function (res) {
        console.log(res);
      });
    }
  }
</script>

<style scoped>
  .loading {
    position: absolute;
    top: 45%;
    z-index: 999;
  }
  .one {
    text-align: left;
  }

  .zxdetail h1 {
    font-size: 0.36rem;
  }

  .zxdetail p {
    font-size: 0.16rem;
    margin: 0.1rem 0rem;
  }

  .content {
    padding: 0.2rem 0.2rem;
    font-size: 0.16rem;
    line-height: 0.24rem;
    border-top: 1px solid #cecece;
  }
  .content p{
    line-height: 0.4rem;
  }
</style>
