<script setup>
    import CheckIcon from '../assets/icons/checkIcon.svg'
    import DelIcon from '../assets/icons/delIcon.svg'

    defineProps(['toDoText', 'isDone'])
</script>

<template>
  <div class="itemContainer">
    <p>{{ toDoText }}</p>
    <div class="itemButtons">
        <CheckIcon class="checkIcon"/>
        <DelIcon/>
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
}
.checkIcon {
  margin: 3px 10px 0 0;
}
</style>