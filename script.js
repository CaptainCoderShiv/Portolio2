var tablinks = document.getElementsByClassName("title-links");
var tabcontents = document.getElementsByClassName("tab-contents");
var sidemenu=document.getElementById("sidemenu");
function opentab(tabname, element) {
  for (let tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  
  for (let tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  
  element.classList.add("active-link");
  
  document.getElementById(tabname).classList.add("active-tab");
}

function closemenu(){
  sidemenu.style.right="-200px";
}
function openmenu(){
  sidemenu.style.right="0";
}


