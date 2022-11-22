<template>
    <header>
        <h1>{{ title }}</h1>
        <FirstButton @btn-click="$emit('toggle-add-task')" 
        :text="showAddTask ? 'Close' : 'Add task'"
        :color="showAddTask? 'red' : 'green'" />
    </header>
</template>

<script>
import FirstButton from '@/components/Button.vue';

export default {
    name: 'TaskHeader',
    props: {
        title: {
            type: String,
            required: true,
        },
        showAddTask: Boolean
    },
    components: {
        FirstButton,
    },
};
</script>

<style scoped>
header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: red;
}
</style>