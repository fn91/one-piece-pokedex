// ============================================
// ONE PIECE POKÉDEX - APPLICATION LOGIC
// ============================================

// Application State
const state = {
  currentView: 'characters',
  characters: [],
  devilFruits: [],
  filteredCharacters: [],
  filteredFruits: [],
  currentIsland: 'default'
};

// Island Information
const islandData = {
  default: {
    name: 'Open Sea',
    description: 'The vast ocean of the Grand Line, where countless adventures await. Navigate through treacherous waters and discover new islands!',
    gradient: 'linear-gradient(135deg, #1a2332 0%, #006994 100%)'
  },
  alabasta: {
    name: 'Alabasta',
    description: 'A desert kingdom in the Grand Line, known for its ancient history and the Poneglyph hidden within. Home to Princess Vivi and the site of Crocodile\'s defeat.',
    gradient: 'linear-gradient(135deg, #8B4513 0%, #DAA520 50%, #CD853F 100%)'
  },
  water7: {
    name: 'Water 7',
    description: 'A water metropolis famous for its shipwrights and the Galley-La Company. The Straw Hats acquired the Thousand Sunny here and said goodbye to the Going Merry.',
    gradient: 'linear-gradient(135deg, #2c3e50 0%, #4682B4 50%, #87CEEB 100%)'
  },
  skypiea: {
    name: 'Skypiea',
    description: 'An island in the sky located 10,000 meters above the sea. Home to the Shandians and ruled by the self-proclaimed god Enel. Features unique dial technology.',
    gradient: 'linear-gradient(135deg, #87CEEB 0%, #B0E0E6 50%, #F0F8FF 100%)'
  },
  dressrosa: {
    name: 'Dressrosa',
    description: 'A kingdom of passion and toys, ruled by Donquixote Doflamingo. Known for its colosseum and the tragic history of the Tontattas. Site of the Mera Mera no Mi tournament.',
    gradient: 'linear-gradient(135deg, #8B0000 0%, #DC143C 50%, #FFD700 100%)'
  },
  wano: {
    name: 'Wano Country',
    description: 'A nation of samurai isolated from the world. Features traditional Japanese architecture and culture. The site of the great battle against Kaido and Big Mom.',
    gradient: 'linear-gradient(135deg, #2F4F4F 0%, #8B4513 50%, #FFD700 100%)'
  }
};

// ============================================
// INITIALIZATION
// ============================================

document.addEventListener('DOMContentLoaded', async () => {
  await loadData();
  initializeEventListeners();
  renderCharacters();
});

// Load character and Devil Fruit data
async function loadData() {
  try {
    const [charactersResponse, fruitsResponse] = await Promise.all([
      fetch('data/characters.json'),
      fetch('data/devil-fruits.json')
    ]);

    state.characters = await charactersResponse.json();
    state.devilFruits = await fruitsResponse.json();
    state.filteredCharacters = [...state.characters];
    state.filteredFruits = [...state.devilFruits];
  } catch (error) {
    console.error('Error loading data:', error);
    showError('Failed to load data. Please refresh the page.');
  }
}

// ============================================
// EVENT LISTENERS
// ============================================

function initializeEventListeners() {
  // Navigation tabs
  document.querySelectorAll('.nav-tab').forEach(tab => {
    tab.addEventListener('click', (e) => {
      const view = e.target.dataset.view;
      switchView(view);
    });
  });

  // Character search and filter
  document.getElementById('character-search').addEventListener('input', (e) => {
    filterCharacters(e.target.value, document.getElementById('character-filter').value);
  });

  document.getElementById('character-filter').addEventListener('change', (e) => {
    filterCharacters(document.getElementById('character-search').value, e.target.value);
  });

  // Devil Fruit search and filter
  document.getElementById('fruit-search').addEventListener('input', (e) => {
    filterDevilFruits(e.target.value, document.getElementById('fruit-filter').value);
  });

  document.getElementById('fruit-filter').addEventListener('change', (e) => {
    filterDevilFruits(document.getElementById('fruit-search').value, e.target.value);
  });

  // Island selector
  document.querySelectorAll('.island-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const island = e.target.dataset.island;
      changeIsland(island);
    });
  });

  // Modal close
  document.getElementById('modal-close').addEventListener('click', closeModal);
  document.getElementById('detail-modal').addEventListener('click', (e) => {
    if (e.target.id === 'detail-modal') {
      closeModal();
    }
  });
}

// ============================================
// VIEW SWITCHING
// ============================================

function switchView(view) {
  state.currentView = view;

  // Update active tab
  document.querySelectorAll('.nav-tab').forEach(tab => {
    tab.classList.remove('active');
    if (tab.dataset.view === view) {
      tab.classList.add('active');
    }
  });

  // Hide all views
  document.querySelectorAll('.view-container').forEach(container => {
    container.classList.add('hidden');
  });

  // Show selected view
  switch (view) {
    case 'characters':
      document.getElementById('characters-view').classList.remove('hidden');
      renderCharacters();
      break;
    case 'devil-fruits':
      document.getElementById('devil-fruits-view').classList.remove('hidden');
      renderDevilFruits();
      break;
    case 'grand-line':
      document.getElementById('grand-line-view').classList.remove('hidden');
      renderGrandLineMode();
      break;
  }
}

// ============================================
// CHARACTER RENDERING
// ============================================

function renderCharacters() {
  const grid = document.getElementById('character-grid');
  grid.innerHTML = '';

  if (state.filteredCharacters.length === 0) {
    grid.innerHTML = '<p class="text-center" style="grid-column: 1/-1; color: var(--color-parchment); font-size: 1.2rem;">No characters found</p>';
    return;
  }

  state.filteredCharacters.forEach(character => {
    const card = createCharacterCard(character);
    grid.appendChild(card);
  });
}

// Character emoji mapping for visual placeholders
const characterEmojis = {
  'Monkey D. Luffy': '👒',
  'Roronoa Zoro': '⚔️',
  'Nami': '🗺️',
  'Usopp': '🎯',
  'Sanji': '🍳',
  'Tony Tony Chopper': '🦌',
  'Nico Robin': '📚',
  'Franky': '🔧',
  'Brook': '🎵',
  'Jinbe': '🦈',
  'Shanks': '👑',
  'Portgas D. Ace': '🔥',
  'Trafalgar D. Water Law': '💀',
  'Sabo': '🔥',
  'Crocodile': '🏜️',
  'Donquixote Doflamingo': '🕶️',
  'Kaido': '🐉',
  'Charlotte Linlin (Big Mom)': '👸'
};

function createCharacterCard(character) {
  const card = document.createElement('div');
  card.className = 'character-card';
  card.setAttribute('data-character', character.name);
  card.onclick = () => showCharacterDetail(character);

  // Get character emoji or default
  const emoji = characterEmojis[character.name] || '🏴‍☠️';

  // Create enhanced placeholder with emoji - using it as the main image for now
  const placeholderSVG = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='250'%3E%3Cdefs%3E%3ClinearGradient id='grad-${character.id}' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:rgba(255,255,255,0.1);stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:rgba(0,0,0,0.2);stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect fill='url(%23grad-${character.id})' width='200' height='250'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-size='100' style='filter: drop-shadow(0 6px 12px rgba(0,0,0,0.4))'%3E${emoji}%3C/text%3E%3C/svg%3E`;

  card.innerHTML = `
    <div class="character-image-container">
      <img 
        src="${placeholderSVG}" 
        alt="${character.name}"
        class="character-image"
      >
    </div>
    <h3 class="character-name">${character.name}</h3>
    <p class="character-bounty">₿ ${character.bounty}</p>
    <p class="character-role">${character.role}</p>
  `;

  return card;
}

function filterCharacters(searchTerm, type) {
  try {
    // Validate inputs
    if (typeof searchTerm !== 'string') {
      throw new Error('El término de búsqueda debe ser texto válido');
    }

    if (!state.characters || !Array.isArray(state.characters)) {
      throw new Error('No se han cargado los personajes correctamente');
    }

    // Filter characters
    state.filteredCharacters = state.characters.filter(character => {
      const matchesSearch = character.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        character.role.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesType = type === 'all' || character.type === type;
      return matchesSearch && matchesType;
    });

    // Check if no results found
    if (state.filteredCharacters.length === 0 && searchTerm.trim() !== '') {
      showSearchError('personaje', searchTerm);
    } else {
      clearSearchError();
    }

    renderCharacters();
  } catch (error) {
    console.error('Error al filtrar personajes:', error);
    showError(`Error en la búsqueda: ${error.message}`);
    // Show all characters on error
    state.filteredCharacters = state.characters;
    renderCharacters();
  }
}

// ============================================
// DEVIL FRUIT RENDERING
// ============================================

function renderDevilFruits() {
  const grid = document.getElementById('fruit-grid');
  grid.innerHTML = '';

  if (state.filteredFruits.length === 0) {
    grid.innerHTML = '<p class="text-center" style="grid-column: 1/-1; color: var(--color-parchment); font-size: 1.2rem;">No Devil Fruits found</p>';
    return;
  }

  state.filteredFruits.forEach(fruit => {
    const card = createDevilFruitCard(fruit);
    grid.appendChild(card);
  });
}

function createDevilFruitCard(fruit) {
  const card = document.createElement('div');
  card.className = 'devil-fruit-card';
  card.onclick = () => showFruitDetail(fruit);

  // Determine fruit type class
  let typeClass = fruit.type.toLowerCase().replace(/\s+/g, '-');
  if (fruit.type.includes('Mythical')) {
    typeClass = 'zoan'; // Use zoan color for mythical zoan
  }

  card.innerHTML = `
    <span class="fruit-type-badge ${typeClass}">${fruit.type}</span>
    <div class="fruit-image-container">
      <img 
        src="assets/devil-fruits/${fruit.image}" 
        alt="${fruit.name}"
        class="fruit-image"
        onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22200%22 height=%22200%22%3E%3Ccircle cx=%22100%22 cy=%22100%22 r=%2280%22 fill=%22%23e74c3c%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-family=%22Arial%22 font-size=%2240%22%3E🍎%3C/text%3E%3C/svg%3E'"
      >
    </div>
    <h3 class="fruit-name">${fruit.name}</h3>
    <p class="fruit-user">User: ${fruit.currentUser || 'Unknown'}</p>
  `;

  return card;
}

function filterDevilFruits(searchTerm, type) {
  try {
    // Validate inputs
    if (typeof searchTerm !== 'string') {
      throw new Error('El término de búsqueda debe ser texto válido');
    }

    if (!state.devilFruits || !Array.isArray(state.devilFruits)) {
      throw new Error('No se han cargado las frutas del diablo correctamente');
    }

    // Filter devil fruits
    state.filteredFruits = state.devilFruits.filter(fruit => {
      const matchesSearch = fruit.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (fruit.currentUser && fruit.currentUser.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesType = type === 'all' || fruit.type.includes(type);
      return matchesSearch && matchesType;
    });

    // Check if no results found
    if (state.filteredFruits.length === 0 && searchTerm.trim() !== '') {
      showSearchError('fruta del diablo', searchTerm);
    } else {
      clearSearchError();
    }

    renderDevilFruits();
  } catch (error) {
    console.error('Error al filtrar frutas del diablo:', error);
    showError(`Error en la búsqueda: ${error.message}`);
    // Show all fruits on error
    state.filteredFruits = state.devilFruits;
    renderDevilFruits();
  }
}

// ============================================
// GRAND LINE MODE
// ============================================

function renderGrandLineMode() {
  const grid = document.getElementById('grand-line-grid');
  grid.innerHTML = '';

  state.characters.forEach(character => {
    const card = createCharacterCard(character);
    grid.appendChild(card);
  });
}

function changeIsland(island) {
  state.currentIsland = island;

  // Update active button
  document.querySelectorAll('.island-btn').forEach(btn => {
    btn.classList.remove('active');
    if (btn.dataset.island === island) {
      btn.classList.add('active');
    }
  });

  // Change background
  const islandInfo = islandData[island];
  document.body.style.background = islandInfo.gradient;

  // Update island information
  const infoDiv = document.getElementById('island-info');
  infoDiv.innerHTML = `
    <h3 class="detail-label" style="color: var(--color-gold);">${islandInfo.name}</h3>
    <p class="detail-text" style="color: var(--color-parchment);">
      ${islandInfo.description}
    </p>
  `;
}

// ============================================
// MODAL DETAILS
// ============================================

function showCharacterDetail(character) {
  const modal = document.getElementById('detail-modal');
  const modalBody = document.getElementById('modal-body');

  modalBody.innerHTML = `
    <div class="modal-header">
      <h2 class="modal-title">${character.name}</h2>
      <p class="character-bounty" style="color: var(--color-red-wanted); font-size: 1.5rem;">
        Bounty: ₿ ${character.bounty}
      </p>
    </div>
    <div class="modal-body">
      <div class="detail-section">
        <div class="character-image-container" style="max-width: 400px; margin: 0 auto var(--spacing-lg);">
          <img 
            src="assets/characters/${character.image}" 
            alt="${character.name}"
            class="character-image"
            onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22300%22%3E%3Crect fill=%22%232c3e50%22 width=%22400%22 height=%22300%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-family=%22Arial%22 font-size=%2230%22 fill=%22%23ecf0f1%22%3E${character.name}%3C/text%3E%3C/svg%3E'"
          >
        </div>
      </div>
      
      <div class="detail-section">
        <h3 class="detail-label">Role</h3>
        <p class="detail-text">${character.role}</p>
      </div>

      ${character.devilFruit !== 'None' ? `
        <div class="detail-section">
          <h3 class="detail-label">Devil Fruit</h3>
          <p class="detail-text">${character.devilFruit}</p>
        </div>
      ` : ''}

      <div class="detail-section">
        <h3 class="detail-label">Abilities</h3>
        <ul class="abilities-list">
          ${character.abilities.map(ability => `<li>${ability}</li>`).join('')}
        </ul>
      </div>

      <div class="detail-section">
        <h3 class="detail-label">Biography</h3>
        <p class="detail-text">${character.description}</p>
      </div>
    </div>
  `;

  modal.classList.add('active');
}

function showFruitDetail(fruit) {
  const modal = document.getElementById('detail-modal');
  const modalBody = document.getElementById('modal-body');

  let typeClass = fruit.type.toLowerCase().replace(/\s+/g, '-');
  if (fruit.type.includes('Mythical')) {
    typeClass = 'zoan';
  }

  modalBody.innerHTML = `
    <div class="modal-header">
      <h2 class="modal-title">${fruit.name}</h2>
      <span class="fruit-type-badge ${typeClass}" style="display: inline-block; margin-top: var(--spacing-sm);">
        ${fruit.type}
      </span>
    </div>
    <div class="modal-body">
      <div class="detail-section">
        <div class="fruit-image-container" style="max-width: 300px; margin: 0 auto var(--spacing-lg);">
          <img 
            src="assets/devil-fruits/${fruit.image}" 
            alt="${fruit.name}"
            class="fruit-image"
            onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22300%22 height=%22300%22%3E%3Ccircle cx=%22150%22 cy=%22150%22 r=%22120%22 fill=%22%23e74c3c%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-size=%22100%22%3E🍎%3C/text%3E%3C/svg%3E'"
          >
        </div>
      </div>

      <div class="detail-section">
        <h3 class="detail-label">Current User</h3>
        <p class="detail-text">${fruit.currentUser || 'Unknown'}</p>
      </div>

      <div class="detail-section">
        <h3 class="detail-label">Abilities</h3>
        <p class="detail-text">${fruit.abilities}</p>
      </div>

      <div class="detail-section">
        <h3 class="detail-label">Strengths</h3>
        <ul class="abilities-list">
          ${fruit.strengths.map(strength => `<li>${strength}</li>`).join('')}
        </ul>
      </div>

      <div class="detail-section">
        <h3 class="detail-label">Weaknesses</h3>
        <ul class="abilities-list">
          ${fruit.weaknesses.map(weakness => `<li>${weakness}</li>`).join('')}
        </ul>
      </div>

      <div class="detail-section">
        <h3 class="detail-label">Description</h3>
        <p class="detail-text">${fruit.description}</p>
      </div>
    </div>
  `;

  modal.classList.add('active');
}

function closeModal() {
  document.getElementById('detail-modal').classList.remove('active');
}

// ============================================
// UTILITY FUNCTIONS
// ============================================

function showError(message) {
  const errorDiv = document.createElement('div');
  errorDiv.className = 'error-message';
  errorDiv.textContent = message;
  errorDiv.style.cssText = 'position: fixed; top: 20px; right: 20px; background: #e74c3c; color: white; padding: 15px 25px; border-radius: 8px; z-index: 10000; box-shadow: 0 4px 12px rgba(0,0,0,0.3); animation: slideIn 0.3s ease;';

  document.body.appendChild(errorDiv);

  setTimeout(() => {
    errorDiv.remove();
  }, 4000);
}

function showSearchError(type, searchTerm) {
  const container = state.currentView === 'characters'
    ? document.getElementById('characters-container')
    : document.getElementById('fruits-container');

  if (!container) return;

  const errorDiv = document.createElement('div');
  errorDiv.className = 'search-error';
  errorDiv.innerHTML = `
    <div style="text-align: center; padding: 60px 20px; color: #ecf0f1;">
      <div style="font-size: 80px; margin-bottom: 20px;">🔍</div>
      <h2 style="font-size: 28px; margin-bottom: 15px; color: #e74c3c;">No se encontraron resultados</h2>
      <p style="font-size: 18px; margin-bottom: 10px; opacity: 0.9;">No hay ningún <strong>${type}</strong> que coincida con:</p>
      <p style="font-size: 22px; color: #3498db; font-weight: bold; margin-bottom: 20px;">"${searchTerm}"</p>
      <p style="font-size: 16px; opacity: 0.7;">💡 Intenta con otro nombre o verifica la ortografía</p>
    </div>
  `;

  container.innerHTML = '';
  container.appendChild(errorDiv);
}

function clearSearchError() {
  const searchErrors = document.querySelectorAll('.search-error');
  searchErrors.forEach(error => error.remove());
}

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeModal();
  }
});
