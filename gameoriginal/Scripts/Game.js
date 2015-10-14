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
	
	this.redcustomer = null; 
	this.bluecustomer = null;
	this.greencustomer = null;
	this.purplecustomer = null;
	
    this.counter = 100;
	this.sprite = null;
	this.result = null;
	this.WaitToDisappear_bool = false;
	this.Wrong_Timer = null;
    this.WaitToDisappear_bool_Timer = null;
	this.setToKill = null;
	this.countDown = 10;
	
//	this.money = 0;
	this.moneyText = null;
	this.moneyImage = null;
	this.coinImage = null;
	this.moneyskin = null;
	
//	this.CusNum = 0;
	this.CusNumText = null;
	
	this.dude = null; // blue gem
	this.dude2 = null; // green gem
	this.dude3 = null; // India red gem 
	this.dude4 = null; // purple gem
	
	this.greenCorrect = false;
	this.redCorrect = false;
	this.blueCorrect = false;
	
	this.redMiddle = false;
	this.greenMiddle = false;
	this.blueMiddle = false;
	this.grayMiddle = false;
	
	//this.middle = false;
	
	this.randomCus = null;
	this.customerArray = [false, false, false];
	this.totalCustomers = 0;
	
	this.bubble = null;
	this.bubbleCreate = false;
	this.tableImage = null;

	this.timer = 20;
	this.timerText = 0;
	this.blinkingImage = null;
	
	this.clockImage = null;
	this.clockSkin = null;
	this.angle = 360;
	

	this.gameOverImage = null;
	this.wrongImage = null;
	
	this.redCanclick = false;
	this.greenCanclick = false;
	this.blueCanclick = false;
	this.purpleCanclick = false;

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
        this.timerText = this.add.text(this.world.centerX, this.world.centerY, 'Timer: 20', { font: "40px Arial", fill: "#000000", align: "center" });
    	this.timerText.anchor.setTo(0.5, 0.5);
		this.moneyText = this.add.text(600, 50, 'Money: 0', { font:"30px Arial", fill: "#000", align: "center"});
		this.CusNumText = this.add.text(460, 40, ': 0', { font:"30px Arial", fill: "#000", align: "center"});
    }, 
       
    create: function()
    {
		console.log("level1");
        this.time.events.loop(Phaser.Timer.SECOND, this.updateCounter, this); // timer

		this.spawnCustomer();

		this.clockImage = this.add.tween(this.clockImage).to( { angle: 360 }, 20000, Phaser.Easing.Linear.None, true);  //10		
		this.moneyImage = this.add.sprite(this.world.width*0.93, this.world.height*0.85, 'moneyImage');
		this.moneyImage.frame = 0;
		this.moneyImage.anchor.set(0.5,0.5);
		
		this.buttonManager = new ButtonManager(this);
		theGame.FadeScreen = new FadeManager(this);
        theGame.FadeScreen.create();	
		
		this.blinkingImage = this.add.sprite(this.world.width*0.5, this.world.height*0.5, 'blinking');
		this.blinkingImage.alpha = 0.2;
		this.blinkingImage.anchor.set(0.5,0.5);
		this.blinkingImage.frame = 1;	
		
		this.redMiddle = false;
		this.greenMiddle = false;
		this.blueMiddle = false;
		this.grayMiddle = false;
		this.timer = 20;
		this.CusNum = 0;
		this.money = 0;	
    },
	
	update: function()
    { 
		this.clockImage.angle += 1;
		
		this.randomCusFunc(this.randomCus);
		
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
		
//		if (this.timer <= 0 )
//		{
//			this.gameOverImage = this.add.sprite(this.world.width*0.5, this.world.height*0.5, 'gameover');
//			this.gameOverImage.anchor.set(0.5,0.5);
//			this.buttonManager.createRestartButton(this.world.width*0.5, this.world.height*0.7);
//			
//			this.CusNum = 0;
//			this.money = 0;
//			this.redMiddle = false;
//			this.greenMiddle = false;
//			this.blueMiddle = false;
//			this.grayMiddle = false;
//			this.bubble.destroy();
//		}

//		if (this.buttonManager.restartLevelClick == true)  // restart
//		{
//			this.gameOverImage.destroy();
//			this.buttonManager.destroyButtonR();
//			
//			if (this.dude != null)  
//			{
//				this.dude.destroy();
//			}
//			if (this.dude2 != null)
//			{
//				this.dude2.destroy();
//			}
//			if (this.dude3 != null)
//			{
//				this.dude3.destroy();
//			}
//			this.redMiddle = false;
//			this.greenMiddle = false;
//			this.blueMiddle = false;
//			this.grayMiddle = false;
//			
//			this.time.events.loop(Phaser.Timer.SECOND, this.updateCounter, this);
//			this.time.events.start();
//			this.timer = 20;
//			this.CusNum = 0;
//			this.money = 0;
//		}
		
		if (this.dude != null)  
		{
			this.blueCustomerFunc();
		}
		if (this.dude2 != null)
		{
			this.greenCustomerFunc();
		}
		if (this.dude3 != null)
		{
			this.redCustomerFunc();
		}
		
		
		if (this.CusNum >= 1 ) // next level
		{
//			this.buttonManager.createNextButton(this.world.width*0.5, this.world.height*0.5);
			this.buttonManager.createScoreButton(this.world.width*0.5, this.world.height*0.5);		
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
		
		if (this.timer >= 6) // red image
		{
			this.blinkingImage.animations.add('red', [0,1]);
			this.blinkingImage.play('red', 2 , true);
		}
    }, 
	
	spawnCustomer: function()
	{
		if (this.totalCustomers < 3)
		{
			this.randomFunc(1,3);
			if(this.randomCus == 1) 
			{
				this.dude = this.add.sprite(this.world.width*0.05, this.world.height*0.3, 'dude');
				this.dude.anchor.set(0.5,0.5);
				this.dude.scale.setTo(2, 2);
				this.physics.enable(this.dude, Phaser.Physics.ARCADE);
				this.dude.body.velocity.setTo(0,0);	

				this.dude.animations.add('left', [0,1,2,3]);     	
				this.dude.animations.add('right', [5,6,7,8]);
				this.dude.animations.add('still', [4]); 
				
				this.dude4 = this.add.sprite(this.world.widthX, this.world.height*0.3, 'dude4');
				this.dude4.anchor.set(0.5,0.5);
				this.dude4.scale.setTo(2, 2);
				this.physics.enable(this.dude4, Phaser.Physics.ARCADE);
				this.dude4.body.velocity.setTo(0,0);

				this.dude4.animations.add('left', [0,1,2,3]);     	
				this.dude4.animations.add('right', [5,6,7,8]);
				this.dude4.animations.add('still', [4]);	
				this.blueMiddle = false;
				//this.grayMiddle = false;
			}
			else if(this.randomCus == 2)
			{	
				this.dude2 = this.add.sprite(this.world.widthX, this.world.height*0.4, 'dude2');
				this.dude2.anchor.set(0.5,0.5);
				this.physics.enable(this.dude2, Phaser.Physics.ARCADE);
				this.dude2.body.velocity.setTo(0,0);

				this.dude2.animations.add('left', [0,1,2,3]);     	
				this.dude2.animations.add('right',  [5,6,7,8]);
				this.dude2.animations.add('still', [4]);
				this.greenMiddle = false;
			}  
			else if(this.randomCus == 3)
			{	
				this.dude3 = this.add.sprite(this.world.widthX, this.world.height*0.3, 'dude3');
				this.dude3.anchor.set(0.5,0.5);
				this.dude3.scale.setTo(2, 2);
				this.physics.enable(this.dude3, Phaser.Physics.ARCADE);
				this.dude3.body.velocity.setTo(0,0);

				this.dude3.animations.add('left', [0,1,2,3]);     	
				this.dude3.animations.add('right', [5,6,7,8]);
				this.dude3.animations.add('still', [4]);
				this.redMiddle = false;
			}  
			this.totalCustomers +=1;
		}
	},
  	
	randomFunc: function(Min, Max)
	{
		do
		{
			this.randomCus = this.game.rnd.integerInRange(Min,Max);
		} 
		while (this.customerArray[this.randomCus - 1] == true);
	},
	
	randomCusFunc: function(randomCus)
	{
		if(this.CusNum <= 3)
		{
			switch(randomCus)
			{
				case 1:
					this.blueCustomerFunc();
					break;

				case 2:
					this.greenCustomerFunc();
					break;

				case 3:
					this.redCustomerFunc();
					break;		
			}
		}
	},
	
	blueCustomerFunc: function()
	{
		this.bluecustomer=1;
		this.physics.enable(this.dude, Phaser.Physics.ARCADE);
		this.physics.enable(this.dude4, Phaser.Physics.ARCADE);
		if (this.dude.x < this.world.width/2 - 2 && this.blueMiddle == false)
		{
			this.dude.animations.play('right',10, true);
			this.dude.body.velocity.setTo(110, 0);
			this.dude4.animations.play('right',10, true);
			this.dude4.body.velocity.setTo(110, 0);
		}
		else if(this.dude.x > this.world.width/2 + 2 && this.blueMiddle == false)
		{
			this.dude.animations.play('right',10, true);
			this.dude.body.velocity.setTo(110, 0);
			this.dude4.animations.play('right',10, true);
			this.dude4.body.velocity.setTo(110, 0);
			
			if (this.dude.x >= this.world.width)
			{
				this.dude.x = 0;
				this.dude4.x = 0;
				this.dude.destroy();
				this.dude4.destroy();
			}
		}
		else if(this.dude.x < this.world.width/2 + 2 && this.dude.x > this.world.width/2 - 2)
		{
			this.dude.body.velocity.setTo(0, 0);
			this.dude.animations.play('still',10, true);
			this.dude4.body.velocity.setTo(0, 0);
			this.dude4.animations.play('still',10, true);
			this.blueMiddle = true;
			this.blueCanclick = true;
		}
		if(this.blueMiddle == true && this.bubbleCreate == false)
		{
			this.bubble = this.add.sprite(this.world.width*0.2, this.world.height*0.2, 'request');
			this.bubbleCreate = true;
		}
		
		if(this.blueCorrect == true)
		{
			if (this.bubbleCreate == true)
			{
				this.bubble.destroy();
				this.bubbleCreate = false;
				this.dude.x += 0.5;
				this.dude4.x += 0.5;
				this.blueMiddle = false;
			}
			this.blueCanclick = false;
		}
	},
	
	greenCustomerFunc: function()
	{
		this.greencustomer=1;
		this.physics.enable(this.dude2, Phaser.Physics.ARCADE);
		if (this.dude2.x < this.world.width/2 - 2 && this.greenMiddle == false)
		{
			this.dude2.animations.play('left',10, true);
			this.dude2.body.velocity.setTo(110, 0);		
		}
		
		else if(this.dude2.x > this.world.width/2 + 2 && this.greenMiddle == false)
		{
			this.dude2.animations.play('right',10, true);
			this.dude2.body.velocity.setTo(110, 0);
			//this.greenMiddle = false;
			if (this.dude2.x >= this.world.width)
			{
				this.dude2.x = 0;
				this.dude2.animations.stop();
				this.dude2.destroy();	
				//this.dude2.body.velocity.x = 0;
			}
		}
		else if(this.dude2.x < this.world.width/2 + 2 && this.dude2.x > this.world.width/2 - 2)
		{
			this.dude2.body.velocity.setTo(0, 0);
			this.dude2.animations.play('still',10, true);
			this.greenMiddle = true;
			this.greenCanclick = true;
		}
		
		if(this.greenMiddle == true && this.bubbleCreate == false)
		{
			this.bubble = this.add.sprite(this.world.width*0.2, this.world.height*0.2, 'request');
			this.bubbleCreate = true;
		}
		
		if(this.greenCorrect == true)
		{
			if (this.bubbleCreate == true)
			{
				this.bubble.destroy();
				this.bubbleCreate = false;
				this.dude2.x +=0.5; //this.world.width/2 + 11;
				this.greenMiddle = false;
			}
			this.greenCanclick = false;
		}
	},
		
	redCustomerFunc: function()
	{
		this.redcustomer = 1;
		this.physics.enable(this.dude3, Phaser.Physics.ARCADE);
		if (this.dude3.x < this.world.width/2 - 2 && this.redMiddle == false)
		{
			this.dude3.animations.play('right',10, true);
			this.dude3.body.velocity.setTo(110, 0);
			
		}
		else if(this.dude3.x > this.world.width/2 + 2 && this.redMiddle == false)
		{
			this.dude3.animations.play('right',10, true);
			this.dude3.body.velocity.setTo(110, 0);
			if (this.dude3.x >= this.world.width)
			{
				this.dude3.x = 0;
				this.dude3.destroy();	
				this.dude3.animations.stop();
			}
		}
		else if(this.dude3.x < this.world.width/2 + 2 && this.dude3.x > this.world.width/2 - 2)
		{
			this.dude3.body.velocity.setTo(0, 0);
			this.dude3.animations.play('still',10, true);
			this.redMiddle = true;
			this.redCanclick = true;
		}
		if(this.redMiddle == true && this.bubbleCreate == false)
		{
			this.bubble = this.add.sprite(this.world.width*0.2, this.world.height*0.2, 'request');
			this.bubbleCreate = true;
		}
		if(this.redCorrect == true)
		{
			if (this.bubbleCreate == true)
			{
				this.bubble.destroy();
				this.bubbleCreate = false;	
				this.dude3.x +=0.5;
				this.redMiddle = false;
			}
			this.redCanclick = false;
		}
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
					this.result.kill(); // correct bubble destroyer
					this.startTimer = false;
       			}
			}
		}
		this.counter--;	
		
		if (this.timer <= 0) //timer
		{
			this.time.events.stop();
		}
		else 
		{
			this.timer--;
			this.timerText.setText('Timer: ' + this.timer); // print timer number
		}
    },
	
	redclick: function()
	{
		if (this.red.events.onInputDown)
		{
			if (this.redCanclick == true)
			{
				if(this.redcustomer!=null)
				{
					this.TheDestroyer(this.redcustomer,this.red);
				}
				this.red.setFrames(1,2);	
			}
		}
		else if(this.red.events.onInputUp)
		{
			this.result.kill();
		}
	},

	blueclick: function()
	{
		if (this.blue.events.onInputDown)
		{
			if (this.blueCanclick == true)
			{
				if(this.bluecustomer!=null)
				{
					this.TheDestroyer(this.bluecustomer,this.blue);
				}
				this.blue.setFrames(1,2);	
			}
        }
        else if(this.blue.events.onInputUp)
		{    
			this.result.kill();
		}
	},

	greenclick: function()
	{
		if (this.green.events.onInputDown)
		{
			if (this.greenCanclick == true)
			{
				if(this.greencustomer!=null)
				{
			
					this.TheDestroyer(this.greencustomer,this.green); 
				}
	
				this.green.setFrames(1,2);
			}
		}
		else if(this.green.events.onInputUp)
		{   
			this.result.kill();
		}
		
	},
			
	purpleclick: function()
	{
		 if (this.purpleGem.events.onInputDown)
			{
				if (this.purpleCanclick == true)
				{
					if(this.purplecustomer!=null)
					{
						this.TheDestroyer(this.purplecustomer,this.purpleGem); 
					}
					this.purpleGem.setFrames(1,2);	
				}
			}
			else if(this.purpleGem.events.onInputUp)
			{    
				this.result.kill();	
			}
	},
	
	TheDestroyer: function(sprite,sprite2)
	{
		if(this.checkCombination(sprite,sprite2))
        {
			this.startTimer = true; // destroyer correct bubble
			this.setToKill = true;
            this.countDown = 1; //destroyer correct gem and customer time
			 
			this.money += 10;
			this.moneyText.text = 'Money: ' + this.money;
			
			this.CusNum += 1;
			this.CusNumText.text = 'CusNum: ' + this.CusNum;
        }
		else
		{
			console.log("skdfj");
			this.startTimer = true; 
			this.setToKill = true;
			this.countDown = 1; //destroyer wrong gem and customer time	
		}
	},

	checkCombination: function(sprite,sprite2)
	{
		if(sprite != null && sprite2 != null)
        {
            if(sprite == this.redcustomer && sprite2 == this.red ) // sprite is customer  sprite2 is gem
            {
				this.result = this.add.sprite(this.world.width*0.7, this.world.height*0.3, 'correct');
				this.result.anchor.set(0.5,0.5);
				this.redCorrect = true;
				this.customerArray[2] = true;
				this.spawnCustomer(); // call next customer
				this.scoreredGem += 1;
                return true;
				console.log("red");
            }
			else if(sprite == this.greencustomer && sprite2 == this.green )
            {
				this.result = this.add.sprite(this.world.width*0.7, this.world.height*0.3, 'correct');
				this.result.anchor.set(0.5,0.5);
				this.greenCorrect = true;
				this.customerArray[1] = true;
				this.spawnCustomer();
				this.scoreGreenGem += 1;
                return true;
				console.log("green");
            }
			else if(sprite == this.bluecustomer && sprite2 == this.blue )
            {
				this.result = this.add.sprite(this.world.width*0.7, this.world.height*0.3, 'correct');
				this.result.anchor.set(0.5,0.5);
				this.blueCorrect = true;
				this.customerArray[0] = true;
				this.spawnCustomer();
				this.scoreblueGem += 1;
                return true;
				console.log("blue");
            }
			
        }
		else 
			{   
				this.result = this.add.sprite(this.world.width*0.7, this.world.height*0.3, 'wrong');
				this.result.anchor.set(0.5,0.5);
				this.result.scale.setTo(1,1);
				console.log("wrong");
			}
		console.log("wdgfdrong");
        return false;
	}
};