<template>
  <div id="app">
    <div id="todolist">
      <div id="header">
        <h1>TODO List</h1>
        <h5>{{timestamp}}</h5>
        <hr />
      </div>
      <div id="tarefas">
        <div v-for="tarefa in tarefas" :key="tarefa.id">
          <Tarefa :id="tarefa.id" :conteudo="tarefa.conteudo" @apagaTarefa="apagar"></Tarefa>
        </div>
      </div>
      <div id="insert">
        <hr />
        <input
          id="insertText"
          v-model="tarefaField"
          placeholder="Adicionar nova tarefa..."
          @keyup="adicionar"
          maxlength="60"
        >
      </div>
    </div>
  </div>
</template>

<script>
import Tarefa from "./components/Tarefa";

export default {
  name: "App",
  components: {
    Tarefa,
  },
  data() {
    return {
      tarefas: [{ id: "1", conteudo: "Aqui vai o conteúdo. Ele deve ter cerca de 55 caracteres." }],
      timestamp: ""
    };
  },
  methods: {
    adicionar: function (event) {
      if (event.keyCode === 13) {
        if (this.tarefaField.length > 1) {
          this.tarefas.push({ id: Date.now(), conteudo: this.tarefaField });
          this.tarefaField = "";
        }
      }
      return false;
    },
    apagar: function (e) {
      this.tarefas = this.tarefas.filter((tarefa) => tarefa.id != e.referencia);
    },
    time: function () {
      const today = new Date();
      const time = today.getHours() + ":" + (today.getMinutes() < 10? '0':'') + today.getMinutes() + ":" + (today.getSeconds() < 10? '0':'') + today.getSeconds();
      const Time =  time;
      this.timestamp = Time;
      setInterval(this.time, 1000)
    },
  },
  mounted: function(){
    // this.time()
    // consumindo muita memória
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
}
#tarefas {
  margin: auto;
  height: 400px;
  overflow: auto;
  overflow-x: hidden;
  padding-right: 15px;
}
#todolist {
  width: 500px;
  height: 600px;
  margin: auto;
  margin-top: 60px;
  margin-bottom: 60px;
  border: 2px black;
  border-style: solid;
  background-color: #e9e9e9;
  box-shadow: 10px 18px #5d5d5d;
}
#insert {
  max-height: 200px;
}
#insertText {
  margin-top: 10px;
  width: 80%;
  height: 20px;
}
#header {
  max-height: 200px;
}
body {
  margin: 0;
  padding: 0;
  text-align: center;
  background-color: #a3a3a3;
}
</style>
