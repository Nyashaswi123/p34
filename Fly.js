class Fly{
    constructor(bodyA,pointB){
        var options={
            stiffness:0.1,
            length:300,
            bodyA:bodyA,
            pointB:pointB
        }
        this.pointB=pointB;
        this.fly=Constraint.create(options)
        World.add(myWorld,this.fly)
        
    }



    display(){
        if(this.fly.bodyA){
            var pointA=this.fly.bodyA.position;
            var pointB=this.pointB;
            push()
            strokeWeight(2)
            line(pointB.x,pointB.y,pointA.x,pointA.y)
            pop()
        }
    }
}