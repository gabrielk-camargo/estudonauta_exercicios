let agora = new Date();
let hour = agora.getHours();
let min = agora.getMinutes();
let txt = document.getElementById("hour_js");
let horadia = document.querySelector(".img-horadia");

if (hour >= 7 && hour < 12) {
  txt.innerHTML = `Bom dia! <br>Agora são ${hour}:${min}`;
  horadia.setAttribute("src", "./img/img morning.jpg");

} else if (hour >= 12 && hour < 18) {
  txt.innerHTML = `Boa tarde! <br> Agora são ${hour}:${min}`;
  horadia.setAttribute("src", "./img/img day.jpg");

} else if (hour >= 18 || hour < 7) {
  txt.innerHTML = `Boa noite! <br> Agora são ${hour}:${min}`;
  horadia.setAttribute("src", "./img/img night.jpg");

} else if (hour >= 0 && hour < 7) {
  txt.innerHTML = `Boa madrugada! <br> Agora são ${hour}:${min}`;
  horadia.setAttribute("src", "./img/img dawn.jpg");
}

