theGame.Game = function(game)
{
    this.gameBackground = null;
    this.music = null;
    this.uiManager = null; 
	
	this._target = null;
	this.totalTarget = 0;
	this.totalBar = 0;
	this.TargetArray = [0,1,2,3,4,5];
//	this.TargetArray = [2,1,0];
	
	this.greenTargetImage = null;
	this.redTargetImage = null;
	this.blueTargetImage = null;
	
//	this.spawnNextBar = false;
};


// shooting game carnival

theGame.Game.prototype = 
{
    preload: function()
    {
        //Screen Background
        this.gameBackground = this.add.sprite(this.world.width*0.5, this.world.height*0.5, 'GameBackGround');
        this.gameBackground.anchor.set(0.5,0.5);
		
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
    },
	
	spawnTarget: function()
	{
		if (this.totalTarget < 6) 
		{
			this._target = new TargetManager(this);
			this._target.create(this.TargetArray[this.totalTarget], 800, 400);
			this.totalTarget++;
		}
	},
	
	spawnColorBar: function()
	{
		if (this.totalBar < 3) 
		{
			this._target = new TargetManager(this);
			this._target.LoadColorBar(this.TargetArray[this.totalBar], 850, 200);
			this.totalBar++;
		}
	},
	
	CheckGreenBar: function()
	{
		console.log(this.TargetArray); //this.TargetImage.inputEnabled = true;
		if (this._target.TargetImage.events.onInputDown) 
		{
			if(this.TargetArray[2] == 0)
			{
				console.log("correct");
//				this.destroyTarget();
//				this.spawnNextBar = true;
				
			}else 
			{
				console.log("wrong");
			}
		}	
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