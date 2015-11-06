function TargetManager(game)
{
	this.game = game;
	this.TargetImage = null;
    
};

TargetManager.prototype.create = function(RandomNum,posX, posY)
{
	switch(RandomNum)
		{
			case 0:
			{
				this.TargetImage = this.game.add.sprite(posX, posY, "blue");
			}break;
			case 1:
			{
				this.TargetImage = this.game.add.sprite(posX, posY, "green");
			}break;
			case 2:
			{
				this.TargetImage = this.game.add.sprite(posX, posY, "orange");
			}break;
			case 3:
			{
				this.TargetImage = this.game.add.sprite(posX, posY, "red");
			}break;
			case 4:
			{
				this.TargetImage = this.game.add.sprite(posX, posY, "white");
			}break;
			case 5:
			{
				this.TargetImage = this.game.add.sprite(posX, posY, "yellow");
			}break;
				
		}
	this.TargetImage.anchor.set(0.5,0.5);
	this.TargetImage.inputEnabled = true;
	this.TargetImage.input.useHandCursor = true;
	this.TargetImage.events.onInputDown.add(this.destroyTarget, this);
},
	
TargetManager.prototype.update = function()
{ 
},

TargetManager.prototype.destroyTarget = function()
{
	this.TargetImage.destroy();
};
