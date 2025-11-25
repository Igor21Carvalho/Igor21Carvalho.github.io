const modalBg = document.getElementById("cursoModal");
const modalImg = document.getElementById("modalImg");
const modalTitle = document.getElementById("modalTitle");
const modalDesc = document.getElementById("modalDesc");
const modalCarga = document.getElementById("modalCarga");
const closeModal = document.getElementById("closeModal");

const cards = document.querySelectorAll(".curso-item");

cards.forEach(card => {
    card.addEventListener("click", () => {

        const img = card.getAttribute("data-img");
        const title = card.getAttribute("data-title");
        const desc = card.getAttribute("data-desc");
        const carga = card.getAttribute("data-carga");

        modalImg.src = img;
        modalTitle.textContent = title;
        modalDesc.textContent = desc;
        modalCarga.textContent = carga;

        modalBg.classList.add("show");
    });
});

closeModal.addEventListener("click", () => {
    modalBg.classList.remove("show");
});

modalBg.addEventListener("click", (e) => {
    if (e.target === modalBg) {
        modalBg.classList.remove("show");
    }
});
