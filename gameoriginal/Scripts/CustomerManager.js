function CustomerManager(game)
{
	this.game = game;
	this.randomCus = null;
	this.TestHuman = null;
	this.bubble = null;
	this.bubbleCreate = false;
	this.spawnCus = false;
}

CustomerManager.prototype.create = function(RandomNum,posX, posY)
{
		//console.log(this.randomCus);
		switch(RandomNum)
		{
			case 0:
			{
				//this.WesternCustomerFunc();
				this.TestHuman = this.game.add.sprite(posX, posY, 'WesternSprite2');
			}break;
			case 1:
			{
				//this.CoupleCustomerFunc();
				this.TestHuman = this.game.add.sprite(posX, posY, 'CoupleSprite2');
			}break;
			case 2:
			{
				//this.IndiaCustomerFunc();
				this.TestHuman = this.game.add.sprite(posX, posY, 'IndianSprite2');
			}break;
			case 3:
			{
				//this.ChinaCustomerFunc();
				this.TestHuman = this.game.add.sprite(posX,posY, 'ChineseSprite2');
			}break;
		}
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
//		this.TestHuman.body.velocity.setTo(50,0);
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
			this.bubble = this.add.sprite(this.world.width*0.2, this.world.height*0.2, 'request');
			this.tagnum = this.randomCus;
			this.bubbleCreate = true;
		}
		this.TestHuman.body.velocity.setTo(0,0);
	}else
	{
		if(this.TestHuman.x < this.game.world.width*0.5)
		{
			this.TestHuman.x += 3;
			this.TestHuman.animations.play('right',10, true);
//			this.TestHuman.body.velocity.setTo(50,0);
		}else
		{
			this.TestHuman.IsMiddle = true;
			this.TestHuman.animations.play('still',10, true);
			this.bubble = this.game.add.sprite(300, 25, 'request');
			this.bubbleCreate = true;
		}
	}
};