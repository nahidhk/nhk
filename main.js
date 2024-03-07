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
 
 host and server name change
 2. $ cng nam 
 2.1 $ y
 2.2 $ f5
 
 
 ip show command 
 3. $ ip
 3.1 $ y => to copy data
 3.2 $ n => to close data
  
 nahid hk website open
 4. $ nhk
 
 open google tools and search box 
 6. $ google
 
 

type y to close help

${xn}`

function erroron(){
  document.getElementById("errorcmd").style.display="block";
}
function erroroff(){
  document.getElementById("errorcmd").style.display="none";
}

  


function you(){
    var jsonUrl = '';

  var hackbox = document.getElementById("server").value;
 
  if (hackbox == "~/"+xpio+" $ f5") {
  window.location.href="/"
  }

if (hackbox == "~/"+xpio+" $ ip") {
 
  fetch("https://ipinfo.io/json")
    .then(response => response.json())
    .then(data => {
      var infoString = ` ${xn} ip is open
      json ip =>
      
      
     {"ip":"${data.ip}",
     "City":"${data.city}", 
     "Region":"${data.region}",
     "Country":"${data.country}",
     "Location":${data.loc}",      
     "Organization":"${data.org}",
     "Postal Code":"${data.postal},
     "Timezone":${data.timezone}
}

1.Type To The Y in copy ip Data 

2. type to the N close ip info 

~/${xpio} $ `;
 document.getElementById("server").value=infoString;
 sessionStorage.setItem("ipdata",infoString);
    })
    .catch(error =>document.getElementById("server").value=xn+ 'Error fetching data:', error);
 
}
var ipdatasave = sessionStorage.getItem("ipdata")
if (hackbox == ipdatasave+"n") {
 app.value=xn;
}
if (hackbox == ipdatasave + "y") {
  alert("all data copy")
  navigator.clipboard.writeText(app.value);
  alert(app.value);
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
  
  if (hackbox === xn+"cmd" ){
 erroron();

  }else{
    erroroff();
  }
   if (hackbox === xn + "help") {
app.value = xn+"--hel"  
 alert("please type $ --help")
   } else {}
    
}




function saef(){
  var mydata = document.getElementById("nmdata").value;
  localStorage.setItem("data",mydata);
   document.getElementById("name").style.display="none";
 var mycmd = app.value="~/"+xpio+" $ ";
}


function google(){
  var docs = document.getElementById("goog").value;
  window.location.href="https://google.com/search?q="+docs;
}
