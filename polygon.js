class Polygon{
    constructor(){
        var op = {
            isStatic : false,
            density : 1,
            restitution:1,
            friction:1
        }
        this.body = Bodies.rectangle(200,700,10,10,op)
        this.image = loadImage("polygon.png")
        this.width = 10
        this.height = 10
        World.add(world,this.body)
    }
    display(){
       
        var p = this.body.position
        push()
        translate(p.x,p.y)
        rotate(this.body.angle)
        imageMode(CENTER)
        image(this.image,0,0,this.width,this.height)
        pop()
    }
}