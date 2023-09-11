<script>
export default {
    props: { links: Array },
    emits: ['change-page']
}
</script>


<template>
    <nav>
        <ul class="pagination">
            <li v-for="link in links" :key="link.label" class="page-item"
                :class="[{ active: link.active }, { disabled: !link.url }]">
                <button :disabled="!link.url" @click="$emit('change-page', link.url)" class="page-link"
                    v-html="link.label"></button>
            </li>
        </ul>
    </nav>
</template>

