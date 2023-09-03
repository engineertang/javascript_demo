'use strict'

let point = {
    x: 0,
    y: 0,
    getX(){return x},
    getCoordiateY(){return this.y},
    moveBy(a, b){
        this.x +=a;
        this.y +=b;
    }
}


function myconstructor(x, y){
    this.x = x;
    this.y = y;
}

myconstructor.prototype.getX = function (){return x};
myconstructor.prototype.getCoordiateY = function() {return this.y};
myconstructor.prototype.getX = function (){return x};

class Point{
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    getCoordiateX(){return x}
    getCoordiateY(){return this.y}
    setCoordiateY(y){
        if(!Number.isNaN(y)){
            this.y = y;
        }
    }
    moveBy(a, b){
        this.x +=a;
        this.y +=b;
    }
}

let point2 = new myconstructor(2, 4);
console.log(point2)
let point3 = new Point(3,4);
console.log(point3)