function ButtonManager(game)
{
    this.game = game;
    this.startButton = null;
    this.tutorialButton = null;
    this.muteButton = null;
    this.pauseButton = null;
    this.exitButton = null;
    this.gametype = 0;
}

ButtonManager.prototype.startGameButton = function(posx, posy)
{
    this.startButton = this.game.add.button(posx, posy, 'startButton', this.startGame, this,  1,0,2);
    this.startButton.anchor.set(0.5,0.5);
},
    
ButtonManager.prototype.startGame = function() 
{
	this.gametype = 1;
	theGame.FadeScreen.OnEnd = true;
}

ButtonManager.prototype.creditButton = function() 
{
	this.gametype = 1;
	theGame.FadeScreen.OnEnd = true;
}