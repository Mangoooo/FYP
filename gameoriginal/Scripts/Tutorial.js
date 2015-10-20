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

	this.moneyText = null;

	this.money = 0;
	this.CusNum = 0;

	this.customerArray = [1]; 
	
	this.totalCustomers = 0;
	
	///////////////////////
	this.result = null;
	this.TestHuman = null;
	this._customer = null;
	this.randomBubble = null;

	this.timerRun = false;
	

};

theGame.Tutorial.prototype = 
{
//////////////////////////////////////Preload///////////////////////////////////////
    preload: function()
    {
        //Screen Background
        this.gameBackground = this.add.sprite(this.world.width*0.5, this.world.height*0.5, 'ToturialBackGround');
        this.gameBackground.anchor.set(0.5,0.5);
			
		//gemTable
		this.tableImage = this.add.sprite(this.world.width*0.5, this.world.height*0.88, 'TutorialTable');
        this.tableImage.anchor.set(0.5,0.5);
		
		// gem 
		this.orangeGem = this.add.button(this.world.width*0.365, this.world.height*0.85, 'orange', this.redclick);
		this.orangeGem.alpha = 0.5;
		this.orangeGem.anchor.setTo(0.5,0.5);
		
       	this.red = this.add.button(this.world.width*0.505, this.world.height*0.85, 'red', this.orangeclick, this, 1, 0, 2); 
		this.red.anchor.setTo(0.5,0.5);
			
		this.green = this.add.button(this.world.width*0.645, this.world.height*0.85, 'green', this.greenclick);
		this.green.alpha = 0.5;
		this.green.anchor.setTo(0.5,0.5);
		
		//gemTable
		this.tableCoverImage = this.add.sprite(this.world.width*0.5, this.world.height*0.88, 'TableCover3');
        this.tableCoverImage.anchor.set(0.5,0.5);
		
		//music
		
		
    }, 
       
    create: function()
    {
		console.log("Tutorial");
		
		this.buttonManager = new ButtonManager(this);
		
        //spawn the first customer
		this.spawnCustomer();
	
		
		//Money
//		this.moneyImage = this.add.sprite(this.world.width*0.825, this.world.height*0.5, 'moneyImage');
//		this.moneyImage.frame = 0;
//		this.moneyImage.anchor.set(0.5,0.5);
		
		// fade manager
		theGame.FadeScreen = new FadeManager(this);
        theGame.FadeScreen.create();		
    },

	update: function()
    { 
		this.timeDown();
			this.destroyCover();

		
		// move customer
		this._customer.moveCustomer();
		
		//Spawn customer
		if (this._customer.spawnCus == true)
		{
			this.spawnCustomer();
			this._customer.spawnCus =false;
		}	
		
		//print money box / how many you have
//		if(this.money >= 10 && this.money <= 19)
//		{
//			this.moneyImage.frame = 1;
//		}
		
		//come out next button go to level 2
		if (this.CusNum >= 1 && this._customer.TestHuman.done == true) // next level 5
		{
			this.buttonManager.createSkipButton(this.world.width*0.5, this.world.height*0.5);	
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
			if(this.customerArray[0] == 1 && this._customer.randomBubble == 1 )
			{
				console.log("happy");
				this._customer.Angry = false;
				this._customer.TestHuman.animations.play('happy',10, true);
				this.timeRun = true;
				this._customer.destroyBubble();
				this.music = this.add.audio('correct');
//				this.music.volume = 100;
    			this.music.play();
			}
			else 
			{
				console.log("unhappy");
				this.timeRun = true;
				this._customer.Angry = true;
				this._customer.destroyBubble();
				this._customer.TestHuman.animations.play('angry',10, true);
				this.music = this.add.audio('wrong');
				this.music.play();
			}
			this.CusNum += 1;
		}
	},
};