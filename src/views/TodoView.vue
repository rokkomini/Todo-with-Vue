<template>
  <div class="todo">
   
    <TaskHeader title="Task tracker"/>
  </div>
</template>

<script>
import TaskHeader from '@/components/Header.vue';

export default {
  name: 'Todo-app',
  components: {
    TaskHeader,
},
}
</script>

<style>
@media (min-width: 1024px) {
  .todo {
    min-height: 100vh;
    display: flex;
    align-items: center;
    border: solid white;
  }
}
</style>
