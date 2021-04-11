canvas = document.getElementById("my_Canvas");
ctx =  canvas.getContext("2d");

car1_width = 120;
car1_height = 70;
car1_x = 10;
car1_y = 10;
car1_image = "car1.png";

car2_width = 120;
car2_height = 70;
car2_x = 10;
car2_y = 90;
car2_image = "car2.png";
background_image = "racing.jpg";

function add(){
    background_ImageTag = new Image();
    background_ImageTag.src = background_image;
    background_ImageTag.onload =  upload_background;
    car1_ImageTag = new Image();
    car1_ImageTag.src = car1_image;
    car1_ImageTag.onload =  upload_car1;
    car2_ImageTag=new Image();
    car2_ImageTag.src=car2_image;
    car2_ImageTag.onload=upload_car2;
}

function upload_background(){
ctx.drawImage(background_ImageTag,0,0,canvas.width,canvas.height);
}

function upload_car1(){
    ctx.drawImage(car1_ImageTag,car1_x,car1_y,car1_width,car1_height);
    }

    function upload_car2(){
        ctx.drawImage(car2_ImageTag,car2_x,car2_y,car2_width,car2_height);
        }

    window.addEventListener("keydown",keyDown);

    function keyDown(e){
        keyPressed = e.keyCode;
        console.log(keyPressed);
        if(keyPressed =="38"){
            up();
            console.log(up);

        }
        if(keyPressed =="40"){
            down();
            console.log(down);

        }
        if(keyPressed =="37"){
            left();
            console.log(left);

        }
        if(keyPressed =="39"){
            right();
            console.log(right);

        }
        


        if(keyPressed =="87"){
            up2();
            console.log(up2);

        }
        if(keyPressed =="83"){
            down2();
            console.log(down2);

        }
        if(keyPressed =="65"){
            left2();
            console.log(left2);

        }
        if(keyPressed =="68"){
            right2();
            console.log(right2);

        }

        if(car1_x>700){
        console.log("Car1 Won");
        document.getElementById("game_status").innerHTML = "Car 1 Won!!";
        }

        if(car2_x>700){
            console.log("Car2 Won");
            document.getElementById("game_status").innerHTML = "Car 2 Won!!";
            }
    }


function up(){
    if(car1_y>=0){
    car1_y=car1_y - 10;
    console.log("When up arrow is clicked x = "+ car1_x + "y = " + car1_y);
    upload_background();
    upload_car1();
    upload_car2();

    }
}

function down(){
    if(car1_y<=500){
    car1_y=car1_y + 10;
    console.log("When down arrow is clicked x = "+ car1_x + "y = " + car1_y);
    upload_background();
    upload_car1();
    upload_car2();

    }
}

function left(){
    if(car1_x>=0){
    car1_x=car1_x - 10;
    console.log("When left arrow is clicked x = "+ car1_x + "y = " + car1_y);
    upload_background();
    upload_car1();
    upload_car2();

    }
}

function right(){
    if(car1_x<=700){
    car1_x=car1_x + 10;
    console.log("When right arrow is clicked x = "+ car1_x + "y = " + car1_y);
    upload_background();
    upload_car1();
    upload_car2();

    }
}


function up2(){
    if(car2_y>=0){
    car2_y=car2_y - 10;
    console.log("When up arrow is clicked x = "+ car2_x + "y = " + car2_y);
    upload_background();
    upload_car1();
    upload_car2();

    }
}

function down2(){
    if(car2_y<=500){
    car2_y=car2_y + 10;
    console.log("When down arrow is clicked x = "+ car2_x + "y = " + car2_y);
    upload_background();
    upload_car1();
    upload_car2();

    }
}

function left2(){
    if(car2_x>=0){
    car2_x=car2_x - 10;
    console.log("When left arrow is clicked x = "+ car2_x + "y = " + car2_y);
    upload_background();
    upload_car1();
    upload_car2();

    }
}

function right2(){
    if(car2_x<=700){
    car2_x=car2_x + 10;
    console.log("When right arrow is clicked x = "+ car2_x + "y = " + car2_y);
    upload_background();
    upload_car1();
    upload_car2();

    }
}
