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
    <section>
        <div class="row">
            <div class="col-9">
                <!-- Screenshot -->
                <div class="mb-3">
                    <img v-if="project.screenshot" :src="project.screenshot" :alt="project.name" class="w-100">
                </div>

                <!-- Title -->
                <h2>{{ project.name }}</h2>

                <!-- Description -->
                <p>{{ project.description }}</p>

                <!-- External Link -->
                <a :href="project.link" target="_blank">Vai al Progetto</a>

            </div>

            <!-- Informations -->
            <div class="col-3">
                <div class="border rounded p-2 h-100">
                    <h3>Info</h3>

                    <ul class="list-unstyled mb-0">
                        <!-- Name -->
                        <li class="border-top py-3">
                            <strong class="mb-3">Nome Progetto:</strong>
                            <p class="mb-0">{{ project.name }}</p>
                        </li>
                        <!-- Type -->
                        <li class="border-top py-3">
                            <strong class="mb-3">Categoria:</strong>
                            <div v-if="project.type">
                                <span class="badge" :style="`background-color: ${project.type.color}`">{{
                                    project.type.label
                                }}</span>
                            </div>
                            <p v-else>-</p>
                        </li>
                        <!-- Tecnologies -->
                        <li class="border-top py-3">
                            <strong class="mb-3">Tecnologie Usate:</strong>
                            <div v-if="project.tecnologies" class="d-flex flex-wrap gap-2 mt-2">
                                <span v-for=" tecnology  in  project.tecnologies " :key="tecnology.id" class="badge"
                                    :class="`text-bg-${tecnology.color}`">
                                    {{ tecnology.label }}
                                </span>
                            </div>
                        </li>
                        <!-- Created -->
                        <li class="border-top border-bottom py-3">
                            <strong class="mb-3">Creato il:</strong>
                            <p class="mb-0"><time>{{ createdDate }}</time></p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    </section>
</template>


<style></style>