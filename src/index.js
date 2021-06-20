'use strict'

const express = require('express');
const app = require('express')();
const serverHttp = require('http').Server(app);
const morgan = require('morgan');
const io = require('socket.io')(serverHttp,{
    cors:{
        origin: "http://localhost:4200",
        methods: ["GET", "POST"]
    }
});
const cors = require('cors');
const userRouter = require('./routes/userRouter');
const mongoose = require('./db');

const myMessages = [];
// middleware
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//routes
app.use('/api',userRouter);


io.on('connection', (socket) => {
    socket.on('send-message', (data) => {
        console.log(data);
        myMessages.push(data);
        socket.emit('text-event',myMessages);
        socket.broadcast.emit('text-event',myMessages);
    });
});

/**
 * Hacer post al puerto 3200 para hacer login o registro
 * Para los sockets, se utiliza el puerto 3000
*/
app.listen(3200,(req,res) => console.log('dadsad'));
serverHttp.listen(3000,(req,res) => console.log('listen on port 3000'));