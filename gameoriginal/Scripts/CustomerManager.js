function CustomerManager(game)
{
	this.game = game;
	this.randomCus = null;
	this.TestHuman = null;
	this.bubble = null;
	this.bubbleCreate = false;
	this.spawnCus = false;
	this._Request = false;
	//this.RandomNum = null;
	this.randomBubble = null;
	this.customerNum = null;
}

CustomerManager.prototype.create = function(RandomNum,posX, posY)
{
		//console.log(this.randomCus);
		switch(RandomNum)
		{
			case 0:
			{
				// Western Customer / RED
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
				//Chinese Customer / YELLOW
				this.TestHuman = this.game.add.sprite(posX,posY, 'ChineseSprite');
				this.customerNum = 2;
			}break;
			case 3:
			{
				// Couple Customer / GREEN
				this.TestHuman = this.game.add.sprite(posX, posY, 'CoupleSprite2');
				
			}break;
			
		}
		console.log(this.customerNum);
		this.TestHuman.anchor.set(0.5,0.5);
		this.game.physics.enable(this.TestHuman, Phaser.Physics.ARCADE);
		//this.TestHuman.body.velocity.setTo(0,0);
		this.TestHuman.checkWorldBounds = true;
		this.TestHuman.events.onOutOfBounds.add(this.outScreen, this);
//		this.TestHuman.animations.add('left', [0,1,2,3]);     	
//		this.TestHuman.animations.add('right',  [5,6,7,8]);
//		this.TestHuman.animations.add('still', [4]);
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
		this.TestHuman.x += 3;
		this.TestHuman.animations.play('left',10, true);
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
			this.TestHuman.x += 3;
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
	