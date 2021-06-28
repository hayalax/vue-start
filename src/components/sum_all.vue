<template>
<div>
<button @click="add_to_scm_all">הוסף לתשלום</button>
<div>סה"כ לתשלום:{{scm_all}}</div>
<div><button @click="SET_zero();set_scm_zero();">אפס מחשבון</button></div>
</div>
</template>

<script>
import {  mapMutations  } from 'vuex'
export default {
  name: 'sum_all',
 props: {
     sum:Number,
 }
,
  data: function () {
    return {
     
      scm_all:0
    }
  },
  methods:{
       ...mapMutations(['SET_zero']),
       set_scm_zero:function(){
         
          this.scm_all=0 
       },
      add_to_scm_all:function(){
         this.scm_all=this.scm_all+this.sum
      }
  }
  
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
