/**
 * Created by wgw on 2016/3/1.
 */

/**
 * �ͻ��˷�����Ϣ����
 * @constructor
 */
var CMT = {
    DISCONNECT:'disconnect',
    BASIC_CONNECT:'basicConnect',
    START_GAME:'startGame'
}
exports.CLIENT_MSG_TYPE = CMT;

/**
 * ����˷�����Ϣ����
 * @constructor
 */
var SMT = {
    //ϵͳ֪ͨ
    SYSTEM_INFORM : "system_inform",
    //�������ӷ���ֵ
    BASIC_CONNECT_RETURN : "basicConnectReturn",
    //��Ϸ��Ϣ
    GAME_INFO:'gameInfo'
}
exports.SERVER_MSG_TYPE = SMT;