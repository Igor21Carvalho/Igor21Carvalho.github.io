// ===============================
// MODAL
// ===============================
const modalBg = document.getElementById("cursoModal");
const modalImg = document.getElementById("modalImg");
const modalTitle = document.getElementById("modalTitle");
const modalDesc = document.getElementById("modalDesc");
const modalCarga = document.getElementById("modalCarga");
const closeModal = document.getElementById("closeModal");

function abrirModal(curso) {
  modalImg.src = curso.imagem;
  modalTitle.textContent = curso.titulo;
  modalDesc.textContent = curso.descricao;
  modalCarga.textContent = curso.carga;
  modalBg.classList.add("show");
}

closeModal.addEventListener("click", () => {
  modalBg.classList.remove("show");
});

modalBg.addEventListener("click", (e) => {
  if (e.target === modalBg) {
    modalBg.classList.remove("show");
  }
});

// ===============================
// DADOS DOS CURSOS
// ===============================
const cursos = [
  {
    titulo: "Profissional Digital",
    descricao: "Windows, Word, Excel, PowerPoint e Internet.",
    carga: "96 horas",
    imagem: "img/catalogo/1.jpg",
    idade: ["jovem", "adulto"],
    temas: ["tecnologia"]
  },
  {
    titulo: "Informática Kids",
    descricao: "Photoshop, Illustrator e criação visual.",
    carga: "96 horas",
    imagem: "img/catalogo/2.jpg",
    idade: ["infantil"],
    temas: ["tecnologia"]
  },
  {
    titulo: "Excel Avançado",
    descricao: "Aprendizado lúdico para crianças.",
    carga: "12 meses",
    imagem: "img/catalogo/3.jpg",
    idade: ["jovem", "adulto"],
    temas: ["tecnologia"]
  },
  {
    titulo: "Assistente Administrativo",
    descricao: "Do básico ao avançado.",
    carga: "25 horas",
    imagem: "img/catalogo/4.jpg",
    idade: ["jovem", "adulto"],
    temas: ["administrativo"]
  }
  ,
  {
    titulo: "Inglês",
    descricao: "Do básico ao avançado.",
    carga: "25 horas",
    imagem: "img/catalogo/5.jpg",
    idade: ["infantil", "jovem", "adulto"],
    temas: ["idiomas"]
  }
];

// ===============================
// GALERIA + FILTROS
// ===============================
const galeria = document.getElementById("galeriaCursos");

let filtroIdade = null;
let filtroTema = null;

function renderCursos(lista) {
  galeria.innerHTML = "";

  lista.forEach(curso => {
    const card = document.createElement("div");
    card.className = "card-curso";

    card.innerHTML = `
      <img src="${curso.imagem}" alt="${curso.titulo}">
      <div class="card-titulo">${curso.titulo}</div>
    `;

    card.addEventListener("click", () => abrirModal(curso));
    galeria.appendChild(card);
  });
}

function aplicarFiltros() {
  const filtrados = cursos.filter(curso => {
    const idadeOk = !filtroIdade || curso.idade.includes(filtroIdade);
    const temaOk  = !filtroTema  || curso.temas.includes(filtroTema);
    return idadeOk && temaOk;
  });

  renderCursos(filtrados);
}

// ===============================
// BOTÕES DE FILTRO
// ===============================
document.querySelectorAll("[data-idade]").forEach(btn => {
  btn.addEventListener("click", () => {
    filtroIdade = btn.dataset.idade;
    marcarAtivo(btn, "[data-idade]");
    aplicarFiltros();
  });
});

document.querySelectorAll("[data-tema]").forEach(btn => {
  btn.addEventListener("click", () => {
    filtroTema = btn.dataset.tema;
    marcarAtivo(btn, "[data-tema]");
    aplicarFiltros();
  });
});

function marcarAtivo(botao, seletor) {
  document.querySelectorAll(seletor).forEach(b => b.classList.remove("ativo"));
  botao.classList.add("ativo");
}

// ===============================
// INICIALIZA
// ===============================
renderCursos(cursos);



const btnLimpar = document.getElementById("limparFiltros");

btnLimpar.addEventListener("click", () => {
  filtroIdade = null;
  filtroTema = null;

  // remove visual ativo dos botões
  document.querySelectorAll("[data-idade], [data-tema]").forEach(btn => {
    btn.classList.remove("ativo");
  });

  // renderiza todos os cursos novamente
  renderCursos(cursos);
});