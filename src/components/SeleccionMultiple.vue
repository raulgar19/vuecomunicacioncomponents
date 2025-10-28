<template>
  <div class="container">
    <h1>Selección de Deportes</h1>
    <form>
      <label>Selecciona tus deportes favoritos:</label>
      <multiselect
        v-model="deportesSeleccionados"
        :options="deportes"
        :multiple="true"
        :close-on-select="false"
        :clear-on-select="false"
        :preserve-search="true"
        placeholder="Elige uno o varios deportes"
      />
      <button type="button" @click="confirmarSeleccion" class="btn-confirmar">
        Confirmar Selección
      </button>
    </form>

    <div v-if="deportesConfirmados.length > 0" class="resultado">
      <h3>Deportes seleccionados:</h3>
      <ul>
        <li v-for="(deporte, index) in deportesConfirmados" :key="index">
          <strong>{{ deporte }}</strong>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Multiselect from "vue-multiselect";

export default {
  name: "SeleccionMultiple",
  components: {
    Multiselect,
  },
  data() {
    return {
      deportesSeleccionados: [],
      deportesConfirmados: [],
      deportes: [
        "Fútbol",
        "Baloncesto",
        "Tenis",
        "Natación",
        "Ciclismo",
        "Voleibol",
        "Atletismo",
        "Golf",
        "Rugby",
        "Balonmano",
        "Boxeo",
        "Escalada",
        "Esgrima",
        "Hockey",
        "Kárate",
        "Paddle",
        "Surf",
        "Taekwondo",
      ],
    };
  },
  methods: {
    confirmarSeleccion() {
      this.deportesConfirmados = [...this.deportesSeleccionados];
    },
  },
};
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>

<style scoped></style>
