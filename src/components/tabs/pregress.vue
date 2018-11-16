<template>
    <div class="pregress">
      我是第二个组件{{cc}}
      <p>我是兄弟之间通信{{msg}}</p>
    </div>
</template>

<script>
  import bus from "../../assets/bus"
    export default {
        name: "pregress",
      props: ['cc'],
      data(){
          return{
            msg:'',
          }
      },
      created(){
        bus.$on("eventTarget",v=>{
        this.msg=v
      });
      }
    }
</script>

<style scoped>

</style>
