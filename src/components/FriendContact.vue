<template>
  <li>
    <h2>{{ firstName }} {{ isFavorite ? '(⭐)' : '' }}</h2>
    <button @click="toggleDetails">Show Details</button>
    <button @click="setFavoriteStatus">Toggle ⭐</button>
    <ul v-if="showDetails">
      <li>{{ phone }}</li>
      <li>{{ email }}</li>
    </ul>
  </li>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
    firstName: {
      type: String,
      required: true,
      default: 'No name',
      validator: (value) => value.length >= 3,
    },
    phone: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    isFavorite: {
      type: Boolean,
      required: true,
    },
  },
  emits: ['set-favorite'],
  // если валидация не нужна, то можно просто задекларировать список событий компонента в emits
  // чтобы оптимизировать работу Vue-фреймворка
  // see more: https://vuejs.org/guide/components/events.html
  data() {
    return {
      showDetails: false,
    };
  },
  methods: {
    toggleDetails() {
      this.showDetails = !this.showDetails;
    },
    setFavoriteStatus() {
      this.$emit('set-favorite', this.id);
    },
  },
};
</script>
