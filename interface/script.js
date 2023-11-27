let serial
let portName = "/dev/tty.usbmodem141201"
let activeSensor = ""
let potValue= 0
let photoValue = 0
let clr = map(potValue, 0, 1024, 0, 255)

function setup() {
  createCanvas(545, 545)

  serial = new p5.SerialPort

  serial.onList(gotList)
  serial.list()

  serial.onOpen(gotOpen)
  serial.openPort(portName)

  serial.onData(gotData)
}

function draw() {
  background("#F4908C")

  var mouseXmortified = map(mouseX, 0, width, -7, 9, true)
	var mouseYmortified = map(mouseY, 0, height, -2, 3, true)
	noStroke()
	// right-arm
	fill("#eddbc9")
	rect(265, 460, 40, 100);
	fill("#F7C1A9")
	rect(265, 460, 30, 100);
	// clothes
	fill(photoValue, potValue, (photoValue+potValue)/2)
	triangle(200, 190, 120, height, 250, height);
	rect(120, 380, 168, 250, 15);
	triangle(130, 380, 80, 460, 120, 460);
	triangle(288, 400, 288, 460, 308, 460);
	fill(photoValue-50, potValue-50, (photoValue+potValue)/2-50)
	triangle(116, 460, 140, 430, 140, 560);
	triangle(288, 420, 288, height, 280, height);
	// left-arm
	fill("#F7C1A9")
	rect(90, 460, 42, 100);
	fill("#eddbc9")
	triangle(90, 520, 90, 560, 310, 560);
	// ears
	fill("#F7C1A9")
	ellipse(110, 230, 30, 60);
	ellipse(290, 230, 30, 60);
	fill("#eddbc9")
	ellipse(110, 230, 10, 16);
	ellipse(290, 230, 10, 16);
	// head
	fill("#eddbc9")
	circle(200, height/2, 200);
	// eyes
	fill("#9E8668")
	ellipse(160, 250, 45, 43);
	ellipse(240, 250, 45, 43);
	fill("white")
	ellipse(160, 250, 45, 39);
	ellipse(240, 250, 45, 39);
	fill("black")
	ellipse(160 + mouseXmortified, 250 + mouseYmortified, 25, 30);
	ellipse(240 + mouseXmortified, 250 + mouseYmortified, 25, 30);
	fill("white")
	circle(162 + mouseXmortified, 252, 5);
	circle(242 + mouseXmortified, 252, 5);
	// eyebrows
	fill("#222222")
	rect(140, 220+ mouseYmortified, 40,10, 3);
	rect(220, 220+ mouseYmortified, 40,10, 3);
	// mole
	circle(165, 215, 3);
	// nose
	fill("#F1AD7E")
	triangle(200, 230, 185, 290, 195, 285);
	fill("#F7C1A9")
	triangle(200, 230, 195, 285, 210, 290);
	triangle(195, 285, 185, 290, 210, 290);
	// mouth 
	fill("#F57494")
	ellipse(200, 315, 42+ mouseXmortified, 16 + mouseYmortified*2);
	fill("#F7AAA9")
	ellipse(200, 318, 35+ mouseXmortified, 14 + mouseYmortified*1.5);
	// jaw
	fill("#F7C1A9")
	arc(200, 348, 66, 15, 0, PI, CHORD);
	// dimple
	
	// hair
	fill("black")
	triangle(160, 150, 220, 170, 110, 220);
	triangle(240, 150, 180, 170, 290, 220);
	triangle(200, 190, 120, 170, 250, 170);
	rect(120, 170, 30, 40);
	rect(250, 170, 30, 40);
	// Glasses
	noFill()
	stroke("black")
	rect(128, 235, 60, 40, 10);
	rect(208, 235, 60, 40, 10);
	strokeWeight(4)
	arc(198, 255, 22, 10, 0, PI);
	// flower
	noStroke()
	fill("#619540")
	rect(398, 450, 4, 100);
	triangle(398, 545, 410, 505, 400, 525);
	fill("#F4E8E8")
	ellipse(400, 450, 40, 40);
	fill("#DDE8EA")
	ellipse(400, 450, 28, 30);
	fill("gold")
	circle(400, 450, 16);
	// bee
	fill('#99F5FA');
	stroke('#73c2e9');
	strokeWeight(3);
	ellipse(mouseX-15, mouseY-15, 15, 25);
	//rotate(PI/2, y = mouseY-15)
	ellipse(mouseX+15, mouseY-15, 15, 25);
	noStroke()
	fill('gold')
	circle(mouseX,mouseY,25);
	fill("black")
	circle(mouseX-7, mouseY,5);
	circle(mouseX+7, mouseY,5);
}

function gotList(ports){
  for(let i = 0; i < ports.length; i++){
    console.log(ports[i])
  }
}

function gotOpen(){
  console.log("Port Open!")
}

function gotData(){
  let newData = serial.readLine()
  if(newData.length <= 0) return;
  console.log(newData)

  if(newData === "potentiometer1" || newData === "potentiometer2"){
    activeSensor = newData
  }
  else {
    if (activeSensor === "potentiometer1"){
      potValue = newData/2
    }
    if (activeSensor === "potentiometer2"){
      photoValue = newData/4
    }
  }

}