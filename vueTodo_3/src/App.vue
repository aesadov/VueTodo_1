<script setup>
  import {ref} from 'vue'
  import AddNewTask from './components/AddNewTask.vue'
  import TodoItem from './components/TodoItem.vue'

  const tasks = ref([])

  function addTask(text){
    tasks.value.unshift({id: tasks.value.length + 1, text, isDone: false})
  }
</script>

<template>
  <div class="screenContainer">
    <div class="appContainer">
      <AddNewTask @addNewTask="addTask"/>
      <div class="tasks">
        <TodoItem 
          v-for="task in tasks"
          :key="task.id"
          :toDoText="task.text"
          :isDone="task.isDone"
        />
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