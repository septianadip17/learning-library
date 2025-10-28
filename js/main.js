/**
 * Render tab navigasi berdasarkan konfigurasi tabsConfig.
 */
function renderTabs() {
  const tabsContainer = document.getElementById("tabs");
  tabsContainer.innerHTML = "";
  tabsConfig.forEach((tab, idx) => {
    const btn = document.createElement("button");
    btn.className = "tab" + (idx === 0 ? " active" : "");
    btn.textContent = tab.label;
    btn.dataset.section = tab.id;
    btn.onclick = handleTabClick;
    tabsContainer.appendChild(btn);
  });
}

/**
 * Render section (konten per tab) secara dinamis.
 */
function renderSections() {
  const sectionsContainer = document.getElementById("sections");
  sectionsContainer.innerHTML = "";
  tabsConfig.forEach((tab, idx) => {
    const sectionDiv = document.createElement("div");
    sectionDiv.id = tab.id;
    sectionDiv.className = "section" + (idx === 0 ? " active" : "");
    sectionDiv.innerHTML = '<div class="grid"></div>';
    sectionsContainer.appendChild(sectionDiv);
  });
}

/**
 * Render semua card materi ke dalam section sesuai tab.
 */
function renderCards() {
  tabsConfig.forEach((tab) => {
    const grid = document.querySelector(`#${tab.id} .grid`);
    grid.innerHTML = "";
    cards.forEach((card) => {
      if (card.sections.includes(tab.id)) {
        const cardDiv = document.createElement("div");
        cardDiv.className = "card";
        cardDiv.innerHTML = `<h2>${card.title}</h2>${card.content}`;
        grid.appendChild(cardDiv);
      }
    });
  });
}

/**
 * Handler saat tab diklik: aktifkan tab & tampilkan section sesuai tab.
 * @param {Event} event
 */
function handleTabClick(event) {
  const sectionId = event.target.dataset.section;
  // Nonaktifkan semua section dan tab
  document
    .querySelectorAll(".section")
    .forEach((sec) => sec.classList.remove("active"));
  document
    .querySelectorAll(".tab")
    .forEach((tab) => tab.classList.remove("active"));
  // Aktifkan section dan tab yang dipilih
  document.getElementById(sectionId).classList.add("active");
  event.target.classList.add("active");
}

/**
 * Filter dan render card sesuai keyword pencarian.
 * @param {string} keyword
 */
function filterCards(keyword) {
  tabsConfig.forEach((tab) => {
    const grid = document.querySelector(`#${tab.id} .grid`);
    grid.innerHTML = "";
    cards.forEach((card) => {
      // Cek apakah judul atau konten card mengandung keyword
      const match =
        card.title.toLowerCase().includes(keyword) ||
        card.content.toLowerCase().includes(keyword);
      if (card.sections.includes(tab.id) && (keyword === "" || match)) {
        const cardDiv = document.createElement("div");
        cardDiv.className = "card";
        cardDiv.innerHTML = `<h2>${card.title}</h2>${card.content}`;
        grid.appendChild(cardDiv);
      }
    });
  });
}

/**
 * Handler untuk input pada search bar.
 * @param {Event} event
 */
function handleSearchInput(event) {
  const keyword = event.target.value.trim().toLowerCase();
  filterCards(keyword);
}

/**
 * Inisialisasi UI: render tab, section, card, dan event search.
 */
function init() {
  renderTabs();
  renderSections();
  renderCards();
  // Tambahkan event listener untuk search bar
  const searchInput = document.getElementById("searchInput");
  if (searchInput) {
    searchInput.addEventListener("input", handleSearchInput);
  }
}

// Jalankan init saat halaman selesai dimuat
window.onload = init;
