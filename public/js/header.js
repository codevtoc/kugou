// 通过ajax请求把页头请求过来
$(function(){
  $.ajax({
    url:'header.html',
    type:"get",
    // data :可有可能没有
    // dataType:json 这里不是json格式的
    success:function(res){
      // console.log(res);
      $(res).replaceAll('#totalHeader');
      // 直接在这里把css引入目标网页的head中
      $(`<link rel="stylesheet" href="css/header.css">`).appendTo('head');
    }
  })
})