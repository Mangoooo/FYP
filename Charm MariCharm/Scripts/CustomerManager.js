function CustomerManager(game)
{
	this.game = game;
	this.randomCus = null;
	this.TestHuman = null;
	this.bubble = null;
	this.bubbleCreate = false;
	this.spawnCus = false;
	this._Request = false;
	this.randomBubble = null;
	this.customerNum = null;
	this.Angry = false;
//	this.timeRun = false;
	this.canClick = false;
    this.CheckBubble = null;
    this.Correct = false;
	this.coupleCorrect = false;
}

CustomerManager.prototype.create = function(RandomNum,posX, posY)
{
	
		//console.log(this.randomCus);
		switch(RandomNum)
		{
			case 0:
			{
				// Solo Western Customer / GREEN
				this.TestHuman = this.game.add.sprite(posX, posY, 'WesternSprite');
				this.customerNum = 0;
			}break;
			case 1:
			{
				// India Customer / ORANGE
				this.TestHuman = this.game.add.sprite(posX, posY, 'IndianSprite');
				this.customerNum = 1;
			}break;
			case 2:
			{
				//Chinese Customer / RED
				this.TestHuman = this.game.add.sprite(posX,posY, 'ChineseSprite');
				this.customerNum = 2;
			}break;
			case 3:
			{
				// Middle Eastern Customer / GREEN //COUPLE
				this.TestHuman = this.game.add.sprite(posX,posY, 'M_EarthSprite');
				this.customerNum = 3;
			}break;	
				
			/////////////////////// level 2 customer/////////////////////	
			case 4:
			{
				// India Customer / ORANGE
				this.TestHuman = this.game.add.sprite(posX, posY, 'IndianSprite_Orange');
				this.customerNum = 4;
			}break;
				
			case 5:
			{
				// India Customer / RED
				this.TestHuman = this.game.add.sprite(posX,posY, 'IndianSprite_Red'); //IndianSprite_red
				this.customerNum = 5;
			}break;	
				
			case 6:
			{
				// Middle Eastern Customer / GREEN //COUPLE
				this.TestHuman = this.game.add.sprite(posX,posY, 'M_EarthSprite');
				this.customerNum = 6;
			}break;
			
			case 7:
			{
				//Middle Eastern Customer / YELLOW //COUPLE
				this.TestHuman = this.game.add.sprite(posX,posY, 'M_EarthSprite_yellow');
				this.customerNum = 7;
			}break;
				
			case 8:
			{
				// Western Customer / yellow /COUPLE
				this.TestHuman = this.game.add.sprite(posX, posY, 'WesternSprite_green');//WesternSprite_yellow
				this.customerNum = 8;
			}break;
			
			case 9:
			{
				//Solo Western Customer / GREEN
				this.TestHuman = this.game.add.sprite(posX,posY, 'WesternSprite');
				this.customerNum = 9;
			}break;	
				
			///////////////////////////////LEVEL 3 CUSTOMER SPRITE///////////////////////////   
            case 10:
			{
				// Middle Eastern Customer / YELLOW
				this.TestHuman = this.game.add.sprite(posX, posY, 'M_EarthSprite_yellow3');
				this.customerNum = 10;
			}break;
			case 11:
			{
				// India Customer / ORANGE
				this.TestHuman = this.game.add.sprite(posX, posY, 'M_EarthSprite_blue3');
				this.customerNum = 11;
			}break;
			case 12:
			{
				//Chinese Customer / RED
				this.TestHuman = this.game.add.sprite(posX,posY, 'ChineseSprite_white3');
				this.customerNum = 12;
			}break;
			case 13:
			{
				// 
				this.TestHuman = this.game.add.sprite(posX,posY, 'ChineseSprite_red3');
				this.customerNum = 13;
			}break;	
				
			case 14:
			{
				// 
				this.TestHuman = this.game.add.sprite(posX, posY, 'IndianSprite_white3');
				this.customerNum = 14;
			}break;
				
			case 15:
			{
				// 
				this.TestHuman = this.game.add.sprite(posX,posY, 'IndianSprite_red3');
				this.customerNum = 15;
			}break;	
				
			case 16:
			{
				//WesternSolo / Orange3
				
				this.TestHuman = this.game.add.sprite(posX,posY, 'WesternSprite_white3');
				this.customerNum = 16;
			}break;
			
			case 17:
			{
				//WesternCouple / Green3
				this.TestHuman = this.game.add.sprite(posX,posY, 'WesternSprite_blue3');
				this.customerNum = 17;
			}break;
				
			//Tutorial 
			case 18:
			{
				//WesternCouple / Green3
				this.TestHuman = this.game.add.sprite(posX,posY, 'IndianSprite_red3');
				this.customerNum = 18;
			}break;
		}
		this.TestHuman.anchor.set(0.5,0.5);
		this.game.physics.enable(this.TestHuman, Phaser.Physics.ARCADE);
		this.TestHuman.body.velocity.setTo(0,0);
		this.TestHuman.checkWorldBounds = true;
		this.TestHuman.events.onOutOfBounds.add(this.outScreen, this);
		this.TestHuman.animations.add('left', [0,1,2,3]);
		this.TestHuman.animations.add('still', [4]);
		this.TestHuman.animations.add('angry', [5]);
		this.TestHuman.animations.add('angryRight', [6,7,8,9]);
		this.TestHuman.animations.add('happy', [10]);
		this.TestHuman.animations.add('happyRight', [11,12,13,14]);
		this.TestHuman.IsMiddle = false;
		this.TestHuman.done = false;
		this.TestHuman.spawned = true;
		this.totalCustomers += 1;
        
},
	
CustomerManager.prototype.LoadBubble = function(RandomNum,posX, posY)
{
		switch(RandomNum)
		{
			case 0:
			{
				//Western Blue
				this.bubble = this.game.add.sprite(posX, posY, 'WesternBubble');
			}break;
			case 1:
			{
				//India Red
				this.bubble = this.game.add.sprite(posX, posY, 'IndianBubble');
			}break;
			case 2:
			{
				//China Green
				this.bubble = this.game.add.sprite(posX,posY, 'ChineseBubble');
			}break;
			case 3:
			{
				//Middle eastern Green
				this.bubble = this.game.add.sprite(posX,posY, 'MiddleEasternBubble');
			}break;
				
			////////////////////////Level 2 bubble////////////////////////
			case 4:
			{
				this.bubble = this.game.add.sprite(posX, posY, 'Indian_Orange');
			}break;
				
			case 5:
			{
				this.bubble = this.game.add.sprite(posX, posY, 'Indian_Red');
			}break;
				
			case 6:
			{
				this.bubble = this.game.add.sprite(posX,posY, 'MiddleEastern_Green');
			}break;
				
			case 7:
			{
				this.bubble = this.game.add.sprite(posX,posY, 'MiddleEastern_Yellow');
			}break;
				
			case 8:
			{
				this.bubble = this.game.add.sprite(posX,posY, 'WesternCouple_Yellow');
			}break;
				
			case 9:
			{
				//Middle eastern Green
				this.bubble = this.game.add.sprite(posX,posY, 'WesternSolo_Green');
			}break;
				
			//////////////////////LEVEL 3 BUBBLE/////////////////////    
            case 10:
			{
				//Western Blue
				this.bubble = this.game.add.sprite(posX, posY, 'Chinese_Red');
			}break;
			case 11:
			{
				//India Red
				//this.bubble = this.game.add.sprite(posX, posY, 'Chinese_White');
				this.bubble = this.game.add.sprite(posX, posY, 'MiddleEastern_Blue');
			}break;
			case 12:
			{
				//China white
				this.bubble = this.game.add.sprite(posX, posY, 'Chinese_White');
			}break;
			case 13:
			{
				//chinese red
				this.bubble = this.game.add.sprite(posX, posY, 'Chinese_Red');
			}break;
				
			case 14:
			{
				this.bubble = this.game.add.sprite(posX, posY, 'Indian_White'); //MiddleEastern_Blue
			}break;
				
			case 15:
			{
				this.bubble = this.game.add.sprite(posX, posY, 'Indian_Red3');
			}break;
				
			case 16:
			{
				//WesternSolo / Orange3
				this.bubble = this.game.add.sprite(posX,posY, 'WesternCouple_White');
			}break;
				
			case 17:
			{
				//WesternCouple / Green3
				this.bubble = this.game.add.sprite(posX,posY, 'WesternSolo_Blue');
			}break;
				
			//Tutotial
			case 18:
			{
				//Indian / red
				this.bubble = this.game.add.sprite(posX,posY * 1.5, 'Bubble_Tutorial_Indian');
				this.bubble.scale.setTo(0.6,0.6);
			}break;
		}
		this.bubble.anchor.set(0.5,0.5);
},
	
CustomerManager.prototype.update = function()
{ 
},

CustomerManager.prototype.outScreen = function()
{
	this.spawnCus = true;
},
	
CustomerManager.prototype.moveCustomer = function()
{
	if(this.TestHuman.done)
	{
		this.TestHuman.x += 5; //this.TestHuman.x += 3;
        
        if (this.Correct == false)
        {
           this.CheckBubble = this.game.add.sprite(this.game.world.width*0.3, this.game.world.height*0.05, 'Bubble_WrongSolo');
        }
        else if (this.Correct == true)
        {
            this.CheckBubble = this.game.add.sprite(this.game.world.width*0.3, this.game.world.height*0.05, 'Bubble_Correct');   
        }
		
//       if (this.coupleCorrect == false)
//        {
//           this.CheckBubble = this.game.add.sprite(this.game.world.width*0.3, this.game.world.height*0.05, 'Bubble_WrongSolo');
//        }
//        else if (this.coupleCorrect == true)
//        {
//            this.CheckBubble = this.game.add.sprite(this.game.world.width*0.3, this.game.world.height*0.05, 'Bubble_WrongCouple');   
//        }
		
		if (this.Angry == false)
		{
			this.TestHuman.animations.play('happyRight',15, true);
		}
		else if (this.Angry == true)
		{
			this.TestHuman.animations.play('angryRight',15, true);
		}
       
	 	if(this.TestHuman.x >this.game.world.width*0.8)
		{
			if(this.result !=null)
			{
				this.result.destroy();
			}
            else if (this.CheckBubble != null)
            {
                this.CheckBubble.destroy();
            } 
		}
	}
	if(this.TestHuman.IsMiddle)
	{
		if(this.bubbleCreate == false)
		{
			this.tagnum = this.randomCus;
			this.bubbleCreate = true;
		}
		this.TestHuman.body.velocity.setTo(0,0);
	}else
	{
		if(this.TestHuman.x < this.game.world.width*0.5)
		{
			this.TestHuman.x += 5;
			this.TestHuman.animations.play('left',15, true);
//			this.canClick = false;
		}else
		{
			this.TestHuman.IsMiddle = true;
			this.TestHuman.animations.play('still',15, true);
			this.CreateBubble();
			this.bubbleCreate = true;
			this.canClick = true;
		}
	}
},

CustomerManager.prototype.CreateBubble = function()
{

//	this.randomBubble = this.game.rnd.integerInRange(0,0);
	if (this.customerNum == 0)
	{
		this.randomBubble = 0;
	}
	else if (this.customerNum == 1)
	{
		this.randomBubble = 1;
	}
	else if (this.customerNum == 2)
	{
		this.randomBubble = 2;
	}
	else if (this.customerNum == 3)
	{
		this.randomBubble = 3;
	}
	else if (this.customerNum == 4)
	{
		this.randomBubble = 4;
	}
	else if (this.customerNum == 5)
	{
		this.randomBubble = 5;
	}
	else if (this.customerNum == 6)
	{
		this.randomBubble = 6;
	}
	else if (this.customerNum == 7)
	{
		this.randomBubble = 7;
	}
	else if (this.customerNum == 8)
	{
		this.randomBubble = 8;
	}
	else if (this.customerNum == 9)
	{
		this.randomBubble = 9;
	}
	else if (this.customerNum == 10)
	{
		this.randomBubble = 10;
	}
	else if (this.customerNum == 11)
	{
		this.randomBubble = 11;
	}
	else if (this.customerNum == 12)
	{
		this.randomBubble = 12;
	}
	else if (this.customerNum == 13)
	{
		this.randomBubble = 13;
	}
	else if (this.customerNum == 14)
	{
		this.randomBubble = 14;
	}
	else if (this.customerNum == 15)
	{
		this.randomBubble = 15;
	}
	else if (this.customerNum == 16)
	{
		this.randomBubble = 16;
	}
	else if (this.customerNum == 17)
	{
		this.randomBubble = 17;
	}
	else if (this.customerNum == 18)
	{
		this.randomBubble = 18;
	}
	else
	{
		this.randomBubble = 0;
	}


	this.LoadBubble(this.randomBubble,500,120);
},

CustomerManager.prototype.destroyBubble = function()
{
	this.bubble.destroy();
};

//CustomerManager.prototype.destroyCorrectBubble = function()
//{
//	this.CheckBubble.destroy();
//};
	