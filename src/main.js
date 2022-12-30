import { createApp } from 'vue'
import App from './App'
import components from '@/components/UI';
import router from "@/router/router";
import Vdirective from './directives/Vdirective';
import store from '@/store'


const app = createApp(App)

components.forEach(component => {
    app.component(component.name, component) 
})
app.directive('directive', Vdirective)
app.use(router)
app.mount('#app')
app.use(store)
