<template>
  <div class="todo">

    <TaskHeader title="Task tracker" />
    <TaskList @delete-task="deleteTask" :tasks="tasks" />
  </div>
</template>

<script>
import TaskHeader from '@/components/Header.vue';
import TaskList from '../components/TaskList.vue';

export default {
  name: 'Todo-app',
  components: {
    TaskHeader,
    TaskList
  },
  data() {
    return {
      tasks: []
    }
  },
  methods: {
    deleteTask(id) {
      console.log('delete task', id)
    }
  },
created() {
    this.tasks = [
      {
        id: 1,
        text: 'Doctor appointment',
        day: 'Nov 21 at 8:30 am',
        reminder: true,
      },
      {
        id: 2,
        text: 'Meeting at school',
        day: 'Nov 22 at 1:30 pm',
        reminder: true,
      },
      {
        id: 3,
        text: 'Food shopping',
        day: 'Nov 23 at 2:30 pm',
        reminder: false,
      },
    ]
  }
}
</script>

<style>
@media (min-width: 1024px) {
  .todo {
    min-height: 100vh;
    border: solid white;
  }
}
</style>
