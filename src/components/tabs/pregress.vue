<template>
    <div class="pregress">
      我是第二个组件{{cc}}
    </div>
</template>

<script>
    export default {
        name: "pregress",
      props: ['cc'],
      data(){
          return{

          }
      }
    }
</script>

<style scoped>

</style>
