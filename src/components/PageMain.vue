<script>
/* -----------------------------------------
* RESOURCES
-------------------------------------------*/
/*** COMPONENTS ***/
import ProjectCard from './projects/ProjectCard.vue';
import BasePagination from './base/BasePagination.vue';

/*** DATA ***/
import { store } from '../data/store';
import BaseAlert from './base/BaseAlert.vue';

export default {
    components: { ProjectCard, BasePagination, BaseAlert },
    data: () => ({ store }),
    methods: {
        onProjectsPageChange(pageLink) {
            this.$emit('projects-page-changed', pageLink)
        }
    },
    emits: ['projects-page-changed']
}
</script>


<template>
    <main class="container my-4">

        <!-- Alert -->
        <BaseAlert v-if="store.alert.message" v-bind="store.alert" @close="store.alert = {}" />

        <!-- Projects List -->
        <section>

            <h1 class="mb-4">Progetti</h1>

            <div v-if="store.projects.data.length" class="row-cols-1">
                <div v-for="project in store.projects.data" :key="project.id" class="col mb-3">
                    <ProjectCard :project="project" />
                </div>
            </div>

            <h3 v-else>Non ci sono progetti</h3>

            <BasePagination :links="store.projects.links" @change-page="onProjectsPageChange" class="mt-4" />

        </section>

    </main>
</template>


<style></style>