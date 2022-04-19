import { createApp } from 'vue'
import App from './useConfirmDialog.vue'

import ElementUI from 'element-plus'
import 'element-plus/dist/index.css'

import zhCn from 'element-plus/es/locale/lang/zh-cn'


createApp(App)
    .use(ElementUI, {
        locale: zhCn,
    })
    .mount('#app')
