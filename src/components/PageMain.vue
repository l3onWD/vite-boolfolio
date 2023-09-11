<script>
/* -----------------------------------------
* RESOURCES
-------------------------------------------*/
/*** COMPONENTS ***/
import ProjectCard from './components/projects/ProjectCard.vue';

export default {
    components: { ProjectCard }

}
</script>


<template>
    <main class="container my-4">
        <h1 class="mb-4">Lista Progetti</h1>

        <div class="row row-cols-3 g-3">
            <div v-for="project in projects.data" :key="project.id" class="col">
                <ProjectCard :project="project" />
            </div>
        </div>
    </main>
</template>


<style></style>