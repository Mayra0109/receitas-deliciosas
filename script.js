const receitas = [
  {
    id: 1,
    titulo: 'Bolo de Chocolate',
    categoria: 'doces',
    emoji: '🍰',
    descricao: 'Um bolo fofinho e delicioso, ideal para qualquer ocasião.',
    tempo: '45 min',
    dificuldade: 'Fácil',
    ingredientes: [
      '2 xícaras de farinha de trigo',
      '1 xícara de açúcar',
      '1/2 xícara de cacau em pó',
      '2 ovos',
      '1 xícara de leite',
      '1/2 xícara de óleo',
      '1 colher de sopa de fermento em pó'
    ],
    preparo: [
      'Misture os ingredientes secos em uma tigela.',
      'Em outra tigela, bata os ovos, o leite e o óleo.',
      'Combine tudo até obter uma massa uniforme.',
      'Despeje em uma forma untada e asse por 35 a 40 minutos.',
      'Espere esfriar e sirva.'
    ]
  },
  {
    id: 2,
    titulo: 'Brigadeiro Caseiro',
    categoria: 'doces',
    emoji: '🍫',
    descricao: 'Clássico que agrada crianças e adultos com seu sabor intenso.',
    tempo: '20 min',
    dificuldade: 'Fácil',
    ingredientes: [
      '1 lata de leite condensado',
      '2 colheres de sopa de cacau em pó',
      '1 colher de sopa de manteiga',
      'Granulado para decorar'
    ],
    preparo: [
      'Coloque todos os ingredientes em uma panela.',
      'Cozinhe em fogo baixo, mexendo sem parar.',
      'Quando a massa desgrudar do fundo da panela, desligue o fogo.',
      'Espere esfriar e faça bolinhas.',
      'Passe no granulado e sirva.'
    ]
  },
  {
    id: 3,
    titulo: 'Frango com Catupiry',
    categoria: 'salgados',
    emoji: '🍗',
    descricao: 'Uma receita cremosinha e muito saborosa para o almoço em família.',
    tempo: '40 min',
    dificuldade: 'Média',
    ingredientes: [
      '4 filés de frango',
      '1 caixa de catupiry',
      '1 cebola picada',
      '2 dentes de alho',
      '2 colheres de sopa de óleo',
      'Sal e pimenta a gosto'
    ],
    preparo: [
      'Tempere o frango com sal e pimenta.',
      'Refogue a cebola e o alho no óleo.',
      'Coloque os filés e deixe dourar dos dois lados.',
      'Adicione o catupiry e cozinhe até derreter.',
      'Sirva quente com arroz ou batata.'
    ]
  },
  {
    id: 4,
    titulo: 'Macarrão à Carbonara',
    categoria: 'salgados',
    emoji: '🍝',
    descricao: 'Uma receita prática e muito saborosa, com toque cremoso e irresistível.',
    tempo: '25 min',
    dificuldade: 'Média',
    ingredientes: [
      '300 g de macarrão',
      '150 g de bacon',
      '2 gemas',
      '1/2 xícara de queijo parmesão',
      'Sal e pimenta'
    ],
    preparo: [
      'Cozinhe o macarrão conforme a embalagem.',
      'Frite o bacon até dourar.',
      'Misture as gemas com o queijo parmesão.',
      'Junte o macarrão com o bacon e desligue o fogo.',
      'Adicione a mistura de ovos e sirva imediatamente.'
    ]
  },
  {
    id: 5,
    titulo: 'Suco de Morango',
    categoria: 'bebidas',
    emoji: '🍓',
    descricao: 'Refrescante, doce e ótimo para acompanhar o almoço ou o café.',
    tempo: '10 min',
    dificuldade: 'Fácil',
    ingredientes: [
      '300 g de morangos',
      '1 copo de água',
      '1 colher de sopa de mel',
      'Gelo a gosto'
    ],
    preparo: [
      'Lave os morangos e retire os cabinhos.',
      'Coloque tudo no liquidificador.',
      'Bata por alguns segundos.',
      'Coe se quiser mais suave.',
      'Sirva com gelo.'
    ]
  },
  {
    id: 6,
    titulo: 'Mousse de Chocolate',
    categoria: 'sobremesas',
    emoji: '🍮',
    descricao: 'Levíssima e cremosa, perfeita para fechar a refeição com estilo.',
    tempo: '15 min + gelar',
    dificuldade: 'Fácil',
    ingredientes: [
      '200 g de chocolate meio amargo',
      '1 xícara de creme de leite',
      '2 ovos',
      '2 colheres de sopa de açúcar'
    ],
    preparo: [
      'Derreta o chocolate em banho-maria.',
      'Bata as gemas com o açúcar até ficarem claras.',
      'Misture o chocolate e o creme de leite.',
      'Incorpore as claras em neve.',
      'Leve à geladeira por pelo menos 2 horas.'
    ]
  },
  {
    id: 7,
    titulo: 'Pudim de Leite Condensado',
    categoria: 'sobremesas',
    emoji: '🍮',
    descricao: 'Pudim clássico, lisinho e com calda de caramelo feita em casa.',
    tempo: '1 h 20 min + gelar',
    dificuldade: 'Média',
    ingredientes: [
      '1 lata de leite condensado',
      '2 medidas da lata de leite',
      '3 ovos',
      '1 xícara de açúcar para a calda',
      '1/3 de xícara de água quente para a calda'
    ],
    preparo: [
      'Derreta o açúcar em fogo baixo até formar um caramelo dourado. Com cuidado, acrescente a água quente e mexa até dissolver.',
      'Espalhe a calda numa forma de pudim e reserve.',
      'Bata o leite condensado, o leite e os ovos apenas até misturar. Despeje na forma caramelizada.',
      'Cubra com papel-alumínio e asse em banho-maria a 180 °C por cerca de 1 hora, até firmar.',
      'Deixe esfriar, leve à geladeira por pelo menos 4 horas e desenforme.'
    ]
  },
  {
    id: 8,
    titulo: 'Risoles de Queijo e Presunto',
    categoria: 'salgados',
    emoji: '🥟',
    descricao: 'Salgadinho crocante por fora e recheado com queijo e presunto.',
    tempo: '1 h',
    dificuldade: 'Média',
    ingredientes: [
      '2 xícaras de leite',
      '2 xícaras de farinha de trigo',
      '1 colher de sopa de manteiga',
      'Sal a gosto',
      '150 g de queijo muçarela picado',
      '150 g de presunto picado',
      '1 ovo batido e farinha de rosca para empanar',
      'Óleo para fritar'
    ],
    preparo: [
      'Aqueça o leite com a manteiga e o sal. Quando começar a ferver, despeje a farinha de uma vez e mexa até a massa desgrudar da panela.',
      'Deixe a massa amornar e sove numa superfície limpa até ficar lisa.',
      'Abra a massa, corte círculos e recheie com queijo e presunto. Dobre ao meio e aperte bem as bordas.',
      'Passe cada risole no ovo batido e depois na farinha de rosca.',
      'Frite em óleo quente, em pequenas porções, até dourar. Escorra em papel-toalha.'
    ]
  },
  {
    id: 9,
    titulo: 'Empada de Frango',
    categoria: 'salgados',
    emoji: '🥧',
    descricao: 'Empadinhas de massa amanteigada com recheio cremoso de frango.',
    tempo: '1 h 15 min',
    dificuldade: 'Média',
    ingredientes: [
      '3 xícaras de farinha de trigo',
      '150 g de manteiga gelada em cubos',
      '1 ovo',
      '1/2 colher de chá de sal',
      '2 a 3 colheres de sopa de água gelada',
      '2 xícaras de frango cozido e desfiado',
      '1/2 cebola picada',
      '1/2 xícara de milho',
      '1/2 xícara de requeijão',
      '1 gema para pincelar'
    ],
    preparo: [
      'Misture a farinha e o sal com a manteiga até formar uma farofa. Junte o ovo e a água aos poucos, apenas até a massa ficar unida. Leve à geladeira por 20 minutos.',
      'Refogue a cebola, acrescente o frango e o milho. Desligue o fogo, misture o requeijão e espere o recheio esfriar.',
      'Forre forminhas com parte da massa, coloque o recheio frio e cubra com o restante da massa, fechando as bordas.',
      'Pincele com a gema e asse em forno preaquecido a 180 °C por 25 a 30 minutos, até dourar.',
      'Espere amornar antes de desenformar.'
    ]
  },
  {
    id: 10,
    titulo: 'Pão de Queijo de Forno',
    categoria: 'salgados',
    emoji: '🧀',
    descricao: 'Pãezinhos de queijo quentinhos, dourados por fora e macios por dentro.',
    tempo: '40 min',
    dificuldade: 'Fácil',
    ingredientes: [
      '500 g de polvilho azedo',
      '1 xícara de leite',
      '1/2 xícara de óleo',
      '1 colher de chá de sal',
      '2 ovos',
      '2 xícaras de queijo meia-cura ou parmesão ralado'
    ],
    preparo: [
      'Aqueça o leite com o óleo e o sal até começar a ferver. Despeje sobre o polvilho e misture com uma colher. Deixe amornar.',
      'Acrescente os ovos, um de cada vez, misturando bem. Junte o queijo e amasse até obter uma massa modelável.',
      'Unte as mãos, faça bolinhas e disponha numa assadeira, deixando espaço entre elas.',
      'Asse em forno preaquecido a 200 °C por 20 a 25 minutos, até crescerem e dourarem.'
    ]
  },
  {
    id: 11,
    titulo: 'Miniquiche de Alho-poró',
    categoria: 'salgados',
    emoji: '🥧',
    descricao: 'Quiche delicada com alho-poró e queijo, ótima para um lanche ou entrada.',
    tempo: '55 min',
    dificuldade: 'Média',
    ingredientes: [
      '1 e 1/2 xícara de farinha de trigo',
      '100 g de manteiga gelada',
      '1 ovo',
      '1 pitada de sal',
      '1 alho-poró fatiado',
      '2 ovos para o recheio',
      '1/2 xícara de creme de leite',
      '1/2 xícara de queijo ralado',
      '1 colher de sopa de azeite',
      'Sal e pimenta a gosto'
    ],
    preparo: [
      'Misture a farinha, a manteiga, o ovo e o sal até formar uma massa. Forre forminhas pequenas e leve à geladeira por 15 minutos.',
      'Refogue o alho-poró no azeite até ficar macio e deixe amornar.',
      'Bata os 2 ovos com o creme de leite, o queijo, sal e pimenta. Misture o alho-poró.',
      'Distribua o recheio nas forminhas sem encher até a borda.',
      'Asse em forno preaquecido a 180 °C por 25 a 30 minutos, até o recheio firmar e dourar.'
    ]
  }
];

const recipeGrid = document.getElementById('recipeGrid');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const allCategoryButtons = document.querySelectorAll('.cat-btn');
const modal = document.getElementById('recipeModal');
const modalBody = document.getElementById('modalBody');
const closeModal = document.getElementById('closeModal');

let activeCategory = 'todas';

function renderRecipes(list) {
  recipeGrid.innerHTML = '';

  list.forEach((recipe) => {
    const card = document.createElement('article');
    card.className = 'recipe-card';

    card.innerHTML = `
      <div class="recipe-image">${recipe.emoji}</div>
      <div class="recipe-body">
        <span class="recipe-tag">${recipe.categoria}</span>
        <h3>${recipe.titulo}</h3>
        <p>${recipe.descricao}</p>
        <button class="card-btn" data-id="${recipe.id}">Ver receita</button>
      </div>
    `;

    recipeGrid.appendChild(card);
  });

  document.querySelectorAll('.card-btn').forEach((button) => {
    button.addEventListener('click', () => {
      const recipe = receitas.find((item) => item.id === Number(button.dataset.id));
      openModal(recipe);
    });
  });
}

function filterRecipes() {
  let filtered = receitas.filter((recipe) => {
    const matchesCategory = activeCategory === 'todas' || recipe.categoria === activeCategory;
    const searchTerm = searchInput.value.toLowerCase();
    const matchesSearch =
      !searchTerm ||
      recipe.titulo.toLowerCase().includes(searchTerm) ||
      recipe.descricao.toLowerCase().includes(searchTerm);

    return matchesCategory && matchesSearch;
  });

  renderRecipes(filtered);
}

function openModal(recipe) {
  modalBody.innerHTML = `
    <div class="modal-hero">${recipe.emoji}</div>
    <h3>${recipe.titulo}</h3>
    <div class="modal-meta">
      <span>⏱️ ${recipe.tempo}</span>
      <span>📌 ${recipe.dificuldade}</span>
      <span>🏷️ ${recipe.categoria}</span>
    </div>

    <div class="modal-section">
      <h4>Ingredientes</h4>
      <ul>
        ${recipe.ingredientes.map((item) => `<li>${item}</li>`).join('')}
      </ul>
    </div>

    <div class="modal-section">
      <h4>Modo de preparo</h4>
      <ol>
        ${recipe.preparo.map((item) => `<li>${item}</li>`).join('')}
      </ol>
    </div>
  `;

  modal.classList.remove('hidden');
}

function closeRecipeModal() {
  modal.classList.add('hidden');
}

allCategoryButtons.forEach((button) => {
  button.addEventListener('click', () => {
    activeCategory = button.dataset.category;
    allCategoryButtons.forEach((btn) => btn.classList.remove('active'));
    button.classList.add('active');
    filterRecipes();
  });
});

searchBtn.addEventListener('click', filterRecipes);
searchInput.addEventListener('input', filterRecipes);
closeModal.addEventListener('click', closeRecipeModal);
modal.addEventListener('click', (event) => {
  if (event.target === modal) closeRecipeModal();
});

renderRecipes(receitas);
