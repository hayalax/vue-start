<template>
<div>

<span>סכום סה"כ{{sum_to_hour}}</span>
<sum_all :sum="sum_to_hour"></sum_all>
</div>
</template>

<script>
import sum_all from '@/components/sum_all.vue'
import { mapGetters } from 'vuex'
export default {
  
  name: 'scm_sum',
  components:{sum_all},
    computed: {
    ...mapGetters(['sum_to_hour']),
    //...mapState(['scm'])
  },
  methods: {
    //...mapActions(['getTodos'])
     //  ...mapMutations(['SET_scm'])
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
