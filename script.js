// 1. Seleccionamos los elementos que vamos a manipular
const extraInfo = document.getElementById("extra-info");
const toggleInfoBtn = document.getElementById("toggle-info");
const toggleThemeBtn = document.getElementById("toggle-theme");
const card = document.getElementById("profile-card");

// 2. Estado inicial
let infoVisible = false;

// 3. Mostrar / ocultar info extra
toggleInfoBtn.addEventListener("click", () => {
  infoVisible = !infoVisible; // alternamos

  if (infoVisible) {
    extraInfo.style.display = "block";
    toggleInfoBtn.textContent = "Ver menos";
  } else {
    extraInfo.style.display = "none";
    toggleInfoBtn.textContent = "Ver más";
  }
});

// 4. Cambiar tema
toggleThemeBtn.addEventListener("click", () => {
  // alternamos la clase .light en la tarjeta
  card.classList.toggle("light");

  // opcional: cambiar el texto del botón
  if (card.classList.contains("light")) {
    toggleThemeBtn.textContent = "Tema oscuro";
  } else {
    toggleThemeBtn.textContent = "Cambiar tema";
  }
});


