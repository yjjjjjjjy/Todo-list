<template>
    <div class="wrap">
        <TodoHeader></TodoHeader>
        <div class="inputBox"> <!--할일 추가-->
            <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo" placeholder="Add task">
            <span class="addContainer" v-on:click="addTodo">
                <i class="fas fa-plus-circle"></i>
            </span>
        </div>
        <TodoList v-bind:propsdata="todoItems" v-on:removeTodo="removeTodo"></TodoList>
        <TodoFooter></TodoFooter>
    </div>
</template>

<script>
import TodoHeader from "./TodoHeader.vue"
import TodoList from "./TodoList.vue"
import TodoFooter from "./TodoFooter.vue"
export default {
    components: {
        TodoHeader,
        TodoList,
        TodoFooter
   },
    created(){
        if(localStorage.length>0){
            for(var i =0; i<localStorage.length; i++){
                if(localStorage.key(i)!="loglevel:webpack-dev-server"){
                    this.todoItems.push(localStorage.key(i));
                }
            }
        }
    },
    data() {
       return {
           newTodoItem: "",
           todoItems:[]
       }
    },
    methods:{
        addTodo() {
           if(this.newTodoItem!==""){
                var value= this.newTodoItem && this.newTodoItem.trim(); //앞뒤 공백 제거
                localStorage.setItem(value, value);
                this.todoItems.push(value)
                this.clearInput();
            }
        },
        clearInput() {
            this.newTodoItem="";
        },
        removeTodo(value) {
            this.todoItems.splice(value, 1);
        }
    }
}
</script>

<style scoped>
.wrap{ 
    width: 800px;
    margin: auto;
}

.inputBox{
    background: #fff;
    height: 50px;
    line-height: 50px;
    border-radius: 5px;
}

input{
    width: 300px;
    border:none;
    font-size: 0.9rem;
    cursor: pointer;
    margin-left: 30px;
}

input::placeholder{
    font-size: 1.1rem;
    text-align: center;
}

input:focus{
    outline: none;
}

.addContainer{
    float: right;
    width: 4rem;
} 

.addContainer i{
    font-size: 30px;
    vertical-align: middle;
    cursor: pointer; 
    color:#6AFA0C;
}

</style>