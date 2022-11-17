<template>
    <div v-for="task in tasks" :key="task.id">
        <TaskItem :task='task' />

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
}
</script>