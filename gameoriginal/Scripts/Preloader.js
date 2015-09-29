theGame.Preloader = function(game)
{
    this.background = null;
    this.preloadBar = null;
    this.PreloadBarempty = null;
    this.preloadCover = null;
    this.ready = false;
};

theGame.Preloader.prototype = 
{
    preload: function()
    {
        //sound mute
        theGame.Game_Mute = false;
        
        //Loading Screen Background
        this.preloadCover = this.add.sprite(this.world.width*0.5, this.world.height*0.5, 'LoadingScreenBackGround');
        this.preloadCover.anchor.set(0.5,0.5);
        
        //Empty Loading bar
        
        //Loading bar 
        
        //this.load.setPreloadSprite(this.preloadBar); //use this.preloadbar as a sprite for loadingbar
        
        //Imagae Assets preload here
        //Background
        this.load.image('MainMenuBackGround', 'Assets/images/mainmenu.png');
        this.load.image('GameBackGround', 'Assets/images/game.png');
        this.load.image('ToturialBackGround', 'Assets/images/tutorial.png');
        
        //Button
        this.load.image('startButton', 'Assets/images/Play_button.png');
       // this.load.image('tutorialButton', 'Assets/images/tutorialButton.png');
         this.load.image('skipButton', 'Assets/images/skipButton.png');
		
		//gem
		this.load.image('red', 'Assets/images/red.png');
		this.load.image('blue', 'Assets/images/blue.png');
		this.load.image('green', 'Assets/images/green.png');
		
		//customer
		this.load.image('redcustomer', 'Assets/images/redCustomer.png');
		this.load.image('bluecustomer', 'Assets/images/blueCustomer.png');
		this.load.image('greenCustomer', 'Assets/images/greenCustomer.png');
		
		//this.load.spritesheet('greencustomer', 'Assets/images/greencustomer.png', 350, 355, 5);
		this.load.spritesheet('dude3', 'Assets/images/dude3.png', 32, 48);
		this.load.spritesheet('dude2', 'Assets/images/dude2.png', 32, 48);
		this.load.spritesheet('dude', 'Assets/images/dude.png', 32, 48);
		
		//wrong and correct image
		this.load.image('correct', 'Assets/images/Correct.png');
		this.load.image('wrong', 'Assets/images/Wrong.png');
		
		//money
		this.load.spritesheet('moneyImage', 'Assets/images/money.png', 64, 64);
//		this.load.image('money0', 'Assets/images/money0.png');
//		this.load.image('money10', 'Assets/images/money10.png');
//		this.load.image('money20', 'Assets/images/money20.png');
//		this.load.image('money30', 'Assets/images/money30.png');
		
        //Fade In/Out
        this.load.image('FadeInOut', 'Assets/images/Fade.png');
    }, 
    
    create: function()
    {
        this.state.start('MainMenu');
    },
    
    update: function()
    {
        
    }
};