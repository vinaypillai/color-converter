<template>
  <div id="app">    
    <top-nav></top-nav>
    <router-view class="view"/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.view{
  min-height: calc(100vh - 75px)
}
</style>
<script type="text/javascript">
  import topNav from "@/components/top-nav"
  export default{
    data(){
      return {

      }
    },
    components:{
      "top-nav":topNav
    }
  }
</script>
