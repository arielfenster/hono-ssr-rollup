import { createSSRApp } from 'vue';
import AboutPage from '../pages/about/AboutPage.vue';

const app = createSSRApp(AboutPage);
app.mount('#app');
