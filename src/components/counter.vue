<template>
  <div class="content">
    <div class="example">
      Clicked: {{counter}} times,counter is {{isodd}}.
      <button @click="change(1)">+</button>
      <button @click="change(-1)">-</button>
      <button @click="incrementodd">Increment if odd</button>
      <button @click="incrementasync">Increment async</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'counter',
  data () {
    return {
      counter:0
    }
  },
methods:{
  change(value){
    if(this.counter<=0 && value<0) return
    this.counter += value
  },
  incrementodd(){
    if(this.counter % 2 ===0){
      return 
    }else{
      this.counter++;
    }
  },
  incrementasync(){
    setTimeout(()=>{
      this.counter++
    },1000)
  }
},
computed:{
  isodd(){
    if(this.counter % 2 ===0){
      return 'even'
    }else{
      return 'odd'
    }
  }
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
