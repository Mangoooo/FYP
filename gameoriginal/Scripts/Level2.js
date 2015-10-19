theGame.Level2 = function(game)
{
	this.game;
	this.add;
    this.gameBackground = null;
	this.buttonManager = null;
    this.music = null;
    this.uiManager = null; 
	
	////////Gems//////////
	this.redGem = null; 
	this.greenGem= null;
	this.yellowGem = null;
	this.orangeGem = null;
	
	////////Images//////////
	this.clockImage = null;
	this.clockSkin = null;
	this.bubble = null;
	this.tableImage = null;
	this.moneyImage = null;
	this.blinkingImage = null;
	this.gameOverImage = null;
	this.tableCoverImage = null;
	
	////////Text//////////
	this.timerText = null;
	this.CusNumText = null;
	this.moneyText = null;
	
	////////Value//////////
	this.money = 0;
	this.CusNum = 0;
	this.counter = 10;
	this.timer = 40;
	this.angle = 360;
//	this.customerArray = [4, 8, 9, 7, 5, 6]; 
	this.customerArray = [4,8,9,5,7,6]; 
	this.totalCustomers = 0;
	
	///////////////////////
	this.result = null;
	this.TestHuman = null;
	this._customer = null;
	this.randomBubble = null;
	this.timerRun = false;
};

theGame.Level2.prototype = 
{
	
//////////////////////////////////////Preload////////////////////////////////////////
    preload: function()
    {
        //Screen Background
        this.gameBackground = this.add.sprite(this.world.width*0.5, this.world.height*0.5, 'GameBackGround');
        this.gameBackground.anchor.set(0.5,0.5);
			
		//gemTable
		this.tableImage = this.add.sprite(this.world.width*0.5, this.world.height*0.88, 'gemTable2');
        this.tableImage.anchor.set(0.5,0.5);
		
		//GEM
		this.redGem = this.add.button(this.world.width*0.29, this.world.height*0.85, 'red', this.redclick, this, 1, 0, 2);
		this.redGem.anchor.setTo(0.5,0.5);
		
		this.greenGem = this.add.button(this.world.width*0.72, this.world.height*0.85, 'green', this.greenclick, this, 1, 0, 2);
		this.greenGem.anchor.setTo(0.5,0.5);
		
		this.yellowGem = this.add.button(this.world.width*0.574, this.world.height*0.85, 'yellow', this.yellowclick, this, 1, 0, 2);
		this.yellowGem.anchor.setTo(0.5,0.5);
		
		this.orangeGem = this.add.button(this.world.width*0.435, this.world.height*0.85, 'orange', this.orangeclick, this, 1, 0, 2);
		this.orangeGem.anchor.setTo(0.5,0.5);
		
		//clock
		this.clockSkin = this.add.sprite(this.world.width*0.175, this.world.height*0.5, 'clockskin');
        this.clockSkin.anchor.set(0.5,0.5);
		this.clockSkin.scale.setTo(0.8,0.8);
		
		this.clockImage = this.add.sprite(this.world.width*0.175, this.world.height*0.5, 'clock');
        this.clockImage.anchor.set(0.5,0.5);
		this.clockImage.scale.setTo(0.8,0.8);
		
		//gem Table cover
		this.tableCoverImage = this.add.sprite(this.world.width*0.5, this.world.height*0.88, 'TableCover4');
        this.tableCoverImage.anchor.set(0.5,0.5);
		
		//Money
		this.moneyImage = this.add.sprite(this.world.width*0.825, this.world.height*0.5, 'moneyImage');
		this.moneyImage.frame = 0;
		this.moneyImage.anchor.set(0.5,0.5)
    }, 
       
    create: function()
    {
		console.log("level2");
        this.time.events.loop(Phaser.Timer.SECOND, this.updateCounter, this); // timer
		
		this.buttonManager = new ButtonManager(this);
		
        console.log("customer array: "+this.customerArray);
		
        //spawn the first customer
		this.spawnCustomer();
		
		//Rotate clock 
		this.clockImage = this.add.tween(this.clockImage).to( { angle: 360 }, 40000, Phaser.Easing.Linear.None, true);  //50
		
		// fade manager
		theGame.FadeScreen = new FadeManager(this);
        theGame.FadeScreen.create();	
		
		// red blinking image 
		this.blinkingImage = this.add.sprite(this.world.width*0.5, this.world.height*0.5, 'blinking');
		this.blinkingImage.alpha = 0.2;
		this.blinkingImage.anchor.set(0.5,0.5);
		this.blinkingImage.frame = 1;	
    },

	update: function()
    { 
		this.clockImage.angle += 1;
		
		this.timeDown();
		this.destroyCover();
		
//		console.log(this._customer.TestHuman.x);
		
		//print money box / how many you have
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
		else if(this.money >= 40 && this.money <= 49)
		{
			this.moneyImage.frame = 4;
		}
		else if(this.money >= 50 && this.money <= 59)
		{
			this.moneyImage.frame = 5;
		}
		else if(this.money >= 60 && this.money <= 69)
		{
			this.moneyImage.frame = 6;
		}

		// move customer
		this._customer.moveCustomer();
		
		//Spawn customer
		if (this._customer.spawnCus == true)
		{
			this.spawnCustomer();
			this._customer.spawnCus =false;
		}	
		
		// print out game over image when timer over
		if (this.timer <= 0 )
		{
			this.gameOverImage = this.add.sprite(this.world.width*0.5, this.world.height*0.5, 'gameover');
			this.gameOverImage.anchor.set(0.5,0.5);
		}

		//come out next button go to level 2
		if (this.CusNum >= 9 && this._customer.TestHuman.done == true) // next level 5
		{
			this.buttonManager.Level2ScoreButton(this.world.width*0.5, this.world.height*0.5);	
			this.time.events.stop();
			this.clockImage.stop();	
		}
		
		// calculate total money
		if (this.buttonManager.nextLevelClick == true)
		{	
			theGame.money1 = this.money;
		}
		
		// call button
		theGame.FadeScreen.update(this.buttonManager.gametype);	
		
		//remind play count down 6S 
		if (this.timer >= 6) // red image
		{
			this.blinkingImage.animations.add('red', [0,1]);
			this.blinkingImage.play('red', 2 , true);
		}
    }, 
	
	spawnCustomer:function()
    {
    	if(this.totalCustomers < 6)
    	{
    		this._customer = new CustomerManager(this);
			console.log(this.customerArray);
			this._customer.create(this.customerArray[this.totalCustomers], 0, 325);
			console.log(this.totalCustomers);
	        this.totalCustomers++;
    	}
    },

	TestTime:function()
	{
		if(this.result !=null)
		{
			this.result.destroy();
		}
	},
	
	timeDown: function()
	{
		if(this.timeRun == true)
		{
			this.game.time.events.add(Phaser.Timer.SECOND, this.moveToRight, this);
		}
	},
	
	moveToRight: function()
	{
		this._customer.TestHuman.done = true;
		this.timeRun = false;
	},
	
	destroyCover: function()
	{
		if (this._customer.TestHuman.IsMiddle == true)
		{
			this.tableCoverImage.destroy();	
		}
	},
	
	orangeclick: function() 
	{
		if (this.orangeGem.events.onInputDown) // orange indian 4
		{
			if(this.customerArray[0] == 4 && this._customer.randomBubble == 4 ) 
			{
				this._customer.TestHuman.animations.play('happy',10, true);
				this.money += 10;
				this.timeRun = true;
				this.ShowGems = true;
				this._customer.destroyBubble();
			}
			else 
			{
				this.timeRun = true;
				this._customer.Angry = true;
				this.ShowGems = false;
				this._customer.destroyBubble();
				this._customer.TestHuman.animations.play('angry',10, true);
			}
			this.CusNum += 1;
		}
	},
	
	yellowclick: function() //Western customer / yellow gem is correct
	{
		if (this.yellowGem.events.onInputDown) // || this.customerArray[2] 
		{
			if(this.customerArray[1] == 8 && this._customer.randomBubble == 8 || this.customerArray[4] == 7 && this._customer.randomBubble == 7) 
			{
				this._customer.TestHuman.animations.play('happy',10, true);
				this.money += 10;
				this.CusNum += 1;
				this.timeRun = true;
				this.ShowGems = true;
				this._customer.destroyBubble();
			}
			else 
			{
				this.timeRun = true;
				this._customer.Angry = true;
				this.ShowGems = false;
				this._customer.destroyBubble();
				this._customer.TestHuman.animations.play('angry',10, true);
			}
			this.CusNum += 1;
		}	
	},

	greenclick: function() //Western customer / green gem is correct
	{
		if (this.greenGem.events.onInputDown) //|| this.customerArray[2]
		{
			if(this.customerArray[2] == 9 && this._customer.randomBubble == 9 || this.customerArray[5] == 6 && this._customer.randomBubble == 6) //western customer array is 3
			{
				this._customer.TestHuman.animations.play('happy',10, true);
				this.money += 10;
				this.CusNum += 1;
				this.timeRun = true;
				this.ShowGems = true;
				this._customer.destroyBubble();
			}
			else 
			{
				this.timeRun = true;
				this._customer.Angry = true;
				this.ShowGems = false;
				this._customer.destroyBubble();
				this._customer.TestHuman.animations.play('angry',10, true);
			}
			this.CusNum += 1;
		}	
	},
	
	redclick: function() //Chinese customer / red gem is correct
	{
		if (this.redGem.events.onInputDown) 
		{
			if(this.customerArray[3] == 5 && this._customer.randomBubble == 5) // red indian customer
			{
				this._customer.TestHuman.animations.play('happy',6, true);
				this.money += 10;
				this.timeRun = true; 
				this.ShowGems = true;
				this._customer.destroyBubble();
			}else
			{
				this.timeRun = true;
				this._customer.Angry = true;
				this.ShowGems = false;
				this._customer.destroyBubble();
				this._customer.TestHuman.animations.play('angry',10, true);
			}
			this.CusNum += 1;
		}
	},
	
	updateCounter: function() 
    {
		this.timer--;
    },
};