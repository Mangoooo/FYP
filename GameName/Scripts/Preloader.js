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
		this.load.image('Bounds_BG', 'Assets/images/Bounds_BG.png');
		
		//Target
		this.load.image('blue', 'Assets/images/blue_Gem.png');
		this.load.image('green', 'Assets/images/green_Gem.png');
		this.load.image('orange', 'Assets/images/orange_Gem.png');
		this.load.image('red', 'Assets/images/red_Gem.png');
        this.load.image('white', 'Assets/images/white_Gem.png');
		this.load.image('yellow', 'Assets/images/yellow_Gem.png');
		
		//Color bar
		this.load.image('greenbar', 'Assets/images/ColorBar_green.png');
        this.load.image('redbar', 'Assets/images/ColorBar_red.png');
		this.load.image('bluebar', 'Assets/images/ColorBar_blue.png');
		
		//Life / bullet
		this.load.image('Bullet', 'Assets/images/Bullet.png');

        //Button
        this.load.image('startButton', 'Assets/images/Play_button.png');
        this.load.image('skipButton', 'Assets/images/skipButton.png');
		
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