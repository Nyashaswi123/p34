class Hero{
    constructor(x,y,r){
var options={
    density:1,
    frictionAir:2
}
this.x=x;
this.y=y;
this.r=r;
this.width=width
this.height=height;
this.image=loadImage("images/hero.png")

this.image.width
this.body=Bodies.circle(this.x,this.y,(this.r)/2,options)
World.add(myWorld,this.body)

    }
    display(){
        
        push();
        translate(this.body.position.x,this.body.position.y)      
       image(this.image,0,0,this.width/6,this.height/6)
        pop()
    }
}
