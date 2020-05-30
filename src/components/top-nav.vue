<template>
  <ac-nav dark fixed class="top-nav">
      <router-link to="/" class="nav--label">ac-colors</router-link>
      <div v-if="navToggle">
        <div class="bars" @click="navShow=!navShow">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <ul :class="{'nav--links':true,'show':navShow}">
        <li>
          <router-link to="/" v-slot="{ href, isExactActive }">
            <a :href="href" :active="isExactActive">Converter</a>
          </router-link>
        </li>
        <li>
            <a target="_blank" href="http://colors.acutecomponents.com">Themes</a>
        </li>
        <li>
          <router-link to="/documentation" v-slot="{ href, isExactActive }">
            <a :href="href" :active="isExactActive">Documentation</a>
          </router-link>
        </li>
        <li>
            <a target="_blank" href="https://github.com/vinaypillai/ac-colors">Repository</a>
        </li>
      </ul>
  </ac-nav>
</template>
<script type="text/javascript">
  export default{
    data(){
      return {
        navShow:true,
        navToggle:false,
      }
    },
    methods:{
      updateNav(){
        if(window.innerWidth>915){
          this.navShow=true;
          this.navToggle=false;
        }else{
          this.navToggle=true;
        }
      }
    },
    mounted(){
      window.addEventListener("resize",this.updateNav);
      window.addEventListener("load",this.updateNav);
    }
  }
</script>
<style lang="scss" scoped>
  .nav--label{
    font-weight: bold;
    font-size: 2em;
    padding: 0 2%;
    cursor: pointer;
    text-decoration: none;
    color:#FFF;
    display: block;
    white-space: nowrap;
  }
  .nav--links a[active=true]{
    font-weight: bold;
  }
  .bars{
    width: 40px;
    margin: 0 0 0 100%;
    cursor: pointer;
    div{
      height: 7px;
      background-color: #FFF;
      margin: 7px 0;
    }
  }
  @media screen and (max-width: 915px){
    .nav.nav--top.top-nav .nav--links{
      position: absolute;
      top: 75px;
      width: 100%;
      display: flex;
      flex-direction: column;
      background-color: #222;
      transition: max-height 0.15s ease-in-out;
      li{
        display: flex;
        width: 100%;
        padding: 2%;
      }
    }
    .nav.nav--top.top-nav .nav--links:not(.show){
      max-height: 0px;
      overflow-y: hidden;
    }
  }
</style>