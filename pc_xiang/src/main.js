import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// 引用Vant相关组件
const app = createApp(App);
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
app.use(ElementPlus)
app.use(router).mount('#app')
import MyComponent from './App.vue'
require('./mock')
app.component('MyComponent', MyComponent)