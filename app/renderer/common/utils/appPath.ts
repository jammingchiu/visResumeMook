// 监听主进程与渲染进程通信
import { ipcRenderer } from 'electron';

// 获取项目绝对路径
export function getAppPath() {
    return new Promise(
        (resolve: (value: string) => void, reject: (value: Error) => void) => {
            ipcRenderer.send('get-root-path', '');
            ipcRenderer.on('reply-root-path', (event, arg: string) => {
                if (arg) {
                    resolve(arg);
                } else {
                    reject(new Error('项目路径错误'));
                }
            });
        }
    );
}