<template>
  <div>
      <div class="finish">
            <i class="fas fa-check-circle"></i>
            <div class="comment">회원가입이 완료되었습니다.</div>
            <button class="login" v-on:click="login">LOGIN 하러가기</button>
      </div>   
  </div>
</template>

<script>
export default {
    methods:{
        login() {
            this.$router.push("/");
        }
    }
}
</script>

<style>
.finish{
    margin: auto;
    margin-top: 50px;
    width: 500px;
    height: 300px;
    background: #fff;
    box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
    border-radius: 10px;
}

.finish i{
    font-size: 3em;
    margin-top: 50px;
    color: #FFA500;
}

.finish .comment{
    margin: 30px 0;
    font-size: 25px;
    font-weight: 600;
    color: rgba(0, 0, 0, 0.8);
}

.finish .login{
    all: unset;
    border-radius: 5px;
    box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
    padding: 10px 0;
    margin: 30px 0;
    width: 150px;
    background: rgba(0, 0, 0, 0.2);
    color: #fff;
    font-size: 17px;
    font-weight: bold;
    cursor: pointer;
}
</style>