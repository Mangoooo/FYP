theGame.Level2ScorePage = function(game)
{
	this.game;
	this.buttonManager = null;
   	this.scorePageBackground= null;	
	this.redScoreImage = null;
	this.greenScoreImage = null;
	this.orangeScoreImage = null;
	this.yellowScoreImage = null;
	
};

theGame.Level2ScorePage.prototype = 
{
    create: function()
	{
		console.log("level2 score");
		this.scorePageBackground = this.add.sprite(this.world.width*0.5, this.world.height*0.5, 'scoreBackground');
		this.scorePageBackground.anchor.set(0.5,0.5);
		
		this.redScoreImage = this.add.sprite(this.world.width*0.2, this.world.height*0.5, 'redScore');
        this.redScoreImage.anchor.set(0.5,0.5);
		
		this.greenScoreImage = this.add.sprite(this.world.width*0.4, this.world.height*0.5, 'greenScore');
        this.greenScoreImage.anchor.set(0.5,0.5);
		
		this.orangeScoreImage = this.add.sprite(this.world.width*0.6, this.world.height*0.5, 'orangeScore');
        this.orangeScoreImage.anchor.set(0.5,0.5);
		
		this.yellowScoreImage = this.add.sprite(this.world.width*0.8, this.world.height*0.5, 'yellowScore');
        this.yellowScoreImage.anchor.set(0.5,0.5);
		
		this.tween = this.add.tween(this.redScoreImage.scale).to({ x: 2, y: 2 }, 1500, Phaser.Easing.Bounce.Out, true);	
		this.tween.onComplete.add(this.greenTween, this);
		
        //Button
        this.buttonManager = new ButtonManager(this);
        this.buttonManager.createLevel3Button(this.world.width*0.5, this.world.height*0.8);
		
		  //Fade in and out
        theGame.FadeScreen = new FadeManager(this);
        theGame.FadeScreen.create();
    }, 
    
    update: function()
    {
       theGame.FadeScreen.update(this.buttonManager.gametype);	
    },
	
	greenTween: function()
	{
		this.tween = this.add.tween(this.greenScoreImage.scale).to({ x: 2, y: 2 }, 1500, Phaser.Easing.Bounce.Out, true);
		this.tween.onComplete.add(this.orangeTween, this);
	},
	orangeTween: function()
	{
		this.tween = this.add.tween(this.orangeScoreImage.scale).to({ x: 2, y: 2 }, 1500, Phaser.Easing.Bounce.Out, true);	
		this.tween.onComplete.add(this.yellowTween, this);
	},
	yellowTween: function()
	{
		this.tween = this.add.tween(this.yellowScoreImage.scale).to({ x: 2, y: 2 }, 1500, Phaser.Easing.Bounce.Out, true);	
	},
	
};