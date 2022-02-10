const abt_btn_open = document.getElementById("abt_btn");
const abt_btn_close = document.getElementById("modal_btn_close");
const abt_modal = document.getElementById("abt_modal"); 

abt_btn_open.addEventListener("click", show_modal);
abt_btn_close.addEventListener("click", hide_modal);


function show_modal(){
  console.log("show");
  abt_modal.classList.add("show");
}

function hide_modal(){
  console.log("hide");
  abt_modal.classList.remove("show");
}
