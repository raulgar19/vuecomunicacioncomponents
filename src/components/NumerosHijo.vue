<template>
  <h1>Número hijo: {{ this.num }}</h1>
  <button @click="sumarNumeros">Sumar</button>
</template>

<script>
export default {
  props: ["num", "sumar"],
  methods: {
    sumarNumeros() {
      this.$emit("sumar", this.num);
    },
  },
};
</script>

<style></style>
