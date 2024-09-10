import { createApp } from 'vue';
import App from './App.vue';
import BaseCard from '/src/components/ui/BaseCard.vue';
import BaseButton from '/src/components/ui/BaseButton.vue';

const app = createApp(App);
app.component('BaseCard', BaseCard);
app.component('BaseButton', BaseButton);
app.mount('#app');
