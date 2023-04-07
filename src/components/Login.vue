<template>
    <div class="header">
        <img src="../assets/logoSM.JPG" alt="logo" class="logo">
        <h1>Login </h1>
       </div>
    
        <div class="register">
            
                <input type="text" v-model="email" placeholder="Enter Email" >
                <input type="password" v-model="password" placeholder="Enter Password" >
                <button v-on:click="login">Log in</button>
                <p>Don't have an account? <router-link to="/signup">Sign up </router-link></p>
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
    name: "Login",
    data(){
        return {
            email: '',
            password: ''
        }
    },
    methods:{
        async login(){
            let results = await axios.get ('http://localhost:3000/users?email='+this.email+'&password='+this.password)
            console.log(results);

            if(results.status == 200 && results.data.length > 0){
                this.$router.push({name:'Homepage'});
                localStorage.setItem('token', JSON.stringify(results.data[0]));
            }
            else{
                alert('Error in Logging in');
            }
            let user = {
                email: this.email,
                password: this.password
            }
            this.$store.dispatch('login', user);
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
