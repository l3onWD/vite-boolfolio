<script>
/* -----------------------------------------
* RESOURCES
-------------------------------------------*/
/*** COMPONENTS ***/
import PageHeader from './components/PageHeader.vue';


export default {
    components: { PageHeader },
}
</script>


<template>
    <!-- Page Header -->
    <PageHeader />

    <!-- Page Router -->
    <RouterView />
</template>


<style lang="scss">
@use './assets/scss/style.scss';
</style>