<script setup lang='ts'>
import { Icon } from "@iconify/vue";

interface Props {
  toDoText: string
  isDone: boolean
}

interface Emits {
  (e: 'delete-task'): void
  (e: 'is-done-toggle'): void
}

const props = withDefaults(defineProps<Props>(), {
  isDone: false
})

const emit = defineEmits<Emits>()

</script>

<template>
  <div class="task-item">
    <div class="task-item__text" :class="{'task-item__text--done': isDone}">{{ toDoText }}</div>
    <div v-if="!isDone" class="task-item__actions">
        <Icon icon="mingcute:check-line" class="task-item__icon task-item__icon--check" @click="$emit('is-done-toggle')"/>
        <Icon icon="mingcute:delete-line" class="task-item__icon task-item__icon--delete" @click="$emit('delete-task')"/>
    </div>
  </div>
</template>

<style scoped lang="scss">
.task-item {
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

  &__text {
    margin: 0;

    &--done {
      color: #78CFB0;
      text-decoration: line-through;
    }
  }

  &__actions {
    display: flex;
    gap: 15px;
  }

  &__icon {
    cursor: pointer;
    font-size: 20px;

    &--check {
      margin-top: 1px;
      &:hover{
        color:#3E1671
      }
    }

    &--delete:hover {
        color:#3E1671
    }
  }
}
</style>