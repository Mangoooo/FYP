function ButtonManager(game)
{
    this.game = game;
    this.startButton = null;
    this.tutorialButton = null;
    this.muteButton = null;
    this.pauseButton = null;
    this.exitButton = null;
	this.skipButton = null;
	this.restartButton = null;
	this.scoreButton = null;
	this.nextButton = null;
	this.level2Button = null;
	this.nextLevelClick = false;
	this.restartLevelClick = false;
	this.gameoverCreate = false;
    this.gametype = 0;
};
//game play button
ButtonManager.prototype.startGameButton = function(posx, posy)
{
	this.startButton = this.game.add.button(posx, posy, 'playButton', this.startGame, this, 1, 0);
	this.startButton.anchor.set(0.5,0.5);
},
    
ButtonManager.prototype.startGame = function() 
{
	this.gametype = 2;
	theGame.FadeScreen.OnEnd = true;
},

ButtonManager.prototype.createSkipButton = function(posx, posy)
{
    this.skipButton = this.game.add.button(posx, posy, 'skipButton', this.skip, this, 1, 0);
    this.skipButton.anchor.set(0.5,0.5);
},
ButtonManager.prototype.skip = function() 
{
	this.gametype = 1;
	theGame.FadeScreen.OnEnd = true;
};
	
ButtonManager.prototype.createNextButton = function(posx, posy)
{

    this.nextButton = this.game.add.button(posx, posy, 'nextButton', this.gotoLevel2, this, 1, 0);
    this.nextButton.anchor.set(0.5,0.5);
},
ButtonManager.prototype.gotoLevel2 = function()  // NEXT LEVEL 
{
	this.gametype = 4;
	this.nextLevelClick = true;
	theGame.FadeScreen.OnEnd = true;
};
	
ButtonManager.prototype.createLevel3Button = function(posx, posy)
{

    this.level2Button = this.game.add.button(posx, posy, 'nextButton', this.gotoLevel3, this, 1, 0);
    this.level2Button.anchor.set(0.5,0.5);
},
ButtonManager.prototype.gotoLevel3 = function()  // NEXT LEVEL 
{
	this.gametype = 6;
	this.nextLevelClick = true;
	theGame.FadeScreen.OnEnd = true;
};

    
ButtonManager.prototype.createScoreButton = function(posx, posy)
{
    this.scoreButton = this.game.add.button(posx, posy, 'nextButton', this.ShowscorePage, this, 1, 0);
    this.scoreButton.anchor.set(0.5,0.5);
},	
ButtonManager.prototype.ShowscorePage = function() 
{
	this.gametype = 3;
	this.nextLevelClick = true;
	theGame.FadeScreen.OnEnd = true;
};
	
ButtonManager.prototype.Level2ScoreButton = function(posx, posy)
{
    this.scoreButton = this.game.add.button(posx, posy, 'ScoretButton', this.Level2score, this, 1, 0);
    this.scoreButton.anchor.set(0.5,0.5);
},	
	
ButtonManager.prototype.Level2score = function() 
{
	this.gametype = 5;
	this.nextLevelClick = true;
	theGame.FadeScreen.OnEnd = true;
};
	
ButtonManager.prototype.destroyButtonR = function()
{
	this.restartButton.destroy();
	this.nextLevelClick = false;
};
ButtonManager.prototype.destroyButton = function()
{
	this.nextButton.destroy();
	this.nextLevelClick = false;
};
//ButtonManager.prototype.createRestartButton = function(posx, posy)
//{
//    this.restartButton = this.game.add.button(posx, posy, 'restartButton', this.restart, this, 1, 0);
//    this.restartButton.anchor.set(0.5,0.5);
//},
	
//ButtonManager.prototype.restart = function() 
//{
//	this.gametype = 2;
//	this.gameoverCreate = true;
//	this.restartLevelClick = true;
//	theGame.FadeScreen.OnEnd = true;
//};













