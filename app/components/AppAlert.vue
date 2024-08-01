<template>
  <div class="alert-red">
    <slot />
  </div>
</template>
<style scoped>
.alert-red {
  font-size: 2rem;
  color: firebrick;
  background-color: bisque;
  text-align: center;
  border: 1px solid black;
}
</style>