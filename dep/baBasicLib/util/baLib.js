/**
 * Created by wangguowei on 2016/1/11.
 */

exports.cloneObject = function(obj){
    if(typeof obj === "object"){
        if(Object.prototype.toString.call(obj) === '[object Array'){
            var newArray = [];
            for(var i = 0;i<obj.length;i++){
                newArray.push(cloneObject(obj[i]));
            }
            return newArray;
        }
        else{
            var newObj = {};
            for(var key in obj){
                newObj[key] = this.cloneObject(obj[key]);
            }
            return newObj;
        }
    }
    else{
        return obj;
    }
}

exports.isEmpty = function(obj){
    for(var i in obj){
        return false;
    }
    return true;
}

exports.isOwnEmpty = function(obj){
    for(var i in obj){
        if(obj.hasOwnProperty(i)){
            return false;
        }
    }
    return true;
}

exports.getRandomColor = function(){
    var c_r = parseInt(Math.random()*255);
    var c_g = parseInt(Math.random()*255);
    var c_b = parseInt(Math.random()*255);
    var color = 'rgb(' + c_r + "," + c_g + "," + c_b + ")";
    return color;
}

exports.getPointOnDiv = function(x,y,obj){
    var bBox = obj.getBoundingClientRect();
    return {
        x:x-bBox.left*(obj.width/bBox.width),
        y:y - bBox.top*(obj.height/bBox.height)
    };
}

exports.getCircleAreaInArray = function(w,h,x,y,r){
    var data = [];
    var _temX,_temY;
    for(var i = 0;i<(2*r + 1);i++){
        _temX = x-r+i;
        if(_temX >= 0 && _temX <= w){
            for(var j = 0;j<(2*r + 1);j ++){
                _temY = y -r +j;
                if(_temY>= 0 && _temY<= h){
                    if((i - r)*(i - r) + (j - r)*(j-r) < r*r){
                        data.push(_temY * w + _temX);
                    }
                }
            }
        }
    }
    return data;
}

exports.getTwoSpriteDis = function(sprite_1,sprite_2){
    var _x = sprite_1.loc.x - sprite_2.loc.x;
    var _y = sprite_1.loc.y - sprite_2.loc.y;
    var dis = Math.sqrt(_x*_x + _y*_y);
    return dis;
}
