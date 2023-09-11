import { reactive } from "vue";

export const store = reactive({
    projects: {
        data: [],
        links: []
    },
    alert: {}
});