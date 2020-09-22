<template>
  <div id="config">
    <button id="button-config" v-on:click="show = !show">
      <f-icon icon="cogs"></f-icon>
    </button>
    <transition name="bounce">
      <div class="colors" v-if="show" @click="limpar">
        <p>Apagar todos os dados</p>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    icon: String,
  },
  data() {
    return {
      show: false,
    };
  },
  methods: {
    limpar: function () {
      var ok = confirm("Você deseja excluir todas as tarefas da lista?");
      if (ok) {
        this.$emit("limpaTudo");
      }
    },
  },
};
</script>

<style>
p {
  height: 25px;
  width: auto;
  background-color: #e9e9e9;
  border: 1px black;
  border-style: solid;
}
#button-config {
  width: 30px;
  height: 30px;
  margin-right: 2px;
  margin-top: 1px;
  display: inline-block;
  float: left;
}
#config {
  display: inline-block;
  float: left;
  position: relative;
  margin-top: -60px;
}
.colors {
  margin-top: 1px;
  background-color: #e9e9e9;
  display: inline-block;
  padding: 2px;
  vertical-align: middle;
}
.img-color {
  cursor: pointer;
}
.colors .img-color {
  width: 30px;
  height: 30px;
  margin-right: 25px;
  display: inline-block;
}
.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>