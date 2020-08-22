class Slingshot{
    constructor(body1,pointB){
        var  options = {
            bodyA : body1,
            pointB : pointB,
            stiffness : 0.04,
            length : 10, 
        }

        this.pointB = pointB;
        this.sling = c.create(options);
        World.add(world,this.sling)
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        if(this.sling.bodyA !== null){
        var point1 = this.sling.bodyA.position;
        var point2 = this.pointB;
        strokeWeight(5);
        line(point1.x,point1.y,point2.x,point2.y);
        }
    }
}