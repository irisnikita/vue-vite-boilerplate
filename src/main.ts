// Libraries
import { createApp } from 'vue'
import Antd from 'ant-design-vue'

// App
import App from './App.vue'

// Globals
import { globals } from './globals'

// Atom components
import { VButton } from './components/atoms'

// Css
import './assets/styles/style.scss'
import 'ant-design-vue/dist/antd.less'

const app = createApp(App)

// Global components
app.component('VButton', VButton)

// Global directives
app.config.globalProperties.$http = globals

app.use(Antd)

// Mount
app.mount('#app')
