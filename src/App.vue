<template>
  <div id="app">
    <tg-header></tg-header>
    <el-row style="width: 76%; margin: auto">
      <side-bar></side-bar>
      <keep-alive>>
        <router-view></router-view>
      </keep-alive>
    </el-row>
  </div>
</template>

<script>
import TgHeader from './components/Header.vue'
import SideBar from './components/SideBar.vue'
export default {
  name: 'app',
  components: {
    TgHeader,
    SideBar
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  /*color: #2c3e50;*/
}
 img {
   max-width: 100%;
   overflow: hidden;
 }
</style>
