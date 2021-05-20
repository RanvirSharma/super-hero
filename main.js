var canvas=new fabric.Canvas("myCanvas");
playerx=10;
playery=10;
block_height=30;
block_width=30;
var playerimg="";
var blockimg="";
function playerupdate(){
    fabric.Image.fromURL("player.png" ,function(Img){
        playerimg=Img;
        playerimg.scaleToWidth(150);
        playerimg.scaleToHeight(140);
        playerimg.set({
            top:playery,
            left:playerx

        });
        canvas.add(playerimg);
    });
}
function blockupdate(get_image){
    fabric.Image.fromURL(get_image ,function(Img){
        blockimg=Img;
        blockimg.scaleToWidth(block_width);
        blockimg.scaleToHeight(block_height);
        blockimg.set({
            top:playery,
            left:playerx

        });
        canvas.add(blockimg);
    });
}
window.addEventListener("keydown",mykeydown);
function mykeydown(e){
    var keypress=e.keyCode;
    if (e.shiftKey == true && keypress == '80'){
        block_width=block_width+10;
        block_height=block_height+10;
        document.getElementById("Current_width").innerHTML=block_width;
        document.getElementById("Current_height").innerHTML=block_height;
    }
    if (e.shiftKey == true && keypress == '77'){
        block_width=block_width-10;
        block_height=block_height-10;
        document.getElementById("Current_width").innerHTML=block_width;
        document.getElementById("Current_height").innerHTML=block_height;
    }
    if(keypress == '38') { up(); }
    if(keypress == '40') { down(); }
    if(keypress == '37') { left(); }
    if(keypress == '39') { right(); }
    if(keypress == '87') { blockupdate('wall.jpg'); }
    if(keypress == '71') { blockupdate('ground.png'); }
    if(keypress == '76') { blockupdate('light_green.png'); }
    if(keypress == '84') { blockupdate('trunk.jpg'); }
    if(keypress == '82') { blockupdate('roof.jpg'); }
    if(keypress == '89') { blockupdate('yellow_wall.png'); }
    if(keypress == '68') { blockupdate('dark_green.png'); }
    if(keypress == '67') { blockupdate('cloud.jpg'); }
}
function up(){
    if (playery>=0){
        playery=playery-block_height;
        console.log("blockheight"+block_height);
        console.log("x="+playerx+"y="+playery);
        canvas.remove(playerimg);
        playerupdate();
    }
}
function down(){
    if (playery<=500){
        playery=playery+block_height;
        console.log("blockheight"+block_height);
        console.log("x="+playerx+"y="+playery);
        canvas.remove(playerimg);
        playerupdate();
    }
}
function left(){
    if (playerx>0){
        playerx=playerx-block_width;
        console.log("blockwidth"+block_width);
        console.log("x="+playerx+"y="+playery);
        canvas.remove(playerimg);
        playerupdate();
    }
}
function right(){
    if (playerx<=850){
        playerx=playerx+block_width;
        console.log("blockwidth"+block_width);
        console.log("x="+playerx+"y="+playery);
        canvas.remove(playerimg);
        playerupdate();
    }
}