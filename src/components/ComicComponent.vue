<template>
  <div>
    <h2 style="color: blue">{{ comic.titulo }}</h2>
    <button @click="mostrarFavorito()">Seleccionar favorito</button>
    <br />
    <button @click="deleteComic()" class="rojo">Eliminar Comic</button>
    <p>{{ comic.descripcion }}</p>
    <img :src="comic.imagen" alt="" />
    <h4 :class="{ rojo: comic.year <= 2000, verde: comic.year > 2000 }">
      Year {{ comic.year }}
    </h4>
  </div>
</template>

<script>
export default {
  name: "ComicComponent",
  props: ["comic", "index"],
  methods: {
    mostrarFavorito() {
      this.$emit("mostrarFavorito", this.comic);
    },
    deleteComic() {
      this.$emit("deleteComic", this.index);
    },
  },
};
</script>

<style>
@import "../assets/css/comics.css";
</style>
