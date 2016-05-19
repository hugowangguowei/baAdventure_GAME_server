/**
 * Created by wgw on 2016/4/29.
 */

var Bear = require('../script/revengerRoad/chapter_1/sprite/Bear');
var instance = null;
exports.getInstance = function(){
    if(!instance){
        instance = new SpriteManager();
    }
    return instance;
}

function SpriteManager(){

}
SpriteManager.prototype ={
    generateSpriteByType:function(type){
        var sprite;
        switch (type){
            case 'bear':
                sprite = new Bear();
                break;
        }

        return sprite;
    }
}
