import { createRouter, createWebHashHistory } from 'vue-router';

// Pages
import HomePage from '../pages/HomePage.vue';


// Routes
const router = createRouter({
    routes: [
        { path: '/', name: 'home', component: HomePage }
    ]
});

export { router };