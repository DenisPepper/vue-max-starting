<template>
  <!-- slots technic: https://vuejs.org/guide/components/slots.html -->
  <!-- похоже, что это аналог react props.children -->
  <div class="friend-card-container">
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style>
.friend-card-container {
  display: flex;
}
</style>
