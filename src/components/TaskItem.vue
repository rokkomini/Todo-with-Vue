
<template>
    <div :class="[task.reminder ? 'reminder' : '', 'taskItem']">
        <h3>{{ task.text }}
            <font-awesome-icon @click="onDelete(task.id)" icon="xmark" />
        </h3>
        <p>{{ task.day }}</p>
    </div>
</template>

<script>

export default {
    name: 'TaskItem',
    props: {
        task: {
            type: Object,
        },
    },
    methods: {
        onDelete(id) {
          this.$emit('delete-task', id)
        }
    }
}
</script>

<style>
svg {
    color: red;
}

.svg-inline--fa {
    height: 20px;
}

.taskItem {
    background: rgb(46, 46, 46);
    margin: 5px;
    padding: 10px 20px;
    cursor: pointer;
}

.taskItem.reminder {
    border-left: 10px solid green;
}

.taskItem h3 {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
</style>