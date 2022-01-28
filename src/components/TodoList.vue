<template>
  <div>
    <!-- 할일 목록 -->
    <ul>
      <li v-for="(todoItem, index) in todoItems" v-bind:key="todoItem">
        <i class="far fa-square"></i>
        {{todoItem}}
        <!-- 할일 삭제 -->
        <span class="removeBtn" v-on:click="removeTodo(todoItem, index)">
          <i class="fas fa-trash-alt"></i>
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  // props:["propsdata"],
  data() {
    return {
      todoItems:this.$store.state.todoItems
    }
  },
  //인스턴스 생성되자마자 뷰 데이터에 접근
  // created(){
  //   if(localStorage.length>0){
  //     for(var i =0; i<localStorage.length; i++){
  //       if(localStorage.key(i)!="loglevel:webpack-dev-server"){
  //         this.todoItems.push(localStorage.key(i));
  //       }
  //     }
  //   }
  // },
  methods: {
    removeTodo(todoItem, index){
      localStorage.removeItem(todoItem); //localstorage에서 데이터를 삭제하는 removeItem()API
      // this.$emit("removeTodo", index);
      this.$store.dispatch("removeTodo", index);
      // this.todoItems.splice(index, 1); //배열의 특정 index를 삭제하는 splice()API
    }
  }
}
</script>

<style>
ul{
  list-style: none;
  padding-left: 0px;
  text-align: left;  
}

li{
  background: #fff;
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
  padding: 0 25px;
  margin: 10px 0;
  color:rgb(62, 66, 73);
}

.removeBtn{
  color: #D6110B;
  float: right;
  width: 1rem;
  cursor: pointer;
}
</style>