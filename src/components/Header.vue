<template>
  <div class="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/assistent">Assistent</router-link>
    <a v-on:click="logout">Logout</a>
  </div>
</template>

<script>
export default {
    name: "Header",
    methods: {
        logout(){
            localStorage.removeItem('token');
            this.$router.push('/login');
        }
    }
}
</script>

<style>
.nav{
    background-color: #333;
    overflow: hidden;
    position: fixed;
    top: 0;
    left: 0;
    width:100%;
    background-color: #2c3e50;
}
.nav a{
    display: inline-block;
    color: #f2f2f2;
    padding: 17px 14px;
    text-align: center;
    text-decoration: none;
    margin-right:40px;
    font-size: 24px;
    margin-top: 5px;
}
.nav a:hover {
    background-color: #ddd;
    color: black;
  }
</style>