// ativar links do menu
const links = document.querySelectorAll(".header-menu li a");

links.forEach(ativarLink);

function ativarLink(link) {
  const url = location.href;
  const href = link.href;
  if (url.includes(href)) {
    link.classList.add("ativo");
  }
}

// ativar itens do orçamento

const parametros = new URLSearchParams(location.search);

parametros.forEach(ativarProduto);

function ativarProduto(parametro) {
  const elemento = document.getElementById(parametro);
  if (elemento) {
    elemento.checked = true;
  }
}

//perguntas frequentes

const perguntas = document.querySelectorAll(".perguntas button");

perguntas.forEach(eventosPerguntas);

function eventosPerguntas(pergunta) {
  pergunta.addEventListener("click", ativarPergunta);
}

function ativarPergunta(event) {
  const pergunta = event.currentTarget;
  const controls = pergunta.getAttribute("aria-controls");
  const resposta = document.getElementById(controls);

  resposta.classList.toggle("ativa");
  const ativa = resposta.classList.contains("ativa");
  pergunta.setAttribute("aria-expanded", ativa);
}

//galeria de bicicletas

const galeria = document.querySelectorAll(".bicicleta-imagens img");
const galeriaContainer = document.querySelector(".bicicleta-imagens");

galeria.forEach(eventosGaleria);

function eventosGaleria(img) {
  img.addEventListener("click", trocarImagem);
}

function trocarImagem(event) {
  const img = event.currentTarget;
  const media = matchMedia("(min-width: 1000px)").matches;
  if (media) {
    galeriaContainer.prepend(img);
  }
}

//animação

if (window.SimpleAnime) {
  new SimpleAnime();
}
