theGame.Game = function(game)
{
	this.game;
	this.add;
    this.gameBackground = null;
    this.music = null;
    this.uiManager = null;  
	this.red = null; // gem
	this.blue = null;
	this.green = null;
	this.redcustomer = null; 
	this.bluecustomer = null;
	this.greencustomer = null;
    this.counter = 100;

	this.sprite = null;
	this.result = null;
	this.redresult = null;
	this.WaitToDisappear_bool = false;
	this.Wrong_Timer = null;
    this.WaitToDisappear_bool_Timer = null;
	this.setToKill = null;
	this.countDown = 10;
	this.money = 0;
	this.moneyText = null;
	this.moneyImage = null;
	this.CusNum = 0;
	this.CusNumText = null;
	
	this.dude = null;
	this.dude2 = null;
	this.dude3 = null;
	
	this.greenCorrect = false;
	this.redCorrect = false;
	this.blueCorrect = false;
	
	this.middle = false;
	this.randomCus = null;
	this.customerArray = [false, false, false];
	this.totalCustomers = 0;

	this.timer = 20;
	this.timerText = 0;
	this.clockImage;
	this.angle = { min: 0, max: 0 };
};

theGame.Game.prototype = 
{
    preload: function()
    {
        //Screen Background
        this.gameBackground = this.add.sprite(this.world.width*0.5, this.world.height*0.5, 'GameBackGround');
        this.gameBackground.anchor.set(0.5,0.5);
		
		// gem 
	
        this.red = this.add.sprite(this.world.width*0.4, this.world.height*0.7, 'red');
        this.red.anchor.set(0.5,0.5);
		
   		this.red.inputEnabled = true;
		this.red.events.onInputDown.add(this.redclick, this);

		this.blue = this.add.sprite(this.world.width*0.5, this.world.height*0.7, 'blue');
        this.blue.anchor.set(0.5,0.5);
		
		this.blue.inputEnabled = true;
		this.blue.events.onInputDown.add(this.blueclick, this);
		
		this.green = this.add.sprite(this.world.width*0.6, this.world.height*0.7, 'green');
        this.green.anchor.set(0.5,0.5);
		
		this.green.inputEnabled = true;
		this.green.events.onInputDown.add(this.greenclick, this);
		
		this.moneyImage = this.add.sprite(this.world.width*0.7, this.world.height*0.7, 'moneyImage');
		this.moneyImage.anchor.set(0.5,0.5);
		this.moneyImage.scale.setTo(1, 1);

//timerText
        this.timerText = this.add.text(this.world.centerX, this.world.centerY, 'Timer: 20', { font: "40px Arial", fill: "#000000", align: "center" });
    	this.timerText.anchor.setTo(0.5, 0.5);
		this.moneyText = this.add.text(600, 50, 'Money: 0', { font:"30px Arial", fill: "#000", align: "center"});
		this.CusNumText = this.add.text(200, 50, 'Customer: 0', { font:"30px Arial", fill: "#000", align: "center"});
    }, 
       
    create: function()
    {
        this.time.events.loop(Phaser.Timer.SECOND, this.updateCounter, this); // timer

		this.spawnCustomer();

		this.clockImage = this.add.graphics(0,0); // draw clock 
		this.add.tween(this.angle).to({max: 359 }, 20000, "Linear", true); //10000   = 10		
    },
	
	update: function()
    { 
		//console.log(this.greenCorrect);
		//console.log(this.dude.body.velocity.x);
		//this.randomCusFunc(this.randomCus);e
		
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
		
		this.clockImage.clear();
		this.clockImage.lineStyle(2, 0xa000f3);
		this.clockImage.beginFill(928325);
		this.clockImage.arc(200, 500, 80, this.angle.min, this.math.degToRad(this.angle.max), true); //x positon, y position, scale 
		this.clockImage.endFill();
    },
	
	
	spawnCustomer: function()
	{
		if (this.totalCustomers < 3)
		{
			this.randomFunc(1, 3);
			if(this.randomCus == 1)
			{
				this.physics.startSystem(Phaser.Physics.ARCADE);
				this.dude = this.add.sprite(this.world.width*0.1, this.world.height*0.3, 'dude');
				this.dude.anchor.set(0.5,0.5);
				this.dude.scale.setTo(2, 2);
				this.physics.enable(this.dude, Phaser.Physics.ARCADE);
				this.dude.body.velocity.setTo(100,0);	

				this.dude.animations.add('left', [0,1,2,3]);     	
				this.dude.animations.add('right', [5,6,7,8]);
				this.dude.animations.add('still', [4]); 
			}
			else if(this.randomCus == 2)
			{	
				this.physics.startSystem(Phaser.Physics.ARCADE);
				this.dude2 = this.add.sprite(this.world.width*0.1, this.world.height*0.3, 'dude2');
				this.dude2.anchor.set(0.5,0.5);
				this.dude2.scale.setTo(2, 2);
				this.physics.enable(this.dude2, Phaser.Physics.ARCADE);
				this.dude2.body.velocity.setTo(100,0);

				this.dude2.animations.add('left', [0,1,2,3]);     	
				this.dude2.animations.add('right', [5,6,7,8]);
				this.dude2.animations.add('still', [4]);			
			}  
			else if(this.randomCus == 3)
			{	
				this.physics.startSystem(Phaser.Physics.ARCADE);
				this.dude3 = this.add.sprite(this.world.width*0.1, this.world.height*0.3, 'dude3');
				this.dude3.anchor.set(0.5,0.5);
				this.dude3.scale.setTo(2, 2);
				this.physics.enable(this.dude3, Phaser.Physics.ARCADE);
				this.dude3.body.velocity.setTo(100,0);

				this.dude3.animations.add('left', [0,1,2,3]);     	
				this.dude3.animations.add('right', [5,6,7,8]);
				this.dude3.animations.add('still', [4]);			
			}  
			this.totalCustomers++;
		}
	},
  	
	randomFunc: function(Min, Max)
	{
		do
		{
			this.randomCus = this.game.rnd.integerInRange(Min,Max);
		} while (this.customerArray[this.randomCus - 1] == true)
	},
	
	randomCusFunc: function(randomCus)
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
	},
	
	blueCustomerFunc: function()
	{
		this.bluecustomer=1;
		if (this.dude.x < this.world.centerX && this.middle == false)
		{
			this.dude.animations.play('right',10, true);
			this.dude.body.velocity.setTo(100, 0);
		}
		else if(this.dude.x > this.world.centerX+5 && this.middle == false)
		{
			this.dude.animations.play('right',10, true);
			this.dude.body.velocity.setTo(100, 0);
		}
		else
		{
			this.dude.body.velocity.setTo(0, 0);
			this.dude.animations.play('still',10, true);
			this.middle = true;
		}
		if(this.blueCorrect == true)
		{
			this.dude.x += 0.5;
			this.middle = false;
		}
	},
	
	greenCustomerFunc: function()
	{
		this.greencustomer=1;
		if (this.dude2.x < this.world.centerX && this.middle == false)
		{
			this.dude2.animations.play('right',10, true);
			this.dude2.body.velocity.setTo(100, 0);
		}
		else if(this.dude2.x > this.world.centerX+5 && this.middle == false)
		{
			this.dude2.animations.play('right',10, true);
			this.dude2.body.velocity.setTo(100, 0);
		}
		else
		{
			this.dude2.body.velocity.setTo(0, 0);
			this.dude2.animations.play('still',10, true);
			this.middle = true;	
		}
		if(this.greenCorrect == true)
		{
			this.dude2.x +=0.5;
			this.middle = false;
		}
	},
	
	redCustomerFunc: function()
	{
		this.redcustomer = 1;
		if (this.dude3.x < this.world.centerX && this.middle == false)
		{
			this.dude3.animations.play('right',10, true);
			this.dude3.body.velocity.setTo(100, 0);
		}
		else if(this.dude3.x > this.world.centerX+5 && this.middle == false)
		{
			this.dude3.animations.play('right',10, true);
			this.dude3.body.velocity.setTo(100, 0);
		}
		else
		{
			this.dude3.body.velocity.setTo(0, 0);
			this.dude3.animations.play('still',10, true);
			this.middle = true;
		}
		if(this.redCorrect == true)
		{
			this.dude3.x +=0.5;
			this.middle = false;
		}
	},
	
	render: function()
	{
	
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
					if(this.WaitToDisappear_bool)
					{
						//this.setToKill.kill();
					}
					this.result.kill(); // wrong destroyer
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
	
	redclick: function(sprite, pointer)
	{
		if (this.red.events.onInputDown)
            {
                this.red.scale.setTo(1.2,1.2);
				if(this.redcustomer!=null)
				{
					this.TheDestroyer(this.redcustomer,this.red);
				}
				this.blue.scale.setTo(1,1);
				this.green.scale.setTo(1,1);
            }
            else if(this.red.events.onInputUp)
            {
				this.red.scale.setTo(1,1);
				this.result.kill();
            }
	},

	blueclick: function()
	{
		 if (this.blue.events.onInputDown)
            {
                this.blue.scale.setTo(1.2,1.2);
				if(this.bluecustomer!=null)
				{
					this.TheDestroyer(this.bluecustomer,this.blue);
				}
				this.red.scale.setTo(1,1);
				this.green.scale.setTo(1,1);
            }
            else if(this.red.events.onInputUp)
            {    
                 this.blue.scale.setTo(1,1);
				 this.result.kill();
            }
	},

	greenclick: function()
		{
		 if (this.green.events.onInputDown)
            {
                this.green.scale.setTo(1.2,1.2);
				if(this.greencustomer!=null)
				{
					this.TheDestroyer(this.greencustomer,this.green); //destroyer gem
				}
				this.red.scale.setTo(1,1); // return gem original size
				this.blue.scale.setTo(1,1);
            }
            else if(this.green.events.onInputUp)
            {    
                this.green.scale.setTo(1,1);
				this.result.kill();
            }
		},
	
	TheDestroyer: function(sprite,sprite2)
	{
		if(this.checkCombination(sprite,sprite2))
        {
            this.WaitToDisappear_bool = true;
			this.startTimer = true;
            sprite2.kill();
			this.setToKill = sprite;
            this.countDown = 2; //destroyer correct gem and customer time
			
			this.money += 10;
			this.moneyText.text = 'Money: ' + this.money;
			
			this.CusNum += 1;
			this.CusNumText.text = 'Customer: ' + this.CusNum;
			
			this.red.scale.setTo(1,1);
			this.blue.scale.setTo(1,1);
			this.green.scale.setTo(1,1);
        }
		else
		{
			this.startTimer = true; 
			this.setToKill = sprite;
			this.countDown = 2; //destroyer wrong gem and customer time	
		}
	},
		
	checkCombination: function(sprite,sprite2)
	{
		if(sprite != null && sprite2 != null)
        {
            if(sprite == this.redcustomer && sprite2 == this.red )
            {
				this.result = this.add.sprite(this.world.width*0.7, this.world.height*0.3, 'correct');
				this.result.anchor.set(0.5,0.5);
				this.redCorrect = true;
				this.customerArray[2] = true;
				this.spawnCustomer();
                return true;
            }
			else if(sprite == this.greencustomer && sprite2 == this.green )
            {
				this.result = this.add.sprite(this.world.width*0.7, this.world.height*0.3, 'correct');
				this.result.anchor.set(0.5,0.5);
				this.greenCorrect = true;
				this.customerArray[1] = true;
				this.spawnCustomer();
                return true;
            }
			else if(sprite == this.bluecustomer && sprite2 == this.blue )
            {
				this.result = this.add.sprite(this.world.width*0.7, this.world.height*0.3, 'correct');
				this.result.anchor.set(0.5,0.5);
				this.blueCorrect = true;
				this.customerArray[0] = true;
				this.spawnCustomer();
                return true;
            }
           else 
            {   
              	this.result = this.add.sprite(this.world.width*0.7, this.world.height*0.3, 'wrong');
				this.result.anchor.set(0.5,0.5);
				this.result.scale.setTo(1,1);
            }
        }
        return false;
	}
};