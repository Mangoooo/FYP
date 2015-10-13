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
	
	this.clockImage = null;
	this.clockSkin = null;
	this.angle = 360;
	
	this.bubble = null;
	this.bubbleCreate = false;
	
    this.counter = 10;
    this.text = 0;
    this.selectGemValue = null;

	this.sprite = null;
	this.sprite2 = null;

	this.setToKill = null;
	this.countDown = 10;
	
	this.randomCus = null;
	this.customerArray = [false, false, false, false];
	this.totalCustomers = 0;
		
	this.money = 0;
	this.TestHuman = null;
	this.rnd = null;
	this._customer = null;
	this.result = null;
	
	this.timeRun = false;
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
		
		//clock
		this.clockSkin = this.add.sprite(this.world.width*0.175, this.world.height*0.5, 'clockskin');
        this.clockSkin.anchor.set(0.5,0.5);
		this.clockSkin.scale.setTo(0.8,0.8);
		
		this.clockImage = this.add.sprite(this.world.width*0.175, this.world.height*0.5, 'clock');
        this.clockImage.anchor.set(0.5,0.5);
		this.clockImage.scale.setTo(0.8,0.8);
    }, 
       
    create: function()
    {
		console.log("level2");
	
        this.time.events.loop(Phaser.Timer.SECOND, this.updateCounter, this); 
		this.buttonManager = new ButtonManager(this);
		
		
		this._customer = new CustomerManager(this);
		this.randomCus = this.game.rnd.integerInRange(0, 3);
		this._customer.create(this.randomCus,0,300);
		
		this.moneyImage = this.add.sprite(this.world.width*0.93, this.world.height*0.85, 'moneyImage');
		this.moneyImage.frame = 0;
		this.moneyImage.anchor.set(0.5,0.5);
		
		this.clockImage = this.add.tween(this.clockImage).to( { angle: 360 }, 20000, Phaser.Easing.Linear.None, true);  //10	
       
        //Fade in and out
        theGame.FadeScreen = new FadeManager(this);
        theGame.FadeScreen.create();
		
        
    },
  
    update: function()
    { 
		this.timeDown();
//		this._customer = new Character();
//		Character.create(0,0,0);
		//this.randomCusFunc(this.randomCus);
		this._customer.moveCustomer();
		
		if (this._customer.spawnCus == true)
		{
			this.randomCus = this.game.rnd.integerInRange(0, 3);
			this._customer.create(this.randomCus,0,300);
			this._customer.spawnCus = false;
		}
		
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
				this._customer.TestHuman.animations.play('angry',10, true);
				this.timeRun = true;
				if(this._customer.bubble != null)
				{
					this._customer.bubble.destroy();
//					this._customer.TestHuman.done =true; 
				}
			}else
			{
				console.log("wrong");
			}
		}
	},
	
	timeDown: function()
	{
		if(this.timeRun == true)
			this.game.time.events.add(Phaser.Timer.SECOND, this.moveToRight, this);
	},
	
	moveToRight: function()
	{
		this._customer.TestHuman.done =true;
		this.timeRun = false;
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
				this._customer.TestHuman.animations.play('angry',10, true);
				if(this._customer.bubble != null)
				{
					this._customer.bubble.destroy();
					this._customer.TestHuman.done =true;
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
				this._customer.TestHuman.animations.play('angry',10, true);
				if(this._customer.bubble != null)
				{
					this._customer.bubble.destroy();
					this._customer.TestHuman.done =true;
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
//				this.result = this.add.sprite(this.world.width*0.7, this.world.height*0.3, 'correct');
//				this.result.anchor.set(0.5,0.5);
				this._customer.TestHuman.animations.play('angry',10, true);
				if(this._customer.bubble != null)
				{
					this._customer.bubble.destroy();
					this._customer.TestHuman.done =true;
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
};