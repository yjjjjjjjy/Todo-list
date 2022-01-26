<template>
    <div>
        <form @submit.prevent="submitForm">
            <h1>Sign Up</h1>
            <hr>
            <label for="email">Email</label><i class="far fa-envelope"></i>
            <input type="email" id="email" placeholder="Enter Email" v-model="form.email">
            <label for="psw">Password</label><i class="fas fa-key"></i>
            <input type="password" id="psw" placeholder="Enter Password" v-model="form.password">
            <div>
                <button class="signupbtn" type="submit">Sign Up</button>
                <button class="cancelbtn" type="button" @click="cancel">Cancel</button>
            </div>
            <div v-if="errorshow" class="error">
               <span v-for="error in errors" v-bind:key="error">{{error}}</span>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return{
           form:{ 
            email:"",
            password:""
           },
            errors:[],
            errorshow: false,
        }
    },
    methods: {
        validationCheck() {
            var re=/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
            var re_pw=/^.*(?=.{6,20})(?=.*[0-9])(?=.*[a-zA-Z]).*$/;
            this.errors=[];
            if(!this.form.email){
                this.errors.push("정보를 모두 입력하세요");
                this.errorshow=true;
            }
            else if(!re.test(this.form.email)){
                this.errors.push("이메일 형식을 확인하세요");
                this.errorshow=true;
            }
            else if(!this.form.password){
                this.errors.push("정보를 모두 입력하세요");
                this.errorshow=true;
            }
            else if(!re_pw.test(this.form.password)){
                this.errors.push("비밀번호를 영문, 숫자 혼합하여 6~20자리 이내로 입력하세요");
                this.errorshow=true;
            }
        },
        submitForm() {
            this.validationCheck();
            console.log(this.errors.length);
            if(this.errors.length==""){
                alert(this.form.email+"님 환영합니다");
                this.$router.push("/");
            }
        },
        cancel(){
            this.$router.push("/");
        }
    }
}
</script>

<style scoped>
h1{
    text-align: center;
}

hr{
    border: 1px solid #f1f1f1;
    margin-bottom: 25px;
}

form{
    padding: 35px 25px;
    font-size: 25px;
    width: 600px;
    margin: auto;
}

label+i{
    margin-left: 5px;
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
    background: #ddd;
    outline: none;
}

button{    
    padding: 10px;
    margin-top: 13px;
    border: none;
    outline: none;
    cursor: pointer;
    background: #89aece;
    color: #fff;
}

button:hover{
    opacity: 0.8;
}

.cancelbtn{
    background: #f44336;
}

.signupbtn{
    background:#89aece;
}

.cancelbtn, .signupbtn{
    width: 50%;
    float: left;
}

.error{
    clear: both;
    font-size: 15px;
    color: red;
    padding: 15px 0;
}

</style>