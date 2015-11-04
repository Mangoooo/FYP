theGame.Game = function(game)
{
    this.gameBackground = null;
    this.music = null;
    this.uiManager = null; 
	
	this._target = null;
	this.totalBallon = 0;
	this.totalColorBar = 0;
	this.BalloonArray = [0,1,2,3,4,5];
	this.ColorBarArray = [2,1,0];
	
	this.greenTargetImage = null;
	this.redTargetImage = null;
	this.blueTargetImage = null;
	
	this.bounds = false;
};


// shooting game carnival

theGame.Game.prototype = 
{
    preload: function()
    {
        //Screen Background
        this.gameBackground = this.add.sprite(this.world.width*0.5, this.world.height*0.5, 'GameBackGround');
        this.gameBackground.anchor.set(0.5,0.5);
		
//		this.bounds = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'Bounds_BG');
////		this.bounds.alpha = 0.5;
//		this.bounds.anchor.set(0.5,0.5);
		
//		this.greenTargetImage = this.add.sprite(this.world.width*0.5, this.world.height*0.5, 'green');
//		this.greenTargetImage.anchor.setTo(0.5,0.5);
//		
//		this.redTargetImage = this.add.button(this.world.width*0.5, this.world.height*0.5, 'red', this.CheckRedBar, this, 1,0,2);
//		this.redTargetImage.anchor.setTo(0.5,0.5);
//		
//		this.blueTargetImage = this.add.button(this.world.width*0.7, this.world.height*0.5, 'blue', this.CheckBlueBar, this,1,0,2);
//		this.blueTargetImage.anchor.setTo(0.5,0.5);
    }, 
    
    create: function()
    {
    },
    
    update: function()
    {
//		if (this.spawnNextBar == true)
//		{
//			this.spawnTarget();
//			this.spawnNextBar =false;
//		}	
		this.spawnTarget();
		this.spawnColorBar();
		
		this.CheckGreenBar();
		this._target.CreateBounds();
    },
	
	spawnTarget: function()
	{
		if (this.totalBallon < 6) 
		{
			this._target = new TargetManager(this);
			this._target.create(this.BalloonArray[this.totalBallon], 800, 400);
			this.totalBallon++;
		}
	},
	
	spawnColorBar: function()
	{
		if (this.totalColorBar < 3) 
		{
			this._target = new TargetManager(this);
			this._target.LoadColorBar(this.ColorBarArray[this.totalColorBar], 850, 200);
			this.totalColorBar++;
		}
	},
	
	CheckGreenBar: function()
	{
		console.log(this.TargetArray); //this.TargetImage.inputEnabled = true;
//		if (this._target.TargetImage.events.onInputDown) 
//		{
			if(this.BalloonArray[2] == 0 && this.ColorBarArray[0] == 1)
			{
				console.log("correct");
//				this.destroyTarget();
//				this.spawnNextBar = true;
				
			}else 
			{
				console.log("wrong");
			}
//		}	
	},
	
//	CheckRedBar: function()
//	{
//		if (this._target.TargetImage.events.onInputDown) 
//		{
//			if(this.TargetArray[1] == 1)
//			{
//				console.log("correct");
//			}else
//			{
//				console.log("wrong");
//			}
//		}	
//	},
	
//	CheckBlueBar: function()
//	{
//		if (this.blueTargetImage.events.onInputDown) 
//		{
//			if(this.TargetArray[0] == 2)
//			{
//				
//				console.log(this.TargetArray[0]);
//				console.log("correct");
//			}else 
//			{
//				console.log("wrong");
//			}
//		}	
//	},
	
	destroyTarget: function()
	{
		this.greenTargetImage.destroy();
	},
}