theGame.Game = function(game)
{
	this.game;
	this.add;
    this.gameBackground = null;
	this.buttonManager = null;
    this.music = null;
    this.uiManager = null; 
	
	////////Gems//////////
	this.red = null; 
	this.blue = null;
	this.green = null;
	this.purpleGem = null;
	
	////////Images//////////
	this.clockImage = null;
	this.clockSkin = null;
	this.bubble = null;
	this.tableImage = null;
	this.moneyImage = null;
	this.blinkingImage = null;
	this.gameOverImage = null;
	
	////////Text//////////
	this.timerText = null;
	this.CusNumText = null;
	this.moneyText = null;
	
	////////Value//////////
	this.money = 0;
	this.CusNum = 0;
	this.counter = 10;
	this.timer = 50;
	this.angle = 360;
	this.customerArray = [0, 1, 2];
	this.totalCustomers = 0;
	
	///////////////////////
	this.result = null;
	this.TestHuman = null;
	this._customer = null;
	this.randomBubble = null;

	this.timerRun = false;
	

};

theGame.Game.prototype = 
{
	
//////////////////////////////////////Preload////////////////////////////////////////
    preload: function()
    {
        //Screen Background
        this.gameBackground = this.add.sprite(this.world.width*0.5, this.world.height*0.5, 'GameBackGround');
        this.gameBackground.anchor.set(0.5,0.5);
			
		//gemTable
		this.tableImage = this.add.sprite(this.world.width*0.5, this.world.height*0.83, 'gemTable1');
        this.tableImage.anchor.set(0.5,0.5);
		
		// gem 
       	this.red = this.add.button(this.world.width*0.29, this.world.height*0.79, 'red', this.redclick, this, 1, 0, 2);
		this.red.anchor.setTo(0.5,0.5);
		
		this.green = this.add.button(this.world.width*0.715, this.world.height*0.79, 'green', this.greenclick, this, 1, 0, 2);
		this.green.anchor.setTo(0.5,0.5);
		
		this.blue = this.add.button(this.world.width*0.42, this.world.height*0.89, 'blue', this.blueclick, this, 1, 0, 2);
		this.blue.anchor.setTo(0.5,0.5);
		
		this.purpleGem = this.add.button(this.world.width*0.58, this.world.height*0.89, 'purple', this.purpleclick, this, 1, 0, 2);
		this.purpleGem.anchor.setTo(0.5,0.5);
		
		
		//clock
		this.clockSkin = this.add.sprite(this.world.width*0.175, this.world.height*0.5, 'clockskin');
        this.clockSkin.anchor.set(0.5,0.5);
		this.clockSkin.scale.setTo(0.8,0.8);
		
		this.clockImage = this.add.sprite(this.world.width*0.175, this.world.height*0.5, 'clock');
        this.clockImage.anchor.set(0.5,0.5);
		this.clockImage.scale.setTo(0.8,0.8);
		
		//timerText
//        this.timerText = this.add.text(this.world.centerX, this.world.centerY, ' ', { font: "40px Arial", fill: "#000000", align: "center" });
//    	this.timerText.anchor.setTo(0.5, 0.5);
    }, 
       
    create: function()
    {
		console.log("level1");
        this.time.events.loop(Phaser.Timer.SECOND, this.updateCounter, this); // timer
		
		this.buttonManager = new ButtonManager(this);
		
		//////////////random/////////////
		//shuffle customerArray every start of this level
        //console.log(this.customerArray);
//        this.randomCustomer(this.customerArray);
        console.log("customer array"+this.customerArray);
		
        //spawn the first customer
		this.spawnCustomer();
		
		//Rotate clock 
		this.clockImage = this.add.tween(this.clockImage).to( { angle: 360 }, 50000, Phaser.Easing.Linear.None, true);  //50
		
		//Money
		this.moneyImage = this.add.sprite(this.world.width*0.825, this.world.height*0.5, 'moneyImage');
		this.moneyImage.frame = 0;
		this.moneyImage.anchor.set(0.5,0.5);
		
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
		
		// move customer
		this._customer.moveCustomer();
		
		//Spawn customer
		if (this._customer.spawnCus == true)
		{
			this.spawnCustomer();
			this._customer.spawnCus =false;
		}	
		
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
		
		// print out game over image when timer over
		if (this.timer <= 0 )
		{
			this.gameOverImage = this.add.sprite(this.world.width*0.5, this.world.height*0.5, 'gameover');
			this.gameOverImage.anchor.set(0.5,0.5);
		}

		//come out next button go to level 2
		if (this.CusNum >= 3 && this._customer.TestHuman.done == true) // next level
		{
			this.buttonManager.createScoreButton(this.world.width*0.5, this.world.height*0.5);	
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
    	if(this.totalCustomers<3)
    	{
    		this._customer = new CustomerManager(this);
			this._customer.create(this.customerArray[this.totalCustomers], 0, 325);
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
		this._customer.TestHuman.done =true;
		this.timeRun = false;
	},
	

	blueclick: function() //Western customer / blue gem is correct
	{
		if (this.blue.events.onInputDown)
		{
			//this.customerArray[0] == 0 && bubble ||(this.customerArray[0] == 0 && bubble2)
			if(this.customerArray[0] == 0 && this._customer.randomBubble == 0 )
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

	redclick: function() //Indian customer / red gem is correct
	{
		if (this.red.events.onInputDown) 
		{
			if(this.customerArray[1] == 1 && this._customer.randomBubble == 1)
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
	
	greenclick: function() //chinese customer / green gem is correct
	{
		if (this.green.events.onInputDown)
		{
			if(this.customerArray[2] == 2 && this._customer.randomBubble == 2)
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
			
	purpleclick: function()
	{
		if (this.purpleGem.events.onInputDown)
		{
			this.timeRun = true;
			this._customer.Angry = true;
			this.ShowGems = false;
			this._customer.destroyBubble();
			this._customer.TestHuman.animations.play('angry',10, true);
			this.CusNum += 1;
		}	
	},
	
	updateCounter: function() 
    {
		this.timer--;
//		this.timerText.setText('Timer: ' + this.timer); // print timer number

    },
};