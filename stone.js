class Stone{
    constructor(x,y,height,width){
        var options = {
            isStatic: false,
            restitution: 0,
            friction: 1,
            density: 1.2
        }
        
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    this.image = loadImage("sprites/stone.png")


    World.add(world, this.body);
    
    }
    display(){
        var position =this.body.position;
        push();
        translate(position.x, position.y);
        //rectMode(CENTER);
        //rect(position.x, position.y, this.width, this.height);
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height);
        pop();
    }
}