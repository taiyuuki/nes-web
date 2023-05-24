import { ElNotification as elNotify } from 'element-plus'
import 'element-plus/theme-chalk/el-notification.css'

export function errorNotify(info: string) {
    elNotify({
        title: info,
        type: 'error',
    })
}

export function infoNotify(info: string) {
    elNotify({
        title: info,
        type: 'info',
    })
}

export function successNotify(info: string) {
    elNotify({
        title: info,
        type: 'success',
    })
}
