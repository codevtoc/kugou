function ajax({url,type="get",callback,data}){
  if(type==="get"&&data!==undefined){
    url+="?"+data;
  };
  var xhr=new XMLHttpRequest();
  xhr.open(type,url,true);
  xhr.onreadystatechange=function(){
    if(xhr.readyState==4&&xhr.status==200){
      var res=JSON.parse(xhr.responseText);
      callback(res);
    }
  };
  if(type==="post"){
    xhr.setRequestHeader('Content-Type',"applicaltion/x-www-form-urlencoded");
  };
  if(type==="post"){
    xhr.send(data);
  }else(
    xhr.send()
  );
};