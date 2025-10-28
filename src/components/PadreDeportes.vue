<template>
  <div>
    <h1 style="color: blue">Padre deportes</h1>
    <h2 style="background-color: yellow" v-if="favorito">
      Su deporte favorito es {{ favorito }}
    </h2>
    <ul style="list-style-type: none">
      <li v-for="sport in deportes" :key="sport">
        <HijoDeportes
          :nombredeporte="sport"
          v-on:seleccionarFavoritoParent="seleccionarFavoritoParent"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import HijoDeportes from "./HijoDeportes.vue";

export default {
  name: "PadreDeportes",
  components: {
    HijoDeportes,
  },
  data() {
    return {
      deportes: ["Curling", "Peonza", "Canicas", "Bolos"],
      favorito: null,
    };
  },
  methods: {
    seleccionarFavoritoParent(favorito) {
      this.favorito = favorito;
    },
  },
};
</script>

<style></style>
