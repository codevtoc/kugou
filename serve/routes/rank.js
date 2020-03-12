const express=require('express');
const pool=require('../pool');
var router=express.Router();


// 酷狗飙升榜
router.get("/v1/kgbsBang",(req,res)=>{
  var sql='select * from kgbiaoshengbang';
  pool.query(sql,(err,result)=>{
    if(err) throw err;
    // console.log(result);
    res.send(result);
  });
});

// 酷狗TOP500
router.get("/v1/kgtop500",(req,res)=>{
  var sql='SELECT * FROM `kgtop500`';
  pool.query(sql,(err,result)=>{
    if(err) throw err;
    // console.log(result);
    res.send(result);
  });
});

// 网络红歌榜
router.get("/v1/wlhgBang",(req,res)=>{
  var sql='SELECT * FROM `wangluohonggebang`';
  pool.query(sql,(err,result)=>{
    if(err) throw err;
    // console.log(result);
    res.send(result);
  });
});


// 华语前八名路由
router.get('/v1/hyxgBang',(req,res)=>{
  var sql='SELECT * FROM `huayuxingebang`';
  pool.query(sql,(err,result)=>{
    if(err) throw err;
    res.send(result);
  });
});

// 欧美新歌
router.get('/v1/omxgBang',(req,res)=>{
  var sql='SELECT * FROM `oumeixingebang`';
  pool.query(sql,(err,result)=>{
    if(err) throw err;
    res.send(result);
  })
});

// 韩国
router.get('/v1/hgxgBang',(req,res)=>{
  var sql='SELECT * FROM `hanguoxingebang`';
  pool.query(sql,(err,result)=>{
    if(err) throw err;
    res.send(result);
  })
});
// 日本
router.get('/v1/rbxgBang',(req,res)=>{
  var sql='SELECT * FROM `ribengongxinbang` ';
  pool.query(sql,(err,result)=>{
    if(err) throw err;
    res.send(result);
  })
});

// 电音热歌榜
router.get('/v1/dyrgBang',(req,res)=>{
  var sql='SELECT * FROM `dianyinregebang` ';
  pool.query(sql,(err,result)=>{
    if(err) throw err;
    res.send(result);
  })
});

// 影视金曲榜
router.get('/v1/ysjqBang',(req,res)=>{
  var sql='SELECT * FROM `yingshijinqubang` ';
  pool.query(sql,(err,result)=>{
    if(err) throw err;
    res.send(result);
  })
});

// 粤语金曲榜
router.get('/v1/yyjqBang',(req,res)=>{
  var sql='SELECT * FROM `yueyujinqubang` ';
  pool.query(sql,(err,result)=>{
    if(err) throw err;
    res.send(result);
  })
});

// Billboard
router.get('/v1/BBBang',(req,res)=>{
  var sql='SELECT * FROM `billboardbang` ';
  pool.query(sql,(err,result)=>{
    if(err) throw err;
    res.send(result);
  });
});

// 英国单曲
router.get('/v1/ygdqBang',(req,res)=>{
  var sql='SELECT * FROM `yingguodanqubang` ';
  pool.query(sql,(err,result)=>{
    if(err) throw err;
    res.send(result);
  });
});

// 日本工信榜
router.get('/v1/rbgxBang',(req,res)=>{
  var sql='SELECT * FROM `ribengongxinbang` ';
  pool.query(sql,(err,result)=>{
    if(err) throw err;
    res.send(result);
  });
});





module.exports=router;
