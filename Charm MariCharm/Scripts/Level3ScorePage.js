theGame.Level3ScorePage = function(game)
{
	this.game;
	this.buttonManager = null;
   	this.scorePageBackground= null;	
	
	this.redScoreImage = null;
	this.redScoreImage2 = null;
	this.orangeScoreImage = null;
	this.yellowScoreImage = null;
	this.greenScoreImage = null;
	this.blueScoreImage = null;
	this.whiteScoreImage = null;
	this.whiteScoreImage2 = null;
	
};

theGame.Level3ScorePage.prototype = 
{
    create: function()
	{
		console.log("level3 score");
		
		this.scorePageBackground = this.add.sprite(this.world.width*0.5, this.world.height*0.5, 'ScoreScreen_Lvl3');
		this.scorePageBackground.anchor.set(0.5,0.5);
		
		this.redScoreImage = this.add.sprite(this.world.width*0.38, this.world.height*0.353, 'redScore');
        this.redScoreImage.anchor.set(0.5,0.5);
		
		this.redScoreImage2 = this.add.sprite(this.world.width*0.505, this.world.height*0.353, 'redScore');
        this.redScoreImage2.anchor.set(0.5,0.5);
		
		this.orangeScoreImage = this.add.sprite(this.world.width*0.635, this.world.height*0.353, 'orangeScore');
        this.orangeScoreImage.anchor.set(0.5,0.5);
			
		this.yellowScoreImage = this.add.sprite(this.world.width*0.38, this.world.height*0.525, 'yellowScore');
        this.yellowScoreImage.anchor.set(0.5,0.5);
		
		this.greenScoreImage = this.add.sprite(this.world.width*0.505, this.world.height*0.525, 'greenScore');
        this.greenScoreImage.anchor.set(0.5,0.5);
		
		this.blueScoreImage = this.add.sprite(this.world.width*0.632, this.world.height*0.525, 'blueScore');
        this.blueScoreImage.anchor.set(0.5,0.5);
		
		this.whiteScoreImage = this.add.sprite(this.world.width*0.428, this.world.height*0.685, 'whiteScore');
        this.whiteScoreImage.anchor.set(0.5,0.5);
		
		this.whiteScoreImage2 = this.add.sprite(this.world.width*0.59, this.world.height*0.685, 'whiteScore');
        this.whiteScoreImage2.anchor.set(0.5,0.5);
		
		
	
	 	if (theGame.Lvl3ShowGemsOrange == true)
		{
			this.tween = this.add.tween(this.orangeScoreImage.scale).to({ x: 1.3, y: 1.3 }, 1500, Phaser.Easing.Bounce.Out, true);
		}
		if (theGame.Lvl3ShowGemsYellow == true)
		{
			this.tween = this.add.tween(this.yellowScoreImage.scale).to({ x: 1.3, y: 1.3 }, 1500, Phaser.Easing.Bounce.Out, true);	
		}
		if (theGame.Lvl3ShowGemsGreen == true)
		{
			this.tween = this.add.tween(this.greenScoreImage.scale).to({ x: 1.3, y: 1.3 }, 1500, Phaser.Easing.Bounce.Out, true);
		}
		if (theGame.Lvl3ShowGemsBlue == true)
		{
			this.tween = this.add.tween(this.blueScoreImage.scale).to({ x: 1.3, y: 1.3 }, 1500, Phaser.Easing.Bounce.Out, true);
		}
		if (theGame.Lvl3ShowGemsWhite == true && theGame.TwoGemsWhite == 1)
		{
			this.tween = this.add.tween(this.whiteScoreImage.scale).to({ x: 1.3, y: 1.3 }, 1500, Phaser.Easing.Bounce.Out, true);
		}
		else if (theGame.Lvl3ShowGemsWhite2 == true && theGame.TwoGemsWhite == 2)
		{
			this.tween = this.add.tween(this.whiteScoreImage.scale).to({ x: 1.3, y: 1.3 }, 1500, Phaser.Easing.Bounce.Out, true);
			this.tween = this.add.tween(this.whiteScoreImage2.scale).to({ x: 1.3, y: 1.3 }, 1500, Phaser.Easing.Bounce.Out, true);
		}
		if (theGame.Lvl3ShowGemsRed == true && theGame.TwoGemsRed == 1)
		{
			this.tween = this.add.tween(this.redScoreImage.scale).to({ x: 1.3, y: 1.3 }, 1500, Phaser.Easing.Bounce.Out, true);	
		}
		else if (theGame.Lvl3ShowGemsRed2 == true && theGame.TwoGemsRed == 2)
		{
			this.tween = this.add.tween(this.redScoreImage.scale).to({ x: 1.3, y: 1.3 }, 1500, Phaser.Easing.Bounce.Out, true);	
			this.tween = this.add.tween(this.redScoreImage2.scale).to({ x: 1.3, y: 1.3 }, 1500, Phaser.Easing.Bounce.Out, true);	
		}
		
        //Button
        this.buttonManager = new ButtonManager(this);
        this.buttonManager.CreateTotalMoney(this.world.width*0.5, this.world.height*0.85);
		
		  //Fade in and out
        theGame.FadeScreen = new FadeManager(this);
        theGame.FadeScreen.create();
    }, 
    
    update: function()
    {
       theGame.FadeScreen.update(this.buttonManager.gametype);	
    },
};