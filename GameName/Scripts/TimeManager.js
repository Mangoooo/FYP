function TimeManager(game)
{
    this.game = game;
    this.totalTime = 0;
    this.currentTime = 0;
    this.timeSet = 0;
    this.timeDown = 0;
    this.durationTime = 0;
    this.timeUp = 0;
    this.minutes = 0;
    
    this.timeBar = null;
    this.timeBarComplete = null;
    
    this.timer = null;
    this.countDownTimer = null;
    
    this.isPuase = false;
    this.gameOver = false;
//	this.gameOverImage = null;
}
     
TimeManager.prototype.createTimeBar = function(posx, posy, key, time) //Time Bar 
{
    this.timeBar = this.game.add.sprite(posx, posy, key);
    this.timeBar.anchor.set(0, 1);
    this.timeBarComplete = this.timeBar.width;

    this.timeSet = time;
    this.totalTime = this.timeSet;
    this.timer = this.game.time.create(false);
    this.timer.loop(Phaser.Timer.SECOND, this.timeBarCountDown, this);
    this.timer.start();
}
TimeManager.prototype.timeBarCountDown = function(posx, posy)
{
    if(this.timeSet > 0)
    {   
        this.timeSet --;
        this.currentTime = this.timeSet;
        this.timeBar.cropEnabled = true;
        this.timeBar.width = (this.currentTime/this.totalTime)* this.timeBarComplete;
    }
    if(this.currentTime <= 0)
    {
        this.gameOver = true;
		
//		this.buttonManager = new ButtonManager(this);
//		this.buttonManager.createButton(this.world.width*0.5, this.world.height*0.5, 'nextButton', 3);

//		this.stopDownTime();
    }
	console.log(this.gameOver);
};
   
TimeManager.prototype.createTimerDown = function(time) //Count Down Timer 
{
    this.timeDown = time;
    this.countDownTimer = this.game.time.create(false);
    this.countDownTimer.loop(100, this.timeCountDown, this);
    this.countDownTimer.start();
}
TimeManager.prototype.timeCountDown = function()
{
    if(this.timeDown > 0)
    {
        this.timeDown --;
    }
    if(this.timeDown <= 0)
    {
        console.log("when 0 :");
    }
};

TimeManager.prototype.stopDownTime = function()
{
    this.countDownTimer.stop();
}

TimeManager.prototype.createTimerUp = function() //Count Up Timer
{
    this.timer = this.game.time.create(false);
    this.timer.loop(1000, this.timeCountUp, this);
    this.timer.start();
}
TimeManager.prototype.timeCountUp = function()
{
    this.timeUp++;
    if(this.timeUp >= 60)
    {
        this.timeUp = 0;
        this.minutes += 1;
    }
}

//TimeManager.prototype.timePause = function() //Time Pause
//{
//    this.isPuase = true;
//    this.timer.pause();
//}
//
//TimeManager.prototype.timeResume = function()  // Resume 
//{
//    this.isPuase = false;
//    this.timer.resume();
//}
//
TimeManager.prototype.timeStop = function() // Stop
{
    this.timer.stop();
}

//TimeManager.prototype.timeReset = function() // reset
//{
//    this.timeSet = this.totalTime;
//}
