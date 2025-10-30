<template>
  <div>
    <ul id="menu">
      <li><router-link to="/">Deportes</router-link> |{{ " " }}</li>
      <li><router-link to="/comics">Comics</router-link> |{{ " " }}</li>
      <li><router-link to="/numeros">Números</router-link> |{{ " " }}</li>
      <li><router-link to="/numeroDoble">Doble SIN</router-link> |{{ " " }}</li>
      <li v-for="num in numeros" :key="num">
        <router-link :to="'/numeroDoble/' + num">Doble {{ num }}</router-link>
        |{{ " " }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "MenuComponent",
  data() {
    return {
      numeros: [77, 33, 22],
    };
  },
};
</script>

<style>
ul#menu li {
  display: inline;
}
</style>
