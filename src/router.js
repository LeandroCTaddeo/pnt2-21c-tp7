import Vue from 'vue'
import VueRouter from 'vue-router'

import FormularioAv from './componentes/FormularioAv.vue'
import HttpClient from './componentes/HttpClient.vue'

Vue.use(VueRouter)

export const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/formularioAv', component: FormularioAv },
        { path: '/http-client', component: HttpClient },
    ]
})