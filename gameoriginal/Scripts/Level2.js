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
	this.cyanGem = null;
	
//	this.redcustomer = null;
//	this.bluecustomer = null;
//	this.greencustomer = null;
//	this.yellowcustomer = null;
//	this.cyancustomer = null;
	
	this.redDude = null;
	this.greenDude = null;
	this.blueDude = null;
	this.yellowDude = null;
	this.cyanDude = null;
	
	this.redMiddle = false;
	this.greenMiddle = false;
	this.blueMiddle = false;
	
	
	this.redCorrect = false;
	this.greenCorrect = false;
	this.blueCorrect = false;
	
	
	this.bubble = null;
	this.bubbleCreate = false;
	
    this.counter = 10;
    this.text = 0;
    this.selectGemValue = null;

	this.sprite = null;
	this.result = null;
	this.WaitToDisappear_bool = false;
    this.WaitToDisappear_bool_Timer = null;
	this.setToKill = null;
	this.countDown = 10;
	
	this.redCanclick = false;
	this.greenCanclick = false;
	this.blueCanclick = false;
	this.yellowCanclick = false;
	this.cyanCanclick = false;

};

theGame.Level2.prototype = 
{
    preload: function()
    {
//		this.selectGemValue = this.greenObject;
		
		//Screen Background
		this.gameBackground = this.add.sprite(this.world.width*0.5, this.world.height*0.5, 'GameBackGround');
        this.gameBackground.anchor.set(0.5,0.5);
		
		//GEM
		this.redGem = this.add.button(this.world.width*0.3, this.world.height*0.7, 'red', this.redclick, this, 1, 0, 2);
		this.redGem.anchor.setTo(0.5,0.5);
		
		this.greenGem = this.add.button(this.world.width*0.7, this.world.height*0.7, 'green', this.greenclick, this, 1, 0, 2);
		this.greenGem.anchor.setTo(0.5,0.5);
		
		this.blueGem = this.add.button(this.world.width*0.4, this.world.height*0.8, 'blue', this.blueclick, this, 1, 0, 2);
		this.blueGem.anchor.setTo(0.5,0.5);
		
		this.yellowGem = this.add.button(this.world.width*0.6, this.world.height*0.8, 'yellow', this.yellowclick, this, 1, 0, 2);
		this.yellowGem.anchor.setTo(0.5,0.5);
		
		this.cyanGem = this.add.button(this.world.width*0.5, this.world.height*0.7, 'cyan', this.cyanclick, this, 1, 0, 2);
		this.cyanGem.anchor.setTo(0.5,0.5);
    }, 
       
    create: function()
    {
        this.time.events.loop(Phaser.Timer.SECOND, this.updateCounter, this); 
		
		this.spawnCustomer();
       
//        //Fade in and out
//        theGame.FadeScreen = new FadeManager(this);
//        theGame.FadeScreen.create();
        
    },
  
    update: function()
    { 
        this.greenCustomerFunc();
		this.blueCustomerFunc();
		this.redCustomerFunc();
    },
    

	
	spawnCustomer: function()
	{
		this.redDude = this.add.sprite(this.world.widthX, this.world.height*0.3, 'dude3');
		this.redDude.anchor.set(0.5,0.5);
		this.redDude.scale.setTo(2, 2);
		this.physics.enable(this.redDude, Phaser.Physics.ARCADE);
		this.redDude.body.velocity.setTo(0,0);

		this.redDude.animations.add('left', [0,1,2,3]);     	
		this.redDude.animations.add('right', [5,6,7,8]);
		this.redDude.animations.add('still', [4]);
		this.redMiddle = false;
		
		this.greenDude = this.add.sprite(this.world.widthX, this.world.height*0.4, 'dude2');
		this.greenDude.anchor.set(0.5,0.5);
		this.physics.enable(this.greenDude, Phaser.Physics.ARCADE);
		this.greenDude.body.velocity.setTo(0,0);

		this.greenDude.animations.add('left', [0,1,2,3]);     	
		this.greenDude.animations.add('right',  [5,6,7,8]);
		this.greenDude.animations.add('still', [4]);
		this.greenMiddle = false;
		
		this.blueDude = this.add.sprite(this.world.width*0.05, this.world.height*0.3, 'dude');
		this.blueDude.anchor.set(0.5,0.5);
		this.physics.enable(this.blueDude, Phaser.Physics.ARCADE);
		this.blueDude.body.velocity.setTo(0,0);

		this.blueDude.animations.add('left', [0,1,2,3]);     	
		this.blueDude.animations.add('right',  [5,6,7,8]);
		this.blueDude.animations.add('still', [4]);
		this.blueMiddle = false;
		
			
	},
	
	redCustomerFunc: function()
	{
		//this.redcustomer = 1;
		this.physics.enable(this.redDude, Phaser.Physics.ARCADE);
		if (this.redDude.x < this.world.width/2 - 2 && this.redMiddle == false)
		{
			this.redDude.animations.play('right',10, true);
			this.redDude.body.velocity.setTo(110, 0);
			
		}
		else if(this.redDude.x > this.world.width/2 + 2 && this.redMiddle == false)
		{
			this.redDude.animations.play('right',10, true);
			this.redDude.body.velocity.setTo(110, 0);
			if (this.redDude.x >= this.world.width)
			{
				this.redDude.x = 0;
				this.redDude.destroy();	
				this.redDude.animations.stop();
			}
		}
		else if(this.redDude.x < this.world.width/2 + 2 && this.redDude.x > this.world.width/2 - 2)
		{
			this.redDude.body.velocity.setTo(0, 0);
			this.redDude.animations.play('still',10, true);
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
				this.redDude.x +=0.5;
				this.redMiddle = false;
			}
			this.redCanclick = false;
		}
	},
	
	greenCustomerFunc: function()
	{
		this.physics.enable(this.greenDude, Phaser.Physics.ARCADE);
		if (this.greenDude.x < this.world.width/2 - 2  && this.greenMiddle == false)
		{
			this.greenDude.animations.play('left',10, true);
			this.greenDude.body.velocity.setTo(110, 0);		
		}
		
		else if(this.greenDude.x > this.world.width/2 + 2  && this.greenMiddle == false)
		{
			this.greenDude.animations.play('right',10, true);
			this.greenDude.body.velocity.setTo(110, 0);
			
			if (this.greenDude.x >= this.world.width)
			{
				this.greenDude.x = 0;
				this.greenDude.destroy();	
				this.greenDude.animations.stop();
			}
		}
		else if(this.greenDude.x < this.world.width/2 + 2 && this.greenDude.x > this.world.width/2 - 2)
		{
			this.greenDude.body.velocity.setTo(0, 0);
			this.greenDude.animations.play('still',10, true);
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
				this.greenDude.x +=0.5; //this.world.width/2 + 11;
				this.greenMiddle = false;
			}
			this.greenCanclick = false;
		}
	},
	
	blueCustomerFunc: function()
	{
		//this.bluecustomer=1;
		this.physics.enable(this.blueDude, Phaser.Physics.ARCADE);
//		this.physics.enable(this.dude4, Phaser.Physics.ARCADE);
		if (this.blueDude.x < this.world.width/2 - 2 && this.blueMiddle == false)
		{
			this.blueDude.animations.play('right',10, true);
			this.blueDude.body.velocity.setTo(110, 0);
//			this.dude4.animations.play('right',10, true);
//			this.dude4.body.velocity.setTo(110, 0);
		}
		else if(this.blueDude.x > this.world.width/2 + 2 && this.blueMiddle == false)
		{
			this.blueDude.animations.play('right',10, true);
			this.blueDude.body.velocity.setTo(110, 0);
//			this.dude4.animations.play('right',10, true);
//			this.dude4.body.velocity.setTo(110, 0);
			
			if (this.blueDude.x >= this.world.width)
			{
				this.blueDude.x = 0;
//				this.dude4.x = 0;
				this.blueDude.destroy();
//				this.dude4.destroy();
				this.blueDude.animations.stop();
			}
		}
		else if(this.blueDude.x < this.world.width/2 + 2 && this.blueDude.x > this.world.width/2 - 2)
		{
			this.blueDude.body.velocity.setTo(0, 0);
			this.blueDude.animations.play('still',10, true);
//			this.dude4.body.velocity.setTo(0, 0);
//			this.dude4.animations.play('still',10, true);
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
				this.blueDude.x += 0.5;
//				this.dude4.x += 0.5;
				this.blueMiddle = false;
			}
			this.blueCanclick = false;
		}
	},
	
	redclick: function()
	{
		if (this.redGem.events.onInputDown)
		{
			if (this.redCanclick == true)
			{
				if (this.redDude != null)
				{
					this.TheDestroyer(this.redDude,this.redGem);
				}
				this.redGem.setFrame(1,2);
			}
		}
		else if(this.redGem.events.onInputUp)
		{ 
			 //this.redGem.scale.setTo(1,1);
			this.result.kill();
		}
	},
	
	greenclick: function()
	{
	 	if (this.greenGem.events.onInputDown)
		{
			this.greenGem.scale.setTo(1.2,1.2);
			this.TheDestroyer(this.greenDude,this.greenGem);
		}
		else if(this.greenGem.events.onInputUp)
		{    
			 this.greenGem.scale.setTo(1,1);
		}
	},
	
	blueclick: function()
	{
		if (this.blueGem.events.onInputDown)
		{
			this.blueGem.scale.setTo(1.2,1.2);
			this.TheDestroyer(this.blueDude,this.blueGem);
		}
		else if(this.blueGem.events.onInputUp)
		{    
			 this.blueGem.scale.setTo(1,1);
		}
	},

	yellowclick: function()
	{
		if (this.yellowGem.events.onInputDown)
		{
			this.yellowGem.scale.setTo(1.2,1.2);
			this.TheDestroyer(this.yellowcustomer,this.yellowGem);
		}
		else if(this.yellowGem.events.onInputUp)
		{    
			 this.yellowGem.scale.setTo(1,1);
		}
	},
			
	cyanclick: function()
	{
		if (this.cyanGem.events.onInputDown)
		{
			this.cyanGem.scale.setTo(1.2,1.2);
			this.TheDestroyer(this.cyancustomer,this.cyanGem);
		}
		else if(this.cyanGem.events.onInputUp)
		{    
			 this.cyanGem.scale.setTo(1,1);
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
//					if(this.WaitToDisappear_bool)
//					{
//						this.setToKill.kill(); // destroy customer
//					}
					this.result.kill();
					
					this.startTimer = false;
       			}
			}
			this.counter--;
			//this.text.setText('Timer: ' + this.counter);
		}
    },
	
	
	TheDestroyer: function(sprite,sprite2)
	{
		if(this.checkCombination(sprite,sprite2))
        {
            this.WaitToDisappear_bool = true;
			this.startTimer = true;
//          sprite2.kill(); // destroy gem
			this.setToKill = sprite;
            this.countDown = 1;
        }
		else
		{
			this.startTimer = true;
			this.setToKill = sprite;
			this.countDown = 1;
		}
	},
	checkCombination: function(sprite,sprite2)
	{
		if(sprite != null && sprite2 != null)
        {
            this.Wrong_value = 0;
            if(this.Wrong_value == 1)
            {
            }
            if(sprite == this.redDude && sprite2 == this.redGem )
            {
				this.result = this.add.sprite(this.world.width*0.7, this.world.height*0.3, 'correct');
				this.result.anchor.set(0.5,0.5);
				this.redCorrect = true;
                return true;
            }
			if(sprite == this.greenDude && sprite2 == this.greenGem )
            {
				this.result = this.add.sprite(this.world.width*0.7, this.world.height*0.3, 'correct');
				this.result.anchor.set(0.5,0.5);
				this.greenCorrect = true;
				//this.spawnCustomer();
                return true;
            }
			if(sprite == this.blueDude && sprite2 == this.blueGem )
            {
				this.result = this.add.sprite(this.world.width*0.7, this.world.height*0.3, 'correct');
				this.result.anchor.set(0.5,0.5);
				this.blueCorrect = true;
                return true;
            }
//            else 
//            {   
//              this.result = this.add.sprite(this.world.width*0.7, this.world.height*0.3, 'wrong');
//				this.result.anchor.set(0.5,0.5);
//            }
        }
		else
		{
			this.result = this.add.sprite(this.world.width*0.7, this.world.height*0.3, 'wrong');
				this.result.anchor.set(0.5,0.5);
		}
        return false;
	}
};