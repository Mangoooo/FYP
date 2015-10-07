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
	this.nextLevelClick = false;
	this.restartLevelClick = false;
	this.gameoverCreate = false;
	

    this.gametype = 0;
};
//game play button
ButtonManager.prototype.startGameButton = function(posx, posy)
{
    this.startButton = this.game.add.button(posx, posy, 'startButton', this.startGame, this,  1,0,2);
    this.startButton.anchor.set(0.5,0.5);
},
    
ButtonManager.prototype.startGame = function() 
{
	this.gametype = 2;
	theGame.FadeScreen.OnEnd = true;
},

/*ButtonManager.prototype.creditButton = function() 
{
	this.gametype = 1;
	theGame.FadeScreen.OnEnd = true;
},*/

//tutorial
/*ButtonManager.prototype.createTutorialButton = function(posx, posy)
{
    this.tutorialButton = this.game.add.button(posx, posy, 'tutorialButton', this.tutorial, this,  1,0,2);
    this.tutorialButton.anchor.set(0.5,0.5);
    this.tutorialButton.scale.set(0.5,0.5);
},
    
ButtonManager.prototype.tutorial = function() 
{
	this.gametype = 1;
	theGame.FadeScreen.OnEnd = true;
},*/
ButtonManager.prototype.createSkipButton = function(posx, posy)
{
    this.skipButton = this.game.add.button(posx, posy, 'skipButton', this.skip, this,  1,0,2);
    this.skipButton.anchor.set(0.5,0.5);
},
	
ButtonManager.prototype.createNextButton = function(posx, posy)
{

    this.nextButton = this.game.add.button(posx, posy, 'nextButton', this.next, this,  1,0,2);
    this.nextButton.anchor.set(0.5,0.5);
},
	
ButtonManager.prototype.createRestartButton = function(posx, posy)
{
    this.restartButton = this.game.add.button(posx, posy, 'restartButton', this.restart, this,  1,0,2);
    this.restartButton.anchor.set(0.5,0.5);
},
    
ButtonManager.prototype.createScoreButton = function(posx, posy)
{
    this.scoreButton = this.game.add.button(posx, posy, 'ScoretButton', this.score, this,  1,0,2);
    this.scoreButton.anchor.set(0.5,0.5);
},	
	
	
ButtonManager.prototype.skip = function() 
{
	this.gametype = 1;
	theGame.FadeScreen.OnEnd = true;
};

ButtonManager.prototype.restart = function() 
{
	this.gametype = 2;
	this.gameoverCreate = true;
	this.restartLevelClick = true;
	theGame.FadeScreen.OnEnd = true;
};

ButtonManager.prototype.next = function()  // NEXT LEVEL 
{
	//this.gametype = 3;
	this.nextLevelClick = true;
	theGame.FadeScreen.OnEnd = true;
};

ButtonManager.prototype.score = function() 
{
	this.gametype = 3;
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



