<template>

    <div v-for="task in showTasks(tasks)" :key="task.id">
        <TaskItem @toggle-reminder="$emit('toggle-reminder', task.id)" @delete-task="$emit('delete-task', task.id)"
            @finish-task="$emit('finish-task', task.id)" :task='task' />
    </div>

    <FirstButton @click="$emit('toggle-show-tasks', task)" :text="taskStatus ? 'Show unfinished' : 'Show finished'" />


</template>

<script>
import TaskItem from '@/components/TaskItem.vue';
import FirstButton from '@/components/Button.vue';


export default {
    name: 'TaskList',
    props: {
        tasks: {
            type: Array,
        },
        taskStatus: Boolean
    },
    components: {
        TaskItem,
        FirstButton
    },
    emits: ['delete-task', 'toggle-reminder', 'finish-task', 'toggle-show-tasks'],
    methods: {
        showTasks(tasks) {
            return tasks.filter(task => task.finished === this.taskStatus);
        }
    }
}
</script>