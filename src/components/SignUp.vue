<template>
    <div class="header_ls">
    <img src="../assets/logoSM.JPG" alt="logo" class="logo">
    <h1>Sign Up</h1>
   </div>

    <div class="register">
          <input type="text" v-model="name" placeholder="Enter Name" >
            <input type="text" v-model="email" placeholder="Enter Email" >
            <input type="password" v-model="password" placeholder="Enter Password" >
            <button v-on:click="signUp">Sign Up</button>
            <p>Already have an account? <router-link to="/login">Login</router-link></p>
    </div>
    <div> 
        <footer>
        <div class="footer-container">
          <div class="footer-links">
            <a href="#">About</a>
            <a href="#">FAQ</a>
          </div>
        </div>
      </footer></div>
</template>

<script>
import axios from 'axios'
export default {
    name: "SignUp",
    data(){
        return {
            name: '',
            email: '',
            password: ''
        }
    },
    methods:{
        async signUp(){
            let result = await axios.post('http://localhost:3000/users', {
                name: this.name,
                email: this.email,
                password: this.password
            });

            console.log(result);
            if(result.status == 201){
                this.$router.push({name:'Homepage'});
                localStorage.setItem('token', JSON.stringify(result.data));
            }
            else{
                alert('Error in Creating User');
            }
        }
    },
    mounted() {
      let user=localStorage.getItem('token');
      if(user){
        this.$router.push('/');
      }
    }
}
</script>

<style>

</style>
