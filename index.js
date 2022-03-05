//https://github.com/mqttjs/MQTT.js/issues/264
var mqtt    = require('mqtt');
const fs = require('fs');

//mongoose , mysql, postgress

var options={
clientId:"mqttjs01",
autoAssignTopicAlias:true,

username: 'jsuser',
password: '9UNiUOuaZEl2fkWex5QETYko1i0xJ7iM',

}
var client  = mqtt.connect("mqtts://uvn3x4.stackhero-network.com:8883",options);



const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/html/index.html');
});

io.on('connection', (socket) => {
  console.log('a user connected');
});

server.listen(3000, () => {
  console.log('listening on *:3000');
});


client.on("connect",function(){	
    client.subscribe('sensor', function (err) {
        console.log(err);
    })
})

client.on('message', function (topic, message) {
    // message is Buffer
    io.emit(topic, message.toString());

    console.log(topic);
    console.log(message.toString())
    //client.end()
})

