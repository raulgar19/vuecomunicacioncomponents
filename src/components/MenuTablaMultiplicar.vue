<template>
  <div>
    <ul id="menu" v-for="num in numeros" :key="num">
      <li>
        <router-link :to="'/tablaMultiplicar/' + num"
          >Tabla del {{ num }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "MenuTablaMultiplicar",
  data() {
    return {
      numeros: [],
    };
  },
  mounted() {
    var aux = [];
    for (var i = 0; i < 5; i++) {
      var num = parseInt(Math.random() * 100) + 1;
      aux.push(num);
    }

    this.numeros = aux;
  },
};
</script>

<style>
ul#menu li {
  display: inline;
}
</style>
