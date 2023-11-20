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

int sensorPin = A0;   // select the input pin for the potentiometer
int ledPin = 13;      // select the pin for the LED
int sensorValue = 0;  // variable to store the value coming from the sensor
int photocell = A1;
int photoValue = 0;

void setup() {
  // declare the ledPin as an OUTPUT:
  pinMode(ledPin, OUTPUT);
  pinMode(10, OUTPUT);
  Serial.begin(9600);
}

void loop() {
  // read the value from the sensor:
  sensorValue = analogRead(sensorPin);
  Serial.print("Potentiometer: ");
  Serial.println(sensorValue);
  photoValue = analogRead(photocell);
  Serial.print("Photocell:     ");
  Serial.println(photoValue);
  // turn the ledPin on
  // digitalWrite(ledPin, HIGH);
  // analogWrite(10,sensorValue);
  // stop the program for <sensorValue> milliseconds:
  // delay(sensorValue);
  // // turn the ledPin off:
  // digitalWrite(ledPin, LOW);
  analogWrite(10,sensorValue/4);
  // stop the program for for <sensorValue> milliseconds:
  // delay(sensorValue);
}
