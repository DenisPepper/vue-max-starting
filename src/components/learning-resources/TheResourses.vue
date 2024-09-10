<template>
  <BaseCard>
    <!-- особенность VUE JS - @click для пользовательского компонента -->
    <!-- по умолчанию применяется для корневого html элемента в этом компоненте -->
    <!-- для BaseButton @click применится для <button> -->
    <BaseButton
      @click="setActive('StoredResources')"
      type="button"
      :mode="isStoredActive"
      >Stored</BaseButton
    >
    <BaseButton
      @click="setActive('AddResoure')"
      type="button"
      :mode="isAddNewActive"
      >Add new</BaseButton
    >
    <KeepAlive>
      <component :is="activeTab"></component>
    </KeepAlive>
  </BaseCard>
</template>

<script>
import { computed } from 'vue';
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
      resources: computed(() => this.storedResources),
      addResource: this.addNew,
      removeResource: this.remove,
    };
  },
  methods: {
    setActive(tabName) {
      this.activeTab = tabName;
    },
    addNew(title, description, link) {
      const newResource = {
        id: new Date().toISOString,
        title,
        description,
        link,
      };
      this.storedResources.unshift(newResource);
      this.activeTab = 'StoredResources';
    },
    remove(id) {
      this.storedResources = this.storedResources.filter(
        (item) => item.id !== id
      );
    },
  },
  computed: {
    isStoredActive() {
      return this.activeTab === 'StoredResources' ? null : 'flat';
    },
    isAddNewActive() {
      return this.activeTab === 'AddResoure' ? null : 'flat';
    },
  },
};
</script>

<style></style>