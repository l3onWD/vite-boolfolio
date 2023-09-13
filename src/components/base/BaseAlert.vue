<script>
export default {
    props: {
        type: String,
        title: String,
        message: String,
        dismissible: Boolean,
    },
    emits: ['close']

}
</script>


<template>
    <div class="alert alert-dismissible fade show my-3" :class="[`alert-${type}`, { 'alert-dismissible': dismissible }]"
        role="alert">
        <strong>{{ title }} </strong>
        <slot>{{ message }}</slot>
        <button v-if="dismissible" type="button" class="btn-close" @click="$emit('close')"></button>
    </div>
</template>


<style></style>