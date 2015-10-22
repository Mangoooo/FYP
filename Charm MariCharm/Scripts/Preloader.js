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
	
	this.TotalGems1 = 0;
	this.TotalGems2 = 0;
	this.TotalGems3 = 0;
	
	this.TwoGemsGreen = 0;
	this.TwoGemsYellow = 0;
	
	this.TwoGemsRed = 0;
	this.TwoGemsWhite = 0;
	
	this.ShowGemsRed = false;
	this.ShowGemsGreen = false;
	this.ShowGemsGreen2 = false;
	this.ShowGemsOrange = false;
	
	this.Lvl2ShowGemsRed = false;
	this.Lvl2ShowGemsOrange = false;
	this.Lvl2ShowGemsGreen = false;
	this.Lvl2ShowGemsGreen2 = false;
	this.Lvl2ShowGemsYellow = false;
	this.Lvl2ShowGemsYellow2 = false;
	
	this.Lvl3ShowGemsRed = false;
	this.Lvl3ShowGemsRed2 = false;
	this.Lvl3ShowGemsOrange = false;
	this.Lvl3ShowGemsYellow = false;
	this.Lvl3ShowGemsGreen = false;
	this.Lvl3ShowGemsBlue = false;
	this.Lvl3ShowGemsWhite = false;
	this.Lvl3ShowGemsWhite2 = false;
	
};

theGame.Preloader.prototype = 
{
    preload: function()
    {
        //sound mute
        theGame.Game_Mute = false;
		
		this.load.audio('BGmusic', ['Assets/audio/BGM.mp3']);
		this.load.audio('correct', ['Assets/audio/correct.mp3']);
		this.load.audio('wrong', ['Assets/audio/wrong.mp3']);
		this.load.audio('clickOn', ['Assets/audio/ClickOn.mp3']);
		this.load.audio('closing', ['Assets/audio/closing.mp3']);
		this.load.audio('select', ['Assets/audio/select.mp3']);
        
//        Loading Screen Background
        this.background = this.add.sprite(this.world.width*0.5, this.world.height*0.5, 'LoadingScreenBackGround');
        this.background.anchor.set(0.5,0.5);
        
        //Endscreen
         this.load.image('Endscreen', 'Assets/images/BG/Endscreen.png');
		//Total money background
		 this.load.image('ScoreScreen_Lvl1', 'Assets/images/BG/ScoreScreen_Lvl1.png');
		 this.load.image('ScoreScreen_Lvl2', 'Assets/images/BG/ScoreScreen_Lvl2.png');
		 this.load.image('ScoreScreen_Lvl3', 'Assets/images/BG/ScoreScreen_Lvl3.png');
        
        //Empty Loading bar
		this.preloadBar = this.add.sprite(this.world.width*0.5, this.world.height*0.87, 'loadingBar');
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
        
        this.load.image('Tutorial_Text', 'Assets/images/BG/Tutorial_Text.png');
        
		
		//socre page background
		this.load.image('ScoreScreen_Total', 'Assets/images/BG/ScoreScreen_Total.png');
		
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
        this.load.spritesheet('playButton', 'Assets/images/Button/Play_button.png', 86,86);
        this.load.spritesheet('skipButton', 'Assets/images/Button/skipButton.png', 86,86);
		this.load.spritesheet('nextButton', 'Assets/images/Button/nextButton.png', 86,86);
        this.load.spritesheet('nextScoreButton', 'Assets/images/Button/Button_NextScore.png', 125,46);

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
		this.load.image('whiteScore', 'Assets/images/ScoreGem/scoreWhiteGem.png');
		
		//////////////////////LEVEL 1 CUSTOMER SPRITE////////////////////////////////
		this.load.spritesheet('ChineseSprite', 'Assets/images/Level1_Sprite/Chinese_Red.png', 179, 220);
		this.load.spritesheet('IndianSprite', 'Assets/images/Level1_Sprite/Indian_Orange.png', 179, 220);
		this.load.spritesheet('WesternSprite', 'Assets/images/Level1_Sprite/WesternSolo_Green.png', 179, 220);
		this.load.spritesheet('M_EarthSprite', 'Assets/images/Level1_Sprite/MiddleEastern_Green.png', 320, 251);
		////////////////////////LEVEL 2 CUSTOMER SPRITE////////////////////////////////

		this.load.spritesheet('IndianSprite_Orange', 'Assets/images/Level1_Sprite/Indian_Orange.png', 179, 220);
		this.load.spritesheet('IndianSprite_Red', 'Assets/images/Level1_Sprite/Indian_Red.png', 179, 220);
		this.load.spritesheet('M_EarthSprite_yellow', 'Assets/images/Level1_Sprite/MiddleEastern_Yellow.png', 320, 251);
		this.load.spritesheet('WesternSprite_green', 'Assets/images/Level1_Sprite/WesternCouple_Yellow.png', 320, 251);
		this.load.spritesheet('IndianSprite2', 'Assets/images/Level1_Sprite/Indian_Red.png', 179, 220);
		
		//////////////////////LEVEL 3 CUSTOMER SPRITE////////////////////////////////
		this.load.spritesheet('M_EarthSprite_yellow3', 'Assets/images/Level1_Sprite/MiddleEastern_Yellow3.png', 320, 251);
		this.load.spritesheet('M_EarthSprite_blue3', 'Assets/images/Level1_Sprite/MiddleEastern_Blue3.png', 320, 251);
		this.load.spritesheet('ChineseSprite_white3', 'Assets/images/Level1_Sprite/Chinese_White3.png', 179, 220); // 179, 220
		this.load.spritesheet('ChineseSprite_red3', 'Assets/images/Level1_Sprite/Chinese_Red3.png', 179, 220);
		this.load.spritesheet('IndianSprite_white3', 'Assets/images/Level1_Sprite/Indian_White3.png', 179, 220);
		this.load.spritesheet('IndianSprite_red3', 'Assets/images/Level1_Sprite/Indian_Red3.png', 179, 220);
		this.load.spritesheet('WesternSprite_blue3', 'Assets/images/Level1_Sprite/WesternSolo_Orange3.png', 179, 220);
		this.load.spritesheet('WesternSprite_white3', 'Assets/images/Level1_Sprite/WesternCouple_Green3.png', 320, 251);
		
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
		
		 //Level 3 request bubble
		this.load.image('Chinese_Red', 'Assets/images/SpeechBubble3/Chinese_Red.png');
		this.load.image('Chinese_White', 'Assets/images/SpeechBubble3/Chinese_White.png');
		this.load.image('Indian_Red3', 'Assets/images/SpeechBubble3/Indian_Red.png');
		this.load.image('Indian_White', 'Assets/images/SpeechBubble3/Indian_White.png');
		this.load.image('MiddleEastern_Blue', 'Assets/images/SpeechBubble3/MiddleEastern_Blue.png');
		this.load.image('MiddleEastern_Yellow', 'Assets/images/SpeechBubble3/MiddleEastern_Yellow.png');
        this.load.image('WesternCouple_White', 'Assets/images/SpeechBubble3/WesternCouple_White.png');
		this.load.image('WesternSolo_Blue', 'Assets/images/SpeechBubble3/WesternSolo_Blue.png');
		
		//Tutorial bubble 
		this.load.image('Bubble_Tutorial_Indian', 'Assets/images/SpeechBubble_Tutorial/Bubble_Tutorial_Indian.png');
		//Correct bubble
		this.load.image('Bubble_Correct', 'Assets/images/SpeechBubble_Tutorial/Bubble_Correct.png');
        //Wrong bubble couple
//		this.load.image('Bubble_WrongCouple', 'Assets/images/SpeechBubble_Tutorial/Bubble_WrongCouple.png');
		//Wrong bubble Solo
		this.load.image('Bubble_WrongSolo', 'Assets/images/SpeechBubble_Tutorial/Bubble_WrongSolo.png');
		
		//money
		this.load.spritesheet('moneyImage', 'Assets/images/coin.png', 118, 122);
		
		//clock
		this.load.image('clockskin', 'Assets/images/clockskin.png');
        this.load.spritesheet('clock', 'Assets/images/clock.png', 124, 122);
		
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