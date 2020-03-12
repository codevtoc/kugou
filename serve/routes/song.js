const express=require('express');
const pool=require('../pool');
var router=express.Router();


// 所有歌曲搜索路由
router.get('/v1/allsong/:kw',(req,res)=>{
  var kw=req.params.kw;
  var sql='SELECT * FROM allsong WHERE name LIKE ?';
  pool.query(sql,`%${kw}%`,(err,result)=>{
    if(err) throw (err);
    // console.log(result);
    res.send(result);
  });
})


// 轮播图路由
router.get("/v1/carousel",(req,res)=>{
  var sql='select * from kg_carousel_item';
  pool.query(sql,(err,result)=>{
    if(err) throw (err);
    // console.log(result);
    res.send(result);
  });
});

// 精选歌单路由
router.get("/v1/jxgd",(req,res)=>{
  var sql='select * from kg_jxgd';
  pool.query(sql,(err,result)=>{
    if(err) throw err;
    res.send(result);
  });
});


// 华语前八名路由
router.get('/v1/hyxg',(req,res)=>{
  var sql='SELECT * FROM `huayuxingebang`';
  pool.query(sql,(err,result)=>{
    if(err) throw err;
    res.send(result);
  });
});

// 欧美新歌
router.get('/v1/omxg',(req,res)=>{
  var sql='SELECT * FROM `oumeixingebang`';
  pool.query(sql,(err,result)=>{
    if(err) throw err;
    res.send(result);
  })
});

// 韩国
router.get('/v1/hgxg',(req,res)=>{
  var sql='SELECT * FROM `hanguoxingebang`';
  pool.query(sql,(err,result)=>{
    if(err) throw err;
    res.send(result);
  })
});
// 日本
router.get('/v1/rbxg',(req,res)=>{
  var sql='SELECT * FROM `ribengongxinbang` ';
  pool.query(sql,(err,result)=>{
    if(err) throw err;
    res.send(result);
  })
});


module.exports=router;