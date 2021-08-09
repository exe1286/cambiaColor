var cuadros = document.getElementById("contenedor");

cuadros.addEventListener("click", function (e) {
  if (e.target.className == "cuadro1") {
    e.target.style = "background: green;";
  } else if (e.target.className == "cuadro2") {
    e.target.style = "background: red;";
  } else if (e.target.className == "cuadro3") {
    e.target.style = "background: blue;";
  }
});
