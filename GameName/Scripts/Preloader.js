theGame.Preloader = function(game)
{
    this.background = null;
    this.preloadBar = null;
    this.PreloadBarempty = null;
    this.preloadCover = null;
    this.ready = false;
	
	this.Lvl1CorrectBalloon = 0;
	this.Lvl2CorrectBalloon = 0;
	this.Lvl3CorrectBalloon = 0;
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
		this.load.image('gameOver', 'Assets/images/gameOver.png');
		
		//Warm balloon sprite sheet
		this.load.spritesheet('yellow', 'Assets/images/Warm/warm1.png', 120,120);
		this.load.spritesheet('yellowOrange', 'Assets/images/Warm/warm2.png', 120,120);
		this.load.spritesheet('orange', 'Assets/images/Warm/warm3.png', 120,120);
		this.load.spritesheet('redOrange', 'Assets/images/Warm/warm4.png', 120,120);
		this.load.spritesheet('magenta', 'Assets/images/Warm/warm5.png', 120,120);
		this.load.spritesheet('redPurple', 'Assets/images/Warm/warm6.png', 120,120);
		
		//Monochromatic balloon sprite sheet
		this.load.spritesheet('mono1', 'Assets/images/Monochromatic/mono1.png', 120,120);
		this.load.spritesheet('mono2', 'Assets/images/Monochromatic/mono2.png', 120,120);
		this.load.spritesheet('mono3', 'Assets/images/Monochromatic/mono3.png', 120,120);
		this.load.spritesheet('mono4', 'Assets/images/Monochromatic/mono4.png', 120,120);
		
		//Color bar
		this.load.image('yellowbar', 'Assets/images/ColorBar_yellow.png');
		this.load.image('yellowOrangebar', 'Assets/images/ColorBar_yellowOrange.png');
		this.load.image('orangebar', 'Assets/images/ColorBar_orange.png');
		this.load.image('redOrangebar', 'Assets/images/ColorBar_redOrange.png');
		this.load.image('magentabar', 'Assets/images/ColorBar_magenta.png');
		this.load.image('redPurplebar', 'Assets/images/ColorBar_redPurple.png');
		
		//Life / bullet
		this.load.image('Bullet', 'Assets/images/Bullet.png');
		
		//UI bar
		this.load.image('UI_bar', 'Assets/images/UI_bar.png');

		//CrossHair Image
		this.load.image('crossHair', 'Assets/images/crossHair.png');
		
		//TimerBar
		this.load.image('timerBar', 'Assets/images/timerBar.png');
        //Button
		this.load.spritesheet('nextButton', 'Assets/images/nextButton.png', 168,64);
		this.load.spritesheet('restartButton', 'Assets/images/restartButton.png', 212,64);
		this.load.spritesheet('playButton', 'Assets/images/playButton.png', 86,86);
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