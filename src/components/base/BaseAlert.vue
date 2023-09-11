<script>
export default {
    props: {
        type: String,
        title: String,
        message: String
    },
    emits: ['close']

}
</script>


<template>
    <div class="alert alert-dismissible fade show my-3" :class="`alert-${type}`" role="alert">
        <strong>{{ title }}</strong> {{ message }}
        <button type="button" class="btn-close" @click="$emit('close')"></button>
    </div>
</template>


<style></style>