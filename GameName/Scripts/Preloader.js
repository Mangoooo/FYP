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
		
		//Ballon image
		this.load.image('yellow', 'Assets/images/Balloon_yellow.png');
		this.load.image('yellowOrange', 'Assets/images/Balloon_yellowOrange.png');
		this.load.image('orange', 'Assets/images/Balloon_orange.png');
		this.load.image('redOrange', 'Assets/images/Balloon_redOrange.png');
        this.load.image('magenta', 'Assets/images/Balloon_magenta.png');
		this.load.image('redPurple', 'Assets/images/Balloon_redPurple.png');
		
		//Color bar
		this.load.image('yellowbar', 'Assets/images/ColorBar_yellow.png');
		this.load.image('yellowOrangebar', 'Assets/images/ColorBar_yellowOrange.png');
		this.load.image('orangebar', 'Assets/images/ColorBar_orange.png');
		this.load.image('redOrangebar', 'Assets/images/ColorBar_redOrange.png');
		this.load.image('magentabar', 'Assets/images/ColorBar_magenta.png');
		this.load.image('redPurplebar', 'Assets/images/ColorBar_redPurple.png');
		
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