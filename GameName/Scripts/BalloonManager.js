function BalloonManager(game)
{
	this.game = game;
	
	this.BalloonImage = null;
    this.colorBarImage = null;
	this.balloonNum = null;
	this.randomBar = null;
	this.bounds = null;
};


BalloonManager.prototype.create = function(RandomNum,posX, posY)
{
	switch(RandomNum)
		{
			case 0:
			{
				this.BalloonImage = this.game.add.sprite(posX - 20, posY, "yellow");
				this.balloonNum = 0;
			}break;
			case 1:
			{
				this.BalloonImage = this.game.add.sprite(posX - 100, posY - 100, "yellowOrange");
				this.balloonNum = 1;
			}break;
			case 2:
			{
				this.BalloonImage = this.game.add.sprite(posX - 400, posY - 100, "orange");
				this.balloonNum = 2;
			}break;
			case 3:  
			{
				this.BalloonImage = this.game.add.sprite(posX - 200, posY, "redOrange");
				this.balloonNum = 3;
			}break;
			case 4:
			{
				this.BalloonImage = this.game.add.sprite(posX - 450, posY, "magenta");
				this.balloonNum = 4;
			}break;
			case 5:
			{
				this.BalloonImage = this.game.add.sprite(posX - 180, posY - 150, "redPurple");
				this.balloonNum = 5;
			}break;
			case 6:
			{
				this.BalloonImage = this.game.add.sprite(posX - 500, posY - 150, "mono1");
				this.balloonNum = 6;
			}break;
			case 7:
			{
				this.BalloonImage = this.game.add.sprite(posX - 700, posY - 80, "mono2");
				this.balloonNum = 7;
			}break;
			case 8:
			{
				this.BalloonImage = this.game.add.sprite(posX - 300, posY + 50, "mono3");
				this.balloonNum = 8;
			}break;
			case 9:
			{
				this.BalloonImage = this.game.add.sprite(posX - 600, posY, "mono4");
				this.balloonNum = 9;
			}break;
		}
		this.BalloonImage.anchor.setTo(0.5,0.5);
		this.BalloonImage.clicked = false;
		this.BalloonImage.inputEnabled = true;
		this.BalloonImage.input.pixelPerfectOver = true;
		this.BalloonImage.events.onInputDown.add(this.checkBalloon, this);
		

		/////// BALLOON COLLISION INSIDE THE BOUNDS//////////
		this.game.physics.enable(this.BalloonImage, Phaser.Physics.ARCADE);
		this.BalloonImage.body.velocity.x = 0; // 0
		this.BalloonImage.body.velocity.y = -10; //-50;
//		this.BalloonImage.body.collideWorldBounds = false;
//		this.BalloonImage.body.bounce.set(1);
//		this.game.physics.arcade.setBounds(130,70,700, 500);
		this.BalloonImage.animations.add('Pop', [0,1,2,3,4,5,6]);
		
		/////////MOVE BALLOON////////////////
//		this.game.physics.startSystem(Phaser.Physics.P2JS);
//		this.game.physics.p2.restitution = 1.0;
//		this.game.physics.p2.enable(this.BalloonImage, false);
	//	this.game.physics.arcade.collide(this.BalloonImage, this.BalloonImage, null, this);
	//	this.BalloonImage.body.immovable = true
	//	this.BalloonImage.body.velocity.x = 100;
	//	this.BalloonImage.body.velocity.y = -100;
	//	this.BalloonImage.body.fixedRotation = true; // cannot rotation
	//	this.BalloonImage.body.damping= 0; // keep move
	//	this.BalloonImage.body.mass= 0.1;
},
	
BalloonManager.prototype.update = function()
{ 
},
	
BalloonManager.prototype.LoadColorBar = function(RandomNum,posX, posY)
{
	switch(RandomNum)
		{
			case 0:
			{
				this.colorBarImage = this.game.add.sprite(posX , posY - 50, "yellowbar");
				this.randomBar = 0;
			}break;
			case 1:
			{
				this.colorBarImage = this.game.add.sprite(posX , posY, "yellowOrangebar");
				this.randomBar = 1;
			}break;
			case 2:
			{
				this.colorBarImage = this.game.add.sprite(posX , posY + 50, "orangebar"); //redbar
				this.randomBar = 2;
			}break;	
			case 3:
			{
				this.colorBarImage = this.game.add.sprite(posX , posY + 100, "redOrangebar");
				this.randomBar = 3;
			}break;
			case 4:
			{
				this.colorBarImage = this.game.add.sprite(posX , posY + 150, "magentabar"); //yellowbar
				this.randomBar = 4;
			}break;
			case 5:
			{
				this.colorBarImage = this.game.add.sprite(posX , posY + 200, "redPurplebar");
				this.randomBar = 5;
			}break;	
		}
//	this.colorBarImage.anchor.set(0,0.5);
},
	
BalloonManager.prototype.destroyBalloon = function()
{
//	this.BalloonImage.destroy();
	this.BalloonImage.animations.play('Pop',7, false, true);
},
	
BalloonManager.prototype.destroyColorBar = function()
{
	this.colorBarImage.alpha = 0.2;
},
	
BalloonManager.prototype.checkBalloon = function()
{
	this.BalloonImage.clicked = true;
};

