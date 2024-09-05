<template>
  <li>
    <h2>{{ firstName }} {{ isFavorite ? '(⭐)' : '' }}</h2>
    <div class="card-actions">
      <button @click="toggleDetails">Show Details</button>
      <button @click="this.$emit('set-favorite', this.id)">Toggle ⭐</button>
      <button @click="this.$emit('remove-friend', this.id)">Say bay! 🙋‍♂️</button>
    </div>
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
      type: Number,
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
  emits: ['set-favorite', 'remove-friend'],
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
  },
};
</script>

<style>
.card-actions {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
}

.card-actions button {
  max-width: 40%;
  width: 40%;
  border-radius: 10px;
}
</style>
