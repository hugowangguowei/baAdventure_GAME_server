/**
 * Created by wgw on 2016/4/18.
 */

var spriteManager = require("./controller/SpriteManager").getInstance();
var Geo = require("./model/Geo");
var baEventSource = require("../dep/baBasicLib/baEventSource");

module.exports = GManager;

function GManager(initInfo){
    baEventSource.call(this);
    this.geoInfo = new Geo();
    this.spriteList = [];
    this.timer = {
        timerTask:null,
        frameSpeed:40
    }
    this.initialize(initInfo);
}

GManager.prototype = new baEventSource();
GManager.prototype.initialize = function(initInfo){
};
GManager.prototype.loadChapter = function(chapterInfo){
    var self = this;
    if(chapterInfo.Map){
        this.geoInfo.generateByFile(chapterInfo.Map);
        self.fireEvent('geoChange');
    }
    if(chapterInfo.Sprite){
        var spriteList = chapterInfo.Sprite;
        for(var i in spriteList){
            var num = spriteList[i].num;
            for(var m = 0;m<num;m++){
                var sprite_i = spriteManager.generateSpriteByType(i);
                sprite_i.testSignal.watch = true;
                this.addSprite(sprite_i);

            }
        }
    }
    this.timer.timerTask = setInterval(function(){
        var changedSprite = [];
        for(var i = 0;i<self.spriteList.length;i++){
            var sprite_i = self.spriteList[i];
            sprite_i.action();
            changedSprite.push(sprite_i.getOutPut());
        }
        self.fireEvent("spriteChange",changedSprite);
    },this.timer.frameSpeed);
};
GManager.prototype.addSprite = function(sprite_i){
    sprite_i.GM = this;
    sprite_i.addToGeo(this.geoInfo);
    this.spriteList.push(sprite_i);
};
GManager.prototype.removeSprite = function(sprite){
    for(var i = 0;i<this.spriteList.length;i++){
        var sprite_i = this.spriteList[i];
        if(sprite_i == sprite){
            this.spriteList.splice(i,1);
            return true;
        }
    }
    return false;
}
