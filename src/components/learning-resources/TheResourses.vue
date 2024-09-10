<template>
  <BaseCard>
    <!-- особенность VUE JS - @click для пользовательского компонента -->
    <!-- по умолчанию применяется для корневого html элемента в этом компоненте -->
    <!-- для BaseButton @click применится для <button> -->
    <BaseButton @click="setActive('StoredResources')" type="button"
      >Stored</BaseButton
    >
    <BaseButton @click="setActive('AddResoure')" type="button"
      >Add new</BaseButton
    >
    <component :is="activeTab"></component>
  </BaseCard>
</template>

<script>
import StoredResources from '/src/components/learning-resources/StoredResources.vue';
import AddResoure from '/src/components/learning-resources/AddResoure.vue';

export default {
  components: { StoredResources, AddResoure },
  data() {
    return {
      activeTab: 'StoredResources',
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
  provide() {
    // use function syntax so that we can access `this`
    return {
      resources: this.storedResources,
    };
  },
  methods: {
    setActive(tabName) {
      this.activeTab = tabName;
    },
  },
};
</script>

<style></style>
