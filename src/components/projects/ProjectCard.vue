<script>
export default {
    props: { project: Object },
    computed: {
        createdDate() {
            const date = new Date(this.project.created_at);
            let day = date.getDate();
            let month = date.getMonth() + 1;
            const year = date.getFullYear();

            day = day < 10 ? '0' + day : day;
            month = month < 10 ? '0' + month : month;

            return `${day}/${month}/${year}`;
        }
    }
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
            <p><strong>Creato il: </strong>{{ createdDate }}</p>
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