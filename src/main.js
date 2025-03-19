import { createApp } from 'vue';
import App from './App.vue';
import '@/assets/styles/global.css'
import router from './router'; // Pastikan router diimpor
import { Cloudinary } from "@cloudinary/url-gen";

const app = createApp(App);
app.use(router); // Pastikan router digunakan
app.mount('#app');

const cld = new Cloudinary({
    cloud: {
      cloudName: "dwpf6qqtm", // Ganti dengan Cloud Name kamu
    }
});

export default cld;
