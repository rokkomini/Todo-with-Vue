<template>
    <div :class="[task.reminder ? 'reminder' : '', 'taskItem']">
        <h3>{{ task.text }}
            <i class="fa-regular fa-xmark"></i>
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
}
</script>

<style>
.fas {
    color: red;
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