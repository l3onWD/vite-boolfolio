<script>
export default {
    props: { isActive: Boolean }
}
</script>


<template>
    <div v-if="isActive" class="loader">
        <div class="spinner-border text-white" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    </div>
</template>


<style scoped lang="scss">
.loader {
    position: fixed;
    inset: 0;

    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba($color: #000, $alpha: 0.8);

    z-index: 5;

    .spinner-border {
        width: 100px;
        height: 100px;
    }
}
</style>