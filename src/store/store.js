import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex);

const store = new Vuex.Store({
    //data
    state:{
        todoItems:[]
    },
    //methods
    actions:{
        addTodo({commit}, todoItem){
            commit("ADD_TODO", todoItem)
        },
        removeTodo({commit}, index){
            commit("REMOVE_TODO", index)
        }
    },
    mutations:{
        ADD_TODO(state, todoItem){
            state.todoItems.push(todoItem)
        },
        REMOVE_TODO(state, index){
            state.todoItems.splice(index, 1)
        }
    },
    //computed
    getters:{

    }
});
export default store;