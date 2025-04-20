<script setup>
import { ref } from 'vue';
import PlusIcon from '../assets/icons/plus.svg'

// ⚠️ эмиты пишем в kebab-case
const emit = defineEmits(['addNewTask'])

function submitForm(){
  <!-- ⚠️ Нет валидации пустого ввода. Добавить проверку: -->
  emit('addNewTask', newTodoText.value)
  newTodoText.value = ''
}

const newTodoText = ref('')
</script>

<template>
    <form @submit.prevent="submitForm" class="addNewTask">
<!--      ⚠️ сначала пишем v-if/v-for/v-model, затем пишем аттрибуты которые помогают понять что за компонент перед нами, например placeholder, -->
<!--      class, text. Затем остальные пропсы. В самом конце ивенты @click, @submit и т.д.-->
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
