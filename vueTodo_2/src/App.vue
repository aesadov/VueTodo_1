<script setup>
  import {ref} from 'vue'
  import AddNewTask from './components/AddNewTask.vue';

  const tasks = ref([
    {id: 1, text: 'to study react', isDone: true},
    {id: 2, text: 'to study reacNative', isDone: false},
    {id: 3, text: 'to study Vue', isDone: false}
  ])
</script>

<template>
  <div class="screenContainer">
    <div class="appContainer">
      <AddNewTask/>
      <div class="tasks">Tasks</div>
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
  }
  .input {
    background-color: #0d0714;
    border: 1px solid #3E1671;
    border-radius: 10px;
    width: 351px;
    height: 40px;
    padding: 0 12px;
    font-size: 16px;
  }
  .button {
    width: 40px;
    height: 40px;
    background-color: #9E78CF;
    border-radius: 10px;
    margin-left: 10px;
    border-style: none;
    color: #f0f8ff;
    font-size: x-large;
    cursor: pointer;

    &:hover {
      color: #000000;
      background-color: #aca2a5;
    }
  }
  .addNewTask {
    display: flex;
    align-items: center;
  }
</style>