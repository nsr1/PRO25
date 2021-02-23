class bin{
    constructor(x,y){
		this.x = x
		this.y= y
		this.height = 100
		this.width = 200
		this.wallThickness = 20
		this.angle = 0
		this.image = loadImage("images/dustbingreen.png")

		this.bottomBody = Bodies.rectangle(this.x,this.y,this.width,this.wallThickness,{isStatic:true})
		this.leftBody = Bodies.rectangle(this.x-this.width/2,this.y-this.height/2,this.wallThickness,this.height,{isStatic:true})
		Matter.Body.setAngle(this.leftBody,this.angle)
		this.rightBody = Bodies.rectangle(this.x+this.width/2,this.y-this.height/2,this.wallThickness,this.height,{isStatic:true})
		Matter.Body.setAngle(this.rightBody,-1*this.angle)
		

	    World.add(world,this.bottomBody)
		World.add(world,this.leftBody)
		World.add(world,this.rightBody)
    }

	display(){
		var bottompos =this.bottomBody.position;
		var leftpos =this.leftBody.position;
		var rightpos =this.rightBody.position;
		push()
		translate(leftpos.x, leftpos.y)
		imageMode(CENTER);
		angleMode(RADIANS)
		fill("brown");
		stroke(4)
		rotate(this.angle)
		image(this.image,0,0,this.wallThickness, this.height);
		pop ()

		push()
		translate(rightpos.x, rightpos.y)
		imageMode(CENTER);
		angleMode(RADIANS)
		fill("brown");
		stroke(4)
		rotate(this.angle*-1)
		image(this.image,0,0,this.wallThickness, this.height);
		pop ()

		push()
		translate(bottompos.x, bottompos.y)
		imageMode(CENTER);
		angleMode(RADIANS)
		fill("brown");
		stroke(4)
		image(this.image,0,0,this.width,this.wallThickness);
		pop ()
	  }
}