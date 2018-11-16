<template>
  <div class="dataList">
    我是 {{cc}}第一个组件fdsfd
    <p @click="handle">兄弟之间通信</p>
  </div>
</template>

<script>
  import bus from "../../assets/bus"

  export default {
    name: "dataLIst",
    props: ['cc'],
    data() {
      return {}
    },
    methods: {
      handle() {
        //通过emit触发事件，并传值
        bus.$emit("eventTarget", "我要加油");
      }
    }

  }
</script>

<style scoped>

</style>
