import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate';
import community from "@/store/modules/community";

// 작성한 모듈을 가져옵니다.

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    // 키: 값 형태로 저장됩니다.
    community: community
  },
  plugins: [
    createPersistedState({
      storage: window.sessionStorage,
      paths: ["login"]
    })
  ],
})

export default store
