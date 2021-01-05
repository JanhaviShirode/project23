class paper{
    constructor(x,y,radius){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2,
        }
        this.body=Bodies.rectangle(x,y,50,options);
        
        World.add(myWorld,this.body);
    }
    display(){
        var pos=this.body.position
        pos.x=mouseX;
        pos.y= mouseY;
        var angle=this.body.angle
        push()
        translate(pos.x,pos.y);
     rotate(angle);
     ellipseMode(CENTER);
    fill("violet");
    circle(0,0,this.radius);
    pop();
    }
}