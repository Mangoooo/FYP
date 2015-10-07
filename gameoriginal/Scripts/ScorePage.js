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
		
		this.redScoreImage = this.add.sprite(this.world.width*0.5, this.world.height*0.5, 'redScore');
        this.redScoreImage.anchor.set(0.5,0.5);
		this.greenScoreImage = this.add.sprite(this.world.width*0.3, this.world.height*0.5, 'greenScore');
        this.greenScoreImage.anchor.set(0.5,0.5);
		this.blueScoreImage = this.add.sprite(this.world.width*0.7, this.world.height*0.5, 'blueScore');
        this.blueScoreImage.anchor.set(0.5,0.5);
		
		this.tween = this.add.tween(this.redScoreImage.scale).to({ x: 2, y: 2 }, 2000, Phaser.Easing.Bounce.Out, true);	
		this.tween = this.add.tween(this.greenScoreImage.scale).to({ x: 2, y: 2 }, 2000, Phaser.Easing.Bounce.Out, true);	
		this.tween = this.add.tween(this.blueScoreImage.scale).to({ x: 2, y: 2 }, 2000, Phaser.Easing.Bounce.Out, true);	
		
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

};