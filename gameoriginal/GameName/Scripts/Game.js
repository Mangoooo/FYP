theGame.Game = function(game)
{
    this.gameBackground = null;
    this.music = null;
    this.uiManager = null;
	
	this.timerBar; 
	this.FontTimer_Object;
};

theGame.Game.prototype = 
{
    create: function()
    {
        //Screen Background
        this.gameBackground = this.add.sprite(this.world.width*0.5, this.world.height*0.5, 'GameBackGround');
        this.gameBackground.anchor.set(0.5,0.5);
		
		//Loading empty timer bar
		this.emptyTimerBar = this.add.sprite(this.world.width*0.5, this.world.height*0.08, 'emptyTimerBar');
        this.emptyTimerBar.anchor.set(0.5,0.5);
	
		//loading timer bar
		 this.timerBar = this.add.sprite(this.world.width*0.5, this.world.height*0.08, 'timerBar');
        this.timerBar.anchor.set(0.5,0.5);
    }, 
    
    update: function()
    {
	},
};