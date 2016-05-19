/**
 * Created by wgw on 2016/4/27.
 * chapter1 猎熊者
 */


var mapManager = require('../../controller/MapManager').getInstance();

exports.Map = mapManager.getMap("RR_c1"),
exports.Sprite = {
    //"leader":{num:1},
    //"follower":{num:4},
    "bear":{num:1}
}
