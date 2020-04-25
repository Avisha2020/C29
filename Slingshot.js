class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
        this.catapult1=loadImage("sprites/sling1.png");
        this.catapult2=loadImage("sprites/sling2.png");
        this.rubber_band=loadImage("sprites/sling3.png");
        
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            if(pointA.x<220){
                strokeWeight(8);
            line(pointA.x-10, pointA.y, pointB.x, pointB.y-30);
            line(pointA.x-10,pointA.y,pointB.x-50,pointB.y-30);
            image(this.rubber_band,pointA.x-25,pointA.y-10,15,30);
            

            }
            else{
                strokeWeight(3);
                line(pointA.x+20,pointA.y,pointB.x,pointB.y-30);
                line(pointA.x+20,pointA.y, pointB.x-50,pointB.y-30);
                image(this.rubber_band,pointA.x+20,pointA.y-10,15,30);

            }
            
            
            
        }
        image(this.catapult1,170,20);
        image(this.catapult2,140,20);

        
    }
    
}