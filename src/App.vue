<script>
import axios from 'axios';

export default {
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
    <main class="container">
        <h1>Hello World</h1>
    </main>
</template>


<style lang="scss">
@use './assets/scss/style.scss';
</style>