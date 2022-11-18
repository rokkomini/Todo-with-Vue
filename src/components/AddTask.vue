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
            <input type="checkbox" name="reminder" />
        </div>
        <input type="submit" value="Save task" class="blockBtn" />
    </form>
</template>

<script>
export default {
    name: 'AddTask',
    data() {
        return {
            text: '',
            day: '',
            reminder: false,
        }
    }
}
</script>

<style>
.add-form {
    margin-bottom: 40px;
}
.blockBtn {
    width: 100%;
    border-radius: 5px;
    padding: 10px 15px;
    background-color: rgb(58, 56, 56);
    color: white;
    font-weight: 300;
}

.form-control {
    margin: 20px 0;
}

.form-control label {
    display: block;
}

.form-control input {
    width: 100%;
    height: 40px;
    margin: 5px;
    padding: 3px 7px;
    font-size: 17px;

}

.form-control-check {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.form-control-check label {
    flex: 1;
}

.form-control-check input {
    flex: 2;
    height: 20px;
}



</style>

