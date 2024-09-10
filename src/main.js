import { createApp } from 'vue';
import App from './App.vue';
import BaseCard from '/src/components/ui/BaseCard.vue';
import BaseButton from '/src/components/ui/BaseButton.vue';
import BaseModal from '/src/components/ui/BaseModal.vue';

const app = createApp(App);
app.component('BaseCard', BaseCard);
app.component('BaseButton', BaseButton);
app.component('BaseModal', BaseModal);
app.mount('#app');
