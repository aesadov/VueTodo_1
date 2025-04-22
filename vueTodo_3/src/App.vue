<script setup>
  import {ref, computed} from 'vue'
  import AddNewTask from './components/AddNewTask.vue'
  import TodoItem from './components/TodoItem.vue'

  const tasks = ref([])
  const tasksToDo = computed(() => tasks.value.filter(t => !t.isDone))
  const doneTasks = computed(() => tasks.value.filter(t => t.isDone))
  const id = ref(0)

  function addTask(text) {
      tasks.value.unshift({id: id.value, text, isDone: false})
      id.value++
  }
  function removeTask(id){
    tasks.value = tasks.value.filter(t => t.id !== id)
  }
  function setTaskIsDone(id) {
    tasks.value = tasks.value.map(t => t.id === id ? {...t, isDone: true} : t)
  }
</script>

<template>
  <div class="screenContainer">
    <div class="appContainer">
      <AddNewTask @add-new-task="addTask"/>
      <div class="tasks">
        <div v-if="tasksToDo.length" class="taskCount">Tasks to do - {{ tasksToDo.length }}</div>
        <TodoItem 
          v-for="task in tasksToDo"
          :key="task.id"
          :toDoText="task.text"
          :isDone="task.isDone"
          @delete-task="removeTask(task.id)"
          @is-done-toggle="setTaskIsDone(task.id)"
        />
      </div>
      <div class="tasks">
        <div v-if="doneTasks.length" class="taskCount">Done - {{ doneTasks.length }}</div>
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
  }
  .tasks {
    width: 100%;
  }
  .taskCount {
    font-family: 'Inter', sans-serif;
    font-size: 16px;
    margin-top: 60px;
  }
</style>