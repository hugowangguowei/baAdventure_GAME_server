/**
 * Created by wgw on 2016/3/1.
 */

/**
 * 客户端发送信息名称
 * @constructor
 */
var CMT = {
    DISCONNECT:'disconnect',
    BASIC_CONNECT:'basicConnect',
    START_GAME:'startGame'
}
exports.CLIENT_MSG_TYPE = CMT;

/**
 * 服务端发送消息名称
 * @constructor
 */
var SMT = {
    //系统通知
    SYSTEM_INFORM : "system_inform",
    //基本连接返回值
    BASIC_CONNECT_RETURN : "basicConnectReturn",
    //游戏消息
    GAME_INFO:'gameInfo'
}
exports.SERVER_MSG_TYPE = SMT;