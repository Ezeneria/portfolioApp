<template>
<div id="app">
  <header>
    <app-header/>
  </header>
  <div class="content">
    <router-view></router-view>
  </div>
  <div class="footer">
    <app-footer/>
  </div>
</div>
</template>

<script>
  import BootstrapVue from 'bootstrap-vue'
  import 'bootstrap/dist/css/bootstrap.css'
  import 'bootstrap-vue/dist/bootstrap-vue.css'
  import 'normalize.css/normalize.css'
  import appHeader from './views/appHeader/appHeader'
  import appFooter from './views/appFooter/index'
  import appContent from './views/app-content/index'

export default {
  name: 'app',
  components: {
    appFooter,
    appHeader,
    appContent,
    BootstrapVue
  }
}
</script>
<style lang="scss">
  *{
    box-sizing: border-box;
  }
  .btn-primary{
    background-color: #be2d48;
    border-color: #a2263d;
    &:hover {
      background-color: #8c1f33;
      border-color: #6C1C2D;
    }
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  header{
    background-color: #be2c48;
  }
  #nav {
    padding: 30px;
    a {
      font-weight: bold;
      color: #2c3e50;
      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
  .footer {
    left: 0;
    bottom: 0;
    width: 100%;
  }

</style>
