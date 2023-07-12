import { createPinia } from 'pinia'
import { createApp } from 'vue'
import PrimeVue from 'primevue/config'
import ToastService from 'primevue/toastservice'
import DialogService from 'primevue/dialogservice'
import ConfirmationService from 'primevue/confirmationservice'

import i18nInstance from '@/locales'
import App from '@/App.vue'

import 'primevue/resources/themes/saga-blue/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'

const app = createApp(App)

app.use(createPinia())
app.use(i18nInstance)
app.use(PrimeVue)
app.use(ToastService)
app.use(DialogService)
app.use(ConfirmationService)

app.mount('#app')

export { app }
