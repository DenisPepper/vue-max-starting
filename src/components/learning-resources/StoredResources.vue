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
  props: ['resources'],
  components: { Resource },
};
</script>
