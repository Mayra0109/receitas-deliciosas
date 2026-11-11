/* Cada receita recebe uma foto exclusiva e estável, com fallback para o emoji. */
function getRecipeImageUrl(recipe) {
  const nome = recipe.titulo
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-zA-Z0-9 ]/g, ' ')
    .trim()
    .replace(/\s+/g, ',');

  return `https://loremflickr.com/800/600/${encodeURIComponent(nome)},food?lock=${recipe.id}`;
}

function addRecipePhoto(container, recipe, fallbackClass) {
  const imagem = document.createElement('img');
  imagem.src = getRecipeImageUrl(recipe);
  imagem.alt = `Foto de ${recipe.titulo}`;
  imagem.loading = 'lazy';

  const fallback = document.createElement('span');
  fallback.className = fallbackClass;
  fallback.textContent = recipe.emoji || '🍽️';
  fallback.style.display = 'none';

  imagem.addEventListener(
    'error',
    () => {
      imagem.remove();
      fallback.style.display = 'grid';
    },
    { once: true }
  );

  container.append(imagem, fallback);
}

renderRecipes = function (lista) {
  recipeGrid.innerHTML = '';

  lista.forEach((recipe) => {
    const card = document.createElement('article');
    card.className = 'recipe-card';

    const imageArea = document.createElement('div');
    imageArea.className = 'recipe-image';
    addRecipePhoto(imageArea, recipe, 'recipe-emoji');
    card.appendChild(imageArea);

    const body = document.createElement('div');
    body.className = 'recipe-body';
    body.innerHTML = `
      <span class="recipe-tag">${recipe.categoria}</span>
      <h3>${recipe.titulo}</h3>
      <p>${recipe.descricao}</p>
      <button class="card-btn" data-id="${recipe.id}">Ver receita</button>
    `;

    card.appendChild(body);
    recipeGrid.appendChild(card);
  });

  recipeGrid.querySelectorAll('.card-btn').forEach((button) => {
    button.addEventListener('click', () => {
      const recipe = receitas.find((item) => item.id === Number(button.dataset.id));
      openModal(recipe);
    });
  });
};

openModal = function (recipe) {
  modalBody.innerHTML = '';

  const imageArea = document.createElement('div');
  imageArea.className = 'modal-hero';
  addRecipePhoto(imageArea, recipe, 'modal-emoji');
  modalBody.appendChild(imageArea);

  modalBody.insertAdjacentHTML(
    'beforeend',
    `
      <h3>${recipe.titulo}</h3>
      <div class="modal-meta">
        <span>⏱️ ${recipe.tempo}</span>
        <span>📌 ${recipe.dificuldade}</span>
        <span>🏷️ ${recipe.categoria}</span>
      </div>
      <div class="modal-section">
        <h4>Ingredientes</h4>
        <ul>${recipe.ingredientes.map((item) => `<li>${item}</li>`).join('')}</ul>
      </div>
      <div class="modal-section">
        <h4>Modo de preparo</h4>
        <ol>${recipe.preparo.map((item) => `<li>${item}</li>`).join('')}</ol>
      </div>
    `
  );

  modal.classList.remove('hidden');
};

renderRecipes(receitas);
