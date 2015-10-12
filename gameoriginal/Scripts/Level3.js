theGame.Level3 = function(game)
{
	this.game;
    this.gameBackground = null;
    this.music = null;
    this.uiManager = null;  
	
	this.redGem = null; // gem
	this.greenGem = null;
	this.blueGem = null;
	this.orangeGem = null;
	this.purpleGem = null;
	this.yellowGem = null;
	
	this.chinaCus = null;  // red
	this.westernSoloCus = null; // green gem
	this.coupleCus = null; //blue gem
	this.westCoupleCus = null; // orange gem 
	this.indiaCus = null; // purple
	
	this.redMiddle = false;
	this.greenMiddle = false;
	this.blueMiddle = false;
	this.orangeMiddle = false;
	this.purpleMiddle = false;
	this.yellowMiddle = false;
	
	this.redCorrect = false;
	this.greenCorrect = false;
	this.blueCorrect = false;
	this.orangeCorrect = false; 
	this.purpleCorrect = false;
	this.yellowCorrect = false; 
	
	this.bubble = null;
	this.bubbleCreate = false;
	
    this.counter = 10;
    this.text = 0;
    this.selectGemValue = null;

	this.sprite = null;
	this.sprite2 = null;
	this.result = null;
	this.WaitToDisappear_bool = false;
    this.WaitToDisappear_bool_Timer = null;
	this.setToKill = null;
	this.countDown = 10;
	
	var spawned=false;
	
	this.redCanclick = false;
	this.greenCanclick = false;
	this.blueCanclick = false;
	this.orangeCanclick = false;
	this.purpleCanclick = false;
	this.yellowCanclick = false;
	
	this.randomCus = null;
	this.customerArray = [false, false, false, false];
	this.totalCustomers = 0;
	
		
	this.money = 0;

};

theGame.Level3.prototype = 
{
    preload: function()
    {	
		//Screen Background
		this.gameBackground = this.add.sprite(this.world.width*0.5, this.world.height*0.5, 'GameBackGround');
        this.gameBackground.anchor.set(0.5,0.5);
		
		//gemTable
		this.tableImage = this.add.sprite(this.world.width*0.5, this.world.height*0.83, 'gemTable3');
        this.tableImage.anchor.set(0.5,0.5);
		
		//GEM
		this.redGem = this.add.button(this.world.width*0.215, this.world.height*0.79, 'red', this.redclick, this, 1, 0, 2);
		this.redGem.anchor.setTo(0.5,0.5);
		
		this.greenGem = this.add.button(this.world.width*0.683, this.world.height*0.79, 'green', this.greenclick, this, 1, 0, 2);
		this.greenGem.anchor.setTo(0.5,0.5);
		
		this.blueGem = this.add.button(this.world.width*0.33, this.world.height*0.88, 'blue', this.blueclick, this, 1, 0, 2);
		this.blueGem.anchor.setTo(0.5,0.5);
		
		this.yellowGem = this.add.button(this.world.width*0.565, this.world.height*0.88, 'yellow', this.yellowclick, this, 1, 0, 2);
		this.yellowGem.anchor.setTo(0.5,0.5);
		
		this.orangeGem = this.add.button(this.world.width*0.445, this.world.height*0.79, 'orange', this.orangeclick, this, 1, 0, 2);
		this.orangeGem.anchor.setTo(0.5,0.5);
			
		this.purpleGem = this.add.button(this.world.width*0.805, this.world.height*0.88, 'purple', this.purpleclick, this, 1, 0, 2);
		this.purpleGem.anchor.setTo(0.5,0.5);
    }, 
	
	create: function()
	{
		this.time.events.loop(Phaser.Timer.SECOND, this.updateCounter, this); 
		this.buttonManager = new ButtonManager(this);
		
		this.spawnCustomer();
		
		this.moneyImage = this.add.sprite(this.world.width*0.93, this.world.height*0.85, 'moneyImage');
		this.moneyImage.frame = 0;
		this.moneyImage.anchor.set(0.5,0.5);
	},
	update: function()
	{
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
		
		if (this.chinaCus != null)
		{
			this.ChinaCustomerFunc();
		}
		if(this.westernSoloCus != null)
		{
			this.westernSoloCustomerFunc();
		}
		if (this.westCoupleCus != null)
		{
			this.westCoupleCustomerFunc();	
		}
		if (this.indiaCus != null)
		{
		 	this.IndiaCustomerFunc();	
		}
	},
	
	spawnCustomer: function()
	{
		if (this.totalCustomers < 5)
		{
			this.randomFunc(1,5);
			if (this.randomCus == 1)
			{
				this.chinaCus = this.add.sprite(this.world.widthX, this.world.height*0.3, 'dude3');
				if(!this.chinaCus.spawned)
				{
				this.chinaCus.anchor.set(0.5,0.5);
				//this.westernCus.scale.setTo(2, 2);
				this.physics.enable(this.chinaCus, Phaser.Physics.ARCADE);
				this.chinaCus.body.velocity.setTo(0,0);

				this.chinaCus.animations.add('left', [0,1,2,3]);     	
				this.chinaCus.animations.add('right', [5,6,7,8]);
				this.chinaCus.animations.add('still', [4]);
				this.redMiddle = false;
				this.chinaCus.spawned=true;
				this.totalCustomers += 1;
				}
			}
			else if (this.randomCus == 2)
			{
				this.westernSoloCus = this.add.sprite(this.world.widthX, this.world.height*0.4, 'dude2');
				if(!this.westernSoloCus.spawned)
				{
				this.westernSoloCus.anchor.set(0.5,0.5);
				this.physics.enable(this.westernSoloCus, Phaser.Physics.ARCADE);
				this.westernSoloCus.body.velocity.setTo(0,0);

				this.westernSoloCus.animations.add('left', [0,1,2,3]);     	
				this.westernSoloCus.animations.add('right',  [5,6,7,8]);
				this.westernSoloCus.animations.add('still', [4]);
				this.greenMiddle = false;
				this.westernSoloCus.spawned=true;
				this.totalCustomers += 1;
				}
			}
			else if (this.randomCus == 3)
			{
				this.westCoupleCus = this.add.sprite(this.world.width*0.05, this.world.height*0.3, 'orangedude');
				if(!this.westCoupleCus.spawned)
				{
				this.westCoupleCus.anchor.set(0.5,0.5);
				this.physics.enable(this.westCoupleCus, Phaser.Physics.ARCADE);
				this.westCoupleCus.body.velocity.setTo(0,0);

				this.westCoupleCus.animations.add('left', [0,1,2,3]);     	
				this.westCoupleCus.animations.add('right',  [5,6,7,8]);
				this.westCoupleCus.animations.add('still', [4]);
				this.orangeMiddle = false;
				this.westCoupleCus.spawned=true;
				this.totalCustomers += 1;
				}
			}
			else if (this.randomCus == 4)
			{
				
				this.indiaCus = this.add.sprite(this.world.width*0.05, this.world.height*0.3, 'purpledude');
				if(!this.indiaCus.spawned)
				{
				this.indiaCus.anchor.set(0.5,0.5);
				this.physics.enable(this.indiaCus, Phaser.Physics.ARCADE);
				this.indiaCus.body.velocity.setTo(0,0);

				this.indiaCus.animations.add('left', [0,1,2,3]);     	
				this.indiaCus.animations.add('right',  [5,6,7,8]);
				this.indiaCus.animations.add('still', [4]);
				this.purpleMiddle = false;
				this.indiaCus.spawned=true;
				this.totalCustomers += 1;
				}
			}	
			else if (this.randomCus == 5)
			{
				
				this.coupleCus = this.add.sprite(this.world.width*0.05, this.world.height*0.3, 'dude');
				if(!this.coupleCus.spawned)
				{
				this.coupleCus.anchor.set(0.5,0.5);
				this.physics.enable(this.coupleCus, Phaser.Physics.ARCADE);
				this.coupleCus.body.velocity.setTo(0,0);

				this.coupleCus.animations.add('left', [0,1,2,3]);     	
				this.coupleCus.animations.add('right',  [5,6,7,8]);
				this.coupleCus.animations.add('still', [4]);
				this.blueMiddle = false;
				this.coupleCus.spawned=true;
				this.totalCustomers += 1;
				}
			}	
		}
	},
	
	randomFunc: function(Mix, Max)
	{
		do
		{
			this.randomCus = this.game.rnd.integerInRange(Mix, Max);
		}
		while (this.customerArray[this.randomCus -1] == true);
	},
	
	randomCusFunc: function(randomCus)
	{
		if (this.CusNum <= 5)
		{
			switch(randomCus)
			{
				case 1:
					//this.ChinaCustomerFunc();
					break;
				case 2:
					//this.westernSoloCustomerFunc();
					break;
				case 3:
					//this.westCoupleCustomerFunc();
					break;
				case 4:
					//this.IndiaCustomerFunc();
					break;
				case 5:
					//this.CoupleCustomerFunc();
				break;
			}
		}
	},
	
	ChinaCustomerFunc: function()
	{
		//this.redcustomer=1;
		this.physics.enable(this.chinaCus, Phaser.Physics.ARCADE);
		if (this.chinaCus.x < this.world.width/2 - 2 && this.redMiddle == false)
		{
			this.chinaCus.animations.play('right',10, true);
			this.chinaCus.body.velocity.setTo(110, 0);
			
		}
		else if(this.chinaCus.x > this.world.width/2 + 2 && this.redMiddle == false)
		{
			this.chinaCus.animations.play('right',10, true);
			this.chinaCus.body.velocity.setTo(110, 0);
			if (this.chinaCus.x >= this.world.width)
			{
				this.chinaCus.x = 0;
				this.chinaCus.destroy();	
				this.chinaCus.animations.stop();
			}
		}
		else if(this.chinaCus.x < this.world.width/2 + 2 && this.chinaCus.x > this.world.width/2 - 2)
		{
			this.chinaCus.body.velocity.setTo(0, 0);
			this.chinaCus.animations.play('still',10, true);
			this.redMiddle = true;
			//this.redCanclick = true;
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
				this.chinaCus.x +=0.5;
				this.redMiddle = false;
			}
			//this.redCanclick = false;
		}
	},
	
	westernSoloCustomerFunc: function()
	{
		//this.greencustomer=1;
		this.physics.enable(this.westernSoloCus, Phaser.Physics.ARCADE);
		if (this.westernSoloCus.x < this.world.width/2 - 2  && this.greenMiddle == false)
		{
			this.westernSoloCus.animations.play('left',10, true);
			this.westernSoloCus.body.velocity.setTo(110, 0);		
		}
		
		else if(this.westernSoloCus.x > this.world.width/2 + 2  && this.greenMiddle == false)
		{
			this.westernSoloCus.animations.play('right',10, true);
			this.westernSoloCus.body.velocity.setTo(110, 0);
			
			if (this.westernSoloCus.x >= this.world.width)
			{
				this.westernSoloCus.x = 0;
				this.westernSoloCus.destroy();	
				this.westernSoloCus.animations.stop();
			}
		}
		else if(this.westernSoloCus.x < this.world.width/2 + 2 && this.westernSoloCus.x > this.world.width/2 - 2)
		{
			this.westernSoloCus.body.velocity.setTo(0, 0);
			this.westernSoloCus.animations.play('still',10, true);
			this.greenMiddle = true;
			//this.greenCanclick = true;
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
				this.westernSoloCus.x +=0.5; //this.world.width/2 + 11;
				this.greenMiddle = false;
			}
			//this.greenCanclick = false;
		}
	},
	
	westCoupleCustomerFunc: function()
	{
		this.physics.enable(this.westCoupleCus, Phaser.Physics.ARCADE);
		if (this.westCoupleCus.x < this.world.width/2 - 2 && this.orangeMiddle == false)
		{
			this.westCoupleCus.animations.play('right',10, true);
			this.westCoupleCus.body.velocity.setTo(110, 0);
		}
		else if(this.westCoupleCus.x > this.world.width/2 + 2 && this.orangeMiddle == false)
		{
			this.westCoupleCus.animations.play('right',10, true);
			this.westCoupleCus.body.velocity.setTo(110, 0);
			if (this.westCoupleCus.x >= this.world.width)
			{
				this.westCoupleCus.x = 0;
				this.westCoupleCus.destroy();
				this.westCoupleCus.animations.stop();
			}
		}
		else if(this.westCoupleCus.x < this.world.width/2 + 2 && this.westCoupleCus.x > this.world.width/2 - 2)
		{
			this.westCoupleCus.body.velocity.setTo(0, 0);
			this.westCoupleCus.animations.play('still',10, true);
			this.orangeMiddle = true;
			//this.orangeCanclick = true;
		}
		if(this.orangeMiddle == true && this.bubbleCreate == false)
		{
			this.bubble = this.add.sprite(this.world.width*0.2, this.world.height*0.2, 'request');
			this.bubbleCreate = true;
		}
		
		if(this.orangeCorrect == true)
		{
			if (this.bubbleCreate == true)
			{
				this.bubble.destroy();
				this.bubbleCreate = false;
				this.westCoupleCus.x += 0.5;
				this.orangeMiddle = false;
			}
			//this.orangeCanclick = false;
		}
	},
		
	IndiaCustomerFunc: function()
	{
		this.physics.enable(this.indiaCus, Phaser.Physics.ARCADE);
		if (this.indiaCus.x < this.world.width/2 - 2  && this.purpleMiddle == false)
		{
			this.indiaCus.animations.play('right',10, true);
			this.indiaCus.body.velocity.setTo(110, 0);		
		}
		
		else if(this.indiaCus.x > this.world.width/2 + 2  && this.purpleMiddle == false)
		{
			this.indiaCus.animations.play('right',10, true);
			this.indiaCus.body.velocity.setTo(110, 0);
			
			if (this.indiaCus.x >= this.world.width)
			{
				this.indiaCus.x = 0;
				this.indiaCus.destroy();	
				this.indiaCus.animations.stop();
			}
		}
		else if(this.indiaCus.x < this.world.width/2 + 2 && this.indiaCus.x > this.world.width/2 - 2)
		{
			this.indiaCus.body.velocity.setTo(0, 0);
			this.indiaCus.animations.play('still',10, true);
			this.purpleMiddle = true;
			//this.purpleCanclick = true;
		}
		
		if(this.purpleMiddle == true && this.bubbleCreate == false)
		{
			this.bubble = this.add.sprite(this.world.width*0.2, this.world.height*0.2, 'request');
			this.bubbleCreate = true;
		}
		
		if(this.purpleCorrect == true)
		{
			if (this.bubbleCreate == true)
			{
				this.bubble.destroy();
				this.bubbleCreate = false;
				this.indiaCus.x +=0.5; //this.world.width/2 + 11;
				this.purpleMiddle = false;
			}
			//this.purpleCanclick = false;
		}
	},
	
	CoupleCustomerFunc: function()
	{
		this.physics.enable(this.coupleCus, Phaser.Physics.ARCADE);
		if (this.coupleCus.x < this.world.width/2 - 2  && this.blueMiddle == false)
		{
			this.coupleCus.animations.play('right',10, true);
			this.coupleCus.body.velocity.setTo(110, 0);		
		}
		
		else if(this.coupleCus.x > this.world.width/2 + 2  && this.blueMiddle == false)
		{
			this.coupleCus.animations.play('right',10, true);
			this.coupleCus.body.velocity.setTo(110, 0);
			
			if (this.coupleCus.x >= this.world.width)
			{
				this.coupleCus.x = 0;
				this.coupleCus.destroy();	
				this.coupleCus.animations.stop();
			}
		}
		else if(this.coupleCus.x < this.world.width/2 + 2 && this.coupleCus.x > this.world.width/2 - 2)
		{
			this.coupleCus.body.velocity.setTo(0, 0);
			this.coupleCus.animations.play('still',10, true);
			this.blueMiddle = true;
			//this.blueCanclick = true;
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
				this.coupleCus.x +=0.5; //this.world.width/2 + 11;
				this.blueMiddle = false;
			}
			//this.blueCanclick = false;
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
					//this.result.kill();
					this.startTimer = false;
       			}
			}
			this.counter--;
			//this.text.setText('Timer: ' + this.counter);
		}
    },
	
	redclick: function()
	{
		if (this.redGem.events.onInputDown)
		{
//			if (this.redCanclick == true)
//			{
				if (this.chinaCus != null)
				{
					this.TheDestroyer(this.chinaCus,this.redGem);
				}
				this.redGem.setFrame(1,2);
//			}
		}
		else if(this.redGem.events.onInputUp)
		{ 
			this.result.kill();
		}
	},
	
	greenclick: function()
	{
	 	if (this.greenGem.events.onInputDown)
		{
//			if (this.greenCanclick == true)
//			{
				if (this.westernSoloCus != null)
				{
					this.TheDestroyer(this.westernSoloCus,this.greenGem);
				}
				this.greenGem.setFrame(1,2); 
//			}
		}
		else if(this.greenGem.events.onInputUp)
		{    
			this.result.kill();
		}
	},

	purpleclick: function()
	{
		if (this.purpleGem.events.onInputDown)
		{
//			if (this.purpleCanclick == true)
//			{
				if (this.indiaCus != null)
				{
					this.TheDestroyer(this.indiaCus,this.purpleGem);
				}
				this.purpleGem.setFrames(1,2);	
//			}
		}
		else if(this.purpleGem.events.onInputUp)
		{    
			this.result.kill();
		}
	},
			
	orangeclick: function()
	{
		if (this.orangeGem.events.onInputDown)
		{
//			if (this.orangeCanclick == true)
//			{
				if (this.westCoupleCus != null)
				{
					this.TheDestroyer(this.westCoupleCus,this.orangeGem);
				}
				this.orangeGem.setFrames(1,2);	
//			}
		}
		else if(this.orangeGem.events.onInputUp)
		{    
			this.result.kill();
		}
	},
	
	blueclick: function()
	{
		if (this.blueGem.events.onInputDown)
		{
//			if (this.blueCanclick == true)
//			{
				if(this.coupleCus!=null)
				{
					this.TheDestroyer(this.coupleCus,this.blueGem);
				}
				this.blueGem.setFrames(1,2);	
//			}
        }
        else if(this.blueGem.events.onInputUp)
		{    
			this.result.kill();
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
		if(sprite != null && sprite2 != null)
        {
			if(sprite == this.coupleCus && sprite2 == this.blueGem )
            {
				this.result = this.add.sprite(this.world.width*0.7, this.world.height*0.3, 'correct');
				this.result.anchor.set(0.5,0.5);
				this.blueCorrect = true;
				this.spawnCustomer();
				this.customerArray[3] = true;
                return true;
            }
			if(sprite == this.indiaCus && sprite2 == this.purpleGem )
            {
				this.result = this.add.sprite(this.world.width*0.7, this.world.height*0.3, 'correct');
				this.result.anchor.set(0.5,0.5);
				this.purpleCorrect = true;
				this.spawnCustomer();
				this.customerArray[3] = true;
                return true;
            }
            if(sprite == this.chinaCus && sprite2 == this.redGem )
            {
				this.result = this.add.sprite(this.world.width*0.7, this.world.height*0.3, 'correct');
				this.result.anchor.set(0.5,0.5);
				this.redCorrect = true;
				this.spawnCustomer();
				this.customerArray[2] = true;
                return true;
            }
			if(sprite == this.westernSoloCus && sprite2 == this.greenGem )
            {
				this.result = this.add.sprite(this.world.width*0.7, this.world.height*0.3, 'correct');
				this.result.anchor.set(0.5,0.5);
				this.greenCorrect = true;
				this.spawnCustomer();
				this.customerArray[1] = true;
                return true;
            }
			if(sprite == this.westCoupleCus && sprite2 == this.orangeGem )
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
       }
		else
		{
			this.result = this.add.sprite(this.world.width*0.7, this.world.height*0.3, 'wrong');
			this.result.anchor.set(0.5,0.5);
			console.log("fgfg");
		}
        return false;
	}
};