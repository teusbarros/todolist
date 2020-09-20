<template>
  <div id="app">
    <div id="todolist">
      <div id="header">
        <h1>TODO List</h1>
        <h5>{{timestamp}}</h5>
        <hr />
      </div>
      <div id="tarefas">
        <draggable v-model="tarefas" @start="drag=true" @end="onEnd">
          <transition-group type="transition" name="flip-list">
            <div :id="tarefa.id" v-for="tarefa in tarefas" :key="tarefa.id">
              <Tarefa
                :id="tarefa.id"
                :conteudo="tarefa.conteudo"
                :concluida="tarefa.concluida"
                @concluirTarefa="concluir"
                @apagaTarefa="apagar"
              ></Tarefa>
            </div>
          </transition-group>
        </draggable>
      </div>
      <div id="insert">
        <hr />
        <input
          id="insertText"
          v-model="tarefaField"
          placeholder="Adicionar nova tarefa..."
          @keyup="adicionar"
          maxlength="60"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Tarefa from "./components/Tarefa";
import draggable from "vuedraggable";
export default {
  name: "App",
  components: {
    Tarefa,
    draggable,
  },
  data() {
    return {
      tarefas: [],
      timestamp: "",
      oldIndex: "",
      newIndex: "",
    };
  },
  methods: {
    adicionar: function (event) {
      if (event.keyCode === 13) {
        if (this.tarefaField.length > 1) {
          var data = Date.now().toString();
          this.tarefas.push({
            id: data,
            conteudo: this.tarefaField,
            concluida: false,
          });
          this.tarefaField = "";
        }
      }
      return false;
    },
    apagar: function (e) {
      this.tarefas = this.tarefas.filter((tarefa) => tarefa.id != e.referencia);
    },
    concluir: function (e) {
      const tarefasUpdated = this.tarefas;
      const tarefa = {};
      tarefasUpdated.forEach((t) => {
        if (t.id == e.referencia) {
          tarefa.concluida = !t.concluida;
          tarefa.id = t.id;
          tarefa.conteudo = t.conteudo;
        }
      });
      this.tarefas = this.tarefas.filter((tarefa) => tarefa.id != e.referencia);
      if (tarefa.concluida == false) {
        this.tarefas.unshift(tarefa);
      } else {
        this.tarefas.push(tarefa);
      }
    },
    time: function () {
      const today = new Date();
      const time =
        today.getHours() +
        ":" +
        (today.getMinutes() < 10 ? "0" : "") +
        today.getMinutes() +
        ":" +
        (today.getSeconds() < 10 ? "0" : "") +
        today.getSeconds();
      const Time = time;
      this.timestamp = Time;
      setInterval(this.time, 1000);
    },
    onEnd: function (evt) {
      console.log(evt);
      this.oldIndex = evt.oldIndex;
      this.newIndex = evt.newIndex;
    },
  },
  mounted: function () {
    // this.time()
    // consumindo muita memória
    if (localStorage.antigasTarefas) {
      this.tarefas = JSON.parse(localStorage.antigasTarefas);
    }
  },
  watch: {
    tarefas(newTarefas) {
      localStorage.antigasTarefas = JSON.stringify(newTarefas);
    },
  },
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
