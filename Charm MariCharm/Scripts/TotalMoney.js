theGame.TotalMoney = function(game)
{
    this.mainmenuBackground = null;
    this.music = null;
    this.uiManager = null;
    this.buttonManager = null;
	
	this.moneyText = null;
	this.gemText = null;
};

theGame.TotalMoney.prototype = 
{
    create: function()
    {
        //Screen Background
        this.mainmenuBackground = this.add.sprite(this.world.width*0.5, this.world.height*0.5, 'ScoreScreen_Total');
        this.mainmenuBackground.anchor.set(0.5,0.5);
        
        //Button
        this.buttonManager = new ButtonManager(this);
        this.buttonManager.CreateGameEnd(this.world.width*0.5, this.world.height*0.8);
//		this.buttonManager.createNextButton(this.world.width*0.5, this.world.height*0.5);	
//        this.buttonManager.createLevel3Button(this.world.width*0.5, this.world.height*0.5);
		
        //Fade in and out
//        theGame.FadeScreen = new FadeManager(this);
//        theGame.FadeScreen.create();
//		
//			
//		this.music = this.add.audio('BGmusic');
//    	this.music.play();
//		this.music.volume = 100;
//      this.music.loop = true;
		
		this.money = theGame.money3 + theGame.money2 + theGame.money1;
//		this.totalGems = theGame.TotalGems1 + theGame.TotalGems2 + theGame.TotalGems3;
		
		//timerText
        this.moneyText = this.add.text(this.world.width*0.55, this.world.height*0.5, ' ', { font: "50px Arial", fill: "#000000", align: "center" });
    	this.moneyText.anchor.setTo(0.5, 0.5);

//		  this.gemText = this.add.text(this.world.width*0.55, this.world.height*0.45, ' ', { font: "50px Arial", fill: "#000000", align: "center" });
//    	this.gemText.anchor.setTo(0.5, 0.5);
    }, 
    
    update: function()
    {
        theGame.FadeScreen.update(this.buttonManager.gametype);
		this.moneyText.setText(' ' + this.money); // print timer number
		//this.totalGems.setText(' ' + this.totalGems); // print timer number
    },
};