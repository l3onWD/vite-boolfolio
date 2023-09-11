<script>
/* -----------------------------------------
* RESOURCES
-------------------------------------------*/
/*** COMPONENTS ***/
import PageHeader from './components/PageHeader.vue';
import PageMain from './components/PageMain.vue';

/*** DATA ***/
import axios from 'axios';


export default {
    components: { PageHeader, PageMain },
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
    <PageMain />
</template>


<style lang="scss">
@use './assets/scss/style.scss';
</style>