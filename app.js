import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';

const config = {
  data() {
    return {
      counter: 0,
      name: '',
    };
  },
  methods: {
    increment() {
      this.counter += 1;
    },
    decrement() {
      if (this.counter === 0) return;
      this.counter -= 1;
    },
    log(evt) {
      console.log(evt.target.value);
    },
    clear() {
      this.name = '';
    },
  },
};

const app = createApp(config);

app.mount('#events');
