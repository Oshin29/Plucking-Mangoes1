class Tree{
    constructor(x,y,width,height)
	{
		var options={
			isStatic:true,
			}
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
		this.body = Bodies.rectangle(this.x, this.y, options);
		this.image = loadImage("sprites/tree.png");
        World.add(world, this.body);
		
		
		}
display(){
	var pos =this.body.position;
	imageMode(CENTER);
	
	image(this.image,pos.x, pos.y,this.width,this.height);
}
	}
