<template>
  <div id="luyouChild">
    我是动态路由
  </div>
</template>

<script>
  export default {
    name: "luyouChild",
    data() {
      return {}
    },
    created() {
      var that = this;
      console.log(that.$route.params.id)
    }
  }
</script>

<style scoped>

</style>
