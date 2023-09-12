<script>
/* -----------------------------------------
* RESOURCES
-------------------------------------------*/
/*** COMPONENTS ***/
import PageLoader from '../components/PageLoader.vue';
import ProjectCard from '../components/projects/ProjectCard.vue';

/*** DATA ***/
import axios from 'axios';


export default {
    components: { PageLoader, ProjectCard },
    data: () => ({ project: null, loaderIsActive: false }),
    methods: {

        /**
         * Retrieve Project from the API
         * @param {String} endpoint 
         * @param {Object} params 
         */
        fetchProject(endpoint = 'http://127.0.0.1:8000/api/projects/') {

            // Show Loader
            this.loaderIsActive = true;

            // Fetching
            axios.get(endpoint + this.$route.params.id)
                .then(res => {
                    this.project = res.data;
                })
                .catch(err => {
                    console.error(err);

                })
                .then(() => {
                    // Hide Loader
                    this.loaderIsActive = false;
                });
        },
    },
    created() {
        this.fetchProject();
    }

}
</script>


<template>
    <!-- Page Main -->
    <main class="container my-4">

        <div>{{ project }}</div>

    </main>

    <!-- Page Loader -->
    <PageLoader :isActive="loaderIsActive" />
</template>


<style></style>