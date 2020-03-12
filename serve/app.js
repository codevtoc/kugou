const express=require("express");
const bodyParser=require("body-parser");

const songRouter=require("./routes/song.js");
const rankRouter=require("./routes/rank.js");
var app=express();
app.listen(8081);
app.use(express.static(`F:\\Users\\codex\\Desktop\\xlx\\前端项目\\酷狗\\KuGou\\public`));
app.use(bodyParser.urlencoded({
  extended:false
}));
console.log(111);

app.use('/song',songRouter);
app.use('/rank',rankRouter);