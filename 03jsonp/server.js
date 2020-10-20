const express=require("express")
//注册一个服务
const app=express();
app.get("/user",(req,res)=>{
  console.log(req.query);
  //取到回调函数的名字
  const{
    callback
  }=req.query;
  //要发送给前端的数据
  const data={
    name:"timy",
    age:20
  }
  //如果是script标签请求的,当我们返回一个字符串的话,script标签会把这个字符串换成代码解析
  //res.send("alert(1)");
  // 'fn({name:"timy",age:20})'
  res.send(`${callback}(${JSON.stringify(data)})`)
})

app.listen(3000,(err)=>{
  if(err){
    console.log("服务器启动错误"+err);
    return;
  }
  console.log("服务器启动成功http://127.0.0.1:3000")
})