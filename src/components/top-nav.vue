<template>
  <ac-nav dark fixed>
      <router-link to="/" class="nav--label">ac-colors</router-link>
      <ul class="nav--links">
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
</style>