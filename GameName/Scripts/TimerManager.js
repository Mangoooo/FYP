function TimerManager(game)
{
	this.game = game;
	this.timerBarImage = null;
};


TimerManager.prototype.create = function()
{
	this.timerBarImage = this.game.add.sprite(this.game.world.width*0.6,this.game.world.height*0.09, "timerBar");
	this.timerBarImage.anchor.set(0.5,0.5);

//	bglife.scale.x -= -1;
//	bmd = this.game.add.bitmapData(280, 30);
//	bmd.ctx.beginPath();
//	bmd.ctx.rect(0, 0, 400, 40);
//	bmd.ctx.fillStyle = '#00f910';
//	bmd.ctx.fill();
	
//	this.timerBarImage.width = 0;
//	this.timerBarImage.initialWidth = 300;
},
	
TimerManager.prototype.update = function()
{ 
//	this.timerBarImage.width = percenDone*this.timerBarImage.initialWidth;
};

