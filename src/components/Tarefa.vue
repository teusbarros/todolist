<template>
  <div class="tarefa" :id="id">
    <input class="aCheck" v-if="!isConclued" type="checkbox" @change="concluido" />
    <input class="aCheck" v-else type="checkbox" @change="concluido" checked />
    <strong>{{conteudo}}</strong>
    <f-icon class="aIcon" v-if="isConclued" icon="trash" @click="apagarTarefa" />
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
    concluida: Boolean,
  },
  methods: {
    concluido: function () {
      this.isConclued = !this.isConclued;
      this.$emit("concluirTarefa", { referencia: this.id });
    },
    apagarTarefa: function () {
      this.$emit("apagaTarefa", { referencia: this.id });
    },
  },
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
.tarefa {
  height: 35px;
  width: 100%;
  margin: auto;
  margin-top: 5px;
  padding: 4% 3px 3px 3px;
  background-color: #a3a3a3;
  vertical-align: middle;
  font: bold 14px "Helvetica Neue", Helvetica, Arial, sans-serif;
}
.tarefa:hover {
  height: 35px;
  width: 100%;
  margin: auto;
  margin-top: 5px;
  padding: 4% 3px 3px 3px;

  background-color: #5d5d5d;
  vertical-align: middle;
  font: bold 14px "Helvetica Neue", Helvetica, Arial, sans-serif;
}
input.aCheck {
  float: left;
}
.aIcon {
  float: right;
  cursor: pointer;
}
strong {
  cursor: move;
  float: left;
}
</style>