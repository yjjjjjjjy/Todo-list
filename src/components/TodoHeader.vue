<template>
    <div>  
        <h1>My Todo :)</h1>
        <span>Today {{date}}</span>
    </div>
</template>

<script>
import dayjs from "dayjs"
export default {
    data() {
        return {
            date: dayjs().format("YY/MM/DD")
        }
    }
}
</script>

<style scoped>
h1{
    color:#EFA80C;
    display: inline-block;
    position: relative;
    left: -25%;
}

span{
    float: right;
    position: relative;
    top: 35px;
    margin: 0 15px;
    padding: 0 20px;
    color: #6F7070;
    font-weight: bold;
}
</style>>
