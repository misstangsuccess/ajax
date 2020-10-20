//引入包
const express = require("express");
const db = require("./db");
const Cities = require("./models/cites");
//创建一个服务
const app = express();
//中间件,静态资源
app.use(express.static("public"));

db.then(() => {
  app.get("/province", async (req, res) => {
    try {//直接寻找所有的省份并响应
      const cities = await Cities.find(
        {
          level: 1,
        },
        {
          name: 1,
          province:1,
          _id:0
        }
      );
      console.log(cities);
      //响应数据
      res.json({
        status: 0,
        data: cities,
      });
    } catch (e) {
      res.json({
        status: 1,
        err: "网络出错啦,请稍后再试哦 ~",
      });
    }
  });
  app.get("/city", async (req, res) => {
    try {
      //先接受ajax请求发送过来的省份名称
      const { province } = req.query;
      console.log(province);
      const cities = await Cities.find(
        {
          province,
          level: 2,
        },
        {
          name: 1,
          city:1,
          _id: 0,
        }
      );
      console.log(cities);
      //响应数据
      res.json({
        status: 0,
        data: cities,
      });
    } catch (e) {
      res.json({
        status: 1,
        err: "网络出错啦,请稍后再试哦 ~",
      });
    }
  });
  app.get("/county", async (req, res) => {
    try {
      //先接受ajax请求发过来的省份名称
      const { province, city } = req.query;
      console.log(province)
      const cities = await Cities.find(
        {
          province,
          city,
          level: 3,
        },
        {
          name: 1,
          _id: 0,
        }
      );
      console.log(cities);
      //响应数据
      res.json({
        status: 0,
        data: cities,
      });
    } catch (e) {
      res.json({
        status: 1,
        err: "网络出错啦,请稍后再试哦 ~",
      });
    }
  });
}).catch(() => {
  console.log("数据库连接失败~");
});

app.listen(4000, (err) => {
  if (!err) console.log(`服务器启动成功~http://127.0.0.1:4000`);
  else console.log(err);
});
