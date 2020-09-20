<template>
  <div class="main-div" :id="id">
    <span v-if="!isConclued">
      <input type="checkbox" @change="concluido" />
      {{conteudo}}
    </span>
    <span v-else>
      <strike>
        <input type="checkbox" @change="concluido" checked />
        {{conteudo}}
      </strike>
      <f-icon icon="trash" @click="apagarTarefa" />
    </span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isConclued: false,
    };
  },
  props: {
    id: String,
    conteudo: String,
  },
  methods: {
    concluido: function () {
      this.isConclued = !this.isConclued;
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
span {
  background-color: #a3a3a3;
  height: 75px;
  min-width: 100%;
  vertical-align: middle;
  margin: 10px;
  padding: 2%;
  font: bold 14px "Helvetica Neue", Helvetica, Arial, sans-serif;
}
span:hover {
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