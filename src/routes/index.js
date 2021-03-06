import Vue from 'vue'
import VueRouter from "vue-router" 
import Login from "../components/Login.vue"
import SignUp from "../components/SignUp.vue"
import TodoInput from "../components/TodoInput.vue"
import GoLogin from "../components/GoLogin.vue"

Vue.use(VueRouter);

const router = new VueRouter({
    routes:[
     {
      path:"/",
      name:"login",
      component:Login,
    },
    {
      path:"/signup",
      name:"signup",
      component: SignUp
    },
    {
      path:"/todoinput",
      name:"todoinput",
      component: TodoInput
    },
    {
      path:"/gologin",
      name:"gologin",
      component: GoLogin
    }
  ],
  mode:"history"
})
export default router;