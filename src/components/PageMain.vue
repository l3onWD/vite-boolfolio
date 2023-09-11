<script>
/* -----------------------------------------
* RESOURCES
-------------------------------------------*/
/*** COMPONENTS ***/
import ProjectCard from './projects/ProjectCard.vue';

/*** DATA ***/
import { store } from '../data/store';

export default {
    components: { ProjectCard },
    data: () => ({ store })
}
</script>


<template>
    <main class="container my-4">
        <h1 class="mb-4">Lista Progetti</h1>

        <div v-if="store.projects.data.length" class="row row-cols-3 g-3">
            <div v-for="project in store.projects.data" :key="project.id" class="col">
                <ProjectCard :project="project" />
            </div>
        </div>

        <h3 v-else>Non ci sono progetti</h3>
    </main>
</template>


<style></style>