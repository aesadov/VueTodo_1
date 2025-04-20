<script setup>
    import { Icon } from "@iconify/vue";
    defineEmits(['deleteTask', 'isDoneToggle'])

    // ⚠️ Добавь валидацию пропсов с типами и значениями по умолчанию
    defineProps(['toDoText', 'isDone'])
</script>

<template>
  <div class="itemContainer">
    <div :class="{doneTodoTextStyle: isDone}">{{ toDoText }}</div>
    <div v-if="!isDone" class="itemButtons">
      <!-- ⚠️ В будущем используем один способ вывода иконок, но в качестве эксперимента отлично) -->
        <Icon icon="mingcute:check-line" class="checkIcon" @click="$emit('isDoneToggle')"/>
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
.doneTodoTextStyle {
  color: #78CFB0;
  text-decoration: line-through;
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
