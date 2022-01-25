<template>
    <div>
        <form @submit.prevent="submitForm">
            <h1>Login</h1>
            <i class="fas fa-users"></i>
            <label for="name">Username</label>
            <input type="email" id="name" placeholder="Enter Username" v-model="name">
            <label for="psw">Password</label>
            <input type="password" id="psw" placeholder="Enter Password" v-model="psw">
            <button type="submit">Login</button>
            <button type="button" @click="signup">Sign Up</button>
            <div v-if="errorshow" class="error">
                <span v-for="error in errors" :key="error">{{error}}</span>
            </div>
        </form>

    </div>
</template>

<script>
export default {
    data() {
        return {
            name: "",
            psw: "",
            errors:[],
            errorshow:false
        }
    },
    methods: {
        validationCheck() {
            this.errors=[];
            if(!this.name){
                this.errors.push("정보를 모두 입력하세요");
                this.errorshow=true;
            }
            else if(!this.psw){
                this.errors.push("정보를 모두 입력하세요")
                this.errorshow=true;
            }
        },
        submitForm() {
            this.validationCheck();
            if(this.errors.length==0){
                // alert(this.name+"님 환영합니다")
                this.$router.push("/todoinput");
            }
        },
        signup(){
          this.$router.push("/signup")
        }
    }
 }
</script>

<style scoped>
h1{
    text-align: center;
}

i{
    display: block;
    text-align: center;
    font-size: 12em;
    color:#c9c9c9;
    margin: 35px;
}

form{
    padding: 35px 25px;
    font-size: 25px;
    width: 600px;
    margin: auto;
}

input[type=email], input[type=password]{
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    box-sizing: border-box;
    border: 1px solid rgb(219, 216, 216);
    border-radius: 5px;
}

input[type=email]:focus, input[type=password]:focus{
    background:#ddd;
    outline:none;
}

button{
    width: 100%;
    padding: 10px;
    margin-top: 13px;
    border: none;
    outline: none;
    border-radius: 5px;
    cursor: pointer;
    background: #89aece;
    color: #fff;
}

button:hover{
    opacity: 0.8;
}

.error{
    font-size: 15px;
    color: red;
    padding: 15px 0;
}
</style>
