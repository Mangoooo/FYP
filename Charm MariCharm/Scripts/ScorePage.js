theGame.ScorePage = function(game)
{
	this.game;
	this.buttonManager = null;
   	this.scorePageBackground= null;	
	this.redScoreImage = null;
	this.greenScoreImage = null;
	this.orangeScoreImage = null;
	this.greenScoreImage2 = null;
};

theGame.ScorePage.prototype = 
{
    create: function()
	{
		console.log(theGame.TwoGemsGreen);
		this.scorePageBackground = this.add.sprite(this.world.width*0.5, this.world.height*0.5, 'ScoreScreen_Lvl1');
		this.scorePageBackground.anchor.set(0.5,0.5);
		
		this.redScoreImage = this.add.sprite(this.world.width*0.443, this.world.height*0.355, 'redScore');//375
        this.redScoreImage.anchor.set(0.5,0.5);
		this.greenScoreImage = this.add.sprite(this.world.width*0.444, this.world.height*0.59, 'greenScore');
        this.greenScoreImage.anchor.set(0.5,0.5);
		this.greenScoreImage2 = this.add.sprite(this.world.width*0.572, this.world.height*0.59, 'greenScore');
        this.greenScoreImage2.anchor.set(0.5,0.5);
		this.orangeScoreImage = this.add.sprite(this.world.width*0.572, this.world.height*0.354, 'orangeScore');
        this.orangeScoreImage.anchor.set(0.5,0.5);
		
		if (theGame.ShowGemsRed == true)
		{
			this.tween = this.add.tween(this.redScoreImage.scale).to({ x: 1.3, y: 1.3 }, 1000, Phaser.Easing.Bounce.Out, true);	
		}
		
		if (theGame.ShowGemsGreen == true && theGame.TwoGemsGreen == 1)
		{	
//			this.greenTween();
			this.tween = this.add.tween(this.greenScoreImage.scale).to({ x: 1.3, y: 1.3 }, 1000, Phaser.Easing.Bounce.Out, true);
		}
		else if (theGame.ShowGemsGreen2 == true  && theGame.TwoGemsGreen == 2)
		{	
//			this.greenTween2();
			this.tween = this.add.tween(this.greenScoreImage2.scale).to({ x: 1.3, y: 1.3 }, 1000, Phaser.Easing.Bounce.Out, true);
			this.tween = this.add.tween(this.greenScoreImage.scale).to({ x: 1.3, y: 1.3 }, 1000, Phaser.Easing.Bounce.Out, true);
		}
		
		if (theGame.ShowGemsOrange == true)
		{
//			this.orangeTween();
			this.tween = this.add.tween(this.orangeScoreImage.scale).to({ x: 1.3, y: 1.3 }, 1000, Phaser.Easing.Bounce.Out, true);
		}
		
        //Button
        this.buttonManager = new ButtonManager(this);
        this.buttonManager.createNextButton(this.world.width*0.5, this.world.height*0.75);
		
		//Fade in and out
        theGame.FadeScreen = new FadeManager(this);
        theGame.FadeScreen.create();
    }, 
    
    update: function()
    {
       theGame.FadeScreen.update(this.buttonManager.gametype);
    },
	
//	greenTween: function()
//	{
//		this.tween = this.add.tween(this.greenScoreImage.scale).to({ x: 1.3, y: 1.3 }, 1000, Phaser.Easing.Bounce.Out, true);
//	},
//	
//	greenTween2: function()
//	{
//		this.tween = this.add.tween(this.greenScoreImage2.scale).to({ x: 1.3, y: 1.3 }, 1000, Phaser.Easing.Bounce.Out, true);
//	},
//	
//	orangeTween: function()
//	{
//		this.tween = this.add.tween(this.orangeScoreImage.scale).to({ x: 1.3, y: 1.3 }, 1000, Phaser.Easing.Bounce.Out, true);
//	},
//	
};