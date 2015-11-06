function ButtonManager(game)
{
    this.game = game;
    this.startButton = null;
    this.tutorialButton = null;
    this.muteButton = null;
    this.pauseButton = null;
    this.exitButton = null;
	this.skipButton = null;
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

ButtonManager.prototype.createSkipButton = function(posx, posy)
{
    this.skipButton = this.game.add.button(posx, posy, 'skipButton', this.skip, this,  1,0,2);
    this.skipButton.anchor.set(0.5,0.5);
},
    
ButtonManager.prototype.skip = function() 
{
	this.gametype = 1;
	theGame.FadeScreen.OnEnd = true;
};


