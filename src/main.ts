import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import useTable from './commons/vxtable';

createApp(App).use(router).use(useTable).mount('#app');
