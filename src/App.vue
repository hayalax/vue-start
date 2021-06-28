<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <hours_sum></hours_sum>
    <scm_to_hour></scm_to_hour>
    <scm_sum></scm_sum>
  </div>
</template>

<script>

import hours_sum from './components/hours_sum.vue'
import scm_to_hour from './components/scm_to_hour.vue'
import scm_sum from './components/scm_sum.vue'

export default {
  name: 'App',
  components: {
    hours_sum,scm_to_hour,scm_sum
  },
  computed: {
    //...mapGetters(['todos_len']),
   // ...mapState(['hours','scm'])
  },
  methods: {
    //...mapActions(['getTodos'])
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
