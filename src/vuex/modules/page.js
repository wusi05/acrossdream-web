import * as types from '../mutation_type'

// 定义state, 注意这个地方不能自定义命名
const state = {
  flushPages: false,
  diaryId: '',
  dateParams: {
    startTime: '',
    endTime: ''
  }
}
// 定义 mutations 改变state
const mutations = {
  [types.SET_DIARY_ID] (state, diaryId) {
    state.diaryId = diaryId
  },
  [types.SET_TIME] (state, dateParams) {
    state.dateParams = dateParams
  },
  [types.SET_FLUSH_PAGES] (state, flushPages) {
    state.flushPages = flushPages
  }
}

// 定义getters
const getters = {
  diaryId: state => state.diaryId,
  flushPages: state => state.flushPages
}

// 定义actions
const actions = {
  setDiaryId ({commit}, diaryId) {
    commit(types.SET_DIARY_ID, diaryId)
  },
  setFlushPages ({commit}, flushPages) {
    commit(types.SET_FLUSH_PAGES, flushPages)
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
