<template>
    <form class="add-form">
        <div class="form-control">
            <label>Task</label>
            <input type="text" name="text" placeholder="Add task" />
        </div>
        <div class="form-control">
            <label>Day & Time</label>
            <input type="text" name="day" placeholder="Add day and time" />
        </div>
        <div class="form-control form-control-check">
            <label for="">Set reminder</label>
            <input type="checkbox" name="reminder"/>
        </div>
        <input type="submit" value="Save task" class="baseButton"/>
    </form>
</template>

<script>
export default {
    name: 'AddTask',
}
</script>