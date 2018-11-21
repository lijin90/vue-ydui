import Vue from 'vue'
import Router from 'vue-router'
import zixun from '@/components/zixun'
import zxDetail from '@/components/zxDetail'
import expert from '@/components/expert'
import tabs from '@/components/tab'
import luyou from '@/components/luyou'
import luyouChild from '@/components/luyouChild'
import pushLoading from '@/components/pushLoading'
import checkbox from '@/components/checkbox'
// import dataList from '@/components/tabs/dataList'
// import pregress from '@/components/tabs/pregress'
Vue.use(Router)
 const router=new Router({
  routes: [
    {
      path: '/',
      name: 'zixun',
      component: zixun   // Home是组件的名字，这个路由对应跳转到的组件。。注意component没有加“s”.
    },
    {
      path: '/zxDetail',
      name: 'zxDetail',
      component: zxDetail   // Home是组件的名字，这个路由对应跳转到的组件。。注意component没有加“s”.
    },
    {
      path: '/checkbox',
      name: 'checkbox',
      component: checkbox   // Home是组件的名字，这个路由对应跳转到的组件。。注意component没有加“s”.
    },
    {
      path: '/tabs',
      name: 'tabs',
      component: tabs   // Home是组件的名字，这个路由对应跳转到的组件。。注意component没有加“s”.
    },
    {
      path: '/luyou',
      name: 'luyou',
      component: luyou   // Home是组件的名字，这个路由对应跳转到的组件。。注意component没有加“s”.
    },
    {
      path: '/luyouChild/:id',
      name: 'luyouChild',
      component: luyouChild   // Home是组件的名字，这个路由对应跳转到的组件。。注意component没有加“s”.
    },
    // {
    //   path: '/dataList',
    //   name: 'dataList',
    //   component: dataList   // Home是组件的名字，这个路由对应跳转到的组件。。注意component没有加“s”.
    // },
    // {
    //   path: '/pregress',
    //   name: 'pregress',
    //   component: pregress   // Home是组件的名字，这个路由对应跳转到的组件。。注意component没有加“s”.
    // },
    {
      path: '/expert',
      name: 'expert',
      component: expert   // Home是组件的名字，这个路由对应跳转到的组件。。注意component没有加“s”.
    },
    {
      path: '/pushLoading',
      name: 'pushLoading',
      component: pushLoading   // Home是组件的名字，这个路由对应跳转到的组件。。注意component没有加“s”.
    },
    {path: '*', redirect:'/'},
  ],
  mode: "history"
})
// router.beforeEach(function(to,from,next){
//   console.log(to.path);
//   console.log(from);
//   var token=localStorage.getItem('name2');
//   console.log(token)
//   next();
// })
export default router
