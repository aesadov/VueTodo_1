<script setup>
  import {ref} from 'vue'
  import AddNewTask from './components/AddNewTask.vue'
  import TodoItem from './components/TodoItem.vue'

  const tasks = ref([
    {id: 1, text: 'to study react', isDone: true},
    {id: 2, text: 'to study reacNative', isDone: false},
    {id: 3, text: 'to study Vue', isDone: false},
  ])
</script>

<template>
  <div class="screenContainer">
    <div class="appContainer">
      <AddNewTask/>
      <div class="tasks">
        <TodoItem/>
      </div>
      <div class="doneTasks">done tasks</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .screenContainer {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #0d0714;
    color: #f0f8ff;
  }
  .appContainer {
    width: 432px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: aquamarine;
  }
  .tasks {
    width: 100%;
  }
</style>