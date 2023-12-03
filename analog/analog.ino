/*
  Analog Input

  Demonstrates analog input by reading an analog sensor on analog pin 0 and
  turning on and off a light emitting diode(LED) connected to digital pin 13.
  The amount of time the LED will be on and off depends on the value obtained
  by analogRead().

  The circuit:
  - potentiometer
    center pin of the potentiometer to the analog input 0
    one side pin (either one) to ground
    the other side pin to +5V
  - LED
    anode (long leg) attached to digital output 13 through 220 ohm resistor
    cathode (short leg) attached to ground

  - Note: because most Arduinos have a built-in LED attached to pin 13 on the
    board, the LED is optional.

  created by David Cuartielles
  modified 30 Aug 2011
  By Tom Igoe

  This example code is in the public domain.

  https://www.arduino.cc/en/Tutorial/BuiltInExamples/AnalogInput
*/

int m1 = A0;   // select the input pin for the potentiometer
int m2 = A1;
int m3 = A2;
int v1 = 0;  // variable to store the value coming from the sensor
int v2 = 0; 
int v3 = 0;

void setup() {
  // declare the ledPin as an OUTPUT:
  // pinMode(ledPin, OUTPUT);
  // pinMode(10, OUTPUT);
  Serial.begin(9600);
  // pinMode(ledPin2, OUTPUT);
  // pinMode(12, OUTPUT);
  // Serial.begin(9600);
}

void loop() {
  // read the value from the sensor:
  v1 = analogRead(m1);
  Serial.print("m1: ");
  Serial.println(v1);
  v2 = analogRead(m2);
  Serial.print("m2: ");
  Serial.println(v2);
  v3 = analogRead(m3);
  Serial.print("m3: ");
  Serial.println(v3);
}
