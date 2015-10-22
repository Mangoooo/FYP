theGame.Tutorial = function(game)
{
	this.game;
	this.add;
    this.gameBackground = null;
	this.buttonManager = null;
    this.music = null;
    this.uiManager = null; 
	
	////////Gems//////////
	this.green = null;
	
	////////Images//////////
	this.bubble = null;
	this.tableImage = null;
	this.moneyImage = null;
	this.tableCoverImage = null;
    this.textImage = null;

	this.moneyText = null;

	this.money = 0;
	this.CusNum = 0;

	this.customerArray = [18]; 
	
	this.totalCustomers = 0;
	
	///////////////////////
	this.result = null;
    this.CheckBubble = null;
	this.TestHuman = null;
	this._customer = null;
	this.randomBubble = null;
	this.timerRun = false;
	
	this.bubbleImage = null;
	this.correctBubble = false;
};

theGame.Tutorial.prototype = 
{
//////////////////////////////////////Preload///////////////////////////////////////
    preload: function()
    {
        //Screen Background
        this.gameBackground = this.add.sprite(this.world.width*0.5, this.world.height*0.5, 'ToturialBackGround');
        this.gameBackground.anchor.set(0.5,0.5);
        
        this.textImage = this.add.sprite(this.world.width*0.5, this.world.height*0.37, 'Tutorial_Text');
        this.textImage.anchor.set(0.5,0.5);
		this.textImage.scale.setTo(1,1);
			
		//gemTable
		this.tableImage = this.add.sprite(this.world.width*0.5, this.world.height*0.88, 'TutorialTable');
        this.tableImage.anchor.set(0.5,0.5);
		
		// gem 
        this.red = this.add.button(this.world.width*0.365, this.world.height*0.85, 'orange', this.redclick); 
		this.red.alpha = 0.5;
		this.red.anchor.setTo(0.5,0.5);
        
		this.orangeGem = this.add.button(this.world.width*0.505, this.world.height*0.85, 'red', this.orangeclick, this, 1, 0, 2); //365
		this.orangeGem.anchor.setTo(0.5,0.5);
			
		this.green = this.add.button(this.world.width*0.645, this.world.height*0.85, 'green', this.greenclick);
		this.green.alpha = 0.5;
		this.green.anchor.setTo(0.5,0.5);
		
		//gemTable
		this.tableCoverImage = this.add.sprite(this.world.width*0.5, this.world.height*0.88, 'TableCover3');
        this.tableCoverImage.anchor.set(0.5,0.5);
    }, 
       
    create: function()
    {
		console.log("Tutorial");
		
		this.buttonManager = new ButtonManager(this);
		
        //spawn the first customer
		this.spawnCustomer();
		
		// fade manager
		theGame.FadeScreen = new FadeManager(this);
        theGame.FadeScreen.create();		
    },

	update: function()
    { 
		this.timeDown();
        this.destroyCover();
        this.TestTime();
		
		// move customer
		this._customer.moveCustomer();
		
		//Spawn customer
		if (this._customer.spawnCus == true)
		{
			this.spawnCustomer();
			this._customer.spawnCus =false;
		}	
		
		//come out next button go to level 2
		if (this.CusNum >= 1 && this._customer.TestHuman.done == true) // next level 1
		{
			this.buttonManager.createSkipButton(this.world.width*0.9, this.world.height*0.15);	
		}
		
		// call button
		theGame.FadeScreen.update(this.buttonManager.gametype);	
    }, 
	
	spawnCustomer:function()
    {
    	if(this.totalCustomers<1)
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
			this.game.time.events.add(Phaser.Timer.SECOND, this.moveToRight, this);
		}
	},
	
	moveToRight: function()
	{
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
    
    destroyText: function()
	{
		if (this._customer.TestHuman.IsMiddle == true)
		{
			this.textImage.destroy();	
		}
	},

	orangeclick: function() //Indian customer / orange gem is correct
	{
		if (this.orangeGem.events.onInputDown)
		{
			if (this._customer.canClick == true)
			{
				if(this.customerArray[0] == 18 && this._customer.randomBubble == 18 )
				{
					console.log(this.customerArray);
                    this._customer.Correct = true;
					this._customer.Angry = false;
					this._customer.TestHuman.animations.play('happy',15, true);
					this.timeRun = true;
					this._customer.destroyBubble();
					this.music = this.add.audio('correct');
					this.music.play();
					this.destroyText();
				}
				else 
				{
					 this._customer.Correct = false;	
				}
				this.CusNum += 1;
				
			}
			this._customer.canClick = false;
		}
	},
};