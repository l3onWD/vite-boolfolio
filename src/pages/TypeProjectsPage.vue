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
    data: () => ({ type: null, projects: [], loaderIsActive: false }),
    methods: {

        /**
         * Retrieve Type Project from the API
         * @param {String} endpoint 
         * @param {Object} params 
         */
        fetchTypeProjects(endpoint = 'http://127.0.0.1:8000/api/types/') {

            // Show Loader
            this.loaderIsActive = true;

            // Fetching
            axios.get(endpoint + this.$route.params.id + '/projects')
                .then(res => {
                    this.type = res.data.type;
                    this.projects = res.data.projects;
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
        this.fetchTypeProjects();
    }

}
</script>


<template>
    <!-- Page Main -->
    <main class="container my-4">

        <!-- Projects List -->
        <section>

            <h1 v-if="type" class="mb-4">Progetti {{ type.label }}</h1>

            <!-- Projects List -->
            <div v-if="projects.length" class="row row-cols-1 g-3">
                <div v-for="project in projects" :key="project.id" class="col">
                    <ProjectCard :project="project" />
                </div>
            </div>
            <h3 v-else>Non ci sono progetti</h3>

        </section>

    </main>

    <!-- Page Loader -->
    <PageLoader :isActive="loaderIsActive" />
</template>


<style></style>