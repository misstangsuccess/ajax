const express=require("express")
const app=express();
app.use(express.static("./public"));
app.use(express.urlencoded({
  extended:true
}))
app.use(express.json());
app.get("/user",(req,res)=>{
  console.log(req.query);
  res.send("alert(1)")
})
app.post("/user",(req,res)=>{
  console.log(req.body);
  res.send("alert(2)")
})
app.listen(3000,(err)=>{
  if(err){
    console.log("服务器启动错误"+err);
    return;
  }
  console.log("服务器启动成功http://127.0.0.1:3000")
})