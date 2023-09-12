import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router';

// Pages
import HomePage from '../pages/HomePage.vue';
import NotFoundPage from '../pages/NotFoundPage.vue';
import ProjectDetailPage from '../pages/ProjectDetailPage.vue';
import TypeProjectsPage from '../pages/TypeProjectsPage.vue';


// Routes
const router = createRouter({
    history: createWebHistory(),
    linkExactActiveClass: 'active',
    routes: [
        { path: '/', name: 'home', component: HomePage },
        { path: '/projects/:id', name: 'project-detail', component: ProjectDetailPage },
        { path: '/types/:id/projects', name: 'type-projects', component: TypeProjectsPage },
        { path: '/not-found', name: 'not-found', component: NotFoundPage },
        { path: '/:pathMatch(.*)*', redirect: '/not-found' }
    ]

});

export { router };