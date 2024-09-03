<template>
  <li>
    <h2>{{ firstName }}</h2>
    <button @click="toggleDetails">Show Details</button>
    <ul v-if="showDetails">
      <li>{{ phone }}</li>
      <li>{{ email }}</li>
    </ul>
  </li>
</template>

<script>
export default {
  props: {
    firstName: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
  },
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
