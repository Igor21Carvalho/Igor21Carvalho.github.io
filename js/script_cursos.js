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
    descricao: "Windows, Word, Excel, PowerPoint e Internet de forma prática e eficiente no dia a dia e profissional.",
    carga: "96 horas",
    imagem: "img/catalogo/1.jpg",
    idade: ["jovem", "adulto"],
    temas: ["tecnologia"]
  }
  ,
  {
    titulo: "Informática Kids",
    descricao: "Introduz crianças ao mundo da tecnologia de forma divertida, desenvolvendo habilidades básicas no uso do computador e da internet.",
    carga: "96 horas",
    imagem: "img/catalogo/2.jpg",
    idade: ["infantil"],
    temas: ["tecnologia"]
  }
  ,
  {
    titulo: "Excel Avançado",
    descricao: "Aprofunda o uso do Excel com funções avançadas, análise de dados, gráficos e automações para uso profissional.",
    carga: "12 meses",
    imagem: "img/catalogo/3.jpg",
    idade: ["jovem", "adulto"],
    temas: ["tecnologia"]
  }
  ,
  {
    titulo: "Assistente Administrativo",
    descricao: "Prepara você para atuar com eficiência no setor administrativo, dominando rotinas de escritório, organização, atendimento e suporte à gestão.",
    carga: "25 horas",
    imagem: "img/catalogo/4.jpg",
    idade: ["jovem", "adulto"],
    temas: ["administrativo"]
  }
  ,
  {
    titulo: "Inglês",
    descricao: "Desenvolva a comunicação em inglês para situações do dia a dia, estudos e mercado de trabalho, do básico ao avançado.",
    carga: "25 horas",
    imagem: "img/catalogo/5.jpg",
    idade: ["infantil", "jovem", "adulto"],
    temas: ["idiomas"]
  }
  ,
  {
    titulo: "Assistente de Marketing",
    descricao: "Prepara para o mercado aprendendo a planejar ações e fortalecer marcas por meio do marketing.",
    carga: "25 horas",
    imagem: "img/catalogo/6.jpg",
    idade: ["jovem", "adulto"],
    temas: ["administrativo"]
  }
  ,
  {
    titulo: "Gestão Financeira",
    descricao: "Aprenda a controlar e planejar finanças de forma estratégica.",
    carga: "25 horas",
    imagem: "img/catalogo/7.jpg",
    idade: ["jovem", "adulto"],
    temas: ["administrativo"]
  }
  ,
  {
    titulo: "Gestão em RH",
    descricao: "Capacita para gerenciar pessoas e processos de recursos humanos com eficiência.",
    carga: "25 horas",
    imagem: "img/catalogo/8.jpg",
    idade: ["jovem", "adulto"],
    temas: ["administrativo"]
  }
  ,
  {
    titulo: "Auxiliar Bancário",
    descricao: "Prepara para atuar em rotinas bancárias e atendimento ao cliente com eficiência.",
    carga: "25 horas",
    imagem: "img/catalogo/9.jpg",
    idade: ["jovem", "adulto"],
    temas: ["administrativo"]
  }
  ,
  {
    titulo: "Empreendedor Digital",
    descricao: "Capacita para desenvolver e gerenciar negócios, explorando estratégias de marketing, vendas e crescimento.",
    carga: "25 horas",
    imagem: "img/catalogo/10.jpg",
    idade: ["jovem", "adulto"],
    temas: ["administrativo"]
  }
  ,
  {
    titulo: "Turismo e Hotelaria",
    descricao: "Prepara para atuar em hotéis, agências e serviços turísticos, oferecendo atendimento de qualidade e gestão eficiente.",
    carga: "25 horas",
    imagem: "img/catalogo/11.jpg",
    idade: ["jovem", "adulto"],
    temas: ["administrativo"]
  }
  ,
  {
    titulo: "Auxiliar de Logística",
    descricao: "Capacita para organizar, controlar e otimizar processos de estoque e distribuição.",
    carga: "25 horas",
    imagem: "img/catalogo/12.jpg",
    idade: ["jovem", "adulto"],
    temas: ["administrativo"]
  }
  ,
  {
    titulo: "Atendente de Farmácia",
    descricao: "Ensina a atender clientes, organizar medicamentos e garantir o bom funcionamento da farmácia.",
    carga: "25 horas",
    imagem: "img/catalogo/13.jpg",
    idade: ["jovem", "adulto"],
    temas: ["administrativo"]
  }
  ,
  {
    titulo: "Empreendedorismo",
    descricao: "Desenvolve habilidades para criar, planejar e gerir negócios de forma inovadora e estratégica.",
    carga: "25 horas",
    imagem: "img/catalogo/14.jpg",
    idade: ["jovem", "adulto"],
    temas: ["administrativo"]
  }
  ,
  {
    titulo: "Design Gráfico",
    descricao: "Aprenda a criar peças visuais impactantes, combinando criatividade e ferramentas digitais.",
    carga: "25 horas",
    imagem: "img/catalogo/15.jpg",
    idade: ["jovem", "adulto"],
    temas: ["design"]
  }
  ,
  {
    titulo: "Design Digital",
    descricao: "Aprenda a criar esboços, desenhos digitais e desenvolver cenários e personagens de forma profissional.",
    carga: "25 horas",
    imagem: "img/catalogo/16.jpg",
    idade: ["infantil", "jovem"],
    temas: ["design"]
  }
  ,
  {
    titulo: "Design Gráfico I",
    descricao: "Aprofunda técnicas de criação visual, layout e identidade para projetos profissionais.",
    carga: "25 horas",
    imagem: "img/catalogo/5.jpg",
    idade: ["jovem", "adulto"],
    temas: ["design"]
  }
  ,
  {
    titulo: "Canva",
    descricao: "Ensina a criar designs atrativos de forma rápida e prática para redes sociais, apresentações e materiais diversos.",
    carga: "25 horas",
    imagem: "img/catalogo/18.jpg",
    idade: ["jovem", "adulto"],
    temas: ["design"]
  }
  ,
  {
    titulo: "Criação e Desenvolvimento de Jogos",
    descricao: "Capacita para projetar, programar e desenvolver jogos digitais criativos e interativos.",
    carga: "96 horas",
    imagem: "img/catalogo/20.jpg",
    idade: ["infantil", "jovem", "adulto"],
    temas: ["tecnologia"]
  }
  ,
  {
    titulo: "Robótica",
    descricao: "Ensina a construir e programar robôs, unindo tecnologia, lógica e criatividade em projetos práticos.",
    carga: "25 horas",
    imagem: "img/catalogo/21.jpg",
    idade: ["infantil", "jovem"],
    temas: ["tecnologia"]
  }
  ,
  {
    titulo: "Criação e Edição de Vídeos",
    descricao: "Capacita para produzir, editar e finalizar vídeos profissionais para diferentes plataformas.",
    carga: "25 horas",
    imagem: "img/catalogo/22.jpg",
    idade: ["jovem", "adulto"],
    temas: ["design"]
  }
  ,
  {
    titulo: "Projetista I",
    descricao: "Aprenda a utilizar ferramentas digitais para criar e desenvolver projetos com precisão e criatividade.",
    carga: "25 horas",
    imagem: "img/catalogo/23.jpg",
    idade: ["jovem", "adulto"],
    temas: ["tecnologia"]
  }
  ,
  {
    titulo: "Projetista II",
    descricao: "Aprofunda técnicas de desenvolvimento de projetos, combinando criatividade e precisão para resultados profissionais.",
    carga: "25 horas",
    imagem: "img/catalogo/24.jpg",
    idade: ["jovem", "adulto"],
    temas: ["tecnologia"]
  }
  ,
  {
    titulo: "Inteligência Artificial e Chat GPT",
    descricao: "Ensina a utilizar IA e ChatGPT para otimizar tarefas, criar conteúdos e soluções inovadoras.",
    carga: "25 horas",
    imagem: "img/catalogo/25.jpg",
    idade: ["jovem", "adulto"],
    temas: ["tecnologia"]
  }
  ,
  {
    titulo: "Liderança Inovadora e Tecnologia",
    descricao: "Capacita para liderar equipes de forma estratégica, aplicando inovação e tecnologia na gestão de resultados.",
    carga: "25 horas",
    imagem: "img/catalogo/26.jpg",
    idade: ["jovem", "adulto"],
    temas: ["tecnologia"]
  }
  ,
  {
    titulo: "Manutenção de Computadores e Redes",
    descricao: "Ensina a instalar, configurar e solucionar problemas de computadores e redes com eficiência.",
    carga: "25 horas",
    imagem: "img/catalogo/27.jpg",
    idade: ["jovem", "adulto"],
    temas: ["tecnologia"]
  }
  ,
  {
    titulo: "Programador Front End",
    descricao: "Capacita para desenvolver interfaces web modernas e interativas, unindo design e funcionalidade.",
    carga: "100 horas",
    imagem: "img/catalogo/28.jpg",
    idade: ["jovem", "adulto"],
    temas: ["tecnologia"]
  }
  ,
  {
    titulo: "Programador Back End",
    descricao: "Ensina a criar e gerenciar a lógica, bancos de dados e funcionalidades que fazem aplicações web funcionarem.",
    carga: "100 horas",
    imagem: "img/catalogo/29.jpg",
    idade: ["jovem", "adulto"],
    temas: ["tecnologia"]
  }
  ,
  {
    titulo: "Programador Full Stack",
    descricao: "Capacita para desenvolver aplicações completas, integrando front-end e back-end com eficiência.",
    carga: "200 horas",
    imagem: "img/catalogo/30.jpg",
    idade: ["jovem", "adulto"],
    temas: ["tecnologia"]
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