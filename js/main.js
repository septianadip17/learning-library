
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

function handleTabClick(event) {
  const sectionId = event.target.dataset.section;
  document
    .querySelectorAll(".section")
    .forEach((sec) => sec.classList.remove("active"));
  document
    .querySelectorAll(".tab")
    .forEach((tab) => tab.classList.remove("active"));
  document.getElementById(sectionId).classList.add("active");
  event.target.classList.add("active");
}

function filterCards(keyword) {
  tabsConfig.forEach((tab) => {
    const grid = document.querySelector(`#${tab.id} .grid`);
    grid.innerHTML = "";
    cards.forEach((card) => {
      // Cek apakah card cocok dengan keyword
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

function handleSearchInput(event) {
  const keyword = event.target.value.trim().toLowerCase();
  filterCards(keyword);
}

function init() {
  renderTabs();
  renderSections();
  renderCards();
  const searchInput = document.getElementById("searchInput");
  if (searchInput) {
    searchInput.addEventListener("input", handleSearchInput);
  }
}

window.onload = init;
