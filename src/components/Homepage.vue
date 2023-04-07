<template>
  <Header/>
   <div class="homepage">
       <h1>Hello {{name}}</h1> 
    </div>
</template>

<script>
import Header from './Header.vue'
export default {
    name: "Homepage",
    components: {
        Header
    },

    mounted() {
      let user=localStorage.getItem('token');
      this.name=JSON.parse(user).name;

      if(!user){
        this.$router.push('/signup');
      }
    }
}
</script>

<style>
.homepage{
    position:fixed;
    top:0;
    left:0;
    text-align: center;
    margin-top: 15px;
    margin-left: 15px;
}

</style>