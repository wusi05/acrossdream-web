<template>
  <div style="float: left; width: 65%">
      <el-form label-width="100px" :model="user" :rules="rules" ref="user" label-position="left">
        <el-form-item label="用户名" prop="username">
          <el-input v-model="user.username" placeholder="用户名" @keyup.native.enter="submitForm(user)"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="user.password" placeholder="密码"  @keyup.native.enter="submitForm(user)"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm(user)">登录</el-button>
        </el-form-item>
      </el-form>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        user: {
          username: '',
          password: ''
        },
        rules: {
          username: [
            {required: true, message: '输入用户名', trigger: 'blur'}
          ],
          password: [
            {required: true, message: '输入密码', trigger: 'blur'},
            {min: 3, max: 30, message: '长度在 3 到 50 个字符', trigger: 'blur'}
          ]
        }
      }
    },
    components: {},
    computed: {},
    methods: {
      submitForm (user) {
        this.login(user)
      },
      login (user) {
        this.$http.post('/tg/login',
          user
        ).then(response => {
          this.$setToken(response.body.token)
          this.$router.push({name: 'index'})
          this.user = {}
          this.$store.dispatch('setIsLogin', true)
        }, response => {
          this.$notify.error({
            title: '错误',
            message: '登陆失败，请联系站长，邮箱:wusi0109@163.com'
          })
        })
      }
    },
    created () {
    },
    activated () {
      // 分发mutation setShowDiaries, 这个状态在 SideBar.vue中 mapGetters用到
      this.$store.dispatch('setShowDiaries', false)
      this.$store.dispatch('setFlushDiaries', false)
    },
    deactivated () {
    }
  }
</script>

<style scoped>
</style>
