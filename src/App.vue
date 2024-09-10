<template>
  <AppHeader title="List of my web resources" />
  <StoredResources :resources="storedResources" />
</template>

<script>
import StoredResources from '/src/components/learning-resources/StoredResources.vue';
import AppHeader from '/src/components/layouts/AppHeader.vue';

export default {
  components: { AppHeader, StoredResources },
  data() {
    return {
      storedResources: [
        {
          id: 'official-guide',
          title: 'Official Guide',
          description: 'The official Vue.js documentation.',
          link: 'https://vuejs.org/',
        },
        {
          id: 'google',
          title: 'Google',
          description: 'Learn to google ...',
          link: 'https://www.google.com/',
        },
      ],
    };
  },
};
</script>
