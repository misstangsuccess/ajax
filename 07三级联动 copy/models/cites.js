//引入mongoose模块包
const {Schema,model}=require("mongoose")
//设置约束并暴露出云
const citiesSchema=new Schema({
  code:String,
  province:String,
  city:String,
  county:String,
  name:String,
  level:Number
})
module.exports=model("cities",citiesSchema)
