<script>
/* -----------------------------------------
* RESOURCES
-------------------------------------------*/
/*** COMPONENTS ***/
import ProjectCard from './components/projects/ProjectCard.vue';
import PageHeader from './components/PageHeader.vue';

/*** DATA ***/
import axios from 'axios';


export default {
    components: { ProjectCard, PageHeader },
    data: () => ({
        projects: {
            data: [],
            links: []
        }
    }),
    methods: {
        fetchProjects(endpoint = 'http://127.0.0.1:8000/api/projects') {
            axios.get(endpoint)
                .then(res => {
                    const { data, links } = res.data;
                    this.projects = { data, links };

                    console.log(this.projects.data);
                })
                .catch(err => {
                    console.error(err);
                });
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
    <main class="container my-4">
        <h1 class="mb-4">Lista Progetti</h1>

        <div class="row row-cols-3 g-3">
            <div v-for="project in projects.data" :key="project.id" class="col">
                <ProjectCard :project="project" />
            </div>
        </div>
    </main>
</template>


<style lang="scss">
@use './assets/scss/style.scss';
</style>