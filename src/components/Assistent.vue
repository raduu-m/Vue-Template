<template>

  <div class="nav">
  <router-link to="/">Home</router-link>
  <router-link to="/assistent">Assistent</router-link>
  <a v-on:click="logout">Logout</a>
</div>

    <div id="chatContainer">
      <div class="chatHeader">
        <h4>Gheorghe</h4>
      </div>
      <div class="chatBody">
        <div class="messages" v-for="message in messages" :key="message.id">
          <div class="messageRow user" v-if="message.id % 2 == 0">
            <div class="message user">
              <p>{{ message.message }}</p>
            </div>
          </div>
          <div class="messageRow bot" v-else>
            <div class="message bot">
              <p>{{ message.message }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="chatFooter">
        <form @submit.prevent="sendMessage()">
          <input v-model="messageContent" id="createMessage" />
          <input type="submit" />
        </form>
      </div>
    </div>
  </template>
  
  <script>
  
  import axios from "axios";
  import { ref } from "vue";
  export default {
    name: "Assistent",
    methods: {
        logout(){
            localStorage.removeItem('token');
            this.$router.push('/login');
        }
    },
    setup() {
      const messages = ref([]),
        messageContent = ref("");
      
      function sendMessage() {
        if (messageContent.value == "") return;
        createMessage(messageContent.value);
        getResponse(messageContent.value);
        messageContent.value = "";
      }
      //Create a message
      function createMessage(message) {
        let id = 0;
        if (messages.value[messages.value.length - 1]) {
          id = messages.value[messages.value.length - 1].id + 1;
        }
        messages.value.push({
          id: id,
          message: message,
        });
      }
      async function getResponse(message) {
        const postData = {
          message: message,
        };
        const { data } = await axios.post("http://localhost:8000/chat", postData);
        const { response } = data;
        createMessage(response);
      }
      return { messages, messageContent, sendMessage };
    },
  };
  </script>
  
  <style>

  #chatContainer {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    background-color:grey;
    max-width: 700px;
    max-height: 500px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }

  .chatHeader {
    text-align: center;
    margin-bottom: 20px;
  }

  .chatHeader h4 {
    margin: 0;
    font-size: 24px;
    font-weight: 600;
    color: #333;
  }

  .chatBody {
    height: 300px;
    overflow-y: scroll;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 10px;
    margin-bottom: 20px;
  }

  .messageRow {
    margin-bottom: 10px;
  }

  .message {
    padding: 10px;
    border-radius: 5px;
  }

  .user .message {
    background-color: #4caf50;
    text-align: right;
  }

  .bot .message {
    background-color: b;
    text-align: left;
  }

  .chatFooter {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  #createMessage {
    flex: 1;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
  }

  input[type="submit"] {
    background-color: #4caf50;
    color: #fff;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  input[type="submit"]:hover {
    background-color: #3e8e41;
  }
</style>