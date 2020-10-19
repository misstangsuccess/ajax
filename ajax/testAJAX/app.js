const express = require('express');
const db = require('./db');
const Cities = require('./models/cites');

const app = express();

app.use(express.static('public'));


app.listen(4000, err => {
  if (!err) console.log('服务器启动成功了~');
  else console.log(err);
})