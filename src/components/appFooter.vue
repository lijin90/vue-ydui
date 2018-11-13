<template>
  <div>
    <yd-tabbar fixed>
      <yd-tabbar-item :title="item.title" :link="item.path" v-for="item in list" :active="item.active">
         <yd-icon :name="item.name" slot="icon" size="0.54rem"></yd-icon>
      </yd-tabbar-item>
    </yd-tabbar>
    <!--<yd-tabbar fixed>-->
      <!--<yd-tabbar-item title="首页" link="#">-->
        <!--<yd-icon name="home" slot="icon" size="0.54rem"></yd-icon>-->
      <!--</yd-tabbar-item>-->
      <!--<yd-tabbar-item title="购物车" link="#">-->
        <!--<yd-icon name="shopcart-outline" slot="icon" size="0.54rem"></yd-icon>-->
      <!--</yd-tabbar-item>-->
      <!--<yd-tabbar-item title="个人中心" link="#">-->
        <!--<yd-icon name="ucenter-outline" slot="icon" size="0.54rem"></yd-icon>-->
      <!--</yd-tabbar-item>-->
      <!--<yd-tabbar-item title="图片" link="#">-->
        <!--<img slot="icon" style="height: 25px;" src="http://static.ydcss.com/ydui/img/logo.png">-->
      <!--</yd-tabbar-item>-->
    <!--</yd-tabbar>-->
  </div>
</template>

<script>
  export default {
    name: "appFooter",
    data() {
      return {
        current: true,
        noCurrent: false,
        list: [
          {name: 'home', active: true, title: "资讯", path: '/'},
          {name: 'shopcart', active: false, title: "tab", path: '/tabs'},
          {name: 'shopcart', active: false, title: "专家", path: '/expert'},
          {name: 'home', active: false, title: "动态路由", path: '/luyou'},
          {name: 'shopcart', active: false, title: "loading", path: '/pushLoading'}
        ]
      }
    },
    methods: {},
    // 监听,当路由发生变化的时候执行
    watch: {
      $route: {
        handler: function (val, oldVal) {
          console.log(val.path);
          var list = this.list;
          for (var i = 0; i < list.length; i++) {
            if (list[i].path == val.path) {
              list[i].active = true;
            } else if (val.path == '/zxDetail') {
              list[0].active = true;
            } else {
              list[i].active = false
            }
          }
          this.list = list;
        },
        // 深度观察监听
        deep: true
      }
    },
  }
</script>

<style scoped>

</style>
