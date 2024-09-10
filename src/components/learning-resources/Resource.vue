<template>
  <li>
    <BaseCard>
      <header>
        <h3>{{ title }}</h3>
        <button>❌</button>
      </header>
      <p>{{ description }}</p>
      <nav>
        <a :href="link" target="_blank">go to read &rarr;</a>
      </nav>
    </BaseCard>
  </li>
</template>

<script>
export default {
  props: ['title', 'description', 'link'],
};
</script>
