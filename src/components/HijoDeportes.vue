<template>
  <div>
    <h1 style="color: red">{{ nombredeporte }}</h1>
    <button @click="seleccionarFavorito">Seleccionar favorito</button>
  </div>
</template>

<script>
export default {
  name: "HijoDeporte",
  props: ["nombredeporte"],
  data() {
    return {};
  },
  mounted() {
    console.log(this.nombredeporte);
  },
  methods: {
    seleccionarFavorito() {
      this.$emit("seleccionarFavoritoParent", this.nombredeporte);
    },
  },
};
</script>

<style></style>
