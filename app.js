import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';

const app = {
  data: () => ({
    goals: [],
    enteredValue: '',
  }),
  methods: {
    addGoal() {
      this.goals.push(this.enteredValue);
    },
  },
};

createApp(app).mount('#app');
