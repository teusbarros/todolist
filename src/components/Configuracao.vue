<template>
  <div id="config">
    <button id="button-config" v-on:click="show = !show"><f-icon icon="cogs"></f-icon></button>
    <transition name="fade">
      <div class="colors" v-if="show">
          <b-img class="img-color"  @click="changeColor(1)" left src="https://picsum.photos/125/125/?image=58" alt="Left image"></b-img>
          <b-img class="img-color"  @click="changeColor(2)" left src="https://picsum.photos/125/125/?image=58" alt="Left image"></b-img>
          <b-img class="img-color"  @click="changeColor(3)" left src="https://picsum.photos/125/125/?image=58" alt="Left image"></b-img>
        <p @click="limpar">Limpar todos os dados</p>
      </div>
    
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    icon: String,
  },
  data(){
      return{
          show: false
      }
  },
  methods:{
      changeColor: function(e){
          alert(e);
      },
      limpar: function(e){
          alert(e);
      }
  }
};
</script>

<style>
p{
    height: 25px;
    width: auto;

}
#button-config{
    width: 30px;
    height: 30px;
    margin-right: 10px;
    margin-top: 1px;
    display: inline-block;
    float: left;
}
#config{
    display: inline-block;
    float: left;
    position: relative;
    margin-top: -60px;
}
.colors{
    background-color: #fff;
    display: inline-block;
    padding: 2px;
    vertical-align: middle;
    /* float: left; */
}
.img-color{
    cursor: pointer;
}
.colors .img-color{
    width: 30px;
    height: 30px;
    margin-right: 25px;
    display: inline-block;

}
.fade-enter-active, .fade-leave-active {
  transition: opacity 1s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>