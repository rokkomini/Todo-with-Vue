<!-- eslint-disable prettier/prettier -->
<script>
import { createApp } from 'vue';

createApp({
    data() {
        return {
            count: 0
        }
    }
}).mount('#count')
</script>

<template>
  <div class="todo">
    <h1>This is an todo page</h1>
    <br />
    <input placeholder="Write your todo" />
    <div id="count">
      <button @click="count++">Count is: {{ count }}</button>
    </div>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .todo {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
