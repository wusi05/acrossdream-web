<template>
  <el-col v-show="showDiaries" :span="5">
    <el-menu default-active="1" theme="light">
      <el-menu-item
        :index="diary.id"
        v-for="(diary, index) in diaries"
        :key="diary.id"
        v-on:click="setDiaryId(diary.id)">
        {{diary.name}}
      </el-menu-item>
    </el-menu>
  </el-col>
</template>
<script>
  import {mapGetters} from 'vuex'
  export default {
    data () {
      return {
        diaries: []
      }
    },
    components: {},
    computed: mapGetters({
      // 映射 this.showDiaries 为 store.getters.showDiaries
      showDiaries: 'showDiaries',
      flushDiaries: 'flushDiaries'
    }),
    watch: {
      flushDiaries (newValue, oldValue) {
        if (newValue) {
          this.$store.dispatch('setShowDiaries', true)
          this.requestDiaries('', this.$consts.pageNum, this.$consts.sideBarPageSize)
        }
      }
    },
    methods: {
      requestDiaries (userId, pageNum, pageSize) {
        this.$http.post('/tg/api/diaries',
          {
            userId: userId,
            pageNum: pageNum,
            pageSize: pageSize
          }
        ).then(response => {
          // 详情页，侧边栏不展示
          if (this.$router.name !== 'pageDetail') {
            this.$store.dispatch('setShowDiaries', true)
          }
          // 强制刷新标志位置0
          this.$store.dispatch('setFlushDiaries', false)
          this.diaries = response.body.data
        }, response => {
        })
      },
      setDiaryId (diaryId) {
        // 跳转到首页
        if (this.$route.name !== 'index') {
          this.$router.push({name: 'index'})
        }
        // 分发mutation setDiaryId, 这个状态在 Index.vue中 设置 setDiaryId
        this.$store.dispatch('setDiaryId', diaryId)
      }
    },
    created () {
      this.requestDiaries('', this.$consts.pageNum, this.$consts.sideBarPageSize)
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
</style>
