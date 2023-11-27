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



开发就是这样写吗
悟空撤回了一条消息
花儿要打败熊猫当国宝
那个workersaga 和watchersaga 是咋工作来着。
这里没有调用next方法啊


react-saga和redux-logger，thunk等等都是redux的中间件是吧
是的
他们的地位是一样
function (){
    function(){
        
    }

}



韦林
每写一个异步操作 都要写一遍 rootSage watchSage workSage 吗？

rootsaga只有一份
但是每一个异步都要写watcherSage workerSage 
韦林
function next(value) {
        let {value:effect,done} = it.next(value);
花儿要打败熊猫当国宝
done就不会走 才对
韦林
是不是next() 没有传参数啊

没明白 fork 是啥原理不阻塞的，不用fork怎么就阻塞了呢
初心
用了next,直接往下走了



韦林
fork 参数是一个新的迭代器函数 所以 要runSage
不管你产出的是一个迭代器，还是一个fork
都需要走runSaga
唯一的区别在于如果产出的是迭代器，不会立刻调用当前的saga的next
如果产出的fork,会立刻调用当前的saga的next
花儿要打败熊猫当国宝
那那个watcherSage 里面的fork 没有啊


redux-sage 原来这么强大
21:51
花儿要打败熊猫当国宝
都调用 next（‘cancel_task’）;为啥还要next（）



export const TAKE = 'TAKE';//监听一次派发的动作
export const PUT = 'PUT';//派了一个动作
export const FORK = 'FORK';//开启一个新的子进行执行saga
export const CALL = 'CALL';//调用一个方法，返回一个promise.等promise完成后再继续向后执行当前的saga
export const CPS = 'CPS';//调用一个方法，等方法内部调用callback函数后继续执行当前的saga
export const ALL = 'ALL';//同时开启多个saga,等多个saga都完成后再继续执行当前的saga
+export const CANCEL = 'CANCEL'; 取消某个saga的执行，直接把它结束掉
花儿要打败熊猫当国宝
明白了



老师，课件链接发下
http://www.zhufengpeixun.com/front/html/2.8.dva.html#t01.dva%E4%BB%8B%E7%BB%8D
花儿要打败熊猫当国宝
老师那个fork。开启一个“新的子进程”这个新的子进程 怎么理解来着。忘记了

执行runSage  && next()


take put 必须成对使用把
韦林
发布订阅