theGame.Tutorial = function(game)
{
	this.game;
    this.toturialBackground1 = null;
	this.toturialBackground2 = null;
	this.toturialBackground3 = null;
	this.toturialBackground4 = null;
	this.toturialBackground5 = null;
	
    this.uiManager = null;
    this.buttonManager = null;
};

theGame.Tutorial.prototype = 
{
    create: function()
    {
        //Screen Background
//		this.toturialBackground5 = this.add.sprite(this.world.width*0.5, this.world.height*0.5, 'ToturialBackGround5');
//        this.toturialBackground5.anchor.set(0.5,0.5);
//		this.toturialBackground5.inputEnabled = true;
//		this.toturialBackground5.events.onInputDown.add(this.tutorial5, this);
//		
//		this.toturialBackground4 = this.add.sprite(this.world.width*0.5, this.world.height*0.5, 'ToturialBackGround4');
//        this.toturialBackground4.anchor.set(0.5,0.5);
//		this.toturialBackground4.inputEnabled = true;
//		this.toturialBackground4.events.onInputDown.add(this.tutorial4, this);
//		
//		this.toturialBackground3 = this.add.sprite(this.world.width*0.5, this.world.height*0.5, 'ToturialBackGround3');
//        this.toturialBackground3.anchor.set(0.5,0.5);
//		this.toturialBackground3.inputEnabled = true;
//		this.toturialBackground3.events.onInputDown.add(this.tutorial3, this);
//		
//		this.toturialBackground2 = this.add.sprite(this.world.width*0.5, this.world.height*0.5, 'ToturialBackGround2');
//        this.toturialBackground2.anchor.set(0.5,0.5);
//		this.toturialBackground2.inputEnabled = true;
//		this.toturialBackground2.events.onInputDown.add(this.tutorial2, this);
//		
//        this.toturialBackground1 = this.add.sprite(this.world.width*0.5, this.world.height*0.5, 'ToturialBackGround1');
//        this.toturialBackground1.anchor.set(0.5,0.5);
//		this.toturialBackground1.inputEnabled = true;
//		this.toturialBackground1.events.onInputDown.add(this.tutorial1, this);
		
		//Button
        this.buttonManager = new ButtonManager(this);
        //this.buttonManager.startGameButton(this.world.width*0.5, this.world.height*0.5);
		this.buttonManager.createSkipButton(this.world.width*0.85, this.world.height*0.85);
      
        //Fade in and out
        theGame.FadeScreen = new FadeManager(this);
        theGame.FadeScreen.create();
    }, 
	update: function()
   	{
	  theGame.FadeScreen.update(this.buttonManager.gametype);          
   	},
	
	tutorial1: function()
	{
		this.tween = this.add.tween(this.toturialBackground1).to({alpha:0 }, 1000,"Linear", true,0,0);	
		this.toturialBackground1.inputEnabled = false;
	},
	
	tutorial2: function()
	{
		this.tween = this.add.tween(this.toturialBackground2).to({alpha:0 }, 1000,"Linear", true,0,0);	
		this.toturialBackground2.inputEnabled = false;
	},
	tutorial3: function()
	{
		this.tween = this.add.tween(this.toturialBackground3).to({alpha:0 }, 1000,"Linear", true,0,0);	
		this.toturialBackground3.inputEnabled = false;
	},
	tutorial4: function()
	{
		this.tween = this.add.tween(this.toturialBackground4).to({alpha:0 }, 1000,"Linear", true,0,0);	
		this.toturialBackground4.inputEnabled = false;
	},
	tutorial5: function()
	{
		this.tween = this.add.tween(this.toturialBackground5).to({alpha:0 }, 1000,"Linear", true,0,0);	
		this.toturialBackground5.inputEnabled = false;
//		this.buttonManager.createSkipButton(this.world.width*0.85, this.world.height*0.85);
	},
}