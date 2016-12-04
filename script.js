
var mrc ="0";

function memRecall() {
  document.getElementById("displayInput").value = mrc;
}


function memAdd() {
  mrc = document.getElementById("displayInput").value;
}

function memClear() {
  mrc ="0";
}

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
