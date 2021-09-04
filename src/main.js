import {createApp} from 'vue'
import App from './pages/App'
import router from './router'
import titleMixin from './mixins/titleMixin'

createApp(App)
    .mixin(titleMixin)
    .use(router)
    .mount('#app')