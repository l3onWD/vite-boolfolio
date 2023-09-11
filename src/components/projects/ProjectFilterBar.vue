<script>
/* -----------------------------------------
* RESOURCES
-------------------------------------------*/
/*** DATA ***/
import { store } from '../../data/store';


export default {
    data: () => ({
        filterName: ''
    }),
    methods: {
        onFiltersSubmit() {
            // Save filters
            store.filters.name = this.filterName;

            // Emit event
            this.$emit('projects-filters-changed');
        }
    },
    emits: ['projects-filters-changed']

}
</script>


<template>
    <div class="border-top border-bottom py-3 mb-3">
        <form class="row" @submit.prevent="onFiltersSubmit">

            <!-- Name Filter -->
            <div class="col-auto mb-3">
                <input v-model.trim="filterName" type="search" class="form-control" placeholder="Nome...">
            </div>

            <div class="col-auto">
                <button class="btn btn-outline-success">Filtra</button>
            </div>


        </form>
    </div>
</template>


<style></style>