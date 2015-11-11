theGame.gameOver = function(game)
{
    this.gameOverImage = null;
    this.music = null;
    this.uiManager = null;
    this.buttonManager = null;
};

theGame.gameOver.prototype = 
{
    create: function()
    {
        //Screen Background
        this.gameOverImage = this.add.sprite(this.world.width*0.5, this.world.height*0.5, 'gameOver');
        this.gameOverImage.anchor.set(0.5,0.5);
        
        //Button
        this.buttonManager = new ButtonManager(this);
        //this.buttonManager.startGameButton(this.world.width*0.177, this.world.height*0.7);
		
        //Fade in and out
        theGame.FadeScreen = new FadeManager(this);
        theGame.FadeScreen.create();
		
		console.log("game over");

    }, 
    
    update: function()
    {
        theGame.FadeScreen.update(this.buttonManager.gametype);
    }
};