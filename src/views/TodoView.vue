<template>
  <div class="todo">

    <TaskHeader @toggle-add-task="toggleAddTask" title="Task tracker" :showAddTask="showAddTask" />
    <div v-if="showAddTask">
      <AddTask @add-task='addTask' />
    </div>
    <TaskList @toggle-reminder="toggleReminder" @delete-task="deleteTask" :tasks="tasks" />
  </div>
</template>

<script>
import TaskHeader from '@/components/Header.vue';
import TaskList from '../components/TaskList.vue';
import AddTask from '../components/AddTask.vue';

const url = import.meta.env.VITE_API_URL;

export default {
  name: 'Todo-app',
  components: {
    TaskHeader,
    TaskList,
    AddTask,
  },
  data() {
    return {
      tasks: [],
      showAddTask: false,
    }
  },
  methods: {
    toggleAddTask() {
      this.showAddTask = !this.showAddTask;
    },
    async addTask(task) {
      const res = await fetch(`${url}/tasks`, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(task),
      })
      const data = await res.json()
      this.tasks = [...this.tasks, data]
    },
    deleteTask(id) {
      if (confirm('Are you sure you want to delete task?')) {
        this.tasks = this.tasks.filter(task => task.id !== id)
      }
    },
    toggleReminder(id) {
      this.tasks = this.tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task)
    },
    async fetchTasks() {
      const res = await fetch(`${url}/tasks`)

      const data = await res.json()

      return data
    },
    async fetchTask(id) {
      const res = await fetch(`${url}/tasks/${id}`)

      const data = await res.json()

      return data
    }
  },
  async created() {
    this.tasks = await this.fetchTasks()
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
