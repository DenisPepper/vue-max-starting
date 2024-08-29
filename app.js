import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';

const config = {
  data() {
    return {
      goal: '',
      goals: [],
    };
  },
  methods: {
    addGoal() {
      if (!this.goal) return;
      this.goals.push(this.goal);
      this.clearGoal();
    },
    clearGoal() {
      this.goal = '';
    },
  },
  computed: {
    hasGoals() {
      return this.goals.length > 0;
    },
  },
};

const app = createApp(config);

app.mount('#user-goals');
