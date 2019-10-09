<template>
  <div class="content">
    <div class="example">
      Clicked: {{count}} times,counter is {{isodd}}.
      <button @click="change(1)">+</button>
      <button @click="change(-1)">-</button>
      <button @click="incrementodd">Increment if odd</button>
      <button @click="incrementasync">Increment async</button>
    </div>
  </div>
</template>

<script>
import { mapState,mapGetters,mapMutations,mapActions } from 'vuex'
export default {
  name: 'countvuex',
 computed:{
     ...mapState(['count']),
     ...mapGetters(['isodd'])
 },
 methods:{  
     ...mapMutations(['change','incrementodd','add']),
     ...mapActions(['incrementasync'])
 }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content{
  border:1px solid rgb(94, 89, 89);
  display: flex;
  justify-content: center;
  margin-top: 60px;
  padding: 16px;
  border-left: 0;
  border-right: 0;
}
button{
  padding: 2px 6px;
}
</style>
