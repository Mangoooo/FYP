function TargetManager(game)
{
	this.game = game;
	this.TargetImage = null;
    this.colorBarImage = null;
	this.targetNum = null;
	this.randomBar = null;
	this.cursors = null;
};

TargetManager.prototype.create = function(RandomNum,posX, posY)
{
	this.game.physics.startSystem(Phaser.Physics.ARCADE);
	switch(RandomNum)
		{
			case 0:
			{
				this.TargetImage = this.game.add.sprite(posX, posY, "blue");
				this.targetNum = 0;
			}break;
			case 1:
			{
				this.TargetImage = this.game.add.sprite(posX - 100, posY - 100, "green");
				this.targetNum = 1;
//				this.game.physics.enable(this.TargetImage, Phaser.Physics.ARCADE);
//				this.TargetImage.body.velocity.x = -20;
			}break;
			case 2:
			{
				this.TargetImage = this.game.add.sprite(posX - 500, posY - 100, "orange");
				this.targetNum = 2;
			}break;
			case 3:
			{
				this.TargetImage = this.game.add.sprite(posX - 200, posY, "red");
				this.targetNum = 3;
			}break;
			case 4:
			{
				this.TargetImage = this.game.add.sprite(posX - 400, posY, "white");
				this.targetNum = 4;
			}break;
			case 5:
			{
				this.TargetImage = this.game.add.sprite(posX - 600, posY, "yellow");
				this.targetNum = 5;
			}break;
		}
	this.TargetImage.anchor.setTo(0.5,0.5);
	
//	this.TargetImage.inputEnabled = true;
//	this.TargetImage.input.useHandCursor = true;
//	this.TargetImage.events.onInputDown.add(this.destroyTarget, this);
	
	this.game.physics.enable(this.TargetImage, Phaser.Physics.ARCADE);
	this.TargetImage.body.collideWorldBounds = true;
	this.TargetImage.body.velocity.x = 50;
	this.TargetImage.body.velocity.y = 5;
	this.game.physics.arcade.overlap(this.TargetImage, null, this);
	
//	this.game.physics.enable(this.TargetImage, Phaser.Physics.ARCADE);
//	this.TargetImage.body.collideWorldBounds = true;
//	this.TargetImage.body.checkCollision.up = false;
//	this.TargetImage.body.checkCollision.down = false;
//	this.TargetImage.body.immovable = true;
},
	
TargetManager.prototype.update = function()
{ 
	
},

TargetManager.prototype.moveBallon = function()
{ 
	
},	
	
TargetManager.prototype.LoadColorBar = function(RandomNum,posX, posY)
{
	switch(RandomNum)
		{
			case 0:
			{
				this.colorBarImage = this.game.add.sprite(posX, posY + 100, "bluebar");
			}break;
			case 1:
			{
				this.colorBarImage = this.game.add.sprite(posX, posY + 50, "greenbar");
			}break;
			case 2:
			{
				this.colorBarImage = this.game.add.sprite(posX, posY, "redbar");
			}break;	
		}
	this.colorBarImage.anchor.set(0.5,0.5);
},
	
TargetManager.prototype.CheckColorBar = function()
{
	if (this.customerNum == 0)
	{
		this.randomBar = 0;
	}
	else if (this.customerNum == 1)
	{
		this.randomBar = 1;
	}
	else if (this.customerNum == 2)
	{
		this.randomBar = 2;
	}
	else if (this.customerNum == 3)
	{
		this.randomBar = 3;
	}
	else if (this.customerNum == 4)
	{
		this.randomBar = 4;
	}
	else if (this.customerNum == 5)
	{
		this.randomBar = 5;
	}
	else
	{
		this.randomBar = 0;
	}
	this.LoadColorBar(this.randomBar,500,120);
},
	
TargetManager.prototype.destroyTarget = function()
{
	this.TargetImage.destroy();
};
