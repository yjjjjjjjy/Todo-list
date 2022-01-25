<template>
  <div>
    <button class="logout" v-on:click="logout">로그아웃</button>
  </div>
</template>

<script>
export default {
  methods:{
    logout(){
      this.$router.push("/")
    }
  }
}
</script>

<style>
.logout{
  float:right;
  background: #fff;
  color: #6F7070;
  font-size: 12px;
  font-weight: bold;
  outline: none;
  border: none;
  border-radius: 10px;
  padding: 10px 15px;
  cursor: pointer;
}

.logout:hover{
  background: #ccd0d4;
  color: #fff;
}
</style>