import { createSSRApp } from 'vue';
import SearchPage from '../pages/search/SearchPage.vue';

const app = createSSRApp(SearchPage);
app.mount('#app');
