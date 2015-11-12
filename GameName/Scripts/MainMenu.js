theGame.MainMenu = function(game)
{
    this.mainmenuBackground = null;
    //this.music = null;
    this.uiManager = null;
    this.buttonManager = null;
	this.crossHairImage = null;
};

theGame.MainMenu.prototype = 
{
    create: function()
    {
		//this.game.canvas.style.cursor.checkWoldBounds = true;
        //Screen Background
        this.mainmenuBackground = this.add.sprite(this.world.width*0.5, this.world.height*0.5, 'MainMenuBackGround');
        this.mainmenuBackground.anchor.set(0.5,0.5);
        
        //Button
        this.buttonManager = new ButtonManager(this);
        this.buttonManager.createButton(this.world.width*0.498, this.world.height*0.82, 'playButton', 1);
		
//		this.crossHairImage = this.game.add.sprite(0,0, 'emptycrossHair');
//		this.crossHairImage.anchor.setTo(0.5,0.5);
//		this.game.physics.enable(this.crossHairImage, Phaser.Physics.ARCADE);
		
        //Fade in and out
        theGame.FadeScreen = new FadeManager(this);
        theGame.FadeScreen.create();
		
		
    }, 
    
    update: function()
    {
        theGame.FadeScreen.update(this.buttonManager.gametype);
		this.outScreen();
		
//		this.crossHairImage.x = this.game.input.mousePointer.x;
//      	this.crossHairImage.y = this.game.input.mousePointer.y;
    }, 
	
	outScreen: function()
	{
//		if(this.game.input.mousePointer.withinGame == false)
//		{
//			console.log("asasf");
////			this.game.canvas.style.cursor = 'none'; // the cursor is none
//			this.game.physics.enable(this.game.input.mousePointer.withinGame, Phaser.Physics.ARCADE);
//		}
//		this.game.input.mousePointer.y = this.world.width/2;
	}
};