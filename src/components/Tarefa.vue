<template>
  <div class="main-div" :id="id">
    <span class="tarefa" v-if="!isConclued">
      <input type="checkbox" @change="concluido" />
      <strong>{{conteudo}}</strong>
    </span>
    <span class="tarefa" v-else>
      <strike>
        <input type="checkbox" @change="concluido" checked />
        <strong>{{conteudo}}</strong>
      </strike>
      <f-icon icon="trash" @click="apagarTarefa" />
    </span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isConclued: this.concluida,
    };
  },
  props: {
    id: String,
    conteudo: String,
    concluida: Boolean
  },
  methods: {
    concluido: function () {
      this.isConclued = !this.isConclued;
      this.$emit("concluirTarefa", { referencia: this.id });
    },
    apagarTarefa: function () {
      this.$emit("apagaTarefa", { referencia: this.id });
    },
  }
};
</script>

<style>
p {
  background-color: aqua;
  height: 50px;
  min-width: 100%;
  vertical-align: middle;
  font: bold 12px "Helvetica Neue", Helvetica, Arial, sans-serif;
  display: table-cell;
  vertical-align: middle;
  padding-left: 30px;
  padding-right: 30px;
}
f-icon {
  cursor: pointer;
}
strong{
  cursor: move;

}
span.tarefa {
  background-color: #a3a3a3;
  height: 75px;
  min-width: 100%;
  vertical-align: middle;
  margin: 10px;
  padding: 2%;
  font: bold 14px "Helvetica Neue", Helvetica, Arial, sans-serif;
}
span.tarefa:hover {
  background-color: #5d5d5d;
  height: 75px;
  min-width: 100%;
  vertical-align: middle;
  margin: 10px;
  padding: 2%;
  font: bold 14px "Helvetica Neue", Helvetica, Arial, sans-serif;
}
.main-div {
  margin-top: 25px;
  text-align: center;
}
</style>