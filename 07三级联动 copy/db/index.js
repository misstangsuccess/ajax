const mongoose = require("mongoose");
module.exports = new Promise((resolve, reject) => {
  mongoose.connect("mongodb://localhost:27017/ajax", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  });
  mongoose.connection.once("open", (err) => {
    if (!err) {
      console.log("数据库连接成功了~");
      resolve();
      return;
    } else {
      console.log(err);
      reject();
      return;
    }
  });
});
