
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbin, paper,ground
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	dustbin = new Dustbin(1200,710);
	paper=new Paper(200,450,40);
	ground=new Ground(width/2,670,width,20);
	
	

	var render = Render.create({
	  element: document.body,
	  engine: engine,
	  options: {
	    width: 1200,
	    height: 700,
	    wireframes: false
	  }
	});

	Engine.run(engine);
	
  
}


function draw() {
  rectMode(CENTER);
  background("#FFFCFE");

  dustbin.display();
  paper.display();
  ground.display();
  
  drawSprites();
  //console.log("x = " + paper.body.position.x)
  //console.log("y = " +paper.body.position.y)

  if((paper.body.position.x > 1000 && paper.body.position.x < 1300) && (paper.body.position.y > 500)) {
	  console.log("OUT")
	fill('black');
	stroke('red');
	strokeWeight(5)
	textSize(50);
	textFont("monospace")
	text("OUT!",120,200);
  }

  /*
  if(dustbin.isTouching(paper)){
	fill('black');
	stroke('black');
	textSize(24);
	text("OUT",120,200);
	
	}
	*/
}
 


function keyPressed() {
  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
    
  	}
}





