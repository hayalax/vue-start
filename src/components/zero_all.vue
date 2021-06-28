<template>
<div>
<button @click="SET_zero">אפס מחשבון</button>

</div>
</template>

<script>
import {  mapMutations  } from 'vuex'
export default {
  name: 'scm_to_hour',
   computed: {
   // ...mapGetters(['GET_SCM']),
    ...mapState(['scm'])
  },
  methods: {
    //...mapActions(['getTodos'])
       ...mapMutations(['SET_zero'])
  },
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
