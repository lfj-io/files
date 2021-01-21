var langVN=document.querySelector('a[href*="misc/language"]').innerText.match(/ng\sVi/ig)?true:false;
var langEN=document.querySelector('a[href*="misc/language"]').innerText.match(/english/ig)?true:false;
var langZH=false;
if(langEN ==false && langVN==false){langZH=true; }
