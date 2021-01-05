class Bob
{
    constructor (x,y)
    {
        var options = {
            isStatic:false,
			restitution:1,
			friction:0,
			density:0.8
        }
        this.body = Bodies.circle(x,y,25,options);
        this.body.debug = true;
        World.add(world,this.body);
    }
    display(){
        var pos =this.body.position;
        push();
        translate(pos.x,pos.y);
        rectMode(CENTER);
        fill(255);
        ellipse(0,0,50,50);
        pop();
      }
}