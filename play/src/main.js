import { createApp } from 'vue'
import App from './App.vue'
import ElusaUI from "elusa-ui"
import "elusa-ui/dist/style.css"
// 模块的按需导入
// import { Button as ELButton } from "@elusa-ui/components"
const app = createApp(App)
app.use(ElusaUI)
console.log("elbutton", app.component("el-button"));
app.mount('#app')