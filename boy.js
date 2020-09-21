class Boy{
    constructor(x,y,width,height)
	{
		/*var options={
			isStatic:true,
			restitution:0.3,
			friction:0.5,
			density:1.2

			
			}*/
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
		this.body=createSprite(this.x, this.y,this.width, this.height);
		//this.body = Bodies.rectangle(this.x, this.y,this.width, this.height, options);
		this.image = loadImage("sprites/boy.png");
		this.body.scale=0.15;
        //World.add(world, this.body);
		
		
		}
display(){
	//var pos =this.body.position;
	this.body.addImage(this.image);
	drawSprites();
}
	}
