<script setup>
import { ref } from 'vue';
import PlusIcon from '../assets/icons/plus.svg'

const emit = defineEmits(['add-new-task'])

function submitForm(){
  if(newTodoText.value){
    emit('add-new-task', newTodoText.value)
    newTodoText.value = ''
  } else {
    alert('Please write the text of the task')
  }
}

const newTodoText = ref('')
</script>

<template>
    <form @submit.prevent="submitForm" class="addNewTask">
      <input 
        class="input" 
        type="text" 
        id="newTodo"
        placeholder="Add a new task"
        v-model="newTodoText"
      >
      <button class="button"><PlusIcon class="plusIcon"/></button>
    </form>
</template>

<style scoped lang="scss">
.addNewTask {
  display: flex;
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
  color: #f0f8ff;
}

.button {
  width: 40px;
  height: 40px;
  background-color: #9E78CF;
  border-radius: 10px;
  margin-left: 10px;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #3E1671;
  }
}

.plusIcon{
margin: 2px 0 0 2px;
}
</style>