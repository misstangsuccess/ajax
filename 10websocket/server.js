const express = require("express");

//注册一个服务
const app = express();
app.use(express.static("./public"))

//express引入webSocket的固定格式,当app服务启动,webSocket就一直启动了
const server=require("http").Server(app);
const io=require("socket.io")(server);
//当用户连接上ws服务器的时候,就会自动触发一个connect对象
io.on("connect",(socket)=>{
    //socket就是当前连接的用户
    console.log(socket);
    //服务器定义client_to_server事件,当用户发送消息的时候,触发这个事件接受到用户的消息内容
    socket.on("client_to_server",(data)=>{
        //data就是用户发送到的值
        //接受完成之后要分发给其他客户端
        //可以在客户端定义一个事件server_to_client,我们在服务器调用就行了
        socket.broadcast.emit("server_to_client",data)

    })
})
//启动服务
app.listen(3000, (err) => {
    if (err) {
        console.log("服务器启动错误" + err);
        return;
    }
    console.log("服务器启动成功 http://127.0.0.1:3000");
})