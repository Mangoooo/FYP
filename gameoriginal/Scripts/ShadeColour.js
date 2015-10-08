theGame.ShadeColour = function(posX, posY, sprite, shade, colourType, scaleX, scaleY, game)
{
     // original positions
    this.posX = posX;
    this.posY = posY;
    
    
    Phaser.Sprite.call(this, game ,posX, posY, sprite);

    // sets sprite to the centre
    this.anchor.setTo(0.5,0.5);
    this.scale.setTo(scaleX, scaleY);
    this.ShadeColour.inputEnabled = false;
    
    this.shade = shade;
    
    this.colourType = colourType;
    
    this.ShadeColour.prototype.ObtainColour = function()
    {
          console.log("Error no valid colourType!");
        return 0xFFFFFF;
    }
};

//this.ShadeColour.prototype = Object.create(Phaser.Sprite.prototype);
// Define our constructor
//this.ShadeColour.Constructor = ShadeColour;