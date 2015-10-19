function CustomerManager(game)
{
	this.game = game;
	this.randomCus = null;
	this.TestHuman = null;
	this.bubble = null;
	this.bubbleCreate = false;
	this.spawnCus = false;
	this._Request = false;
	this.randomBubble = null;
	this.customerNum = null;
	this.Angry = false;
}

CustomerManager.prototype.create = function(RandomNum,posX, posY)
{
		//console.log(this.randomCus);
		switch(RandomNum)
		{
			case 0:
			{
				// Western Customer / GREEN
				this.TestHuman = this.game.add.sprite(posX, posY, 'WesternSprite');
				this.customerNum = 0;
			}break;
			case 1:
			{
				// India Customer / ORANGE
				this.TestHuman = this.game.add.sprite(posX, posY, 'IndianSprite');
				this.customerNum = 1;
			}break;
			case 2:
			{
				//Chinese Customer / RED
				this.TestHuman = this.game.add.sprite(posX,posY, 'ChineseSprite');
				this.customerNum = 2;
			}break;
			case 3:
			{
				// Medium earth Customer / GREEN
				this.TestHuman = this.game.add.sprite(posX,posY, 'M_EarthSprite');
				this.customerNum = 3;
			}break;	
				
			/////////////// level 2 customer/////////////////////	
			case 4:
			{
				// India Customer / ORANGE
				this.TestHuman = this.game.add.sprite(posX, posY, 'IndianSprite');
				this.customerNum = 4;
			}break;
				
			case 5:
			{
				// middle earth Customer / GREEN
				this.TestHuman = this.game.add.sprite(posX,posY, 'IndianSprite_orange');
				this.customerNum = 5;
			}break;	
				
			case 6:
			{
				//Chinese Customer / green
				this.TestHuman = this.game.add.sprite(posX,posY, 'M_EarthSprite');
				this.customerNum = 6;
			}break;
			
			case 7:
			{
				//Chinese Customer / RED
				this.TestHuman = this.game.add.sprite(posX,posY, 'M_EarthSprite_yellow');
				this.customerNum = 7;
			}break;
				
			case 8:
			{
				// Western Customer / GREEN
				this.TestHuman = this.game.add.sprite(posX, posY, 'WesternSprite');
				this.customerNum = 8;
			}break;
			
			case 9:
			{
				// Medium earth Customer / GREEN
				this.TestHuman = this.game.add.sprite(posX,posY, 'WesternSprite_green');
				this.customerNum = 9;
			}break;	
		}
		this.TestHuman.anchor.set(0.5,0.5);
		this.game.physics.enable(this.TestHuman, Phaser.Physics.ARCADE);
		this.TestHuman.body.velocity.setTo(0,0);
		this.TestHuman.checkWorldBounds = true;
		this.TestHuman.events.onOutOfBounds.add(this.outScreen, this);
		this.TestHuman.animations.add('left', [0]);
		this.TestHuman.animations.add('still', [1]);
		this.TestHuman.animations.add('angry', [2]);
		this.TestHuman.animations.add('angryRight', [3]);
		this.TestHuman.animations.add('happy', [4]);
		this.TestHuman.animations.add('happyRight', [5]);
		this.TestHuman.IsMiddle = false;
		this.TestHuman.done = false;
		this.TestHuman.spawned = true;
		this.totalCustomers += 1;	
},
	
CustomerManager.prototype.LoadBubble = function(RandomNum,posX, posY)
{
		switch(RandomNum)
		{
			case 0:
			{
				//Western Blue
				this.bubble = this.game.add.sprite(posX, posY, 'WesternBubble');
			}break;
			case 1:
			{
				//India Red
				this.bubble = this.game.add.sprite(posX, posY, 'IndianBubble');
			}break;
			case 2:
			{
				//China Green
				this.bubble = this.game.add.sprite(posX,posY, 'ChineseBubble');
			}break;
			case 3:
			{
				//Middle eastern Green
				this.bubble = this.game.add.sprite(posX,posY, 'MiddleEasternBubble');
			}break;
				
			////////////////////////Level 2 bubble////////////////////////
			case 4:
			{
				this.bubble = this.game.add.sprite(posX, posY, 'Indian_Orange');
			}break;
				
			case 5:
			{
				this.bubble = this.game.add.sprite(posX, posY, 'Indian_Red');
			}break;
				
			case 6:
			{
				this.bubble = this.game.add.sprite(posX,posY, 'MiddleEastern_Green');
			}break;
				
			case 7:
			{
				this.bubble = this.game.add.sprite(posX,posY, 'MiddleEastern_Yellow');
			}break;
				
			case 8:
			{
				this.bubble = this.game.add.sprite(posX,posY, 'WesternCouple_Yellow');
			}break;
				
			case 9:
			{
				//Middle eastern Green
				this.bubble = this.game.add.sprite(posX,posY, 'WesternSolo_Green');
			}break;
		}
		this.bubble.anchor.set(0.5,0.5);
},
	
CustomerManager.prototype.update = function()
{ 
},

CustomerManager.prototype.outScreen = function()
{
	this.spawnCus = true;
},
	
CustomerManager.prototype.moveCustomer = function()
{
	if(this.TestHuman.done)
	{
		this.TestHuman.x += 5; //this.TestHuman.x += 3;
		
		if (this.Angry == false)
		{
			this.TestHuman.animations.play('happyRight',10, true);
		}
		else if (this.Angry == true)
		{
			this.TestHuman.animations.play('angryRight',10, true);
		}
	 	if(this.TestHuman.x >this.game.world.width*0.6)
		{
			if(this.result !=null)
			{
				this.result.destroy();
			}
		}
	}
	if(this.TestHuman.IsMiddle)
	{
		if(this.bubbleCreate == false)
		{
			this.tagnum = this.randomCus;
			console.log("request true");
			this.bubbleCreate = true;
		}
		this.TestHuman.body.velocity.setTo(0,0);
	}else
	{
		if(this.TestHuman.x < this.game.world.width*0.5)
		{
			this.TestHuman.x += 5;
			this.TestHuman.animations.play('right',10, true);
		}else
		{
			this.TestHuman.IsMiddle = true;
			this.TestHuman.animations.play('still',10, true);
			this.CreateBubble();
			this.bubbleCreate = true;
		}
	}
},

CustomerManager.prototype.CreateBubble = function()
{

//	this.randomBubble = this.game.rnd.integerInRange(0,0);
	if (this.customerNum == 0)
	{
		this.randomBubble = 0;
	}
	else if (this.customerNum == 1)
	{
		this.randomBubble = 1;
	}
	else if (this.customerNum == 2)
	{
		this.randomBubble = 2;
	}
	else if (this.customerNum == 3)
	{
		this.randomBubble = 3;
	}
	else if (this.customerNum == 4)
	{
		this.randomBubble = 4;
	}
	else if (this.customerNum == 5)
	{
		this.randomBubble = 5;
	}
	else if (this.customerNum == 6)
	{
		this.randomBubble = 6;
	}
	else if (this.customerNum == 7)
	{
		this.randomBubble = 7;
	}
	else if (this.customerNum == 8)
	{
		this.randomBubble = 8;
	}
	else if (this.customerNum == 9)
	{
		this.randomBubble = 9;
	}
	else
	{
		this.randomBubble = 0;
	}


	this.LoadBubble(this.randomBubble,500,120);
},
	
CustomerManager.prototype.destroyBubble = function()
{
	this.bubble.destroy();
};
	