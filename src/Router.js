import { createWebHashHistory, createRouter } from "vue-router";
import PadreDeportes from "./components/PadreDeportes.vue";
import ComicsComponent from "./components/ComicsComponent.vue";
import NumerosPadre from "./components/NumerosPadre.vue";
import NumeroDoble from "./components/NumeroDoble.vue";
import TablaMultiplicar from "./components/TablaMultiplicar.vue";

const Routes = [
  { path: "/", component: PadreDeportes },
  { path: "/comics", component: ComicsComponent },
  { path: "/numeros", component: NumerosPadre },
  { path: "/numeroDoble/:numero?", component: NumeroDoble },
  { path: "/tablaMultiplicar/:numero?", component: TablaMultiplicar },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes: Routes,
});

export default router;
