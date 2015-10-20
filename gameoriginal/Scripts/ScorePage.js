theGame.ScorePage = function(game)
{
	this.game;
	this.buttonManager = null;
   	this.scorePageBackground= null;	
	this.redScoreImage = null;
	this.greenScoreImage = null;
	this.blueScoreImage = null;
};

theGame.ScorePage.prototype = 
{
    create: function()
	{
		this.scorePageBackground = this.add.sprite(this.world.width*0.5, this.world.height*0.5, 'scoreBackground');
		this.scorePageBackground.anchor.set(0.5,0.5);
		
		this.redScoreImage = this.add.sprite(this.world.width*0.37, this.world.height*0.489, 'redScore');//375
        this.redScoreImage.anchor.set(0.5,0.5);
		this.greenScoreImage = this.add.sprite(this.world.width*0.497, this.world.height*0.49, 'greenScore');
        this.greenScoreImage.anchor.set(0.5,0.5);
		this.blueScoreImage = this.add.sprite(this.world.width*0.627, this.world.height*0.49, 'blueScore');
        this.blueScoreImage.anchor.set(0.5,0.5);
		
		this.tween = this.add.tween(this.redScoreImage.scale).to({ x: 1.5, y: 1.5 }, 1000, Phaser.Easing.Bounce.Out, true);	
		this.tween.onComplete.add(this.greenTween, this);
		
        //Button
        this.buttonManager = new ButtonManager(this);
        this.buttonManager.createNextButton(this.world.width*0.5, this.world.height*0.7);
		
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
		this.tween = this.add.tween(this.greenScoreImage.scale).to({ x: 1.5, y: 1.5 }, 1000, Phaser.Easing.Bounce.Out, true);
		this.tween.onComplete.add(this.blueTween, this);
	},
	blueTween: function()
	{
		this.tween = this.add.tween(this.blueScoreImage.scale).to({ x: 1.5, y: 1.5 }, 1000, Phaser.Easing.Bounce.Out, true);
	}
	
};