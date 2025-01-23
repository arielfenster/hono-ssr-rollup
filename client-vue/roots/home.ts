import { createSSRApp } from 'vue';
import HomePage from '../pages/home/HomePage.vue';

const app = createSSRApp(HomePage);
app.mount('#app');
