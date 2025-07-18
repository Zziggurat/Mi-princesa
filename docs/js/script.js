/* ================================
   CARGA DE LAS IMÁGENES
   ================================ */
// Agrega aquí las rutas a tus fotos.  Ajusta nombres y cantidad a tu gusto.
const rutas = [
  "img/coni y yo 1.jpg",
  "img/coni y yo 2.jpg",
  "img/coni y yo3.jpg"
];

const galeria = document.getElementById("galeria");

// Creamos dinámicamente cada “cortina” div.foto
rutas.forEach((src, i) => {
  const div = document.createElement("div");
  div.classList.add("foto");

  // Zig‑zag: pares arriba, impares abajo
  div.classList.add(i % 2 === 0 ? "arriba" : "abajo");

  // Ponemos la imagen de fondo
  div.style.backgroundImage = `url(${src})`;

  galeria.appendChild(div);
});

/* ================================
   ANIMACIÓN DE APERTURA
   ================================ */
window.addEventListener("load", () => {
  // Pequeña pausa para dramatismo
  setTimeout(() => {
    // Quitamos las clases .arriba / .abajo → las “cortinas” bajan/suben
    document.querySelectorAll(".foto").forEach(foto => {
      foto.classList.remove("arriba", "abajo");
    });

    // Cuando termine la transición (1 s), mostramos la pregunta
    setTimeout(() => {
      document.getElementById("pregunta").classList.remove("oculto");
    }, 1000);
  }, 1000);
});

/* ================================
   BOTONES DE RESPUESTA
   ================================ */
document.getElementById("btn-si").onclick = () => {
  // Aquí puedes agregar un efecto adicional (confeti, sonido, etc.)
  window.location.href = "blog.html";   // Redirige a la página del “Sí”
};

document.getElementById("btn-no").onclick = () => {
  alert("Uy… bueno, lo intenté 😅");
};
const btnNo = document.getElementById("btn-no");
let escapando = false;

btnNo.addEventListener("mouseenter", () => {
  if (!escapando) {                 // primer intento
    escapando = true;
    const r = btnNo.getBoundingClientRect();
    btnNo.style.position = "absolute";
    btnNo.style.left = r.left + "px";
    btnNo.style.top  = r.top  + "px";
  }

  const pad = 20;
  const maxX = window.innerWidth  - btnNo.offsetWidth  - pad;
  const maxY = window.innerHeight - btnNo.offsetHeight - pad;
  btnNo.style.left = Math.random()*maxX + "px";
  btnNo.style.top  = Math.random()*maxY + "px";
});

btnNo.addEventListener("click", e => e.preventDefault());
