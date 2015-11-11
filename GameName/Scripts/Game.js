theGame.Game = function(game)
{
    this.gameBackground = null;
    this.music = null;
    this.uiManager = null; 
	this.timeManager = null;
	
	this._balloon = null;
	this._timer = null;
//	this.totalBallon = 0;
	this.totalColorBar = 0;
	this.BalloonArray = [0,1,2,3,4,5];
	this.ColorBarArray = [0,1,2,3,4,5];
	this.tempArray = [];
	this.tempBarArray = [];
	
//	this.bounds = false;
	this.crossHairImage = null;
	
	this.bulletImage1 = null;
	this.bulletImage2 = null;
	this.bulletImage3 = null;
	this.bulletImage4 = null;
	this.bulletImage5 = null;
	this.bulletImage6 = null;
	this.bulletImage7 = null;
	
	this.bulletNum = 0;
	
	this.gameScene = 0;
};

theGame.Game.prototype = 
{
    preload: function()
    {
        //Screen Background
        this.gameBackground = this.add.sprite(this.world.width*0.5, this.world.height*0.5, 'GameBackGround');
        this.gameBackground.anchor.set(0.5,0.5);
		
//		this.bounds = this.game.add.sprite(this.world.width*0.5, this.world.height*0.55, 'Bounds_BG');
//		this.bounds.alpha = 0.5;
//		this.bounds.anchor.set(0.5,0.5);
		
		this.bulletImage1 = this.game.add.sprite(this.world.width*0.1, this.world.height*0.09, 'Bullet');
		this.bulletImage1.anchor.set(0.5,0.5);
		
		this.bulletImage2 = this.game.add.sprite(this.world.width*0.13, this.world.height*0.09, 'Bullet');
		this.bulletImage2.anchor.set(0.5,0.5);
		
		this.bulletImage3 = this.game.add.sprite(this.world.width*0.16, this.world.height*0.09, 'Bullet');
		this.bulletImage3.anchor.set(0.5,0.5);
		
		this.bulletImage4 = this.game.add.sprite(this.world.width*0.19, this.world.height*0.09, 'Bullet');
		this.bulletImage4.anchor.set(0.5,0.5);
		
		this.bulletImage5 = this.game.add.sprite(this.world.width*0.22, this.world.height*0.09, 'Bullet');
		this.bulletImage5.anchor.set(0.5,0.5);
		
		this.bulletImage6 = this.game.add.sprite(this.world.width*0.25, this.world.height*0.09, 'Bullet');
		this.bulletImage6.anchor.set(0.5,0.5);
		
		this.bulletImage7 = this.game.add.sprite(this.world.width*0.28, this.world.height*0.09, 'Bullet');
		this.bulletImage7.anchor.set(0.5,0.5);
    }, 
    
    create: function()
    {
		this.timeManager = new TimeManager(this);
		this.timeManager.createTimeBar(this.world.width*0.4, this.world.height*0.1, 'timerBar', 5); // time position / timer is 60
		
		this.spawnTarget();
		this.spawnColorBar();
		this._balloon.CreateBounds();
//		
//		this.game.canvas.style.cursor = 'none'; // the cursor is none
//		this.crossHairImage = this.game.add.sprite(0,0, 'crossHair');
//		this.crossHairImage.anchor.setTo(0.5,0.5);
//		this.game.physics.enable(this.crossHairImage, Phaser.Physics.ARCADE);	
    },
    
    update: function()
    {
		this.CheckRedBar();
		
//		this.crossHairImage.x = this.game.input.mousePointer.x;
//        this.crossHairImage.y = this.game.input.mousePointer.y;
		
		if (this.bulletNum == 1)
		{
			this.bulletImage1.destroy();
		}
		else if (this.bulletNum == 2)
		{
			this.bulletImage2.destroy();
		}
		else if (this.bulletNum == 3)
		{
			this.bulletImage3.destroy();
		}
		else if (this.bulletNum == 4)
		{
			this.bulletImage4.destroy();
		}
		else if (this.bulletNum == 5)
		{
			this.bulletImage5.destroy();
		}
		else if (this.bulletNum == 6)
		{
			this.bulletImage6.destroy();
			
		}
//		else if (this.bulletNum == 7)
//		{
//			this.bulletImage6.destroy();
//		}
		
		if(this.timeManager.gameOver == true)
		{
			this.timeManager.timeStop();
			this.gameScene = 3;
			theGame.FadeScreen.OnEnd = true;
		}
		theGame.FadeScreen.update(this.gameScene);
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
			this.tempBarArray.push(this._balloon);
		}
	},
	
	CheckRedBar: function()
	{
		for(i=0;i<6;i++)
		{
			if(this.tempArray[i].BalloonImage.clicked == true) 
			{
				console.log(this.tempArray[i].balloonNum);
				console.log(this.tempBarArray[i].randomBar);
				this.tempArray[i].BalloonImage.clicked = false;
				if (this.tempArray[i].balloonNum == this.tempBarArray[i].randomBar)     //blue
				{
					console.log("correct");
					this.tempArray[i].destroyBalloon();
					this.tempBarArray[i].destroyColorBar();
					this.tempArray[i].BalloonImage.clicked = false;

					this.bulletNum +=1;
				}
				else 
				{
					console.log("wrong");
					this.tempArray[i].BalloonImage.clicked = false;	
				}
			}
		}	
	},
}
	
//	CheckRedBar: function()
//	{
//		for(i=0;i<6;i++)
//		{
//			if(this.tempArray[i].BalloonImage.clicked == true) 
//			{
//				console.log(this.tempArray[i].balloonNum);
//				console.log(this.tempBarArray[i].randomBar);
//				this.tempArray[i].BalloonImage.clicked = false;
//				if (this.tempArray[i].balloonNum == this.tempBarArray[i].randomBar)     //blue
//				{
//					console.log("correct");
//					this.tempArray[i].destroyBalloon();
//					this.tempBarArray[i].destroyColorBar();
//					this._balloon.destroyColorBar();
//					this.tempArray[i].BalloonImage.clicked = false;
//				}
//				else 
//				{
//					console.log("wrong");
//					this.tempArray[i].BalloonImage.clicked = false;	
//				}
//			}
//		}	
//	},
