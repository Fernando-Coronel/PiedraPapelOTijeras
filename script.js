//1 es piedra 2 es papel 3 es tijeras
let jugador = 0;
let pc = Math.floor(Math.random() * 3) + 1;

jugador = prompt("Elije una opcion:\n1:Piedra\n2:Papel\n3:Tijeras");
if( jugador == 1){
  alert("Elegiste 🪨");
}else if(jugador == 2){
  alert("Elegiste 📄");
}else if(jugador == 3){
  alert("Elegiste ✂️");
}
if(pc == 1){
  alert("PC Elige 🪨");
}else if(pc == 2){
  alert("PC elige 📄");
}else if(pc == 3){
  alert("PC elige ✂️");
}

//Combate
if(pc == jugador){
  alert("Empate!!! 😒");
}else if(jugador == 1 && pc == 3){
  alert("Ganaste!!!, SIIIIUUU 😁👍");
}else if(jugador == 2 && pc == 1){
  alert("Ganaste!!!, SIIIIUUU 😁👍");  
}else if(jugador == 3 && pc == 2){
  alert("Ganaste!!!, SIIIIUUU 😁👍");   
}else{
  alert("Perdiste!!! 😥😭");
}



