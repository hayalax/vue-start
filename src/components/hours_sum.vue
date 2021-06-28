<template>
<div>
<input type="number" v-bind:value="hours"   @input="SET_HOURS($event)" >
<span>מספר שעות לחישוב{{hours}}</span>

</div>
</template>

<script>

import { mapState , mapMutations  } from 'vuex'
export default {
  name: 'hours_sum',
 
   computed: {
    //...mapGetters(['GET_HOURS']),
    ...mapState(['hours'])
  },
  methods: {
    //...mapActions(['getTodos'])
       ...mapMutations(['SET_HOURS'])
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
