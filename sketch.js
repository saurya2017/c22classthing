const Engine=Matter.Engine
const Bodies=Matter.Bodies
const World= Matter.World

var engine,world,box,ground;

function setup() {
  createCanvas(800,400);
  engine=Engine.create()
  world=engine.world

  var option={
    isStatic:true
  }
  
  
  
  ground=Bodies.rectangle(400,390,800,400,option)
  World.add(world,ground)






var options={

  restitution:0.8

}




box=Bodies.circle(400,200,20,options)
World.add(world,box)




}

function draw() {
  background(255,255,255);  
  Engine.update(engine)
  ellipse(box.position.x,box.position.y,40,40);
  rect(ground.position.x,ground.position.y,800,400)
  drawSprites();
}