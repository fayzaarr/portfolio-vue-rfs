import { createApp } from 'vue';
import App from './App.vue';
import '@/assets/styles/global.css'
import router from './router'; // Pastikan router diimpor

const app = createApp(App);
app.use(router); // Pastikan router digunakan
app.mount('#app');
