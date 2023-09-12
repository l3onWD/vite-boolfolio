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
        },

        abstract() {
            return this.project.description.slice(0, 300) + '...';
        }
    }
}
</script>


<template>
    <div class="project-card">


        <!-- Card Top -->
        <div class="clearfix mb-3">
            <!-- Screenshot -->
            <RouterLink v-if="project.screenshot" :to="{ name: 'project-detail', params: { id: project.id } }">
                <img :src="project.screenshot" :alt="project.name" class="img-fluid float-start me-3">
            </RouterLink>

            <!-- Name -->
            <RouterLink :to="{ name: 'project-detail', params: { id: project.id } }" class="text-dark text-decoration-none">
                <h4 class="mb-3">
                    {{ project.name }}
                </h4>
            </RouterLink>

            <!-- Type -->
            <RouterLink v-if="project.type" :to="{ name: 'type-projects', params: { id: project.type.id } }">
                <span class="badge" :style="`background-color: ${project.type.color}`">{{ project.type.label
                }}</span>
            </RouterLink>

            <!--Abstract -->
            <p>{{ abstract }}</p>
        </div>

        <!-- Card Footer -->
        <div>
            <!-- Tecnologies -->
            <div v-if="project.tecnologies" class="d-flex gap-2 mb-1">
                <span v-for="tecnology in project.tecnologies" :key="tecnology.id" class="badge"
                    :class="`text-bg-${tecnology.color}`">
                    {{ tecnology.label }}
                </span>
            </div>

            <!-- Created At -->
            <p><strong>Creato il: </strong><time>{{ createdDate }}</time></p>
        </div>

    </div>
</template>


<style scoped lang="scss">
@use '@/assets/scss/vars' as *;

.project-card {
    min-height: 200px;
    padding: 1rem;

    background-color: $col-gray-700;
    border-radius: .5rem;

    box-shadow: 0 0 8px 4px rgba($color: #000, $alpha: 0.08);

    img {
        width: 150px;
    }
}
</style>