<template>
    <div id="luyou">
      <h1>动态路由</h1>
      <router-link to="/luyouChild/on">child</router-link>
      <!--<router-view></router-view>-->
      <!--<router-link :to="{path:'/luyouChild/on',query:{name:'child'}}">child</router-link>-->
    </div>
</template>

<script>
    export default {
        name: "luyou",
      data(){
          return{

          }
      },

    }
</script>

<style scoped>

</style>
