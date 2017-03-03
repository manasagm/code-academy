var currentScene = 0;
var score = 0;
var btn1 = {
    x: 350,
    y: 250,
    width: 100,
    height: 50,

};


var btn3 = {
    x: 350,
    y: 310,
    width: 100,
    height: 50
};

var page1Func;

var drawButton = function(btn) {
    fill(0, 234, 255);
    ellipse(btn.x, btn.y, btn.width, btn.height);
    fill(0, 0, 0);
    textSize(19);
    textAlign("CENTER");
    text("Start", btn1.x - 15, btn1.y + 5);

    text("Help", btn3.x - 15, btn3.y + 5);

};
var f = createFont("Comic Sans MS");

var drawScene1 = function() {
    currentScene = 1;
    background(138, 128, 128);
    fill(5, 4, 5);
    textFont(f);
    textSize(40);
    text("Life saving Robot", 10, 150);
    image(getImage("avatars/robot_female_3"), 8, 270);
    drawButton(btn1);
    drawButton(btn3);
    mouseClicked = page1Func;
};



var baby = {
    x: 70,
    y: 10,
    width: 25,
    height: 25

};


var Robot = function(x, y) {
    this.x = x;
    this.y = y;
    this.img = getImage("avatars/robot_female_3");
    this.sticks = 0;
};

Robot.prototype.draw = function() {
    fill(255, 0, 0);
    this.y = constrain(this.y, 0, height - 50);
    image(this.img, this.x, this.y, 50, 50);
};

Robot.prototype.hop = function() {
    this.img = getImage("avatars/robot_female_3");
    this.y -= 5;
};
Robot.prototype.fall = function() {
    this.img = getImage("avatars/robot_female_3");
    this.y += 5;
};
Robot.prototype.front = function() {
    this.img = getImage("avatars/robot_female_3");
    this.x += 5;
};
Robot.prototype.back = function() {
    this.img = getImage("avatars/robot_female_3");
    this.x -= 5;
};

var Bug = function(x, y) {
    this.x = x;
    this.y = y;
};

Bug.prototype.touch = function(robot) {
    if ((this.x >= robot.x && this.x <= (robot.x + 50)) &&
        (this.y >= robot.y && this.y <= (robot.y + 50))) {
        this.y = -400;
        score += 1;
        //this.sticks++;
    }
    if ((this.x >= baby.x && this.x <= (baby.x + 30)) &&
        (this.y >= baby.y && this.y <= (baby.y + 30))) {
        return true;
        //this.sticks++;
    }
    if ((this.x >= baby.x + 100 && this.x <= (baby.x + 100 + 30)) &&
        (this.y >= baby.y - 10 && this.y <= baby.y - 10 + 30)) {
        return true;
        //this.sticks++;
    }
    if ((this.x >= baby.x + 200 && this.x <= (baby.x + 200 + 30)) &&
        (this.y >= baby.y + 10 && this.y <= baby.y + 10 + 30)) {
        return true;
        //this.sticks++;
    }
    if ((this.x >= baby.x + 300 && this.x <= (baby.x + 300 + 30)) &&
        (this.y >= baby.y + 25 && this.y <= baby.y + 25 + 30)) {
        return true;
        //this.sticks++;
    }
    return false;
};

Bug.prototype.draw = function() {

    image(getImage("cute/EnemyBug"), this.x, this.y, 20, 20);
};
var robot = new Robot(10, 300);

var Bugs = [];
for (var i = 0; i < 300; i++) {
    Bugs.push(new Bug(i * 40 - 300, random(100, 260)));
}
var grassXs = [];
for (var i = 0; i < 25; i++) {
    grassXs.push(i * 20);
}
var x = 0;

var drawScene5 = function() {
    currentScene = 5;
    background(122, 224, 255);
    textSize(25);
    text("you win with score " + score + " !!!!!!!", 10, 20);

    stroke(64, 107, 207);
    fill(51, 47, 168);

    var x = 50;
    while (x < 350) {
        line(x, 120, 210, 300);
        ellipse(x, 90, 40, 60);
        x += 50;
    }
    var hopper = getImage("creatures/Hopper-Jumping");
    image(hopper, 208, 240);
    rect(10, 350, 140, 30);
    textSize(15);
    fill(0, 0, 0);
    text("GO TO HOME", 20, 370);
    //image(getImage("avatars/robot_female_2"), 300, 250, 90, 150);
    mouseClicked = function() {
        if (mouseX > 10 && mouseX < 150 && mouseY > 350 && mouseY < 380) {
            drawScene1();
        }
    };
    score = 0;
    Bugs = [];
    for (var i = 0; i < 300; i++) {
        Bugs.push(new Bug(i * 40 - 300, random(100, 260)));
    }
};

var drawScene6 = function() {
    background(27, 54, 61);
    currentScene = 6;
    fill(255, 255, 0);
    ellipse(200, 200, 200, 200);
    arc(200, 250, 150, 97, 200, 340);
    fill(173, 52, 173);
    ellipse(250, 150, 10, 10);
    ellipse(153, 150, 10, 10);
    rect(10, 350, 140, 30);
    fill(219, 191, 219);
    textSize(30);
    text("YOU LOST TRY AGAIN", 20, 50);
    textSize(15);
    text("GO TO HOME", 20, 370);
    //image(getImage("avatars/robot_female_2"), 300, 250, 90, 150);
    mouseClicked = function() {
        if (mouseX > 10 && mouseX < 150 && mouseY > 350 && mouseY < 380) {
            drawScene1();
        }
    };
    score = 0;
    Bugs = [];
    for (var i = 0; i < 350; i++) {
        Bugs.push(new Bug(i * 40 - 300, random(100, 260)));
    }

};

var drawScene2 = function() {
    currentScene = 2;
    background(227, 254, 255);
    // moving
    // snake like fashion, wrap around


    //draw = function() {
    if (baby.y >= 260) {
        text("we are safe thank you", 20, 15);
        drawScene5();
        return;
    }
    background(255, 255, 255);
    fill(66, 18, 18);
    frameRate(50);
    image(getImage("avatars/leafers-tree"), x + 10, x + 10, 50, 50);
    image(getImage("avatars/leafers-tree"), x + 100, 200, 50, 50);
    x += 0.5;
    if (((x + 10) >= robot.x && (x + 10) <= (robot.x + 50)) &&
        ((x + 10) >= robot.y && (x + 10) <= (robot.y + 50))) {
        text("i am good dont kill me", x + 20, x + 20);
    }
    if (((x + 100) >= robot.x && (x + 100) <= (robot.x + 50)) &&
        (200 >= robot.y && 200 <= (robot.y + 50))) {
        text("i am good dont kill me", x + 110, 220);
    }
    image(getImage("cute/CharacterHornGirl"), baby.x, baby.y, baby.width, baby.height);
    image(getImage("cute/CharacterCatGirl"), baby.x + 100, baby.y - 10, baby.width, baby.height);
    image(getImage("cute/CharacterBoy"), baby.x + 200, baby.y + 10, baby.width, baby.height);
    image(getImage("cute/CharacterPrincessGirl"), baby.x + 300, baby.y + 25, baby.width, baby.height);
    baby.y += 0.2;

    rect(0, height * 0.90, width, height * 0.10);

    image(getImage("cute/TreeTall"), -5, 260, 150, 100);
    image(getImage("cute/TreeTall"), 280, 260, 150, 100);
    fill(255, 255, 0);
    ellipse(390, 20, 80, 80);



    if (x > height) {
        x = 0;
    }

    // draw the blocks
    for (var i = 0; i < grassXs.length; i++) {
        image(getImage("cute/GrassBlock"), grassXs[i], height * 0.85, 20, 20);
        // subtract one, so that they appear to move to left (hopper appears to move to right)
        grassXs[i] -= 1;
        // Now move the blocks over once they wrap around
        if (grassXs[i] <= -20) {
            grassXs[i] = width;
        }
    }
    for (var i = 0; i < Bugs.length; i++) {
        if (Bugs[i].touch(robot) === true) {
            drawScene6();
            return;
        }
    }
    for (var i = 0; i < Bugs.length; i++) {
        Bugs[i].draw();
        Bugs[i].x += 0.3;
    }


    if (keyIsPressed) {
        if (keyCode === UP) {
            robot.hop();
        } else if (keyCode === 39) {
            robot.front();
        } else if (keyCode === 40) {

            robot.fall();
        } else if (keyCode === 37) {

            robot.back();
        }
    }

    robot.draw();


    //};



};
var drawScene3 = function() {
    currentScene = 3;
    background(48, 138, 95);
    fill(227, 215, 215);
    rect(10, 350, 140, 30);
    fill(0, 0, 0);
    text("GO TO HOME", 20, 370);
    image(getImage("avatars/robot_female_2"), 300, 250, 90, 150);
    mouseClicked = function() {
        if (mouseX > 10 && mouseX < 150 && mouseY > 350 && mouseY < 380) {
            drawScene1();
        }
    };

};
var drawScene4 = function() {
    currentScene = 4;
    var x = 3;
    var y = 22;
    background(204, 149, 201);
    textSize(25);
    text("INSTRUCTIONS", x, y);
    textSize(15);
    text("1.click on start button", x, y + 30);
    text("2.Control the the robot with left,right,up and down arrows", x, y + 60);
    text("3.colide the bug with robot and get score", x, y + 90);
    text("4.colide the dinosaur with robot and get score", x, y + 120);
    text("5.save the children from dianosaurs and bugs", x, y + 150);
    text("6.when children reaches tho ground you win", x, y + 180);
    fill(224, 213, 213);
    rect(10, 350, 140, 30);
    fill(0, 0, 0);
    text("GO TO HOME", 20, 370);
    image(getImage("avatars/robot_female_2"), 300, 250, 90, 150);
    mouseClicked = function() {
        if (mouseX > 10 && mouseX < 150 && mouseY > 350 && mouseY < 380) {
            drawScene1();
        }
    };

};

page1Func = function() {
    //ellipse formula b^2 * (x-h)^2 + a^2 * (y -k )^2 <= a^2 * b^2 
    if (((mouseX - btn1.x) * (mouseX - btn1.x) * (btn1.height / 2) * (btn1.height / 2) + (mouseY - btn1.y) * (mouseY - btn1.y) * (btn1.width / 2) * (btn1.width / 2)) <= ((btn1.width / 2) * (btn1.width / 2) * (btn1.height / 2) * (btn1.height / 2)))

    {
        drawScene2();
    } else if (((mouseX - btn3.x) * (mouseX - btn3.x) * (btn3.height / 2) * (btn3.height / 2) + (mouseY - btn3.y) * (mouseY - btn3.y) * (btn3.width / 2) * (btn3.width / 2)) <= ((btn3.width / 2) * (btn1.width / 2) * (btn3.height / 2) * (btn3.height / 2)))

    {
        drawScene4();
    }
};

draw = function() {
    if (currentScene === 2) {
        drawScene2();
    } else {
        baby.x = 70;
        baby.y = 10;
        baby.width = 20;
        baby.height = 70;
        robot.x = 10;
        robot.y = 300;
        //score=0;
    }
};

drawScene1();
