theGame.Game = function(game)
{
	this.game;
	this.add;
    this.gameBackground = null;
	this.buttonManager = null;
    this.music = null;
    this.uiManager = null; 
	
	this.red = null; // gem
	this.blue = null;
	this.green = null;
	this.purpleGem = null;
	
	this.clockImage = null;
	this.clockSkin = null;
	this.angle = 360;
	
	this.bubble = null;
	this.bubbleCreate = false;
	this.tableImage = null;
	
	this.money = 0;
	this.moneyText = null;
	this.moneyImage = null;
	
	this.CusNum = 0;
	this.CusNumText = null;
	
	this.timer = 50;
	this.timerText = 0;
	this.blinkingImage = null;
	
	this.counter = 10;
    this.text = 0;
    this.selectGemValue = null;
	
	this.randomCus = null;
	this.customerArray = [0, 2, 3];
	this.totalCustomers = 0;
	
	this.TestHuman = null;
	
	this._customer = null;
	
	this.gameOverImage = null;
	this.ButtonBG = null;
	
    this.counter = 100;
	this.result = null;
	this.setToKill = null;
	this.countDown = 10;
	
	this.WesternCus = null;
	this.IndianCus = null;
	this.ChineseCus = null;
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
//		this.moneyText = this.add.text(600, 50, 'Money: 0', { font:"30px Arial", fill: "#000", align: "center"});
//		this.CusNumText = this.add.text(460, 40, ': 0', { font:"30px Arial", fill: "#000", align: "center"});
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

		this.clockImage = this.add.tween(this.clockImage).to( { angle: 360 }, 50000, Phaser.Easing.Linear.None, true);  //10
		
		//Money
		this.moneyImage = this.add.sprite(this.world.width*0.825, this.world.height*0.5, 'moneyImage');
		this.moneyImage.frame = 0;
		this.moneyImage.anchor.set(0.5,0.5);
		
		
		theGame.FadeScreen = new FadeManager(this);
        theGame.FadeScreen.create();	
		
		this.blinkingImage = this.add.sprite(this.world.width*0.5, this.world.height*0.5, 'blinking');
		this.blinkingImage.alpha = 0.2;
		this.blinkingImage.anchor.set(0.5,0.5);
		this.blinkingImage.frame = 1;	
    },
	
	 
	
	update: function()
    { 
		this.clockImage.angle += 1;
		
		this._customer.moveCustomer();
		
		if (this._customer.spawnCus == true)
		{
			this.spawnCustomer();
			this._customer.spawnCus =false;
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
		
		if (this.timer <= 0 )
		{
			this.gameOverImage = this.add.sprite(this.world.width*0.5, this.world.height*0.5, 'gameover');
			this.gameOverImage.anchor.set(0.5,0.5);
		}

		if (this.CusNum >= 3 ) // next level
		{
			this.buttonManager.createScoreButton(this.world.width*0.5, this.world.height*0.5);	
			this.time.events.stop();
			this.clockImage.stop();
			
		}
		if (this.buttonManager.nextLevelClick == true)
		{	
			theGame.money1 = this.money;
		}
		
		theGame.FadeScreen.update(this.buttonManager.gametype);	
		
		if (this.timer >= 6) // red image
		{
			this.blinkingImage.animations.add('red', [0,1]);
			this.blinkingImage.play('red', 2 , true);
		}
    }, 
	
//	randomCustomer: function(array)
//    {
//         for (var i = array.length - 1; i > 0; i--) 
//         {
//            var j = Math.floor(Math.random() * (i + 1));
//            var temp = array[i];
//            array[i] = array[j];
//            array[j] = temp;
//        }
//        return array;
//    },
	

	TestTime:function()
	{
		if(this.result !=null)
		{
			this.result.destroy();
		}
	},

	blueclick: function()
	{
		if (this.blue.events.onInputDown)
		{
			if(this.customerArray[0])
			{
				console.log("blue");
//				this.result = this.add.sprite(this.world.width*0.7, this.world.height*0.3, 'correct');
//				this.result.anchor.set(0.5,0.5);
//				this.WesternCus.animations.play('happy',10, true);
				this.money += 10;
				this.CusNum += 1;
				if(this._customer.bubble != null)
				{
					this._customer.bubble.destroy();
					this._customer.TestHuman.done =true; 
				}
			}
			else 
			{
				console.log("bluewrong");
			}
		}
//			if (this.blueCanclick == true)
//			{
//			}
	},

	
	redclick: function()
	{
		if (this.red.events.onInputDown)
		{
			if(this.customerArray[2])
			{
				console.log("red");
//				this.result = this.add.sprite(this.world.width*0.7, this.world.height*0.3, 'correct');
//				this.result.anchor.set(0.5,0.5);
//				this.IndianCus.animations.play('happy',6, true);
				this.money += 10;
				this.CusNum += 1;
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
	
	greenclick: function()
	{
		if (this.green.events.onInputDown)
		{
			if(this.customerArray[3])
			{
				console.log("green");
//				this.result = this.add.sprite(this.world.width*0.7, this.world.height*0.3, 'correct');
//				this.result.anchor.set(0.5,0.5);
//				this.ChineseCus.animations.play('happy',10, true);
				this.money += 10;
				this.CusNum += 1;
				if(this._customer.bubble != null)
				{
					this._customer.bubble.destroy();
					this._customer.TestHuman.done =true; 
				}
			}
			else 
			{
				console.log("greenwrong");
			}
		}	
	},
			
	purpleclick: function()
	{
		if (this.purpleGem.events.onInputDown)
		{
			console.log("wrong");
		}
	},
	
	updateCounter: function() 
    {
		this.timer--;
		this.timerText.setText('Timer: ' + this.timer); // print timer number

    },
};