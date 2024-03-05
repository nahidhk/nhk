var xpio = localStorage.getItem("data");

console.log(xpio);

   var app = document.getElementById("server");
   
document.getElementById("server").value="~/"+xpio+" $ ";


var xn = "~/"+xpio+" $ ";

// help data
 var help = `--help box open!
  (space used required)
  The nhk use for a need helps command is 
 1. $ --help 
 
 hoster and ser name change
 2. $ cng nam 
 2.1 $ y
 2.2 $ rld
 
 
 ip show command 
 3. $ ip
  
 nahid hk website open
 4. $ nhk

type y to close help

${xn}`

function erroron(){
  document.getElementById("errorcmd").style.display="block";
}
function erroroff(){
  document.getElementById("errorcmd").style.display="none";
}



function you(){
  var hackbox = document.getElementById("server").value;
 
  if (hackbox == "~/"+xpio+" $ rld") {
  window.location.href="/"
  }
  if (hackbox == "~/"+xpio+" $ ip") {
  window.location.href="https://ipinfo.io/json"
  }
  if (hackbox == "~/"+xpio+" $ nhk") {
  window.location.href="https://nahidhk.info"
  }
   if (hackbox == "~/"+xpio+" $ cng nam") {
    
 app.value="Enter Your  server name : type y = $ "
  }
   if (hackbox == "Enter Your  server name : type y = $ y") {
    
 app.value=" input The Server Name And cmd name!";
 document.getElementById("name").style.display="block";
  }
  
  if (hackbox == "~/"+xpio+" $ --help") {
  app.value=`${xn}${help}`
  }  

  if (hackbox == xn+help+"y") {
window.location.href="/"
  }
  if (hackbox == xn+"google") {
 document.getElementById("google").style.display="block";

  }else{
   document.getElementById("google").style.display="none";
  
  }
  
  if (hackbox === xn+"git" ){
 erroron();

  }else{
    erroroff();
  }
}




function saef(){
  var mydata = document.getElementById("nmdata").value;
  localStorage.setItem("data",mydata);
   document.getElementById("name").style.display="none";
 var mycmd = app.value="~/"+xpio+" $ ";
}


function google(){
  var docs = document.getElementById("goog").value;
  window.location.href="https://google.com/?s="+docs;
}