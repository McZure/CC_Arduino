int myPin = 13;

void setup() {
  // put your setup code here, to run once:
  Serial.begin(9600);
  Serial.println("Creative Coding");
  pinMode(myPin, OUTPUT);
}

void loop() {
  // put your main code here, to run repeatedly:
  digitalWrite(myPin, HIGH);
  delay(1000);
  digitalWrite(myPin, LOW);
  delay(1000);
}
