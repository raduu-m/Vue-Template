<script>
export default {
    name: "App",
}
</script>

<template>
   <router-view />
  </template>

  <style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: whitesmoke;
  }
  .header {
    text-align: center;
    color: white;
    padding: 30px;

   }
   body {
     padding:0;
      margin:0;
   }
   .logo {
     margin-right: auto;
     height: 100px;
     width: 100px;
   }
   
   .register input, .login input {
  
     padding: 15px;
     display: block;
     margin-bottom: 20px;
     margin-right: auto;
     margin-left: auto;
     border: 2px solid white;
   }
   
   .register button, .login button {
     height: 40px;
     width: 90%;
     background-color: #f1c40f;
     color: white;
     font-size: 20px;
     border: none;
     cursor: pointer;
     margin-bottom: 20px;
     margin-right: auto;
     margin-left: auto;
   }
  
     .register button:hover {
         background-color: #f39c12;
     }
  
     footer {
         position: fixed;
         bottom: 0;
         
         color: white;
         padding: 30px;
         text-align: center;
       }
     
  
       .footer-links a {
         color: white;
         text-decoration: none;
         margin-right: 40px;
       }
       
       .footer-links a:hover {
         text-decoration: underline;
       }
  </style>