/* Fotos estáticas por tipo de receita; não dependem de uma busca por texto. */
const imagensPorTipo = {
  chocolate: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80',
  bolo: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80',
  massa: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=800&q=80',
  salgado: 'https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=800&q=80',
  bebida: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=800&q=80',
  fruta: 'https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?auto=format&fit=crop&w=800&q=80',
  pao: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80'
};

function getRecipeImageUrl(recipe) {
  const nome = recipe.titulo.toLocaleLowerCase('pt-BR');
  if (recipe.categoria === 'bebidas' || /suco|limonada|milkshake|cha gelado|vitamina/.test(nome)) return imagensPorTipo.bebida;
  if (/chocolate|brigadeiro|brownie|trufa|pave|bombom|fondue|cookie/.test(nome)) return imagensPorTipo.chocolate;
  if (/macarrao|carbonara/.test(nome)) return imagensPorTipo.massa;
  if (/frango|risole|empada|quiche|queijo/.test(nome)) return imagensPorTipo.salgado;
  if (/pao|rabanada|rosquinha|biscoito|broa|churros|sonho|cueca virada/.test(nome)) return imagensPorTipo.pao;
  if (/morango|banana|laranja|limao|abacaxi|maca|goiaba|amora|figo|jaca|fruta|geleia|coco/.test(nome)) return imagensPorTipo.fruta;
  return imagensPorTipo.bolo;
}

function imagemComFallback(container, recipe, classe) {
  const imagem = document.createElement('img');
  imagem.src = getRecipeImageUrl(recipe);
  imagem.alt = `Imagem de ${recipe.titulo}`;
  imagem.loading = 'lazy';
  const emoji = document.createElement('span');
  emoji.className = classe;
  emoji.textContent = recipe.emoji || '🍽️';
  imagem.addEventListener('error', () => {
    imagem.remove();
    emoji.style.display = 'grid';
  }, { once: true });
  container.append(imagem, emoji);
}

// Substitui o renderizador original para que as fotos apareçam nos cartões.
renderRecipes = function (lista) {
  recipeGrid.innerHTML = '';

  lista.forEach((recipe) => {
    const card = document.createElement('article');
    card.className = 'recipe-card';
    const imagem = document.createElement('div');
    imagem.className = 'recipe-image';
    imagemComFallback(imagem, recipe, 'recipe-emoji');
    card.appendChild(imagem);

    const corpo = document.createElement('div');
    corpo.className = 'recipe-body';
    corpo.innerHTML = `
      <span class="recipe-tag">${recipe.categoria}</span>
      <h3>${recipe.titulo}</h3>
      <p>${recipe.descricao}</p>
      <button class="card-btn" data-id="${recipe.id}">Ver receita</button>
    `;
    card.appendChild(corpo);
    recipeGrid.appendChild(card);
  });

  recipeGrid.querySelectorAll('.card-btn').forEach((button) => {
    button.addEventListener('click', () => {
      const recipe = receitas.find((item) => item.id === Number(button.dataset.id));
      openModal(recipe);
    });
  });
};

// Mostra a mesma foto também no detalhe da receita.
openModal = function (recipe) {
  modalBody.innerHTML = '';
  const imagem = document.createElement('div');
  imagem.className = 'modal-hero';
  imagemComFallback(imagem, recipe, 'modal-emoji');
  modalBody.appendChild(imagem);
  modalBody.insertAdjacentHTML('beforeend', `
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
  `);
  modal.classList.remove('hidden');
};

// O arquivo é carregado depois dos dados; renderiza todas as receitas já carregadas.
renderRecipes(receitas);
