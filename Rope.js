class Rope{
    constructor(x,y,width,height){
var options={
    density:1,
    restitution:0.8,
    frictionAir:0.1,
   
}


this.width=width
this.height=height;
World.add(world,this.body)
    }
    display(){
        
        push();
        translate(this.body.position.x,this.body.position.y)
      
       
        pop()
    }
}