
/* откр/закр формы*/
let isopen=false;
    
function openform(){
  if(!isopen){
    $(".brone-form").css("display", "block");
    isopen=true;
  }
  else if(isopen){
    $(".brone-form").css("display", "none");
    isopen=false;
  }
}

/* обработка нажатия */
window.onclick = function(event) {
            if (!event.target.matches('.form-card')&& (event.target.matches('.form-area') || event.target.matches('.brone-form') || event.target.matches('.brone-form::before'))) {
                openform();
            }
            }

