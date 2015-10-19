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
	
	this.ShowGems = false;
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
		this.preloadBar = this.add.sprite(this.world.width*0.5, this.world.height*0.51, 'loadingBar');
        this.preloadBar.anchor.set(0.5,0.5);
        
        //Loading bar 
        this.load.setPreloadSprite(this.preloadBar); //use this.preloadbar as a sprite for loadingbar
        
        //Imagae Assets preload here
        //Background
        this.load.image('MainMenuBackGround', 'Assets/images/BG/mainmenu.png');
        this.load.image('GameBackGround', 'Assets/images/BG/game.png');
		
		//tutorial
        this.load.image('ToturialBackGround', 'Assets/images/BG/tutorial.png');
		this.load.image('ToturialBackGround2', 'Assets/images/BG/tutorial2.png');
		this.load.image('ToturialBackGround3', 'Assets/images/BG/tutorial3.png');
		this.load.image('ToturialBackGround4', 'Assets/images/BG/tutorial4.png');
		this.load.image('ToturialBackGround5', 'Assets/images/BG/tutorial5.png');
		
		//socre page background
		this.load.image('scoreBackground', 'Assets/images/BG/scorePage.png');
		//game over
		this.load.image('gameover', 'Assets/images/BG/gameover.png');
		
		//table
		this.load.image('TutorialTable', 'Assets/images/Table/Tutorial_Table.png');
		this.load.image('gemTable1', 'Assets/images/Table/Table_3Gems.png');
		this.load.image('gemTable2', 'Assets/images/Table/Table_4Gems.png');
		this.load.image('gemTable3', 'Assets/images/Table/Table_6Gems.png');
		
		//table cover
		this.load.image('TableCover3', 'Assets/images/Table/TableCover3.png');
		this.load.image('TableCover4', 'Assets/images/Table/TableCover4.png');
		this.load.image('TableCover6', 'Assets/images/Table/TableCover6.png');
		
		//blinking 
		this.load.spritesheet('blinking', 'Assets/images/BG/blinking.png', 975, 750);
        
        //Button
        this.load.spritesheet('playButton', 'Assets/images/Button/Play_button.png', 136,136);
        this.load.spritesheet('skipButton', 'Assets/images/Button/skipButton.png', 237,87);
		this.load.spritesheet('nextButton', 'Assets/images/Button/nextButton.png', 228,66);

		//gem	
		this.load.spritesheet('red', 'Assets/images/Gem/red.png', 82, 120);
		this.load.spritesheet('green', 'Assets/images/Gem/green.png', 82, 120);
		this.load.spritesheet('blue', 'Assets/images/Gem/blue.png', 82, 120);
		this.load.spritesheet('yellow', 'Assets/images/Gem/yellowGem.png', 82, 120);
		this.load.spritesheet('white', 'Assets/images/Gem/whiteGem.png', 82, 120);
		this.load.spritesheet('orange', 'Assets/images/Gem/orangeGem.png', 82, 120);
		
		//score gem image(star)
		this.load.image('redScore', 'Assets/images/ScoreGem/scoreRedGem.png');
		this.load.image('greenScore', 'Assets/images/ScoreGem/scoreGreenGem.png');
		this.load.image('blueScore', 'Assets/images/ScoreGem/scoreBlueGem.png');
		this.load.image('yellowScore', 'Assets/images/ScoreGem/scoreYellowGem.png');
		this.load.image('orangeScore', 'Assets/images/ScoreGem/scoreOrangeGem.png');
		this.load.image('purpleScore', 'Assets/images/ScoreGem/scorePurpleGem.png');
		
		//////////////////////LEVEL 1 CUSTOMER SPRITE////////////////////////////////
		this.load.spritesheet('ChineseSprite', 'Assets/images/Level1_Sprite/ChineseSprite.png', 153, 200);
		this.load.spritesheet('IndianSprite', 'Assets/images/Level1_Sprite/IndianSprite.png', 133, 186);
		this.load.spritesheet('WesternSprite', 'Assets/images/Level1_Sprite/WesternSprite.png', 133, 186);
		this.load.spritesheet('M_EarthSprite', 'Assets/images/Level1_Sprite/M_EarthSprite.png', 133, 186);

		this.load.spritesheet('IndianSprite_orange', 'Assets/images/Level1_Sprite/IndianSprite_orange.png', 133, 186);
		this.load.spritesheet('M_EarthSprite_yellow', 'Assets/images/Level1_Sprite/M_EarthSprite_yellow.png', 133, 186);
		this.load.spritesheet('WesternSprite_green', 'Assets/images/Level1_Sprite/WesternSprite_green.png', 133, 186);
		
		//////////////////////LEVEL 2 CUSTOMER SPRITE////////////////////////////////
		this.load.spritesheet('CoupleSprite2', 'Assets/images/Level2_Sprite/CoupleS2.png', 133, 186);
		//angry face
		this.load.image('angry', 'Assets/images/angryBubble.png');
		
		//wrong and correct image
		this.load.image('correct', 'Assets/images/Correct.png');
		this.load.image('wrong', 'Assets/images/Wrong.png');
		
		//request bubble
		//this.load.image('request', 'Assets/images/bubble.png');
		this.load.image('IndianBubble', 'Assets/images/SpeechBubble/IndianBubble.png');
		this.load.image('WesternBubble', 'Assets/images/SpeechBubble/WesternBubble.png');
		this.load.image('ChineseBubble', 'Assets/images/SpeechBubble/ChineseBubble.png');
		this.load.image('MiddleEasternBubble', 'Assets/images/SpeechBubble/MiddleEasternBubble.png');
		
		//Level 2 request bubble
		this.load.image('Indian_Orange', 'Assets/images/SpeechBubble2/Indian_Orange.png');
		this.load.image('Indian_Red', 'Assets/images/SpeechBubble2/Indian_Red.png');
		this.load.image('MiddleEastern_Green', 'Assets/images/SpeechBubble2/MiddleEastern_Green.png');
		this.load.image('MiddleEastern_Yellow', 'Assets/images/SpeechBubble2/MiddleEastern_Yellow.png');
		this.load.image('WesternCouple_Yellow', 'Assets/images/SpeechBubble2/WesternCouple_Yellow.png');
		this.load.image('WesternSolo_Green', 'Assets/images/SpeechBubble2/WesternSolo_Green.png');
		
		//money
		this.load.spritesheet('moneyImage', 'Assets/images/coin.png', 118, 122);
		
		//clock
		this.load.image('clockskin', 'Assets/images/clockskin.png');
		this.load.image('clock', 'Assets/images/clock.png');
		
        //Fade In/Out
        this.load.image('FadeInOut', 'Assets/images/Fade.png');
		

		//LEVEL 2 CUSTOMER
		this.load.spritesheet('greencustomer', 'Assets/images/greenCustomer.png', 105, 162);
		
		///////////////////////////////////////AUDIO//////////////////////////////////////////////////
		

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