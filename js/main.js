var myArray

//another seatbar
function SeatR(){

}


///
function setup() {
    //create canvas
    createCanvas(800,700);

// Left and right of orchestra function setup---------------------
    var x = 0;
    var y = 0;
    var leftrightWidth = 110;
    {
    for(var i = 0; i<72; i++){
        console.log(i);
        drawFirstlr(x,y);
        x += 10;
        //check if x is past the grid width
        if(x > leftrightWidth){
            //set x back to the begnning
            x = 0;
            //move y down
            y += 12;
        }//end if
    }//end loop

    for (var i = 0; i<192; i++){
        drawSecondlr(x,y);
        x += 10;
        if(x > leftrightWidth){
            x = 0;
            y += 12;
        }
    }

    for (var i = 0; i <216; i++){
        drawThirdlr(x,y);
        x += 10;
        if(x > leftrightWidth){
            x = 0;
            y += 12;
        }
    }
    }
// Left and right of orchestra row are finished----------------

// Middle of orchestra row function setup----------------------
    var centerWidth = 150;
    var c = 0;
    var d = 0;
    {
    for(var l = 0; l<96; l++){
        drawCenter1(c,d);
        c += 10;
        if(c > centerWidth){
            c = 0;
            d += 12;
        }
    }

    for(var l = 0; l<240; l++){
        drawCenter2(c,d);
        c += 10;
        if(c > centerWidth){
            c = 0;
            d += 12;
        }
    }

    for(var l = 0; l<64; l++){
        drawCenter3(c,d);
        c += 10;
        if(c > centerWidth){
            c = 0;
            d += 12;
        }
    }

    for(var l = 0; l<256; l++){
        drawCenter4(c,d);
        c += 10;
        if(c > centerWidth){
            c = 0;
            d += 12;
        }
    }
    }
}// function setup end---------------------------------


{//orchestra
function drawFirstlr (startX,startY){
    strokeWeight(1);
    stroke('black');
    fill('yellow');
    rect(startX+200,startY+10,10,10);
    rect(startX+500,startY+10,10,10);
}
function drawSecondlr(startX,startY){
    fill('orange');
    rect(startX+200,startY-2,10,10);
    rect(startX+500,startY-2,10,10);
}
function drawThirdlr(startX,startY){
    fill('brown');
    rect(startX+200,startY-2,10,10);
    rect(startX+500,startY-2,10,10);
}

//LR end------------------------------------------------

function drawCenter1(startX,startY){
    fill('yellow');
    rect(startX+330,startY-10,10,10);
}
function drawCenter2(startX,startY){
    fill('orange');
    rect(startX+330,startY-10,10,10);
}
function drawCenter3(startX,startY){
    fill('peru');
    rect(startX+330,startY-10,10,10);
}
function drawCenter4(startX,startY){
    fill('brown');
    rect(startX+330,startY-10,10,10);
}
}
