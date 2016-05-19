/**
 * Created by wgw on 2016/2/28.
 */

var CMT = require('./socket_msgDefine').CLIENT_MSG_TYPE;
var SMT = require('./socket_msgDefine').SERVER_MSG_TYPE;
var GManager = require('../GManager');
var chapter_1 = require('../script/revengerRoad/chapter_1');

exports.clientHandle = function(){
    return [
        //断开连接
        {msgName:CMT.DISCONNECT,msgFunc:function(){
            console.log(this.id + ":disconnected");
            _disconnect(this);
            function _disconnect(_socket){
            };
        }},
        //请求连接服务器
        {msgName:CMT.BASIC_CONNECT,msgFunc:function(cd){
            console.log(cd.userName + " get In");

            _basicConnect(this);
            function _basicConnect(_socket){
                _socket.emit('basicConnectReturn','ok');
            }
        }},
        //开始游戏
        {msgName:CMT.START_GAME,msgFunc:function(map){
            var gm = new GManager();
            gm.loadChapter(chapter_1,null,true);
        }}
    ];
}

