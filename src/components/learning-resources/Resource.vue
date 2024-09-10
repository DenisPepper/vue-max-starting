<template>
  <li>
    <BaseCard>
      <header>
        <h3>{{ title }}</h3>
        <BaseButton type="button" title="delete" mode="flat">❌</BaseButton>
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
