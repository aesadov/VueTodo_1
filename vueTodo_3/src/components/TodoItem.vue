<script setup>
</script>

<template>
  <div class="itemContainer">
    <p>task to do</p>
    <div class="itemButtons">
        <p>v</p>
        <p>del</p>
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
  padding: 15px;
  font-family: 'Inter', sans-serif;
  font-size: 16px;
}
.itemButtons {
  display: flex;
}
.checkIcon {
  width: 24px;
  height: 24px;
  fill: currentColor
}
</style>