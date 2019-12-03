document.getElementById("selectNumber").addEventListener("onselect",function(){ddlselect()});
document.getElementById("employname").addEventListener("input",function(){ddlselect()});
// document.getElementById("txtvalue").addEventListener("change",function(){
// var text = document.getElementById("txtvalue").value;
// document.getElementById("txtvalue").value = text;
// });
document.getElementById("upload_widget").addEventListener("click", function(){ uploadcheck() }, false);

async function ddlselect(){
var d = document.getElementById("selectNumber");
var e = document.getElementById("employname").value;
var displaytext = d.options[d.selectedIndex].text;
var mytxt = (displaytext + " - " + e);
document.getElementById("txtvalue").value=mytxt;
console.log(mytxt);
return mytxt;
}

function uploadcheck() {
var myWidget = cloudinary.createUploadWidget({
  cloudName: 'shinakuma', 
  uploadPreset: 'lbdfks7r',
  multiple: false,
  publicId: document.getElementById("txtvalue").value,
  sources: ['local']}, (error, result) => { 
    if (!error && result && result.event === "success") { 
      console.log('Done! Here is the image info: ', result.info); 
    }
  }
)
var a = document.getElementById("employname").value
if (a == "" || a == null || a.length<5) {
  alert("Please fill in the missing or incomplete employee name");
}
else {
  myWidget.open();
}

};