theGame.Preloader = function(game)
{
    this.background = null;
    this.preloadBar = null;
    this.PreloadBarempty = null;
    this.preloadCover = null;
    this.ready = false;
	this.money1 = 0;
	this.money2 = 0;
	this.money3 = 0;
};

theGame.Preloader.prototype = 
{
    preload: function()
    {
        //sound mute
        theGame.Game_Mute = false;
        
//        Loading Screen Background
        this.background = this.add.sprite(this.world.width*0.5, this.world.height*0.5, 'LoadingScreenBackGround');
        this.background.anchor.set(0.5,0.5);
        
        //Empty Loading bar
		
		
		this.preloadBar = this.add.sprite(this.world.width*0.5, this.world.height*0.5, 'loadingBar');
        this.preloadBar.anchor.set(0.5,0.5);
        
        //Loading bar 
        this.load.setPreloadSprite(this.preloadBar); //use this.preloadbar as a sprite for loadingbar
        
        //Imagae Assets preload here
        //Background
        this.load.image('MainMenuBackGround', 'Assets/images/BG/mainmenu.png');
        this.load.image('GameBackGround', 'Assets/images/BG/game.png');
        this.load.image('ToturialBackGround', 'Assets/images/BG/tutorial.png');
		//socre page background
		this.load.image('scoreBackground', 'Assets/images/BG/scorePage.png');
		//game over
		this.load.image('gameover', 'Assets/images/BG/gameover.png');

		//table
		this.load.image('gemTable1', 'Assets/images/table1.png');
		this.load.image('gemTable2', 'Assets/images/table2.png');
		this.load.image('gemTable3', 'Assets/images/table3.png');
		
		//blinking 
		this.load.spritesheet('blinking', 'Assets/images/BG/blinking.png', 975, 750);
        
        //Button
        this.load.image('startButton', 'Assets/images/Button/Play_button.png');
       // this.load.image('tutorialButton', 'Assets/images/tutorialButton.png');
        this.load.image('skipButton', 'Assets/images/Button/skipButton.png');
		this.load.image('restartButton', 'Assets/images/Button/restartButton.png');
		this.load.image('nextButton', 'Assets/images/Button/nextButton.png');
		this.load.image('ScoretButton', 'Assets/images/Button/scoreButton.png');
		
		//gem	
		this.load.spritesheet('red', 'Assets/images/Gem/red.png', 82, 120);
		this.load.spritesheet('green', 'Assets/images/Gem/green.png', 82, 120);
		this.load.spritesheet('blue', 'Assets/images/Gem/blue.png', 82, 120);
		this.load.spritesheet('yellow', 'Assets/images/Gem/yellowGem.png', 82, 120);
		this.load.spritesheet('purple', 'Assets/images/Gem/purpleGem.png', 82, 120);
		this.load.spritesheet('orange', 'Assets/images/Gem/orangeGem.png', 82, 120);
		
		
		//score gem image(star)
		this.load.image('redScore', 'Assets/images/ScoreGem/scoreRedGem.png');
		this.load.image('greenScore', 'Assets/images/ScoreGem/scoreGreenGem.png');
		this.load.image('blueScore', 'Assets/images/ScoreGem/scoreBlueGem.png');
		this.load.image('yellowScore', 'Assets/images/ScoreGem/scoreYellowGem.png');
		this.load.image('orangeScore', 'Assets/images/ScoreGem/scoreOrangeGem.png');
		this.load.image('purpleScore', 'Assets/images/ScoreGem/scorePurpleGem.png');
		
		//customer
		this.load.spritesheet('dude', 'Assets/images/Customer/dude.png', 90, 162);
		this.load.spritesheet('dude2', 'Assets/images/Customer/dude2.png', 90, 162);
		this.load.spritesheet('dude3', 'Assets/images/Customer/dude3.png', 90, 162);
		this.load.spritesheet('dude4', 'Assets/images/Customer/dude4.png', 32, 48);
		this.load.spritesheet('dude5', 'Assets/images/Customer/dude5.png', 90, 162);
		this.load.spritesheet('orangedude', 'Assets/images/Customer/orangedude.png', 90, 162);
		this.load.spritesheet('purpledude', 'Assets/images/Customer/purpledude.png', 90, 162);
		
		
		//////////////////////LEVEL 1 CUSTOMER SPRITE////////////////////////////////
		this.load.spritesheet('ChineseSprite', 'Assets/images/Level1_Sprite/ChineseSprite.png', 153, 200);
		this.load.spritesheet('IndianSprite', 'Assets/images/Level1_Sprite/IndianSprite.png', 133, 186);
		this.load.spritesheet('WesternSprite', 'Assets/images/Level1_Sprite/WesternSprite.png', 133, 186);
		
		//wrong and correct image
		this.load.image('correct', 'Assets/images/Correct.png');
		this.load.image('wrong', 'Assets/images/Wrong.png');
		
		//request bubble
		this.load.image('request', 'Assets/images/bubble.png');
		this.load.image('IndianBubble', 'Assets/images/IndianBubble.png');
		this.load.image('WesternBubble', 'Assets/images/WesternBubble.png');
		this.load.image('ChineseBubble', 'Assets/images/ChineseBubble.png');
		
		//money
		this.load.spritesheet('moneyImage', 'Assets/images/coin.png', 116, 106);
//		this.load.image('moneyjar', 'Assets/images/moneyjar.png');
//		this.load.image('coin', 'Assets/images/coin.png');
		
		//clock
		this.load.image('clockskin', 'Assets/images/clockskin.png');
		this.load.image('clock', 'Assets/images/clock.png');
		
        //Fade In/Out
        this.load.image('FadeInOut', 'Assets/images/Fade.png');
		

		//LEVEL 2 CUSTOMER
		this.load.spritesheet('greencustomer', 'Assets/images/greenCustomer.png', 105, 162);

    }, 
    
    create: function()
    {
		this.preloadBar.cropEnabled = false;
        this.state.start('MainMenu');
    },
    
    update: function()
    {
        
    }
};