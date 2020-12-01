class Connector {
    constructor(bodyA,pointB){

    var options= {
        bodyA:bodyA,
        pointB:pointB,
        length:10,
        stiffness:0.04
    };

    this.chain= Constraint.create(options);
    this.pointB= pointB;
    World.add(world,this.chain);
    }
   

    fly(){
        this.chain.bodyA= null;
    }

    attacher(bodyA){
        this.chain.bodyA= bodyA;
    }

    display(){

        if(this.chain.bodyA){
            strokeWeight(3);
            line(this.chain.bodyA.position.x,this.chain.bodyA.position.y,this.pointB.x,this.pointB.y);
        }
    }
}
