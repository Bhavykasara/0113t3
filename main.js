function preload() {

}

function setup() {
    canvas=createCanvas(1000,650);
    vedio=createCapture(VIDEO);
    vedio.hide();
}
function draw() {
    image(vedio,225,115,550,420);

    fill(180, 180, 180);
    stroke(145,145,145);
    rect(170,70,8,490);

    fill(80, 80, 80);
    stroke(145,145,145);
    rect(180,70,8,490);

    fill(180, 180, 180);
    stroke(145,145,145);
    rect(170,80,640,8);

    fill(80, 80, 80);
    stroke(145,145,145);
    rect(170,70,640,8);

    fill(180, 180, 180);
    stroke(145,145,145);
    rect(810,70,8,500);

    fill(80, 80, 80);
    stroke(145,145,145);
    rect(820,70,8,500);

    fill(180, 180, 180);
    stroke(145,145,145);
    rect(170,560,658,8);

    fill(80, 80, 80);
    stroke(145,145,145);
    rect(170,570,658,8);

    fill(180, 180, 180);
    stroke(145,145,145);
    rect(120,70,8,490);

    fill(80, 80, 80);
    stroke(145,145,145);
    rect(130,70,8,490);

    fill(180, 180, 180);
    stroke(145,145,145);
    rect(170,20,640,8);

    fill(80, 80, 80);
    stroke(145,145,145);
    rect(170,30,640,8);

    fill(180, 180, 180);
    stroke(145,145,145);
    rect(860,70,8,500);

    fill(80, 80, 80);
    stroke(145,145,145);
    rect(870,70,8,500);

    fill(180, 180, 180);
    stroke(145,145,145);
    rect(170,610,658,8);

    fill(80, 80, 80);
    stroke(145,145,145);
    rect(170,620,658,8);
}

function take_snapshot() {
    save("framed_selfie.png");
}