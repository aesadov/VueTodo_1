<script setup lang='ts'>
  import { onBeforeMount } from 'vue'
import AddNewTask from './components/AddNewTask.vue'
  import TodoItem from './components/TodoItem.vue'
  import {useTasksStore} from './stores/tasks'
  import { storeToRefs } from 'pinia'

  const tasksStore = useTasksStore()
  const {dummyTasks, tasksToDo, doneTasks} = storeToRefs(useTasksStore())

  onBeforeMount (()=>{
    tasksStore.fetchTasks()
  })
</script>

<template>
  <div class="todo-app">
    <div class="todo-app__container">
      <AddNewTask @add-new-task="tasksStore.addTask"/>
      <div class="todo-app__section">
        <div v-if="tasksToDo.length" class="todo-app__counter">Tasks to do - {{ tasksToDo.length }}</div>
        <TodoItem 
          v-for="task in tasksToDo"
          :key="task.id"
          :toDoText="task.text"
          :isDone="task.isDone"
          @delete-task="tasksStore.removeTask(task.id, false)"
          @is-done-toggle="tasksStore.setTaskIsDone(task.id, false)"
        />
      </div>
      <div class="todo-app__section">
        <div v-if="doneTasks.length" class="todo-app__counter">Done - {{ doneTasks.length }}</div>
        <TodoItem 
          v-for="task in doneTasks"
          :key="task.id"
          :toDoText="task.text"
          :isDone="task.isDone"
          @delete-task="tasksStore.removeTask(task.id, false)"
          @is-done-toggle="tasksStore.setTaskIsDone(task.id, false)"
        />
      </div>
      <div class="todo-app__section">
        <div v-if="dummyTasks.length" class="todo-app__counter">DummyTasks - {{ dummyTasks.length }}</div>
        <TodoItem 
          v-for="task in dummyTasks"
          :key="task.id"
          :toDoText="task.text"
          :isDone="task.isDone"
          @delete-task="tasksStore.removeTask(task.id, true)"
          @is-done-toggle="tasksStore.setTaskIsDone(task.id, true)"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .todo-app {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background-color: #0d0714;
    color: #f0f8ff;

    &__container {
      width: 432px;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 20px;
    }

    &__section {
      width: 100%;
      margin-bottom: 30px;

        &:last-child {
        margin-bottom: 0;
      }
    }

    &__counter {
      font-family: 'Inter', sans-serif;
      font-size: 16px;
      margin: 20px 0 15px;
    }
  }
</style>