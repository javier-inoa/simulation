import { createRouter, createWebHistory } from "vue-router";
import ProyectOneMain from '../pages/proyectOne/ProyectOneMain.vue';
import Start from "../pages/Start.vue";
import ProyectTwoMain from "../pages/proyectTwo/ProyectTwoMain.vue";

const routes = [
    {
        path: '/',
        name: 'Start',
        component: Start
    },

    {
        path: '/proyect/one',
        name: 'ProyectOne',
        component: ProyectOneMain
    },

    {
        path: '/proyect/two',
        name: 'ProyectTwo',
        component: ProyectTwoMain
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router