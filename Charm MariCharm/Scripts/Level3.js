theGame.Level3 = function(game)
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
	this.orangeGem = null;
    this.yellowGem = null;
    this.blueGem = null;
    this.whiteGem = null;
	
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
	this.timer = 60;
	this.angle = 360;
    this.customerArray = [16,10,11,17,13,12,15,14]; 
	this.totalCustomers = 0;
	
	///////////////////////
	this.result = null;
	this.TestHuman = null;
	this._customer = null;
	this.randomBubble = null;

	this.timerRun = false;
    this.timeGo = null;
	this.totalGems = 0;
	
	this.thirdTimer = 60; //50
	this.timeCountDown = null;
	
	this.RedGemsNum = 0;
	this.WhiteGemsNum = 0;
};

theGame.Level3.prototype = 
{
	
//////////////////////////////////////Preload////////////////////////////////////////
    preload: function()
    {
        //Screen Background
        this.gameBackground = this.add.sprite(this.world.width*0.5, this.world.height*0.5, 'GameBackGround');
        this.gameBackground.anchor.set(0.5,0.5);
			
		//gemTable
		this.tableImage = this.add.sprite(this.world.width*0.5, this.world.height*0.88, 'gemTable3');
        this.tableImage.anchor.set(0.5,0.5);
		
		// gem 
		this.orangeGem = this.add.button(this.world.width*0.155, this.world.height*0.85, 'orange', this.greenclick, this, 1, 0, 2); //orangeclick
		this.orangeGem.anchor.setTo(0.5,0.5);
		
       	this.redGem = this.add.button(this.world.width*0.295, this.world.height*0.85, 'red', this.redclick, this, 1, 0, 2); 
		this.redGem.anchor.setTo(0.5,0.5);
			
		this.greenGem = this.add.button(this.world.width*0.715, this.world.height*0.85, 'green', this.orangeclick, this, 1, 0, 2);
		this.greenGem.anchor.setTo(0.5,0.5);
        
        this.yellowGem = this.add.button(this.world.width*0.855, this.world.height*0.85, 'yellow', this.yellowclick, this, 1, 0, 2);
		this.yellowGem.anchor.setTo(0.5,0.5);
		
       	this.blueGem = this.add.button(this.world.width*0.435, this.world.height*0.85, 'blue', this.blueclick, this, 1, 0, 2); 
		this.blueGem.anchor.setTo(0.5,0.5);
			
		this.whiteGem = this.add.button(this.world.width*0.575, this.world.height*0.85, 'white', this.whiteclick, this, 1, 0, 2);
		this.whiteGem.anchor.setTo(0.5,0.5);
		
		//clock
		this.clockSkin = this.add.sprite(this.world.width*0.175, this.world.height*0.5, 'clockskin');
        this.clockSkin.anchor.set(0.5,0.5);
		this.clockSkin.scale.setTo(0.8,0.8);
		
		this.clockImage = this.add.sprite(this.world.width*0.175, this.world.height*0.5, 'clock');
        this.clockImage.anchor.set(0.5,0.5);
		this.clockImage.scale.setTo(0.8,0.8);
		
		//gem Table cover
		this.tableCoverImage = this.add.sprite(this.world.width*0.5, this.world.height*0.88, 'TableCover6');
        this.tableCoverImage.anchor.set(0.5,0.5);
		
        //Money
		this.moneyImage = this.add.sprite(this.world.width*0.825, this.world.height*0.5, 'moneyImage');
		this.moneyImage.frame = 0;
		this.moneyImage.anchor.set(0.5,0.5)
    }, 
       
    create: function()
    {
		console.log("level3");
//        this.time.events.loop(Phaser.Timer.SECOND, this.updateCounter, this); // timer
		
		this.timeCountDown = this.time.create(false);
		this.timeCountDown.loop(Phaser.Timer.SECOND, this.updateCounter, this);
		this.timeCountDown.start();
		
		this.buttonManager = new ButtonManager(this);
		
        console.log("customer array: "+this.customerArray);
		
        //spawn the first customer
		this.spawnCustomer();
		
		//Rotate clock 
		this.clockImage = this.add.tween(this.clockImage).to( { angle: 360 }, 60000, Phaser.Easing.Linear.None, true);  //50
		
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
        this.TestTime();
		 console.log("customer array: "+this.customerArray);
		
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
        else if(this.money >= 70 && this.money <= 79)
		{
			this.moneyImage.frame = 7;
		}
        else if(this.money >= 80 && this.money <= 89)
		{
			this.moneyImage.frame = 8;
		}
		
		// move customer
		this._customer.moveCustomer();
		
		if (this.buttonManager.nextLevelClick == true)
		{
			this.timeCountDown.stop();
			this.buttonManager.nextLevelClick = false;
			theGame.TwoGemsRed = this.RedGemsNum;
			theGame.TwoGemsWhite = this.WhiteGemsNum;
		}
		
		theGame.money3 = this.money;
		theGame.TotalGems3 = this.totalGems;
		
		//Spawn customer
		if (this._customer.spawnCus == true)
		{
			this.spawnCustomer();
			this._customer.spawnCus =false;
		}	
		
		//remind play count down 6S 
		if (this.thirdTimer >= 6) // red image
		{
			this.blinkingImage.animations.add('red', [0,1]);
			this.blinkingImage.play('red', 2 , true);
		}

		else if (this.thirdTimer <= 5)
		{
			this.music = this.add.audio('closing');
			this.music.play();
		}
		
		// print out game over image when timer over
		if (this.thirdTimer <= 0 )
		{
			this.gameOverImage = this.add.sprite(this.world.width*0.5, this.world.height*0.5, 'gameover');
			this.gameOverImage.anchor.set(0.5,0.5);
			this.music.stop();
			this.timeCountDown.stop();
		}

		//come out next button go to level 2
		if (this.CusNum >= 8 && this._customer.TestHuman.done == true) // next level 9
		{
			this.buttonManager.Level3ScoreButton(this.world.width*0.9, this.world.height*0.15);	
			this.time.events.stop();
			this.clockImage.stop();	
		}
		
		// call button
		theGame.FadeScreen.update(this.buttonManager.gametype);	

    }, 
	
	spawnCustomer:function()
    {
    	if(this.totalCustomers < 8)
    	{
    		this._customer = new CustomerManager(this);
			this._customer.create(this.customerArray[this.totalCustomers], 0, 325);
	        this.totalCustomers++;
    	}
    },

//	TestTime:function()
//	{
//		if(this.result !=null)
//		{
//			this.result.destroy();
//		}
//	},
    
    TestTime:function()
	{
		if( this._customer.CheckBubble !=null)
		{
			this._customer.CheckBubble.destroy();
		}
	},
	
	timeDown: function()
	{
		if(this.timeRun == true)
		{
			this.timeGo = this.time.create(false);
			this.timeGo.add(Phaser.Timer.SECOND, this.moveToRight, this);
			this.timeGo.start();
		}
	},
	
	moveToRight: function()
	{
        this.timeGo.start();
		this._customer.TestHuman.done =true;
		this.timeRun = false;
	},
	
	destroyCover: function()
	{
		if (this._customer.TestHuman.IsMiddle == true)
		{
			this.tableCoverImage.destroy();	
		}
	},

	orangeclick: function() //Indian customer / orange gem is correct
	{
		if (this.orangeGem.events.onInputDown)
		{
			if (this._customer.canClick == true)
			{
				if(this.customerArray[0] == 16 && this._customer.randomBubble == 16 )
				{
					this._customer.TestHuman.animations.play('happy',10, true);
                    this._customer.Correct = true;
					this.money += 10;
					this.timeRun = true;
					this.ShowGems = true;
					this._customer.destroyBubble();
					this.music = this.add.audio('correct');
					this.music.play();
					this.totalGems +=1;
					theGame.Lvl3ShowGemsOrange = true;
				}
				else 
				{
					this.timeRun = true;
					this._customer.Angry = true;
					this.ShowGems = false;
					this._customer.destroyBubble();
					this._customer.TestHuman.animations.play('angry',10, true);
					this.music = this.add.audio('wrong');
					this.music.play();
				}
				this.CusNum += 1;
			}
			this._customer.canClick = false;
		}
	},
    
    yellowclick: function() 
	{
		if (this.yellowGem.events.onInputDown)
		{
			if (this._customer.canClick == true)
			{
				if(this.customerArray[1] == 10 && this._customer.randomBubble == 10 )
				{
					this._customer.TestHuman.animations.play('happy',10, true);
                    this._customer.Correct = true;
					this.money += 10;
					this.timeRun = true;
					this.ShowGems = true;
					this._customer.destroyBubble();
					this.music = this.add.audio('correct');
					this.music.play();
					this.totalGems +=1;
					theGame.Lvl3ShowGemsYellow = true;
				}
				else 
				{
					this.timeRun = true;
					this._customer.Angry = true;
					this.ShowGems = false;
					this._customer.destroyBubble();
					this._customer.TestHuman.animations.play('angry',10, true);
					this.music = this.add.audio('wrong');
					this.music.play();
				}
				this.CusNum += 1;
			}
			this._customer.canClick = false;
		}
	},
    
    blueclick: function() //Indian customer / orange gem is correct
	{
		if (this.blueGem.events.onInputDown)
		{
			if (this._customer.canClick == true)
			{
				if(this.customerArray[2] == 11 && this._customer.randomBubble == 11 )
				{
					this._customer.TestHuman.animations.play('happy',10, true);
                    this._customer.Correct = true;
					this.money += 10;
					this.timeRun = true;
					this.ShowGems = true;
					this._customer.destroyBubble();
					this.music = this.add.audio('correct');
					this.music.play();
					this.totalGems +=1;
					theGame.Lvl3ShowGemsBlue = true;
				}
				else 
				{
					this.timeRun = true;
					this._customer.Angry = true;
					this.ShowGems = false;
					this._customer.destroyBubble();
					this._customer.TestHuman.animations.play('angry',10, true);
					this.music = this.add.audio('wrong');
					this.music.play();
				}
				this.CusNum += 1;
			}
			this._customer.canClick = false;
		}
	},

	greenclick: function() //Western customer / green gem is correct
	{
		if (this.greenGem.events.onInputDown)
		{
			if (this._customer.canClick == true)
			{
				if(this.customerArray[3] == 17 && this._customer.randomBubble == 17 ) //western customer array is 3
				{
					this._customer.TestHuman.animations.play('happy',10, true);
                    this._customer.Correct = true;
					this.money += 10;
					this.timeRun = true;
					this.ShowGems = true;
					this._customer.destroyBubble();
					this.music = this.add.audio('correct');
					this.music.play();
					this.totalGems +=1;
					theGame.Lvl3ShowGemsGreen = true;
				}
				else 
				{
					this.timeRun = true;
					this._customer.Angry = true;
					this.ShowGems = false;
					this._customer.destroyBubble();
					this._customer.TestHuman.animations.play('angry',10, true);
					this.music = this.add.audio('wrong');
					this.music.play();
				}
				this.CusNum += 1;
			}
			this._customer.canClick = false;
		}	
	},
    
    redclick: function() //Chinese customer / red gem is correct
	{
		if (this.redGem.events.onInputDown) 
		{
			if (this._customer.canClick == true)
			{
				if(this.customerArray[4] == 13 && this._customer.randomBubble == 13 || this.customerArray[6] == 15 && this._customer.randomBubble == 15)
				{
					this._customer.TestHuman.animations.play('happy',6, true);
                    this._customer.Correct = true;
					this.money += 10;
					this.timeRun = true; 
					this.ShowGems = true;
					this._customer.destroyBubble();
					this.music = this.add.audio('correct');
					this.music.play();
					this.totalGems +=1;
					theGame.Lvl3ShowGemsRed = true;
					theGame.Lvl3ShowGemsRed2 = true;
					this.RedGemsNum += 1;
				}else
				{
					this.timeRun = true;
					this._customer.Angry = true;
					this.ShowGems = false;
					this._customer.destroyBubble();
					this._customer.TestHuman.animations.play('angry',10, true);
					this.music = this.add.audio('wrong');
					this.music.play();
				}
				this.CusNum += 1;
			}
			this._customer.canClick = false;
		}
	},
	
    whiteclick: function() //Chinese customer / red gem is correct
	{
		if (this.whiteGem.events.onInputDown) 
		{
			if (this._customer.canClick == true)
			{
				if(this.customerArray[5] == 12 && this._customer.randomBubble == 12 || this.customerArray[7] == 14 && this._customer.randomBubble == 14)
				{
					this._customer.TestHuman.animations.play('happy',6, true);
                    this._customer.Correct = true;
					this.money += 10;
					this.timeRun = true; 
					this.ShowGems = true;
					this._customer.destroyBubble();
					this.music = this.add.audio('correct');
					this.music.play();
					this.totalGems +=1;
					theGame.Lvl3ShowGemsWhite = true;
					theGame.Lvl3ShowGemsWhite2 = true;
					this.WhiteGemsNum += 1;
				}else
				{
					this.timeRun = true;
					this._customer.Angry = true;
					this.ShowGems = false;
					this._customer.destroyBubble();
					this._customer.TestHuman.animations.play('angry',10, true);
					this.music = this.add.audio('wrong');
					this.music.play();
				}
				this.CusNum += 1;
			}
			this._customer.canClick = false;
		}
	},
    
	updateCounter: function() 
    {
		this.timer--;
		this.thirdTimer--;
//		this.timerText.setText('Timer: ' + this.timer); // print timer number
    },
};