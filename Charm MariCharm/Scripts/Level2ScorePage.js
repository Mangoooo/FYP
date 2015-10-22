theGame.Level2ScorePage = function(game)
{
	this.game;
	this.buttonManager = null;
   	this.scorePageBackground= null;	
	this.redScoreImage = null;
	this.greenScoreImage = null;
	this.yellowScoreImage = null;
	this.greenScoreImage2 = null;
	this.yellowScoreImage2 = null;
	this.orangeScoreImage = null;
	
};

theGame.Level2ScorePage.prototype = 
{
    create: function()
	{
		console.log("level2 score");
		this.scorePageBackground = this.add.sprite(this.world.width*0.5, this.world.height*0.5, 'ScoreScreen_Lvl2');
		this.scorePageBackground.anchor.set(0.5,0.5);
		
		this.redScoreImage = this.add.sprite(this.world.width*0.38, this.world.height*0.358, 'redScore');
        this.redScoreImage.anchor.set(0.5,0.5);
		
		this.greenScoreImage = this.add.sprite(this.world.width*0.507, this.world.height*0.358, 'greenScore');
        this.greenScoreImage.anchor.set(0.5,0.5);
		
		this.yellowScoreImage = this.add.sprite(this.world.width*0.633, this.world.height*0.358, 'yellowScore');
        this.yellowScoreImage.anchor.set(0.5,0.5);
		
		this.orangeScoreImage = this.add.sprite(this.world.width*0.38, this.world.height*0.593, 'orangeScore');
        this.orangeScoreImage.anchor.set(0.5,0.5);
		
		this.greenScoreImage2 = this.add.sprite(this.world.width*0.507, this.world.height*0.593, 'greenScore');
        this.greenScoreImage2.anchor.set(0.5,0.5);
		
		this.yellowScoreImage2 = this.add.sprite(this.world.width*0.633, this.world.height*0.593, 'yellowScore');
        this.yellowScoreImage2.anchor.set(0.5,0.5);
		
	
		if (theGame.Lvl2ShowGemsOrange == true)
		{
			this.tween = this.add.tween(this.orangeScoreImage.scale).to({ x: 1.3, y: 1.3 }, 1000, Phaser.Easing.Bounce.Out, true);
		}
		if (theGame.Lvl2ShowGemsRed == true)
		{
			this.tween = this.add.tween(this.redScoreImage.scale).to({ x: 1.3, y: 1.3 }, 1000, Phaser.Easing.Bounce.Out, true);	
		}
		if (theGame.Lvl2ShowGemsGreen == true && theGame.TwoGemsGreen == 1)
		{
			this.tween = this.add.tween(this.greenScoreImage.scale).to({ x: 1.3, y: 1.3 }, 1000, Phaser.Easing.Bounce.Out, true);
		}
		else if (theGame.Lvl2ShowGemsGreen2 == true && theGame.TwoGemsGreen == 2)
		{
			this.tween = this.add.tween(this.greenScoreImage2.scale).to({ x: 1.3, y: 1.3}, 1000, Phaser.Easing.Bounce.Out, true);
			this.tween = this.add.tween(this.greenScoreImage.scale).to({ x: 1.3, y: 1.3 }, 1000, Phaser.Easing.Bounce.Out, true);
		}
		if (theGame.Lvl2ShowGemsYellow == true && theGame.TwoGemsYellow == 1)
		{
			this.tween = this.add.tween(this.yellowScoreImage.scale).to({ x: 1.3, y: 1.3 }, 1000, Phaser.Easing.Bounce.Out, true);
		}
		else if (theGame.Lvl2ShowGemsYellow2 == true && theGame.TwoGemsYellow == 2)
		{
			this.tween = this.add.tween(this.yellowScoreImage.scale).to({ x: 1.3, y: 1.3 }, 1000, Phaser.Easing.Bounce.Out, true);
			this.tween = this.add.tween(this.yellowScoreImage2.scale).to({ x: 1.3, y: 1.3 }, 1000, Phaser.Easing.Bounce.Out, true);
		}
		
		
        //Button
        this.buttonManager = new ButtonManager(this);
        this.buttonManager.createLevel3Button(this.world.width*0.5, this.world.height*0.75);
		
		  //Fade in and out
        theGame.FadeScreen = new FadeManager(this);
        theGame.FadeScreen.create();
    }, 
    
    update: function()
    {
       theGame.FadeScreen.update(this.buttonManager.gametype);	
    },
};