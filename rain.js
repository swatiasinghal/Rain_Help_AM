class rain  {
  constructor(x,y){
    var options = {
        friction: 0.001,
        restitution:0.1           
    }
    this.rain = Bodies.circle(x,y,5,options)
    this.radius = 5;
    World.add(world, this.rain);
}

display()
{
  fill("blue")
  ellipseMode(CENTER);
  ellipse(this.rain.position.x,this.rain.position.y,this.radius,this.radius);
}
  }