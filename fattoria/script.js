const animale1 = {
  specie: "mucca",
  razza: "chianina",
  zampe:4
};
const animale2 = {
  specie: "maiale",
  razza: "kunekune",
  zampe:4
};
const animale3 = {
  specie: "gallina",
  razza: "andalusa",
  zampe:2
};

function mucca(){
    document.getElementById("mucca").innerHTML= `Specie: ${animale1.specie}, Razza: ${animale1.razza}, Zampe: ${animale1.zampe}`;
}
function maiale(){
  document.getElementById("maiale").innerHTML= `Specie: ${animale2.specie}, Razza: ${animale2.razza}, Zampe: ${animale2.zampe}`;
}
function  gallo(){
  document.getElementById("gallo").innerHTML= `Specie: ${animale3.specie}, Razza: ${animale3.razza}, Zampe: ${animale3.zampe}`;
}
