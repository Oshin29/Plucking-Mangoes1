class Tree{
    constructor(x,y,width,height)
	{
		/*var options={
			isStatic:true,
			}*/
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
		this.body = createSprite(this.x, this.y,this.width, this.height);
		this.image = loadImage("sprites/tree.png");
		this.body.scale=0.5;
        //World.add(world, this.body);
		
		
		}
display(){
	/*var pos =this.body.position;
	imageMode(CENTER);
	
	image(this.image,pos.x, pos.y,this.width,this.height);
	*/
	drawSprites();
	this.body.addImage(this.image);
}
	}
