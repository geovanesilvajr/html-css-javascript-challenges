const nomeForm = document.getElementById("nome");
const idadeForm = document.getElementById("idade");
const nomeBtn = document.getElementById("nameBtn");
const idadeBtn = document.getElementById("idadeBtn");
const formulario1 = document.getElementById("form1");
const formulario2 = document.getElementById("form2");

formulario1.addEventListener("submit", (evento) => {
  evento.preventDefault();
  console.log("Valor digitado", nomeForm.value);
});

formulario2.addEventListener("submit", (evento) => {
  evento.preventDefault();
  console.log("Valor digitado", idadeForm.value);
});
