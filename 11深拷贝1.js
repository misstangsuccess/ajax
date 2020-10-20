const obj={
  name:"lily",
  age:18,
  hobby:{
    one:"睡觉",
    two:"唱歌"
  },
  score:[80,90,95],
  do(){
    console.log("runing");
  }
}
//浅拷贝
/* const obj1=Object.assign({},obj);
//console.log(obj1);
obj1.name="tom";
obj1.hobby.one="逛街"
console.log(obj1); */

//封装一个检测数据类型的方法
function checkType(obj){
  return Object.prototype.toString.call(obj).slice(8,-1);
}
function deepClone(obj){
  let re;
  if(checkType(obj)==="Object"){
    re={}
  }else if(checkType[obj]==="Array"){
    re=[];
  }else{
    return obj
  }
  for(let i in obj){
    re[i]=deepClone(obj[i])
  }
  return re;
}
const newObj=deepClone(obj);
newObj.hobby.one="游泳"
//console.log(newObj);
console.log(obj);