$(function(){
  $.ajax({
    url:'footer.html',
    success:(res)=>{
      $(res).replaceAll('#totalFooter');
      $('<link rel="stylesheet" href="css/footer.css">').appendTo('head');
    }
  })
})