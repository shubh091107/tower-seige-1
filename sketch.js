const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine
var world

var polygon1
var sling
function setup(){
var canvas = createCanvas(800,800)
engine = Engine.create()
world = engine.World;


polygon1 = new Polygon()
sling = new SlingShot(polygon.body,{x:200,y:200})
}





function draw(){
    background(0)
    Engine.update(engine)
    polygon1.display()
    sling.display()


}
