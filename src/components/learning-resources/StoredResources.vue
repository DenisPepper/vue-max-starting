<template>
  <ul>
    <Resource
      v-for="res of resources"
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
  inject: ['resources'],
  components: { Resource },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  margin: auto;
  max-width: 40rem;
}
</style>
