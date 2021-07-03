import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

import { IonicVue } from '@ionic/vue';

/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';

/* Theme variables */
import './theme/variables.css';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBAHTwWKwe1ctVSCieaCGAnTKj5ZS1jxFw",
  authDomain: "yourmoment-ionic-vue.firebaseapp.com",
  projectId: "yourmoment-ionic-vue",
  storageBucket: "yourmoment-ionic-vue.appspot.com",
  messagingSenderId: "113346527401",
  appId: "1:113346527401:web:5f9ed0d869fb2234ffe9b8"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const db = firebase.firestore();

const app = createApp(App)
  .use(IonicVue)
  .use(router);
  
router.isReady().then(() => {
  app.mount('#app');
});