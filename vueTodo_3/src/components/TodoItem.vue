<script setup>
    import { Icon } from "@iconify/vue";
    defineEmits(['deleteTask'])

    defineProps(['toDoText', 'isDone'])
</script>

<template>
  <div class="itemContainer">
    <p>{{ toDoText }}</p>
    <div class="itemButtons">
        <Icon icon="mingcute:check-line" class="checkIcon"/>
        <Icon icon="mingcute:delete-line" class="delIcon" @click="$emit('deleteTask')"/>
    </div>
  </div>
</template>

<style scoped lang="scss">
.itemContainer {
  display: flex;
  justify-content: space-between;
  height: 75px;
  background-color: #15101C;
  border-radius: 10px;
  margin-top: 10px;
  align-items: center;
  color: #9E78CF;
  padding: 0 15px;
  font-family: 'Inter', sans-serif;
  font-size: 16px;
}
.itemButtons {
  display: flex;
  cursor: pointer;
  font-size: 20px;
}
.checkIcon {
  margin: 1px 10px 0 0;
  &:hover{
    color:#3E1671
  }
}
.delIcon {
  &:hover{
    color:#3E1671
  }
}
</style>