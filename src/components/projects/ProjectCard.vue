<script>
export default {
    props: { project: Object }
}
</script>


<template>
    <div class="project-card">


        <!-- Card Top -->
        <div class="clearfix mb-3">
            <!-- Screenshot -->
            <img v-if="project.screenshot" :src="project.screenshot" :alt="project.name" class="img-fluid float-start me-3">

            <!-- Name -->
            <h4 class="mb-3">{{ project.name }}</h4>

            <!-- Type -->
            <p v-if="project.type">
                <span class="badge" :style="`background-color: ${project.type.color}`">{{ project.type.label
                }}</span>
            </p>
        </div>

        <!-- Card Footer -->
        <div>
            <!-- Created At -->
            <p><strong>Creato il: </strong>{{ project.created_at }}</p>
        </div>

    </div>
</template>


<style scoped lang="scss">
.project-card {
    min-height: 200px;
    padding: 1rem;

    border-radius: .5rem;

    box-shadow: 0 0 8px 4px rgba($color: #000, $alpha: 0.08);

    img {
        width: 150px;
    }
}
</style>