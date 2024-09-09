<template>
  <ul class="friends-list" :style="direction">
    <!-- slots technic: https://vuejs.org/guide/components/slots.html -->
    <!-- этот слот будет принимать дочерний html, как в react props.children -->
    <slot></slot>
  </ul>
</template>

<script>
import listViews from '/src/friends-list-options.js';

export default {
  props: {
    view: {
      type: String,
      required: true,
    },
  },
  computed: {
    direction() {
      return this.view === listViews.row
        ? 'flex-direction: column'
        : 'flex-direction: column-reverse';
    },
  },
};
</script>

<style>
.friends-list {
  display: flex;
}
</style>
