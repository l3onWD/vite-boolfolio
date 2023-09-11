<script>
/* -----------------------------------------
* RESOURCES
-------------------------------------------*/
/*** COMPONENTS ***/
import PageHeader from './components/PageHeader.vue';
import PageMain from './components/PageMain.vue';
import PageLoader from './components/PageLoader.vue';


/*** DATA ***/
import axios from 'axios';
import { store } from './data/store';


export default {
    components: { PageHeader, PageMain, PageLoader },
    data: () => ({ loaderIsActive: false }),
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
                    store.projects = { data, links };
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
    <!-- Page Header -->
    <PageHeader />

    <!-- Page Main -->
    <PageMain @projects-page-changed="fetchProjects" @projects-filters-changed="filterProjects" />

    <!-- Page Loader -->
    <PageLoader :isActive="loaderIsActive" />
</template>


<style lang="scss">
@use './assets/scss/style.scss';
</style>