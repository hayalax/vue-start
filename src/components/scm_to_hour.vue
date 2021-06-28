<template>
<div>
<input type="number" v-bind:value="scm" @input="SET_scm($event)" >
<span>סכום לשעה{{scm}}</span>
</div>
</template>

<script>
import { mapState , mapMutations  } from 'vuex'
export default {
  name: 'scm_to_hour',
   computed: {
   // ...mapGetters(['GET_SCM']),
    ...mapState(['scm'])
  },
  methods: {
    //...mapActions(['getTodos'])
       ...mapMutations(['SET_scm'])
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
