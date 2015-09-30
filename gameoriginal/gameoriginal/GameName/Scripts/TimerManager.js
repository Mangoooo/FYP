function TimerManager(countdownTime,timerInterval)
{
	this.originalCounter = countdownTime;
	this.counter = countdownTime;
	
	this.startTime = 0;
	
	this.TIMER_INTERVAL = timerInterval;
	this.isPaused = false;
	this.pausedInterval = 0;
	this.isComplete = false;
	this.isCountingDown = false;
};

TimerManager.prototype.StartTimer = function ()
{
    //starting timer time
	this.startTime = game.time.time;
    this.isCountingDown = true;
},

TimerManager.prototype.UpdateTimer = function ()
{
    if(!this.isPaused && this.isCountingDown)
    {
        if(game.time.elapsedSecondsSince(this.startTime) > this.TIMER_INTERVAL)   
       {
           this.startTime = game.time.time;
           this.UpdateTimerCounter();
	   }
    }
},

// Callback Function
TimerManager.prototype.UpdateTimerCounter = function ()
{
    // Counter has finished counting down!
    if(this.counter > 0)
    {
        this.counter --;   
    }
    else
    {
        // The timer has ended
        this.isCompleted = true;
	}
},

//Pause our timer
TimerManager.prototype.PauseTimer = function ()
{
    this.isPaused = true;   
    this.pausedInterval = game.time.elapsedSecondsSince(this.startTime);
},

//Resume our timer
TimerManager.prototype.ResumeTimer = function ()
{
    if(this.isPaused)
    {
        this.startTime = game.time.time + this.pausedInterval;
    }
    
    this.isPaused = false;
},

//Restart our timer
TimerManager.prototype.StopTimer = function ()
{
    this.isCompleted = false;
    this.counter = this.originalCounter;
    this.isCountingDown = false;
};