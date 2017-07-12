// Uses the serialport library
// https://www.npmjs.com/package/serialport
// Must use version 4.0.7

// serial port initialization:
var serialport = require('serialport'), // include the serialport library
     SerialPort = serialport.SerialPort, // make a local instance of serial
     portName = "/dev/ttyACM0"
     portConfig = {
         baudRate: 9600,
         // call myPort.on('data') when a newline is received:
         parser: serialport.parsers.readline('\n')
     };
 
// open the serial port:
var myPort = new SerialPort(portName, portConfig);
 
myPort.on('open', openPort); // called when the serial port opens
 
function openPort() {
    var input = "3;0;0;0;"; 
    console.log('port open');
    console.log('baud rate: ' + myPort.options.baudRate);
 
    // since you only send data when the port is open, this function
    // is local to the openPort() function:
    function sendData() {
         // convert the value to an ASCII string before sending it:
         console.log('Sending ' + input + ' out the serial port');
         myPort.write(input.toString());
         console.log("DONE");
    }

    setTimeout(sendData, 5000);
}