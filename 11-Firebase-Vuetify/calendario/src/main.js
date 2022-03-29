import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'

// Esta linea tambien la hemetiod a manao 
import VueTextareaAutosize from 'vue-textarea-autosize';
Vue.use(VueTextareaAutosize);

// HE METIDO A MANO LA LINES 12 Y 13  Y DE LA 14 A LA 24 LO HE COPIADO DEL PROYECTO DE FAREBASE 
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyDqjfylRrxWqf7kBEAFDwjWFHbcf9tL4ac",
  authDomain: "vue-calendario-a39f2.firebaseapp.com",
  projectId: "vue-calendario-a39f2",
  storageBucket: "vue-calendario-a39f2.appspot.com",
  messagingSenderId: "677374729239",
  appId: "1:677374729239:web:ec310e54290d9aef175052"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// ESTA LINEA TAMBIEN LA HE ESCRITO A MANO, Y NOS TRAERA TODA LA INFORMACION DE 
// NUESTRA BASE DE FIREBASE Y HA DE ESTAR COLOCADO DEBAJHO DE LA INICIALIZAXION LINEA 23
export const db = getFirestore(app);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
