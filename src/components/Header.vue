<template>
  <div style="margin-bottom: 10px">
    <el-row>
      <el-col :span="24" class="grid-content bg-purple-dark">
        <span @click="toIndex()" style="float: left;cursor: pointer; margin-top: 6px; margin-right: 3px">云日记</span>
        <router-link v-if="!isLogin" tag="span" :to="{name:'login'}"
                     style="float: left; cursor: pointer; margin-top: 6px">登录
        </router-link>
        <span v-if="isLogin" style="float: left; cursor: pointer; margin-top: 6px" @click="logout()">退出</span>
        <!--<span style="float: right; margin-top: 9px">wusi0109@163.com</span>-->
      </el-col>
    </el-row>
  </div>
</template>
<script>
  import {mapGetters} from 'vuex'
  export default {
    data () {
      return {}
    },
    components: {},
    computed: mapGetters({
      // 映射 this.isLogin 为 store.getters.isLogin
      isLogin: 'isLogin'
    }),
    methods: {
      toIndex () {
        this.$router.push({name: 'index'})
      },
      logout () {
        this.$removeToken()
        // 分发mutation setShowDiaries, 这个状态在 SideBar.vue中 mapGetters用到
        this.$store.dispatch('setIsLogin', false)
      }
    },
    created () {
      // 验证登录，并且置位 setIsLogin
      let token = this.$getToken()
      if (token !== null && token !== '' && token !== 'undefined') {
        this.$store.dispatch('setIsLogin', true)
      }
    },
    activated () {
    },
    deactivated () {
    }
  }
</script>

<style scoped>
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }

  .bg-purple-dark {
    background: #13ce66;
  }
</style>
