<template>
    <div v-for="task in tasks" :key="task.id">
        <TaskItem @delete-task="$emit('delete-task', task.id)" :task='task' />

    </div>
</template>

<script>
import TaskItem from '@/components/TaskItem.vue';

export default {
    name: 'TaskList',
    props: {
        tasks: {
            type: Array,
        },
    },
    components: {
        TaskItem,
    },
    emits: ['delete-task'],
}
</script>