theGame.GameEnd = function(game)
{
    this.mainmenuBackground = null;
    this.music = null;
    this.uiManager = null;
    this.buttonManager = null;
};

theGame.GameEnd.prototype = 
{
    create: function()
    {
        //Screen Background
        this.mainmenuBackground = this.add.sprite(this.world.width*0.5, this.world.height*0.5, 'Endscreen');
        this.mainmenuBackground.anchor.set(0.5,0.5);
        
        //Button
        this.buttonManager = new ButtonManager(this);
        //this.buttonManager.startGameButton(this.world.width*0.177, this.world.height*0.7);
		
        //Fade in and out
        theGame.FadeScreen = new FadeManager(this);
        theGame.FadeScreen.create();
		
			
//		this.music = this.add.audio('BGmusic');
//    	this.music.play();

    }, 
    
    update: function()
    {
        theGame.FadeScreen.update(this.buttonManager.gametype);
    }
};