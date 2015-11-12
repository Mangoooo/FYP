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
//ButtonManager.prototype.startGameButton = function(posx, posy)
//{
//    this.startButton = this.game.add.button(posx, posy, 'startButton', this.startGame, this,  1,0,2);
////	this.startButton = this.game.add.sprite(posx, posy, 'startButton', this.startButton);
//    this.startButton.anchor.set(0.5,0.5);
////	this.startGame();
//},
    
//ButtonManager.prototype.startGame = function() 
//{
//	this.gametype = 2;
//	theGame.FadeScreen.OnEnd = true;
//},
//
//ButtonManager.prototype.createSkipButton = function(posx, posy)
//{
//    this.skipButton = this.game.add.button(posx, posy, 'skipButton', this.skip, this,  1,0,2);
//    this.skipButton.anchor.set(0.5,0.5);
//},
//    
//ButtonManager.prototype.skip = function() 
//{
//	this.gametype = 1;
//	theGame.FadeScreen.OnEnd = true;
//};

ButtonManager.prototype.createButton = function(posx, posy, key, value)
{
    this.theButton = this.game.add.sprite(posx, posy, key);
    this.theButton.anchor.set(0.5,0.5);
	this.theButton.frame = 0;
    this.theButton.inputEnabled = true;
    this.theButton.events.onInputDown.add(function(){this.GoToScene(value)}, this);
}

ButtonManager.prototype.GoToScene = function(gameScene)
{
	this.theButton.frame = 1;
    this.gametype = gameScene;
    theGame.FadeScreen.OnEnd = true;
};

//ButtonManager.prototype.mouseOver = function()
//{
//	this.theButton.frame = 1;
//};
	
//ButtonManager.prototype.actionOnClick = function()
//{
//    button.setFrames(0,1);
//};