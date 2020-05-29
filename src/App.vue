<template>
  <div id="app">    
    <ac-nav dark>
      <ul class="nav--links">
        <li><a href="/">Converter</a></li>
        <li><a href="http://colors.acutecomponents.com">Themes</a></li>
        <li><a href="/documentation">Documentation</a></li>
      </ul>
  </ac-nav>
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
