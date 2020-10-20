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
//深拷贝但是不能拷贝函数
const newObj=JSON.parse(JSON.stringify(obj))
console.log(newObj);