# Create a React App 入门

## 可用的脚本

在项目目录中，你可以运行：

### `npm start`

- 以开发模式运行应用程序。
- 打开 http://localhost:3000，在浏览器中查看。

- 当你进行修改时，页面将会重新加载。

### `npm run build`

- 为生产环境构建应用程序，将其打包到 build 文件夹。
- 它正确地以生产模式打包了 React，并且以最佳性能优化了构建。

- 构建已经压缩，文件名包含散列。
- 你的应用程序已经准备好部署了！

export const TAKE = 'TAKE';//监听一次派发的动作
export const PUT = 'PUT';//派了一个动作
export const FORK = 'FORK';//开启一个新的子进行执行saga
export const CALL = 'CALL';//调用一个方法，返回一个promise.等promise完成后再继续向后执行当前的saga
export const CPS = 'CPS';//调用一个方法，等方法内部调用callback函数后继续执行当前的saga
export const ALL = 'ALL';//同时开启多个saga,等多个saga都完成后再继续执行当前的saga
+export const CANCEL = 'CANCEL'; 取消某个saga的执行，直接把它结束掉