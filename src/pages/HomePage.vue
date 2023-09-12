<script>
/* -----------------------------------------
* RESOURCES
-------------------------------------------*/
/*** COMPONENTS ***/
import PageLoader from '../components/PageLoader.vue';
import BaseAlert from '../components/base/BaseAlert.vue';
import BasePagination from '../components/base/BasePagination.vue';
import ProjectCard from '../components/projects/ProjectCard.vue';
import ProjectFilterBar from '../components/projects/ProjectFilterBar.vue';


/*** DATA ***/
import axios from 'axios';
import { store } from '../data/store';


export default {
    components: { PageLoader, BasePagination, BaseAlert, ProjectCard, ProjectFilterBar },
    data: () => ({ store, projects: {}, loaderIsActive: false }),
    methods: {

        /**
         * Retrieve Projects from the API
         * @param {String} endpoint 
         * @param {Object} params 
         */
        fetchProjects(endpoint = 'http://127.0.0.1:8000/api/projects', params = {}) {

            // Show Loader
            this.loaderIsActive = true;

            // Fetching
            axios.get(endpoint, { params })
                .then(res => {
                    const { data, links } = res.data;
                    this.projects = { data, links };
                })
                .catch(err => {
                    console.error(err);

                    // Vreate alert message
                    store.alert.type = 'danger';
                    store.alert.title = 'Attenzione!';
                    store.alert.message = 'Il server non risponde.';
                })
                .then(() => {
                    // Hide Loader
                    this.loaderIsActive = false;
                });
        },


        /**
         * Retrieve Projects with filters stored
         */
        filterProjects() {
            const params = {};

            if (store.filters.name) params.filter_name = store.filters.name;

            this.fetchProjects('http://127.0.0.1:8000/api/projects', params);
        }
    },
    created() {
        this.fetchProjects();
    }

}
</script>


<template>
    <!-- Page Main -->
    <main class="container my-4">

        <!-- Alert -->
        <BaseAlert v-if="store.alert.message" v-bind="store.alert" @close="store.alert = {}" />

        <!-- Projects List -->
        <section>

            <h1 class="mb-4">Progetti</h1>

            <!-- Filters -->
            <ProjectFilterBar @projects-filters-changed="filterProjects" />

            <!-- Projects List -->
            <div v-if="projects.data?.length" class="row row-cols-1 g-3">
                <div v-for="project in projects.data" :key="project.id" class="col">
                    <ProjectCard :project="project" />
                </div>
            </div>
            <h3 v-else>Non ci sono progetti</h3>


            <BasePagination v-if="projects.links" :links="projects.links" @change-page="fetchProjects" class="mt-4" />

        </section>

    </main>

    <!-- Page Loader -->
    <PageLoader :isActive="loaderIsActive" />
</template>


<style></style>