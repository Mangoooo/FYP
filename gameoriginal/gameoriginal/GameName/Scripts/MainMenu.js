theGame.MainMenu = function(game)
{
    this.mainmenuBackground = null;
    //this.music = null;
    this.uiManager = null;
    this.buttonManager = null;
};

theGame.MainMenu.prototype = 
{
    preload: function()
    {
        //Screen Background
        this.mainmenuBackground = this.add.sprite(this.world.width*0.5, this.world.height*0.5, 'MainMenuBackGround');
        this.mainmenuBackground.anchor.set(0.5,0.5);
        
        //Button
        this.buttonManager = new ButtonManager(this);

        this.buttonManager.startGameButton(this.world.width*0.5, this.world.height*0.5);
        
        //Fade in and out
        theGame.FadeScreen = new FadeManager(this);
        theGame.FadeScreen.create();
    }, 
    
    create: function()
    {
    },
    
    update: function()
    {
        theGame.FadeScreen.update(this.buttonManager.gametype);
    }
}