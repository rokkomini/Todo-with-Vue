
<template>
    <div @dblclick="$emit('toggle-reminder', task.id)" :class="[task.reminder ? 'reminder' : '', 'taskItem']">
        <h3>{{ task.text }}
            <font-awesome-icon @click="$emit('delete-task', task.id)" icon="xmark" color="red" />
        </h3>
        <div class="status">
            <p>{{ task.day }}</p>
            <font-awesome-icon @click="$emit('finish-task', task.id)" icon="check" color="green" />
        </div>
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
}
</script>

<style>
.svg-inline--fa {
    height: 20px;
    width: 20px;
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

.status {
    display: flex;
    justify-content: space-between;

}

.taskItem h3 {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
</style>