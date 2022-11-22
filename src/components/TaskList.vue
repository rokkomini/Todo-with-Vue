<template>
    <div v-for="task in tasks" :key="task.id">
        <TaskItem @toggle-reminder="$emit('toggle-reminder', task.id)" @delete-task="$emit('delete-task', task.id)" @finish-task="$emit('finish-task', task.id)" :task='task' />
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
    emits: ['delete-task', 'toggle-reminder', 'finish-task'],
}
</script>