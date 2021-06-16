var canvas=new fabric.canvas('myCanvas');

player_x=10;
player_y=20;

blockWidth=30;
blockHeight=30;

blockImg="";
playerImg="";

function uploadPlayer() {
    fabric.Image.fromURL("player.png",function(Img)
    {
        playerImg=Img;
        playerImg.scaleToHeight(150);
        playerImg.scaleToWidth(150);
        playerImg.set({
            top:player_x,
            left:player_y
        });
        canvas.add(playerImg);
    }
    );
}

function newImage(getPicture) {
    fabric.Image.fromURL(getPicture,function(Img)
    {
        blockImg=Img;
        blockImg.scaleToHeight(blockHeight);
        blockImg.scaleToWidth(blockWidth);
        blockImg.set({
            top:player_y,
            left:player_x
        });
        canvas.add(blockImg);
    }
}