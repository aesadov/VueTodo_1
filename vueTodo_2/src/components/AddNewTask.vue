<script setup>
</script>

<template>
  <div class="addNewTask">
    <input 
      class="input" 
      type="text" 
      placeholder="Add a new task"
    >
    <button class="button">+</button>
  </div>
</template>

<style scoped lang="scss">
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
  color: #f0f8ff;
  font-size: x-large;
  cursor: pointer;

  &:hover {
    background-color: #3E1671;
  }
}

.addNewTask {
  display: flex;
  align-items: center;
}
</style>