<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>Operación</th>
          <th>Resultado</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(fila, index) in operaciones" :key="index">
          <td>{{ fila.operacion }}</td>
          <td>{{ fila.resultado }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "TablaMultiplicar",
  data() {
    return {
      operaciones: [],
    };
  },
  methods: {
    createTabla() {
      this.operaciones = [];

      const num = parseInt(this.$route.params.numero);

      for (let i = 1; i <= 10; i++) {
        const fila = {
          operacion: num + " * " + i,
          resultado: i * num,
        };
        this.operaciones.push(fila);
      }
    },
  },
  mounted() {
    this.createTabla();
  },
  watch: {
    "$route.params.numero"(newVal, oldVal) {
      if (newVal !== oldVal) {
        this.createTabla();
      }
    },
  },
};
</script>
