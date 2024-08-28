import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';

const config = {
  data() {
    return { goals: [] };
  },
};

const app = createApp(config);

app.mount('#user-goals');
