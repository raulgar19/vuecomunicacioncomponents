<template>
  <div>
    <h1 style="color: blue">Padre deportes</h1>
    <ul style="list-style-type: none">
      <li v-for="sport in deportes" :key="sport">
        <HijoDeportes :nombredeporte="sport" />
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
    };
  },
};
</script>

<style></style>
