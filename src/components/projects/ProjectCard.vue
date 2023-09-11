<script>
export default {
    props: { project: Object }
}
</script>


<template>
    <div class="project-card rounded shadow h-100 p-3">

        <!-- Image -->
        <div v-if="project.screenshot" class="mb-3">
            <img :src="project.screenshot" :alt="project.name" class="img-fluid">
        </div>

        <!-- Body -->
        <div>
            <h4>{{ project.name }}</h4>
            <p v-if="project.type">
                <span class="badge" :style="`background-color: ${project.type.color}`">{{ project.type.label }}</span>
            </p>
        </div>

        <!-- Footer -->
        <div>
            <p><strong>Creato il: </strong>{{ project.created_at }}</p>
        </div>
    </div>
</template>


<style></style>