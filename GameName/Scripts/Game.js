theGame.Game = function(game)
{
    this.gameBackground = null;
    this.music = null;
    this.uiManager = null; 
	
	this._balloon = null;
	this.totalBallon = 0;
	this.totalColorBar = 0;
	this.BalloonArray = [0,1,2,3,4,5];
	this.ColorBarArray = [2,1,0];
	this.tempArray = [];
	
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
		
		this.bounds = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'Bounds_BG');
//		this.bounds.alpha = 0.5;
		this.bounds.anchor.set(0.5,0.5);
		
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
		this.spawnTarget();
		this._balloon.CreateBounds();
		
		console.log(this.BalloonArray);
		console.log(this.ColorBarArray);
    },
    
    update: function()
    {
//		if (this.spawnNextBar == true)
//		{
//			this.spawnTarget();
//			this.spawnNextBar =false;
//		}	
		//this.spawnTarget();
		this.spawnColorBar();
//		this._balloon.CreateBounds();
		
		this.CheckRedBar();
    },

	spawnTarget: function()
	{
		for (i = 0; i < 6; i++) 
		{
			this._balloon = new BalloonManager(this);
			this._balloon.create(this.BalloonArray[i], 800, 400);
			this.tempArray.push(this._balloon);
		}
//		console.log(this.tempArray);
//		console.log(this.tempArray[0].BalloonImage.clicked);
	},
	
	spawnColorBar: function()
	{
		for (j = 0; j < 6; j++)
		{
			this._balloon = new BalloonManager(this);
			this._balloon.LoadColorBar(this.ColorBarArray[j], 850, 200);
//			this.totalColorBar++;
		}
	},
	
	CheckRedBar: function()
	{
		for(i=0;i<6;i++)
		{
			if(this.tempArray[i].BalloonImage.clicked == true)
			{
				console.log(this.tempArray[i]);
				if (this.tempArray[i].balloonNum == 3 && this._balloon.randomBar == 2) // red
				{
					console.log("correct");
					this.tempArray[i].destroyBalloon();
					this.tempArray[i].BalloonImage.clicked = false;	
				}
//				else if (this.tempArray[i].balloonNum == 1 && this._balloon.randomBar == 1) // green
//				{
//					console.log("correct");
//					this.tempArray[i].destroyBalloon();
//					this.tempArray[i].BalloonImage.clicked = false;	
//				}
				else
				{
					console.log("wrong");
					this.tempArray[i].BalloonImage.clicked = false;	
				}
			}
			
		}	
	},
}