import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router';

// Pages
import HomePage from '../pages/HomePage.vue';


// Routes
const router = createRouter({
    history: createWebHistory(),
    linkExactActiveClass: 'active',
    routes: [
        { path: '/', name: 'home', component: HomePage }
    ]
});

export { router };