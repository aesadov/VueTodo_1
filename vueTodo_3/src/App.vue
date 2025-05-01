<script setup lang='ts'>
  import {ref, computed} from 'vue'
  import AddNewTask from './components/AddNewTask.vue'
  import TodoItem from './components/TodoItem.vue'

  interface TaskType {
    id: number
    text: string
    isDone: boolean
  }

  const tasks = ref<TaskType[]>([])
  const tasksToDo = computed(() => tasks.value.filter(t => !t.isDone))
  const doneTasks = computed(() => tasks.value.filter(t => t.isDone))
  const id = ref<number>(0)

  function addTask(text: string) {
      tasks.value.unshift({id: id.value, text, isDone: false})
      id.value++
  }
  function removeTask(id: number){
    tasks.value = tasks.value.filter(t => t.id !== id)
  }
  function setTaskIsDone(id: number) {
    tasks.value = tasks.value.map(t => t.id === id ? {...t, isDone: true} : t)
  }
</script>

<template>
  <div class="todo-app">
    <div class="todo-app__container">
      <AddNewTask @add-new-task="addTask"/>
      <div class="todo-app__section">
        <div v-if="tasksToDo.length" class="todo-app__counter">Tasks to do - {{ tasksToDo.length }}</div>
        <TodoItem 
          v-for="task in tasksToDo"
          :key="task.id"
          :toDoText="task.text"
          :isDone="task.isDone"
          @delete-task="removeTask(task.id)"
          @is-done-toggle="setTaskIsDone(task.id)"
        />
      </div>
      <div class="todo-app__section">
        <div v-if="doneTasks.length" class="todo-app__counter">Done - {{ doneTasks.length }}</div>
        <TodoItem 
          v-for="task in doneTasks"
          :key="task.id"
          :toDoText="task.text"
          :isDone="task.isDone"
          @delete-task="removeTask(task.id)"
          @is-done-toggle="setTaskIsDone(task.id)"
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