
var mrc ="0";

function memRecall() {
  document.getElementById("displayInput").value = mrc;
}


function memAdd() {
  var mrc = document.getElementById("displayInput").value;
}

function memClear() {
  var mrc ="";
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
