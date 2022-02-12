const abt_btn_open = document.getElementById("abt_btn");
const abt_btn_close = document.getElementById("modal_btn_close");
const abt_modal = document.getElementById("abt_modal"); 

//typewritter variables
var typewritterMessage = ["cool developers","cat lovers","the Autistic-Team"];
var textPosition = 0;
var speed = 130;

//modal events
abt_btn_open.addEventListener("click", show_modal);
abt_btn_close.addEventListener("click", hide_modal);

//modal functions

function show_modal(){
  console.log("show");
  abt_modal.classList.add("show");
}

function hide_modal(){
  console.log("hide");
  abt_modal.classList.remove("show");
}

//trypewritter functions
const timer = ms => new Promise(res => setTimeout(res, ms))

async function typewritter(){

  console.log(typewritterMessage.length);
 /* if(textPosition++ != typewritterMessage[i].length){
    setTimeout(typewritter, speed);
  }*/

  for(let i = 0; i < typewritterMessage.length; i++){
    document.getElementById("team_text_typew").innerHTML = "";
    textPosition = 0;
    while(textPosition - 1  != typewritterMessage[i].length){
      document.getElementById("team_text_typew").innerHTML = typewritterMessage[i].substring(0, textPosition) + "<span>|</span>";
      textPosition++;
      await timer(speed);
    }
    await timer(3000);
  }

}


window.addEventListener("load", typewritter);

