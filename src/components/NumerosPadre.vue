<template>
  <h1>Numeros Padre</h1>
  <h3 style="color: red">La suma es: {{ suma }}</h3>
  <button @click="nuevoNumero">Nuevo número</button>
  <div v-for="num in numeros" :key="num">
    <NumerosHijo :num="num" v-on:sumar="sumar" />
  </div>
</template>

<script>
import NumerosHijo from "./NumerosHijo.vue";

export default {
  components: { NumerosHijo },
  data() {
    return {
      numeros: [14, 5, 20, 6],
      suma: 0,
    };
  },
  methods: {
    nuevoNumero() {
      var num = parseInt(Math.random() * 100) + 1;
      this.numeros.push(num);
    },

    sumar(num) {
      this.suma += num;
    },
  },
};
</script>

<style></style>
