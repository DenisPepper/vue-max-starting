<template>
  <section class="friends">
    <div class="friends__controls">
      list direction:
      <!-- сюда попадет контент у которого указан атрибут #controls-->
      <slot name="controls">
        List controls
        <!-- fallback content -->
      </slot>
    </div>
    <ul class="friends__list" :style="direction">
      <!-- slots technic: https://vuejs.org/guide/components/slots.html -->
      <!-- этот слот будет принимать дочерний html, как в react props.children -->
      <!-- этот млот имеет по умолчанию name="default"-->
      <slot></slot>
    </ul>
  </section>
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
.friends__list {
  display: flex;
}
</style>
