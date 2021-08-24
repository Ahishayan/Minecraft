var canvas = new fabric.Canvas("myCanvas");
block_w = 30;
block_h = 30;
var p_x = 100;
var p_y = 100;
var player_object = "";
var block_object = "";
function god_stuff() {
    fabric.Image.fromURL("player.png", function (Image1) {
        player_object = Image1;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({ top: p_y, left: p_x });
        canvas.add(player_object);
    })
}


function block(block) {
    fabric.Image.fromURL(block, function (Image) {
        block_object = Image;
        block_object.scaleToWidth(block_w);
        block_object.scaleToHeight(block_h);
        block_object.set({ top: p_y, left: p_x });
        canvas.add(block_object);
    })
}
god_stuff();

// day 2
window.addEventListener("keydown", keypressed);

function keypressed(e) {
    var keypressed1 = e.keyCode;
    console.log(keypressed1);
    if (keypressed1 == '80' && e.shiftKey) {
        console.log("shift ++ was pressed")
        block_w += 10
        block_h += 10
        document.getElementById("CW").innerHTML = block_w;
        document.getElementById("CH").innerHTML = block_h;
    }
    if (keypressed1 == '77' && e.shiftKey) {
        console.log("m+shift was pressed")
        block_w -= 10
        block_h -= 10
        document.getElementById("CW").innerHTML = block_w;
        document.getElementById("CH").innerHTML = block_h;
    }

    if(keypressed1=='83'){
        console.log("S")
        block("cloud.jpg");
        
    }
    if(keypressed1=='68'){
        console.log("D")
        block("dark_green.png");
        
    }
    if(keypressed1=='71'){
        console.log("g")
        block("ground.png");
        
    }
    if(keypressed1=='90'){
        console.log("z")
        block("lightgreen.png");
        
    }
    if(keypressed1=='78'){
        console.log("n")
        block("roof.jpg");
        
    }
    if(keypressed1=='76'){
        console.log("L")
        block("unique.png");
        
    }
    if(keypressed1=='87'){
        console.log("w")
        block("trunk.jpg");
        
    }
    if(keypressed1=='66'){
        console.log("b")
        block("wall.png");
        
    }
    if(keypressed1=='79'){
        console.log("o")
        block("yellow_wall.png");
        
    }
    if(keypressed1=='38'){
        console.log("Up")
       up() 
    }
    if(keypressed1=='40'){
        console.log("down")
        down()
    }
    if(keypressed1=='39'){
        console.log("rice")
        rice()
    }
    if(keypressed1=='37'){
        console.log("left")
        left()
    }
    
}
function up (){
if(p_y>-0) {
//set player y -blockh/
p_y=p_y-block_h;
console.log("block_image_height="+block_h)
console.log("Up key is pressed x="+p_x,p_y)
canvas.remove(player_object);
god_stuff();

}
}
function down (){
    if(p_y<=799) {
        //set player y -block h/
        p_y=p_y+block_h;
        console.log("block_image_height="+block_h)
        console.log("Down key is pressed x="+p_x,p_y)
        canvas.remove(player_object);
        god_stuff();}
            
}
function rice (){
   /* if(p_x<-900) {
        //set player x -block w/
        p_x=p_x+block_w;
        console.log("block_image_height="+block_w)
        console.log("Down key is pressed y="+p_y,p_x)
        canvas.remove(player_object);
        god_stuff();} */
 if(p_x<=900) {
    //set player x -block w/
    p_x=p_x+block_w;
    console.log("block_image_height="+block_w)
    console.log("Down key is pressed y="+p_y,p_x)
    canvas.remove(player_object);
    god_stuff();} }
function left (){
    if(p_x>-0) {
        //set player x -block w/
        p_x=p_x-block_w;
        console.log("block_image_height="+block_w)
        console.log("Down key is pressed y="+p_y,p_x)
        canvas.remove(player_object);
        god_stuff();}

}