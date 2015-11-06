theGame.Game = function(game)
{
    this.gameBackground = null;
    this.music = null;
    this.uiManager = null; 
	
	this.items1 = null;
	this.items2 = null;
	this.items3 = null;
	this.items4 = null;
	this.items5 = null;
	
	this.numOfItems = 5;
	
	this._target = null;
	this.totalTarget = 0;
	this.TargetArray = [0,1,2,3,4,5];
};


// shooting game carnival

theGame.Game.prototype = 
{
    preload: function()
    {
        //Screen Background
        this.gameBackground = this.add.sprite(this.world.width*0.5, this.world.height*0.5, 'GameBackGround');
        this.gameBackground.anchor.set(0.5,0.5);
    }, 
    
    create: function()
    {
//		this.itemTypes = [
//			'blue',
//			'green',
//			'red',
//			'yellow',
//            'orange'		
//		];
//		
//		this.itemWidth = 150;
//		this.itemHeight = 150;
//		
//		this.itemsGroup = this.game.add.group();
//		for (var i = 0; i <= this.numOfItems; i++)
//		{
////			this.createItem(this.Type);
//			this.createItem(this.Type);
//		}
//		
//		this.initItems();
//		this._target = new TargetManager(this);
//		
//		this._target.TargetImage(this.world.width*0.5, this.world.height*0.5);
    },
    
    update: function()
    {
//        console.log("destroy");
		this.spawnTarget();
    },
	
	spawnTarget: function()
	{
		if (this.totalTarget < 5)
		{
			this._target = new TargetManager(this);
			this._target.create(this.TargetArray[this.totalTarget], 500, 500);
			this.totalTarget++;
		}
	},
	
	initItems: function()
	{
//		this.itemsGroup = this.game.add.group();
//		
//		this.items1 = this.game.add.sprite(800, 250, 'red');
//		this.items1.inputEnabled = true;
//		this.items1.input.useHandCursor = true;
//		this.items1.events.onInputDown.add(this.destroySprite, this);
//		this.itemsGroup.add(this.items1);
//		
//		this.items2 = this.game.add.sprite(600, 250, 'green');
//		this.items2.inputEnabled = true;
//		this.items2.input.useHandCursor = true;
//		this.items2.events.onInputDown.add(this.destroySprite, this);
//		
//		this.items3 = this.itemsGroup.create(400, 250, 'blue');
//		this.items3.inputEnabled = true;
//		this.items3.input.useHandCursor = true;
//		this.items3.events.onInputDown.add(this.destroySprite, this);
//		
//		this.items4 = this.itemsGroup.create(200, 250, 'yellow');
//		this.items4.inputEnabled = true;
//		this.items4.input.useHandCursor = true;
//		this.items4.events.onInputDown.add(this.destroySprite, this);
//		
//		this.items5 = this.itemsGroup.create(0, 250, 'orange');
//		this.items5.inputEnabled = true;
//		this.items5.input.useHandCursor = true;
//		this.items5.events.onInputDown.add(this.destroySprite, this);
		
	},
	
	createItem: function(Type)
	{
//		this.itemsGroup.create(360 + Math.random() * 200, 120 + Math.random() * 200,'red','green');

//		console.log(this.itemsGroup);
//		var rand = (Type != null ? Type : Math.floor(Math.random()*5));
//
//		if(rand == 0) 
//		{
//			console.log("0");
//			tile = this.itemsGroup.create(800, 0, 'red');
//		}
//		else if(rand == 1)
//		{
//			console.log("1");
//			tile = this.itemsGroup.create(600, 0, 'green');
//		}
//		else if(rand == 2) 
//		{
//			console.log("2");
//			tile = this.itemsGroup.create(400, 0, 'blue');
//		}
//		else if(rand == 3)
//		{
//			console.log("3");
//			tile = this.itemsGroup.create(200, 0, 'yellow');
//		}
//		else if(rand == 4)
//		{
//			console.log("4");
//			tile = this.itemsGroup.create(0, 0, 'orange');
//		}
//		tile.inputEnabled = true;
//		tile.input.useHandCursor = true;
//		tile.events.onInputDown.add(this.destroySprite, this);
//		
//		tile = this.game.rnd.between(0,4);
//		return rand;
	},
	
	destroySprite: function (sprite)
	{
		sprite.destroy();	
	}
	
}