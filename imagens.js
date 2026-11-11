/* Usa imagens reais relacionadas ao nome do prato e mantém o emoji como fallback. */
window.getRecipeImageUrl = function (recipe) {
  const nome = recipe.titulo
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-zA-Z0-9 ]/g, ' ')
    .trim()
    .replace(/\s+/g, ',');
  return `https://loremflickr.com/800/600/${encodeURIComponent(nome)},food`;
};

// Recria os cartões usando a URL de imagem por nome definida acima.
renderRecipes(receitas);
