<template>
  <li>
    <h2>{{ friend.firstName }}</h2>
    <button @click="toggleDetails">Show Details</button>
    <ul v-if="showDetails">
      <li :key="friend.id">{{ friend.phone }}</li>
      <li>{{ friend.email }}</li>
    </ul>
  </li>
</template>

<script>
export default {
  data() {
    return {
      showDetails: false,
      friend: {
        id: '123',
        firstName: 'Denis',
        phone: '156489',
        email: 'email@google.com',
      },
    };
  },
  methods: {
    toggleDetails() {
      this.showDetails = !this.showDetails;
    },
  },
};
</script>
