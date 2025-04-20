<script setup>
  import {ref, computed} from 'vue'
  import AddNewTask from './components/AddNewTask.vue'
  import TodoItem from './components/TodoItem.vue'

  const tasks = ref([])
  const tasksToDo = computed(() => tasks.value.filter(t => !t.isDone))
//  ⚠️ Лучше использовать computed как в tastkToDo
  const doneTasks = ref([])

  function addTask(text){
    // ⚠️Date.now() так ставить id не стоит, тк может задублироваться id если будем быстро добавлять туду
    tasks.value.unshift({id: Date.now(), text, isDone: false})
  }
  function removeTask(id){
    // ⚠️ При удалении задачи из tasks она остается в doneTasks. Использование computed для doneTasks решит проблему
    tasks.value = tasks.value.filter(t => t.id !== id)
  }
  function setTaskIsDone(id) {
    // ⚠️ Аналогичная проблема с doneTasks
    const doneTask = tasks.value.find(t => t.id === id)
    doneTasks.value.unshift({...doneTask, isDone: true})

    tasks.value = tasks.value.map(t => t.id === id ? {...t, isDone: true} : t)
  }
</script>

<template>
<!--  ⚠️ Во вью, в отличии от реакта, пишем классы по БЭМ https://ru.bem.info/methodology/quick-start/ -->
  <div class="screenContainer">
    <div class="appContainer">
      <AddNewTask @addNewTask="addTask"/>
      <div class="tasks">
        <div v-if="tasksToDo.length" class="taskCount">Tasks to do - {{ tasksToDo.length }}</div>
        <TodoItem
          v-for="task in tasksToDo"
          :key="task.id"
          :toDoText="task.text"
          :isDone="task.isDone"
          @deleteTask="removeTask(task.id)"
          @isDoneToggle="setTaskIsDone(task.id)"
        />
      </div>
      <div class="tasks">
        <div v-if="doneTasks.length" class="taskCount">Done - {{ doneTasks.length }}</div>
        <TodoItem
          v-for="task in doneTasks"
          :key="task.id"
          :toDoText="task.text"
          :isDone="task.isDone"
          @deleteTask="removeTask(task.id)"
          @isDoneToggle="setTaskIsDone(task.id)"
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
