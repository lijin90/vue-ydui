<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <router-view></router-view>
    <appFooter></appFooter>
    <!--<helloworld></helloworld>-->
  </div>
</template>

<script>
import appFooter from './components/appFooter'
// import helloworld from './components/HelloWorld'
export default {
  name: 'App',
  components: {
    appFooter,
    // helloworld
  },
  mounted:function(){
    localStorage.setItem('name','lijin22222')
    this.$router.push('/');
  }
}
</script>

<style>
#app {
  max-width: 750px;
  margin: 0 auto;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*margin-top: 60px;*/
}
</style>

