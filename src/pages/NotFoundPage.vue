<script>
export default {


}
</script>


<template>
    <!-- Page Main -->
    <main class="d-flex">
        <div class="m-auto text-center">
            <h1 class="mb-4">404 | Pagina non trovata</h1>
            <button @click="$router.back()" class="btn btn-primary">Torna Indietro</button>
        </div>
    </main>
</template>


<style scoped lang="scss">
@use '@/assets/scss/vars' as *;

main {
    height: calc(100vh - $page-header-height);
}
</style>