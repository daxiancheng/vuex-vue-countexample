import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state:{  //类似于Vue里面的data
        count:0
    },
    getters:{  //类似于Vue里面的computed,接受state作为第一个参数
        isodd(state){
            if(state.count % 2 ===0){
              return 'even'
            }else{
              return 'odd'
            }
          }
    },
    mutations:{ //类似于methods，接受state作为第一个参数，这是唯一更改state状态的方法，store.commit('xxx')进行提交
    change(state,value){
        if(state.count<=0 && value<0) return
        state.count += value
      },
      incrementodd(state){
        if(state.count % 2 ===0){
          return 
        }else{
            state.count++;
        }
      },
      add(state){
        state.count++;
      }
    },
    actions:{ //用来提交mutation，进行数据的异步操作
        incrementasync({commit}){
            setTimeout(()=>{
              commit('add')
            },1000)
          }
    }
})

export default store