let Showdiv = document.getElementById("disp");

function suB(){
let radiobtn = document.getElementsByName('radio');
 for (let radios of radiobtn){
   if(radios.checked){
     Showdiv.innerHTML="You are selected the Subject is"+ radios.value;
   }
 }
}
