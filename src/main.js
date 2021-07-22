import 'primevue/resources/themes/saga-blue/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeflex/primeflex.css'
// наряду с primeicons (primeicons возможно совсем не будет использован) используем fontawesom
import 'primeicons/primeicons.css'
import './layout/layout.scss'

import {
    createApp
} 
from 'vue'
import App from './App.vue'
import router from './router/routes'

import PrimeVue from 'primevue/config'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'

import Menu from 'primevue/menu'
import Textarea from 'primevue/textarea'

import awesome from './awesome/awesome'
import ToastService from 'primevue/toastservice'
import Toast from 'primevue/toast'

const app = createApp(App);

app.use(router);
app.use(awesome);
app.use(PrimeVue, {
    ripple: true
});
app.use(ToastService);

app.component('Button', Button);
app.component('InputText', InputText);
app.component('Menu', Menu);
app.component('Textarea', Textarea);
app.component('Toast', Toast);

// можно использовать компоненты типа <font-awesome-icon icon="user-secret" />, только выбрать нужную icon
app.component('font-awesome-icon', awesome.FontAwesomeIcon);

app.mount('#app');