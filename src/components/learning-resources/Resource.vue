<template>
  <li>
    <div>
      <header>
        <h3>{{ title }}</h3>
        <button>❌</button>
      </header>
    </div>
    <p>{{ description }}</p>
    <nav>
      <a :href="link" target="_blank">go to read &rarr;</a>
    </nav>
  </li>
</template>

<script>
export default {
  props: ['title', 'description', 'link'],
};
</script>
