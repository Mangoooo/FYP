function TargetManager(game)
{
	this.game = game;
	
	this.BalloonImage = null;
    this.colorBarImage = null;
	
	this.balloonNum = null;
	
	this.randomBar = null;
	this.bounds = null;
};

TargetManager.prototype.CreateBounds = function()
{ 
		
	// Display the bounds
	this.bounds = new Phaser.Rectangle(120, 60, 700, 500); // position x , y  // scale: w h 
//	 this.bounds = this.game.add.sprite(120, 60, 'Bounds_BG');
	var graphics = this.game.add.graphics(this.bounds.x, this.bounds.y);
//	graphics.beginFill(0x000077);
    graphics.lineStyle(4, 0xffd900, 1);
    graphics.drawRect(0, 0, this.bounds.width, this.bounds.height);
	
},

TargetManager.prototype.create = function(RandomNum,posX, posY)
{
//	this.bounds = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'Bounds_BG');
//	this.bounds.anchor.set(0.5,0.5);
	switch(RandomNum)
		{
			case 0:
			{
				this.BalloonImage = this.game.add.sprite(posX, posY, "blue");
				this.balloonNum = 0;
			}break;
			case 1:
			{
				this.BalloonImage = this.game.add.sprite(posX - 100, posY - 100, "green");
				this.balloonNum = 1;
			}break;
			case 2:
			{
				this.BalloonImage = this.game.add.sprite(posX - 400, posY - 100, "orange");
				this.balloonNum = 2;
			}break;
			case 3:
				  
			{
				this.BalloonImage = this.game.add.sprite(posX - 200, posY, "red");
				this.balloonNum = 3;
			}break;
			case 4:
			{
				this.BalloonImage = this.game.add.sprite(posX - 400, posY, "white");
				this.balloonNum = 4;
			}break;
			case 5:
			{
				this.BalloonImage = this.game.add.sprite(posX - 600, posY, "yellow");
				this.balloonNum = 5;
			}break;
		}
	this.BalloonImage.anchor.setTo(0.5,0.5);

	/////////DESTROY BALLOON/////////////
//	this.BalloonImage.inputEnabled = true;
//	this.BalloonImage.input.useHandCursor = true;
//	this.BalloonImage.events.onInputDown.add(this.destroyTarget, this);

	
	/////////MOVE BALLOON////////////////
//	this.game.physics.p2.restitution = 1.0;
//	this.game.physics.p2.enable(this.BalloonImage, false);
//	this.game.physics.arcade.collide(this.BalloonImage, this.BalloonImage, null, this);
//	this.BalloonImage.body.collideWorldBounds = true;
//	this.BalloonImage.body.immovable = true
//	this.BalloonImage.body.velocity.x = 5;
//	this.BalloonImage.body.velocity.y = this.BalloonImage.body.velocity.x = 50;
//	this.BalloonImage.body.fixedRotation = true;
//	this.BalloonImage.body.damping= 0;
//	this.BalloonImage.body.mass= 0.1;
	
	/////// BALLOON COLLISION INSIDE THE BOUNDS//////////
	this.game.physics.enable(this.BalloonImage, Phaser.Physics.ARCADE);
	this.BalloonImage.body.velocity.x = 100;
	this.BalloonImage.body.velocity.y = 100;
	this.BalloonImage.body.collideWorldBounds = true;
	this.BalloonImage.body.bounce.set(1);
	this.game.physics.arcade.setBounds(120,60,700, 500);

},
	
TargetManager.prototype.update = function()
{ 
	
},
	
TargetManager.prototype.LoadColorBar = function(RandomNum,posX, posY)
{
	switch(RandomNum)
		{
			case 0:
			{
				this.colorBarImage = this.game.add.sprite(posX + 50, posY + 100, "bluebar");
			}break;
			case 1:
			{
				this.colorBarImage = this.game.add.sprite(posX + 50, posY + 50, "greenbar");
			}break;
			case 2:
			{
				this.colorBarImage = this.game.add.sprite(posX + 50, posY, "redbar");
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
	this.BalloonImage.destroy();
};
