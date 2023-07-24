import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import useTable from './commons/vxtable';

createApp(App).use(router).use(store).use(useTable).mount('#app');
