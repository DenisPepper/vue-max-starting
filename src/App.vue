<template>
  <AppHeader title="List of my web resources" />
  <TheResourses />
</template>

<script>
import TheResourses from '/src/components/learning-resources/TheResourses.vue';
import AppHeader from '/src/components/layouts/AppHeader.vue';

export default {
  components: { AppHeader, TheResourses },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}
</style>
