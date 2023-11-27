//表示要等待某个动作的派发
export const TAKE = "TAKE";

//表示要派发某个动作
export const PUT = "PUT";

//开启一个新的子进程，不会阻塞当前的saga继续执行
export const FORK = "FORK";

//调用一个返回promise的函数
export const CALL = "CALL";

export const CPS = "CPS";

export const ALL = "ALL";

//取消任务
export const CANCEL = "CANCEL";
