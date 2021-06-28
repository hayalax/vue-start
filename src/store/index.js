import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    hours: 0,
    scm: 50,
   
  },
  mutations: {
    SET_HOURS(state, hours1) {
      state.hours = hours1.target.value
    },
    SET_scm(state, scm) {
      state.scm = scm.target.value
    }, 
    SET_zero(state) {
      state.scm = 50
      state.hours = 0
      
    },
  },
  actions: {
  /*  async getTodos({ commit }) {
      const res = await axios.get('https://jsonplaceholder.typicode.com/todos/')
      console.log(res);
      commit('SET_TODOS', res.data)
    }*/
  },
  getters: {
  
    sum_to_hour(state) {
      return state.scm*state.hours
    },
  },
  modules: {
  }
})
