theGame.Level2 = function(game)
{
	this.game;
    this.gameBackground = null;
    this.music = null;
    this.uiManager = null;  
	
	this.redGem = null; // gem
	this.greenGem = null;
	this.blueGem = null;
	this.yellowGem = null;
	this.orangeGem = null;
	
	this.westernCus = null; //red gem
	this.coupleCus = null; //green gem
//	this.blueDude = null;
	this.chinaCus = null; //yellow gem
	this.IndiaCus = null; // orange gem
	
	this.redMiddle = false;
	this.greenMiddle = false;
//	this.blueMiddle = false;
	this.yellowMiddle = false;
	this.orangeMiddle = false;
	
	this.redCorrect = false;
	this.greenCorrect = false;
//	this.blueCorrect = false;
	this.yellowCorrect = false; 
	this.orangeCorrect = false; 
	
	this.bubble = null;
	this.bubbleCreate = false;
	
    this.counter = 10;
    this.text = 0;
    this.selectGemValue = null;

	this.sprite = null;
	this.sprite2 = null;
	this.result = null;
	this.setToKill = null;
	this.countDown = 10;
	
	var spawned = false;
	
	this.redCanclick = false;
	this.greenCanclick = false;
//	this.blueCanclick = false;
	this.yellowCanclick = false;
	this.orangeCanclick = false;
	
	this.randomCus = null;
	this.customerArray = [false, false, false, false];
	this.totalCustomers = 0;
		
	this.money = 0;
	this.TestHuman = null;
	this.rnd = null;
	this._customer = null;
};

theGame.Level2.prototype = 
{
    preload: function()
    {
//		this.selectGemValue = this.greenObject;
		
		//Screen Background
		this.gameBackground = this.add.sprite(this.world.width*0.5, this.world.height*0.5, 'GameBackGround');
        this.gameBackground.anchor.set(0.5,0.5);
		
		//gemTable
		this.tableImage = this.add.sprite(this.world.width*0.5, this.world.height*0.83, 'gemTable2');
        this.tableImage.anchor.set(0.5,0.5);
		
		//GEM
		this.redGem = this.add.button(this.world.width*0.29, this.world.height*0.79, 'red', this.redclick, this, 1, 0, 2);
		this.redGem.anchor.setTo(0.5,0.5);
		
		this.greenGem = this.add.button(this.world.width*0.71, this.world.height*0.79, 'green', this.greenclick, this, 1, 0, 2);
		this.greenGem.anchor.setTo(0.5,0.5);
		
		this.blueGem = this.add.button(this.world.width*0.39, this.world.height*0.88, 'blue', this.blueclick, this, 1, 0, 2);
		this.blueGem.anchor.setTo(0.5,0.5);
		
		this.yellowGem = this.add.button(this.world.width*0.60, this.world.height*0.88, 'yellow', this.yellowclick, this, 1, 0, 2);
		this.yellowGem.anchor.setTo(0.5,0.5);
		
		this.orangeGem = this.add.button(this.world.width*0.5, this.world.height*0.79, 'orange', this.orangeclick, this, 1, 0, 2);
		this.orangeGem.anchor.setTo(0.5,0.5);
    }, 
       
    create: function()
    {
		console.log("level2");
	
        this.time.events.loop(Phaser.Timer.SECOND, this.updateCounter, this); 
		this.buttonManager = new ButtonManager(this);
		
		
		this._customer = new CustomerManager(this);
		this._customer.moveCustomer(0,0,0);
		
		this.spawnCustomer();
		
		this.moneyImage = this.add.sprite(this.world.width*0.93, this.world.height*0.85, 'moneyImage');
		this.moneyImage.frame = 0;
		this.moneyImage.anchor.set(0.5,0.5);
       
//        //Fade in and out
//        theGame.FadeScreen = new FadeManager(this);
//        theGame.FadeScreen.create();
		
        
    },
  
    update: function()
    { 
//		this._customer = new Character();
//		Character.create(0,0,0);
		//this.randomCusFunc(this.randomCus);
		
		if(this.money >= 10 && this.money <= 19)
		{
			this.moneyImage.frame = 1;
		}
		else if(this.money >= 20 && this.money <= 29)
		{
			this.moneyImage.frame = 2;
		}
		else if(this.money >= 30 && this.money <= 39)
		{
			this.moneyImage.frame = 3;
		}		
		
		if (this.IndiaCus != null)
		{
			this.IndiaCustomerFunc();
		}
		if(this.coupleCus != null)
		{
			this.CoupleCustomerFunc();
		}
		if (this.westernCus != null)
		{
			this.WesternCustomerFunc();	
		}
		if (this.chinaCus != null)
		{
		 	this.ChinaCustomerFunc();	
		}
//		this.moveCustomer();
				
		if (this.money >= 20 ) // next level
		{
			this.buttonManager.Level2ScoreButton(this.world.width*0.5, this.world.height*0.5);	
		}
		if (this.buttonManager.nextLevelClick == true)
		{	
//			this.buttonManager.destroyButton();	
//			this.CusNum = 0;
//			this.money = 0;
//			this.timer = 20;
			theGame.money1 = this.money;
		}
			theGame.FadeScreen.update(this.buttonManager.gametype);	
		
    },

	spawnCustomer: function()
	{
		console.log(this.customerArray);
		
//		this.CustomerManager = new CustomerManager(this);
//		this.randomCus = this.game.rnd.integerInRange(0, 3);
//		this.CustomerManager.create(0,0,0);
//		this.randomCus = this.game.rnd.integerInRange(0, 3);
//		console.log(this.randomCus);
//		switch(this.randomCus)
//		{
//			case 0:
//			{
//				//this.WesternCustomerFunc();
//				this.TestHuman = this.add.sprite(this.world.widthX, this.world.height*0.3, 'dude3');
//			}break;
//			case 1:
//			{
//				//this.CoupleCustomerFunc();
//				this.TestHuman = this.add.sprite(this.world.widthX, this.world.height*0.4, 'dude2');
//			}break;
//			case 2:
//			{
//				//this.IndiaCustomerFunc();
//				this.TestHuman = this.add.sprite(this.world.width*0.05, this.world.height*0.3, 'orangedude');
//			}break;
//			case 3:
//			{
//				//this.ChinaCustomerFunc();
//				this.TestHuman = this.add.sprite(this.world.width*0.05, this.world.height*0.3, 'dude5');
//			}break;
//		}
//		this.TestHuman.anchor.set(0.5,0.5);
//		this.physics.enable(this.TestHuman, Phaser.Physics.ARCADE);
//		this.TestHuman.body.velocity.setTo(0,0);
//		this.TestHuman.checkWorldBounds = true;
//		this.TestHuman.events.onOutOfBounds.add(this.leftscreen, this);
//		this.TestHuman.animations.add('left', [0,1,2,3]);     	
//		this.TestHuman.animations.add('right',  [5,6,7,8]);
//		this.TestHuman.animations.add('still', [4]);
//		this.TestHuman.IsMiddle = false;
//		this.TestHuman.done = false;
//		this.TestHuman.spawned=true;
//		this.totalCustomers += 1;
	},
	
	leftscreen:function()
	{
		if(this.result !=null)
		{
			this.result.destroy();
		}
		this.spawnCustomer();
	},
//	moveCustomer:function()
//	{
//		if(this.TestHuman.done)
//		{
//			this.TestHuman.x ++;
//			this.TestHuman.animations.play('right',10, true);
//			if(this.TestHuman.x >this.world.width*0.6)
//			{
//				if(this.result !=null)
//				{
//					this.result.destroy();
//				}
//			}
//		}
//		if(this.TestHuman.IsMiddle)
//		{
//			if(this.bubbleCreate == false)
//			{
//				this.bubble = this.add.sprite(this.world.width*0.2, this.world.height*0.2, 'request');
//				this.tagnum = this.randomCus;
//				this.bubbleCreate = true;
//			}
//		}else
//		{
//			if(this.TestHuman.x < this.game.world.width*0.5)
//			{
//				this.TestHuman.x ++;
//				this.TestHuman.animations.play('right',10, true);
//			}else
//			{
//				this.TestHuman.IsMiddle = true;
//				this.TestHuman.animations.play('still',10, true);
//				this.bubble = this.add.sprite(this.world.width*0.2, this.world.height*0.2, 'request');
//				this.bubbleCreate = true;
//			}
//		}
//	},
	updateCounter: function() 
    {
		if (this.counter <= 0)
		{
			this.time.events.stop();
		}
		else
		{
			if(this.startTimer)
			{
				this.countDown--;
				if(this.countDown <= 0)
       			{
					//this.result.kill();
					this.startTimer = false;
       			}
			}
			this.counter--;
			//this.text.setText('Timer: ' + this.counter);
		}
    },
	TestTime:function()
	{
		console.log("haha");
		if(this.result !=null)
		{
			this.result.destroy();
		}
	},
	redclick: function()
	{
		if (this.redGem.events.onInputDown)
		{
			if(this.randomCus == 0)
			{
				console.log("red");
				this.result = this.add.sprite(this.world.width*0.7, this.world.height*0.3, 'correct');
				this.result.anchor.set(0.5,0.5);
				if(this.bubble != null)
				{
					this.bubble.destroy();
					this.TestHuman.done =true;
				}
			}else
			{
				console.log("wrong");
			}
		}
	},
	
	greenclick: function()
	{
	 	if (this.greenGem.events.onInputDown)
		{
			if(this.randomCus == 1)
			{
				console.log("GReen");
				this.result = this.add.sprite(this.world.width*0.7, this.world.height*0.3, 'correct');
				this.result.anchor.set(0.5,0.5);
				if(this.bubble != null)
				{
					this.bubble.destroy();
					this.TestHuman.done =true;
				}
				
			}else
			{
				console.log("wrong");
			}
		}
	},

	yellowclick: function()
	{
		if (this.yellowGem.events.onInputDown)
		{
			if(this.randomCus == 3)
			{
				console.log("yellow");
				this.result = this.add.sprite(this.world.width*0.7, this.world.height*0.3, 'correct');
				this.result.anchor.set(0.5,0.5);
				if(this.bubble != null)
				{
					this.bubble.destroy();
					this.TestHuman.done =true;
					//this.IsMiddle = false;
				}
				
			}else
			{
				console.log("wrong");
			}
		}
	},
			
	orangeclick: function()
	{
		if (this.orangeGem.events.onInputDown)
		{
			if(this.randomCus == 2)
			{
				console.log("orange");
				this.result = this.add.sprite(this.world.width*0.7, this.world.height*0.3, 'correct');
				this.result.anchor.set(0.5,0.5);
				if(this.bubble != null)
				{
					this.bubble.destroy();
					this.TestHuman.done =true;
				}
				
			}else
			{
				console.log("wrong");
			}
		}
	},
	
	blueclick: function()
	{
		if (this.blueGem.events.onInputDown)
		{
			console.log("wrong");
        }
	},
	
	TheDestroyer: function(sprite,sprite2)
	{
		if(this.checkCombination(sprite,sprite2))
        {
			this.startTimer = true;
//          sprite2.kill(); // destroy gem
			this.setToKill = sprite;
//			this.setToKill = true;
            this.countDown = 1;
        }
		else
		{
			this.startTimer = true;
			this.setToKill = sprite;
//			this.setToKill = true;
			this.countDown = 1;
		}
		
		this.money += 10;
		//this.moneyText.text = 'Money: ' + this.money;
	},
	checkCombination: function(sprite,sprite2)
	{
//		if(sprite != null && sprite2 != null)
//        {
			if(sprite == this.chinaCus && sprite2 == this.yellowGem )
            {
				this.result = this.add.sprite(this.world.width*0.7, this.world.height*0.3, 'correct');
				this.result.anchor.set(0.5,0.5);
				this.yellowCorrect = true;
				this.spawnCustomer();
				this.customerArray[3] = true;
                return true;
            }
            if(sprite == this.westernCus && sprite2 == this.redGem )
            {
				this.result = this.add.sprite(this.world.width*0.7, this.world.height*0.3, 'correct');
				this.result.anchor.set(0.5,0.5);
				this.redCorrect = true;
				this.spawnCustomer();
				this.customerArray[2] = true;
                return true;
            }
			if(sprite == this.coupleCus && sprite2 == this.greenGem )
            {
				this.result = this.add.sprite(this.world.width*0.7, this.world.height*0.3, 'correct');
				this.result.anchor.set(0.5,0.5);
				this.greenCorrect = true;
				this.spawnCustomer();
				this.customerArray[1] = true;
                return true;
            }
			if(sprite == this.IndiaCus && sprite2 == this.orangeGem )
            {
				this.result = this.add.sprite(this.world.width*0.7, this.world.height*0.3, 'correct');
				this.result.anchor.set(0.5,0.5);
				this.orangeCorrect = true;
				this.spawnCustomer();
				this.customerArray[0] = true;
                return true;
            }
//			else
//			{
//				this.result = this.add.sprite(this.world.width*0.7, this.world.height*0.3, 'wrong');
//				this.result.anchor.set(0.5,0.5);
//				console.log("fgfg");
//			}
//        }
		else
		{
			this.result = this.add.sprite(this.world.width*0.7, this.world.height*0.3, 'wrong');
			this.result.anchor.set(0.5,0.5);
			console.log("fgfg");
		}
        return false;
	}
};