theGame.Preloader = function(game)
{
    this.background = null;
    this.preloadBar = null;
    this.PreloadBarempty = null;
    this.preloadCover = null;
    this.ready = false;
	//this.money = null;
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
		//game over
		this.load.image('gameover', 'Assets/images/gameover.png');
		
		//socre page background
		this.load.image('scoreBackground', 'Assets/images/scorePage.png');

		//table
		this.load.image('gemTable', 'Assets/images/table.png');
		
		//blinking 
		this.load.spritesheet('blinking', 'Assets/images/blinking.png', 975, 750);
        
        //Button
        this.load.image('startButton', 'Assets/images/Play_button.png');
       // this.load.image('tutorialButton', 'Assets/images/tutorialButton.png');
        this.load.image('skipButton', 'Assets/images/skipButton.png');
		this.load.image('restartButton', 'Assets/images/restartButton.png');
		this.load.image('nextButton', 'Assets/images/nextButton.png');
		this.load.image('ScoretButton', 'Assets/images/scoreButton.png');
		
		//gem	
		this.load.spritesheet('red', 'Assets/images/red.png', 150, 100);
		this.load.spritesheet('green', 'Assets/images/green.png', 150, 100);
		this.load.spritesheet('blue', 'Assets/images/blue.png', 150, 100);
		this.load.spritesheet('yellow', 'Assets/images/yellowGem.png', 150, 100);
		this.load.spritesheet('cyan', 'Assets/images/cyanGem.png', 150, 100);
		
		//scale gem image(star)
		this.load.image('redScore', 'Assets/images/scoreRedGem.png');
		this.load.image('greenScore', 'Assets/images/scoreGreenGem.png');
		this.load.image('blueScore', 'Assets/images/scoreBlueGem.png');
		
		//customer
		this.load.spritesheet('dude4', 'Assets/images/dude4.png', 32, 48);
		this.load.spritesheet('dude3', 'Assets/images/dude3.png', 32, 48);
		this.load.spritesheet('dude2', 'Assets/images/dude2.png', 105, 162);
		this.load.spritesheet('dude', 'Assets/images/dude.png', 32, 48);
		
		//angry face
		this.load.image('angry', 'Assets/images/angryBubble.png');
		
		//wrong and correct image
		this.load.image('correct', 'Assets/images/Correct.png');
		this.load.image('wrong', 'Assets/images/Wrong.png');
		
		//request bubble
		this.load.image('request', 'Assets/images/bubble.png');
		
		//money
		this.load.spritesheet('moneyImage', 'Assets/images/coin.png', 100, 150);
		this.load.image('moneyjar', 'Assets/images/moneyjar.png');
		//this.load.image('coin', 'Assets/images/coin.png');
		
		//clock
		this.load.image('clockskin', 'Assets/images/clockskin.png');
		this.load.image('clock', 'Assets/images/clock.png');
		
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