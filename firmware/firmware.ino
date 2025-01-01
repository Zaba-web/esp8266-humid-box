#include <ESP8266WiFi.h>
#include <WiFiClient.h>
#include <ESP8266WebServer.h>
#include <GY21.h>

ESP8266WebServer server(80);
GY21 sensor;

String html = "<!doctype html><html lang='en'><head><meta charset='UTF-8' /><meta name='viewport' content='width=device-width, initial-scale=1.0' /><title>Smart Tea Box</title><script type='module' crossorigin src='https://zaba-web.github.io/esp8266-humid-box/assets/index-C80MkkPp.js'></script><link rel='stylesheet' crossorigin href='https://zaba-web.github.io/esp8266-humid-box/assets/index-BJnS3woK.css'></head><body><div id='app'></div></body></html>";
String boxName = "SHENG PUERH";
const char* WIFI_SSID = "TOTOLINK_151";
const char* PASSWORD = "m1n2b3v4";
const int FAN_PIN = 14;

void enableFan() {
  digitalWrite(FAN_PIN, HIGH);
}

void disableFan() {
  digitalWrite(FAN_PIN, LOW);
}

float getHumidity() {
  return sensor.GY21_Humidity();
}

float getTemp() {
  return sensor.GY21_Temperature();
}

void wifiConnect() {
  WiFi.begin(WIFI_SSID, PASSWORD);
  
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  
  Serial.print("\nConnected to ");
  Serial.println(WIFI_SSID);
  Serial.print("IP address: ");
  Serial.println(WiFi.localIP());
}

void setupRoot() {
  server.on("/", [](){
    server.send(200, "text/html", html);
  });
  server.on("/name", []() {
    server.send(200, "text/html", boxName);
  });
  server.on("/humidity", []() {
    server.send(200, "text/html", String(getHumidity()));
  });
  server.on("/temp", []() {
    server.send(200, "text/html", String(getTemp()));
  });
}

void setup(void){
  // COMMUNICATION
  Serial.begin(115200);

  // SENSOR SETUP
  Wire.begin();

  // WEB SERVER SETUP
  wifiConnect();
  setupRoot();
  server.enableCORS(true);
  server.begin();
  Serial.println("HTTP server started");

  // SETUP FAN RELAY
  pinMode(FAN_PIN, OUTPUT);
}
 
void loop(void)
{
  server.handleClient();
}
