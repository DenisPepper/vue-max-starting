<template>
  <ul>
    <Resource
      v-for="res of storedResources"
      :key="res.id"
      :title="res.title"
      :description="res.description"
      :link="res.link"
    />
  </ul>
</template>

<script>
import Resource from '/src/components/learning-resources/Resource.vue';

export default {
  components: { Resource },
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
