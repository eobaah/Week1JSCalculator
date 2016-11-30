function c(val){
  document.getElementById("displayInput").value = val;
}

function math(val){
  document.getElementById("displayInput").value += val;
}

function e(){
  try{
    c(eval(document.getElementById("displayInput").value));
  }
  catch(e){
      c('Error')
    }

}
