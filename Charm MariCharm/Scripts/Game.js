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
	this.green = null;
	this.greenGem= null;
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
	this.timer = 50; //50
	this.angle = 360;
	this.customerArray = [2, 1, 3, 0]; 
	this.totalCustomers = 0;
	
	///////////////////////
	this.result = null;
	this.TestHuman = null;
	this._customer = null;
	this.randomBubble = null;
	this.timerRun = false;
	this.timeGo = null;
	this.totalGems = 0;
	this.timeCountDown = null;
	this.GreenGemsNum = 0;
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
		this.tableImage = this.add.sprite(this.world.width*0.5, this.world.height*0.88, 'gemTable1');
        this.tableImage.anchor.set(0.5,0.5);
		
		// gem 
		this.orangeGem = this.add.button(this.world.width*0.365, this.world.height*0.85, 'orange', this.orangeclick, this, 1, 0, 2);
		this.orangeGem.anchor.setTo(0.5,0.5);
		
       	this.red = this.add.button(this.world.width*0.505, this.world.height*0.85, 'red', this.redclick, this, 1, 0, 2); 
		this.red.anchor.setTo(0.5,0.5);
			
		this.green = this.add.button(this.world.width*0.645, this.world.height*0.85, 'green', this.greenclick, this, 1, 0, 2);
		this.green.anchor.setTo(0.5,0.5);
		
		//clock
		this.clockSkin = this.add.sprite(this.world.width*0.175, this.world.height*0.5, 'clockskin');
        this.clockSkin.anchor.set(0.5,0.5);
		this.clockSkin.scale.setTo(0.8,0.8);
		
		this.clockImage = this.add.sprite(this.world.width*0.175, this.world.height*0.5, 'clock');
		this.clockImage.frame = 0;
        this.clockImage.anchor.set(0.5,0.5);
		
		//gem Table cover
		this.tableCoverImage = this.add.sprite(this.world.width*0.5, this.world.height*0.88, 'TableCover3');
        this.tableCoverImage.anchor.set(0.5,0.5);
		
		//Money
		this.moneyImage = this.add.sprite(this.world.width*0.825, this.world.height*0.5, 'moneyImage');
		this.moneyImage.frame = 0;
		this.moneyImage.anchor.set(0.5,0.5);
		
		//timerText
//        this.moneyText = this.add.text(this.world.centerX, this.world.centerY, ' ', { font: "40px Arial", fill: "#000000", align: "center" });
//    	this.moneyText.anchor.setTo(0.5, 0.5);
    }, 
       
    create: function()
    {
		console.log("level1");
		this.timeCountDown = this.time.create(false);
		this.timeCountDown.loop(Phaser.Timer.SECOND, this.updateCounter, this);
		this.timeCountDown.start();
		
		this.buttonManager = new ButtonManager(this);
		
        console.log("customer array: "+this.customerArray);
		
		//Rotate clock 
		this.clockImage = this.add.tween(this.clockImage).to( { angle: 360 }, 50000, Phaser.Easing.Linear.None, true);  //50
		
		// fade manager
		theGame.FadeScreen = new FadeManager(this);
        theGame.FadeScreen.create();	
		
		// red blinking image 
		this.blinkingImage = this.add.sprite(this.world.width*0.5, this.world.height*0.5, 'blinking');
		this.blinkingImage.alpha = 0.2;
		this.blinkingImage.anchor.set(0.5,0.5);
		this.blinkingImage.frame = 1;
        
//        this.clockImage = this.add.sprite(this.world.width*0.175, this.world.height*0.5, 'clock');
//        this.clockImage.anchor.set(0.5,0.5);
//		this.clockImage.scale.setTo(0.8,0.8);
//        this.clockImage.frame = 1;
        
         //spawn the first customer
		this.spawnCustomer();
    },

	update: function()
    { 
		console.log(this.GreenGemsNum);
		
		this.clockImage.angle += 1;
		
		this.timeDown();
		this.destroyCover();
        this.TestTime();
		
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
		
		// move customer
		this._customer.moveCustomer();
		
		//Spawn customer
		if (this._customer.spawnCus == true)
		{
			this.spawnCustomer();
			this._customer.spawnCus =false;
		}	

		//come out next button go to level 2
		if (this.CusNum >= 4 && this._customer.TestHuman.done == true) // next level  customer num = 5
		{
			this.buttonManager.createScoreButton(this.world.width*0.9, this.world.height*0.15); //createNextButton	
			this.time.events.stop();
			this.clockImage.stop();
//            this.clockImage = null;
		}
		
		if (this.buttonManager.nextLevelClick == true)
		{
			this.timeCountDown.stop();
			this.buttonManager.nextLevelClick = false;
			theGame.TwoGemsGreen = this.GreenGemsNum;
		}
		
		theGame.money1 = this.money;
		theGame.TotalGems1 = this.totalGems;
		
		// call button
		theGame.FadeScreen.update(this.buttonManager.gametype);	
		
		//remind play count down 6S 
		if (this.timer >= 6) // red image
		{
			this.blinkingImage.animations.add('red', [0,1]);
			this.blinkingImage.play('red', 2 , true);
		}
		else if (this.timer <= 5)
		{
			this.music = this.add.audio('closing');
			this.music.play();
		}
        		
		// print out game over image when timer over
		if (this.timer <= 0 )
		{
			this.gameOverImage = this.add.sprite(this.world.width*0.5, this.world.height*0.5, 'gameover');
			this.gameOverImage.anchor.set(0.5,0.5);
            this.music.stop();
			this.timeCountDown.stop();
		}
    }, 

	spawnCustomer:function()
    {
    	if(this.totalCustomers < 4)
    	{
    		this._customer = new CustomerManager(this);
			this._customer.create(this.customerArray[this.totalCustomers], 0, 325);
	        this.totalCustomers++;
    	}
    },
    
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
		this.timeGo.stop();
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
	
	redclick: function() //Chinese customer / red gem is correct
	{
		if (this.red.events.onInputDown) 
		{
			if (this._customer.canClick == true)
			{
				if(this.customerArray[0] == 2 && this._customer.randomBubble == 2) // CUSTOMER ARRAY NUMBER AND SPRITE NUMBER AND BUBBLE NUMBER
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
					theGame.ShowGemsRed = true;
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

	orangeclick: function() //Indian customer / orange gem is correct
	{
		if (this.orangeGem.events.onInputDown)
		{
			if (this._customer.canClick == true)
			{
				if(this.customerArray[1] == 1 && this._customer.randomBubble == 1 )
				{
					this._customer.TestHuman.animations.play('happy',10, true);
					this.money += 10;
					this.timeRun = true;
					this.ShowGems = true;
					this._customer.destroyBubble();
					this.music = this.add.audio('correct');
					this.music.play();
					this.totalGems +=1;
					theGame.ShowGemsOrange = true;
                    this._customer.Correct = true;
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
		if (this.green.events.onInputDown)
		{
			if (this._customer.canClick == true)
			{
				if(this.customerArray[3] == 0 && this._customer.randomBubble == 0 || this.customerArray[2] == 3 && this._customer.randomBubble == 3) //western customer array is 3
				{
					this._customer.TestHuman.animations.play('happy',10, true);
					this.money += 10;
					this.timeRun = true;
					this.ShowGems = true;
					this._customer.destroyBubble();
					this.music = this.add.audio('correct');
					this.music.play();
					this.totalGems +=1;
					theGame.ShowGemsGreen = true;
					theGame.ShowGemsGreen2 = true;
					this.GreenGemsNum += 1;
                    this._customer.Correct = true;
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
	
	updateCounter: function() 
    {
		this.timer--;
//		this.moneyText.setText('MONEY: ' + this.money); // print timer number
    },
};