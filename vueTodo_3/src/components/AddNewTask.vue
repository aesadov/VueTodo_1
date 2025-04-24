<script setup>
import { ref } from 'vue';
import PlusIcon from '../assets/icons/plus.svg'

const emit = defineEmits(['add-new-task'])

function submitForm(){
  if(newTodoText.value.trim()){
    emit('add-new-task', newTodoText.value.trim())
    newTodoText.value = ''
  } else {
    alert('Please write the text of the task')
  }
}

const newTodoText = ref('')
</script>

<template>
    <form class="task-form" @submit.prevent="submitForm" >
      <input 
        v-model="newTodoText"
        placeholder="Add a new task"
        class="task-form__input" 
        type="text" 
        id="newTodo"
      >
      <button class="task-form__submit">
        <PlusIcon class="task-form__icon"/>
      </button>
    </form>
</template>

<style scoped lang="scss">
.task-form {
  display: flex;
  align-items: center;

  &__input {
    background-color: #0d0714;
    border: 1px solid #3E1671;
    border-radius: 10px;
    width: 351px;
    height: 40px;
    padding: 0 12px;
    font-size: 16px;
    color: #f0f8ff;

    &:focus {
      outline: none;
      border-color: #9E78CF;
    }
  }

  &__submit {
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

  &__icon {
    margin: 3px 0 0 1px;
  }
}
</style>