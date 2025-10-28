<template>
  <h1>Selección múltiple con checkbox</h1>
  <button @click="generarChecks">GenerarChecks</button>
  <form v-on:submit.prevent="mostrarSeleccionados">
    <div v-for="(numero, index) in numeros" :key="index">
      <label>
        <input
          type="checkbox"
          :value="numero"
          v-model="seleccionados"
          @change="mostrarSeleccionados"
        />
        {{ numero }}
      </label>
    </div>
  </form>
  <h1>La suma de los eleccionados es: {{ this.suma }}</h1>
</template>

<script>
export default {
  name: "SumarCheckBox",
  data() {
    return {
      numeros: [],
      seleccionados: [],
      suma: 0,
    };
  },
  methods: {
    generarChecks() {
      var aux = [];
      for (var i = 0; i < 8; i++) {
        aux.push(parseInt(Math.random() * 100) + 1);
      }
      this.numeros = aux;
    },
    mostrarSeleccionados() {
      this.suma = 0;
      for (var i = 0; i < this.seleccionados.length; i++) {
        this.suma += parseInt(this.seleccionados[i]);
      }
    },
  },
};
</script>

<style></style>
