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
  },
  {
    id: 12,
    titulo: 'Limonada Refrescante',
    categoria: 'bebidas',
    emoji: '🍋',
    descricao: 'Uma bebida cítrica, leve e perfeita para dias quentes.',
    tempo: '10 min',
    dificuldade: 'Fácil',
    ingredientes: [
      '3 limões',
      '1/2 xícara de açúcar',
      '500 ml de água gelada',
      'Gelo a gosto',
      'Folhas de hortelã (opcional)'
    ],
    preparo: [
      'Esprema os limões e coe o suco.',
      'Misture com o açúcar e uma parte da água até dissolver bem.',
      'Adicione o restante da água e o gelo.',
      'Finalize com hortelã, se quiser.',
      'Sirva imediatamente bem gelada.'
    ]
  },
  {
    id: 13,
    titulo: 'Milkshake de Morango',
    categoria: 'bebidas',
    emoji: '🥤',
    descricao: 'Cremoso, doce e irresistível para um lanche rápido.',
    tempo: '10 min',
    dificuldade: 'Fácil',
    ingredientes: [
      '2 xícaras de morangos',
      '2 bolas de sorvete de baunilha',
      '1 xícara de leite',
      '1 colher de sopa de açúcar',
      'Gelo a gosto'
    ],
    preparo: [
      'Lave os morangos e retire os cabinhos.',
      'Coloque no liquidificador com o leite, o açúcar e o gelo.',
      'Bata até ficar bem cremoso.',
      'Adicione o sorvete e bata rapidamente só para misturar.',
      'Sirva em copo alto com canudo.'
    ]
  },
  {
    id: 14,
    titulo: 'Chá Gelado de Hortelã',
    categoria: 'bebidas',
    emoji: '🍃',
    descricao: 'Refrescante, aromático e muito fácil de preparar.',
    tempo: '15 min + gelar',
    dificuldade: 'Fácil',
    ingredientes: [
      '1 litro de água',
      '3 saquinhos de chá',
      '1 punhado de folhas de hortelã',
      '1/4 de xícara de açúcar ou mel',
      'Gelo'
    ],
    preparo: [
      'Ferva a água e adicione os saquinhos de chá e as folhas de hortelã.',
      'Deixe descansar por 10 minutos.',
      'Coe e misture com o açúcar ou mel.',
      'Deixe esfriar e leve à geladeira.',
      'Sirva com gelo e mais hortelã.'
    ]
  },
  {
    id: 15,
    titulo: 'Vitamina de Banana com Cacau',
    categoria: 'bebidas',
    emoji: '🍌',
    descricao: 'Uma opção nutritiva, saborosa e ideal para o café da manhã.',
    tempo: '8 min',
    dificuldade: 'Fácil',
    ingredientes: [
      '2 bananas maduras',
      '1 xícara de leite',
      '1 colher de sopa de cacau em pó',
      '1 colher de sopa de mel',
      'Gelo opcional'
    ],
    preparo: [
      'Coloque todos os ingredientes no liquidificador.',
      'Bata até ficar homogêneo e cremoso.',
      'Ajuste o açúcar, se precisar.',
      'Se quiser mais refrescante, adicione gelo.',
      'Sirva em seguida.'
    ]
  },
  {
    id: 16,
    titulo: 'Torta de Morango',
    categoria: 'doces',
    emoji: '🍓',
    descricao: 'Uma torta fresca e irresistível com cobertura cremosa de morango.',
    tempo: '1 h 10 min',
    dificuldade: 'Média',
    ingredientes: [
      '1 massa de torta pronta',
      '500 g de morangos',
      '1 caixa de creme de leite',
      '1/2 xícara de açúcar',
      '1 colher de sopa de amido de milho'
    ],
    preparo: [
      'Asse a massa da torta até ficar dourada.',
      'Misture o creme de leite com o açúcar e o amido em uma panela.',
      'Cozinhe em fogo baixo até engrossar.',
      'Distribua o creme sobre a massa e decore com morangos fatiados.',
      'Leve à geladeira por 30 minutos antes de servir.'
    ]
  },
  {
    id: 17,
    titulo: 'Brownie de Nozes',
    categoria: 'doces',
    emoji: '🍫',
    descricao: 'Fudgoso por dentro e crocante por fora com nozes.',
    tempo: '45 min',
    dificuldade: 'Média',
    ingredientes: [
      '200 g de chocolate meio amargo',
      '1/2 xícara de manteiga',
      '2 ovos',
      '1/2 xícara de açúcar',
      '1/2 xícara de farinha de trigo',
      '1/2 xícara de nozes picadas'
    ],
    preparo: [
      'Derreta o chocolate com a manteiga.',
      'Misture os ovos e o açúcar até ficar homogêneo.',
      'Junte a farinha e os ingredientes derretidos.',
      'Adicione as nozes e despeje em uma forma.',
      'Asse a 180 °C por 25 a 30 minutos.'
    ]
  },
  {
    id: 18,
    titulo: 'Pão de Mel',
    categoria: 'doces',
    emoji: '🍯',
    descricao: 'Macio, aromático e coberto com chocolate ou doce de leite.',
    tempo: '1 h',
    dificuldade: 'Média',
    ingredientes: [
      '2 xícaras de farinha de trigo',
      '1/2 xícara de mel',
      '1/2 xícara de leite',
      '1 colher de sopa de manteiga',
      '1 colher de chá de bicarbonato',
      'Chocolate para cobertura'
    ],
    preparo: [
      'Misture os ingredientes até formar uma massa lisa.',
      'Faça bolinhas e asse em forno médio por 15 minutos.',
      'Deixe esfriar completamente.',
      'Cubra com chocolate derretido ou recheio de doce de leite.',
      'Sirva em seguida.'
    ]
  },
  {
    id: 19,
    titulo: 'Cheesecake de Frutas',
    categoria: 'doces',
    emoji: '🍰',
    descricao: 'Creme suave e levemente ácido com frutas frescas por cima.',
    tempo: '2 h',
    dificuldade: 'Média',
    ingredientes: [
      '200 g de biscoito cream cracker',
      '50 g de manteiga',
      '400 g de cream cheese',
      '1/2 xícara de açúcar',
      '1 xícara de chantilly',
      'Frutas variadas'
    ],
    preparo: [
      'Triture os biscoitos e misture com a manteiga derretida.',
      'Forre uma forma e leve à geladeira.',
      'Bata o cream cheese com o açúcar até ficar cremoso.',
      'Misture o chantilly com cuidado e espalhe sobre a base.',
      'Decore com frutas e leve para gelar.'
    ]
  },
  {
    id: 20,
    titulo: 'Bolo de Laranja',
    categoria: 'doces',
    emoji: '🍊',
    descricao: 'Bolo perfumado e úmido, perfeito para o café da tarde.',
    tempo: '50 min',
    dificuldade: 'Fácil',
    ingredientes: [
      '2 xícaras de farinha de trigo',
      '1 xícara de açúcar',
      '2 ovos',
      '1/2 xícara de óleo',
      '1 xícara de suco de laranja',
      '1 colher de sopa de fermento'
    ],
    preparo: [
      'Bata os ovos com o açúcar até ficarem claros.',
      'Misture o óleo e o suco de laranja.',
      'Adicione a farinha pouco a pouco e finalize com o fermento.',
      'Despeje em forma untada e asse por 35 minutos.',
      'Espere esfriar e sirva.'
    ]
  },
  {
    id: 21,
    titulo: 'Cookies de Chocolate',
    categoria: 'doces',
    emoji: '🍪',
    descricao: 'Cookies crocantes por fora e macios por dentro com gotas de chocolate.',
    tempo: '35 min',
    dificuldade: 'Fácil',
    ingredientes: [
      '2 xícaras de farinha de trigo',
      '1/2 xícara de açúcar',
      '1/2 xícara de açúcar mascavo',
      '1 ovo',
      '100 g de manteiga',
      '1 xícara de gotas de chocolate'
    ],
    preparo: [
      'Misture a manteiga com os açúcares até criar uma textura cremosa.',
      'Adicione o ovo e depois a farinha.',
      'Incorpore as gotas de chocolate.',
      'Modele bolinhas e asse em forno a 180 °C por 12 a 15 minutos.',
      'Espere esfriar e sirva.'
    ]
  },
  {
    id: 22,
    titulo: 'Pudim de Coco',
    categoria: 'doces',
    emoji: '🥥',
    descricao: 'Cremoso, delicado e com sabor de coco em cada colherada.',
    tempo: '1 h 30 min',
    dificuldade: 'Média',
    ingredientes: [
      '1 lata de leite condensado',
      '1 lata de leite',
      '1 xícara de coco ralado',
      '3 ovos',
      '1 xícara de açúcar para a calda'
    ],
    preparo: [
      'Caramelize a forma com o açúcar e reserve.',
      'Bata o leite condensado, o leite, o coco e os ovos.',
      'Despeje na forma e asse em banho-maria por cerca de 1 hora.',
      'Deixe esfriar e leve à geladeira.',
      'Desenforme antes de servir.'
    ]
  },
  {
    id: 23,
    titulo: 'Torta de Limão',
    categoria: 'doces',
    emoji: '🍋',
    descricao: 'Crocante, cremosa e com o sabor ácido do limão muito equilibrado.',
    tempo: '1 h 20 min',
    dificuldade: 'Média',
    ingredientes: [
      '1 massa de torta',
      '1 lata de leite condensado',
      '1/2 xícara de suco de limão',
      '1 caixa de creme de leite',
      'Raspas de limão'
    ],
    preparo: [
      'Asse a massa da torta até dourar.',
      'Misture o leite condensado, o creme de leite e o suco de limão.',
      'Espalhe por cima da massa e devolva ao forno por alguns minutos.',
      'Leve à geladeira para firmar.',
      'Finalize com raspas de limão antes de servir.'
    ]
  },
  {
    id: 24,
    titulo: 'Cupcake de Baunilha',
    categoria: 'doces',
    emoji: '🧁',
    descricao: 'Cupcakes fofinhos com sabor suave e cobertura cremosa.',
    tempo: '40 min',
    dificuldade: 'Fácil',
    ingredientes: [
      '1 xícara de farinha de trigo',
      '1/2 xícara de açúcar',
      '1 ovo',
      '1/2 xícara de leite',
      '1/4 xícara de manteiga',
      '1 colher de chá de essência de baunilha'
    ],
    preparo: [
      'Misture os ingredientes secos em uma tigela.',
      'Adicione os líquidos e mexa até formar uma massa homogênea.',
      'Distribua em forminhas e asse em forno a 180 °C por 15 minutos.',
      'Deixe esfriar.',
      'Cubra com chantilly ou glacê e sirva.'
    ]
  },
  {
    id: 25,
    titulo: 'Beijinho de Coco',
    categoria: 'doces',
    emoji: '🥥',
    descricao: 'Docinho tradicional, macio e com sabor intenso de coco.',
    tempo: '25 min',
    dificuldade: 'Fácil',
    ingredientes: [
      '1 lata de leite condensado',
      '1 xícara de coco ralado',
      '1 colher de sopa de manteiga',
      'Coco ralado para enrolar',
      'Essência de baunilha (opcional)'
    ],
    preparo: [
      'Misture o leite condensado, o coco e a manteiga em uma panela.',
      'Cozinhe em fogo baixo até engrossar.',
      'Espere esfriar um pouco e faça bolinhas.',
      'Passe no coco ralado.',
      'Sirva em seguida.'
    ]
  },
  {
    id: 26,
    titulo: 'Trufa de Chocolate',
    categoria: 'doces',
    emoji: '🍫',
    descricao: 'Delicadas trufas cremosa com sabor intenso de chocolate.',
    tempo: '40 min',
    dificuldade: 'Média',
    ingredientes: [
      '200 g de chocolate',
      '1/2 xícara de creme de leite',
      '1 colher de sopa de manteiga',
      'Cacau em pó para finalizar'
    ],
    preparo: [
      'Aqueça o creme de leite e derreta o chocolate.',
      'Misture com a manteiga até formar uma massa lisa.',
      'Leve à geladeira por 30 minutos.',
      'Modele bolinhas.',
      'Passe no cacau em pó e sirva.'
    ]
  },
  {
    id: 27,
    titulo: 'Bolo de Cenoura',
    categoria: 'doces',
    emoji: '🥕',
    descricao: 'Fofinho, úmido e perfeito com cobertura de chocolate.',
    tempo: '50 min',
    dificuldade: 'Fácil',
    ingredientes: [
      '3 cenouras',
      '2 ovos',
      '1 xícara de óleo',
      '2 xícaras de açúcar',
      '2 xícaras de farinha de trigo',
      '1 colher de sopa de fermento'
    ],
    preparo: [
      'Bata a cenoura, os ovos e o óleo no liquidificador.',
      'Misture com o açúcar, a farinha e o fermento.',
      'Despeje em uma forma untada.',
      'Asse em forno a 180 °C por 35 a 40 minutos.',
      'Cubra com chocolate ou açúcar de confeiteiro.'
    ]
  },
  {
    id: 28,
    titulo: 'Pavê de Chocolate',
    categoria: 'doces',
    emoji: '🍫',
    descricao: 'Camadas de creme e biscoito com sabor inconfundível de chocolate.',
    tempo: '1 h 15 min',
    dificuldade: 'Média',
    ingredientes: [
      '1 pacote de biscoito maisena',
      '2 caixas de creme de leite',
      '200 g de chocolate',
      '1/2 xícara de açúcar',
      '1 xícara de leite'
    ],
    preparo: [
      'Derreta o chocolate com o leite e misture ao creme de leite.',
      'Prepare um creme homogêneo e reserve.',
      'Monte camadas de biscoito e creme em uma forma.',
      'Repita até terminar os ingredientes.',
      'Leve à geladeira por pelo menos 2 horas.'
    ]
  },
  {
    id: 29,
    titulo: 'Bombom de Morango',
    categoria: 'doces',
    emoji: '🍓',
    descricao: 'Recheio suave com morango e cobertura de chocolate.',
    tempo: '30 min',
    dificuldade: 'Média',
    ingredientes: [
      '250 g de morangos',
      '200 g de chocolate',
      '1/2 xícara de creme de leite',
      '1 colher de sopa de manteiga'
    ],
    preparo: [
      'Aqueça os morangos até reduzir em purê.',
      'Misture com o creme de leite e a manteiga até engrossar.',
      'Leve à geladeira para firmar.',
      'Modele bolinhas e banhe no chocolate derretido.',
      'Deixe secar e sirva.'
    ]
  },
  {
    id: 30,
    titulo: 'Torta de Banana',
    categoria: 'doces',
    emoji: '🍌',
    descricao: 'Torta doce e perfumada com bananas caramelizadas.',
    tempo: '1 h',
    dificuldade: 'Média',
    ingredientes: [
      '1 massa de torta',
      '3 bananas',
      '1/2 xícara de açúcar',
      '1 colher de sopa de canela',
      '1 colher de sopa de manteiga'
    ],
    preparo: [
      'Asse a massa da torta até começar a dourar.',
      'Corte as bananas e leve ao fogo com açúcar e canela.',
      'Distribua sobre a massa e adicione a manteiga.',
      'Asse mais alguns minutos até dourar.',
      'Sirva morna ou em temperatura ambiente.'
    ]
  },
  {
    id: 31,
    titulo: 'Bolo de Fubá com Coco',
    categoria: 'doces',
    emoji: '🌾',
    descricao: 'Bolo simples, fofo e delicioso com toque de coco.',
    tempo: '45 min',
    dificuldade: 'Fácil',
    ingredientes: [
      '1 xícara de fubá',
      '1 xícara de farinha de trigo',
      '1 xícara de coco ralado',
      '2 ovos',
      '1 xícara de leite',
      '1 xícara de açúcar'
    ],
    preparo: [
      'Misture os ingredientes secos em uma tigela.',
      'Adicione os ovos e o leite até formar uma massa uniforme.',
      'Despeje em forma untada.',
      'Asse em forno a 180 °C por 30 a 35 minutos.',
      'Deixe esfriar e sirva.'
    ]
  },
  {
    id: 32,
    titulo: 'Rosquinha de Leite Ninho',
    categoria: 'doces',
    emoji: '🌼',
    descricao: 'Rosquinhas fofinhas com sabor de leite em pó e muito sabor.',
    tempo: '35 min',
    dificuldade: 'Fácil',
    ingredientes: [
      '2 xícaras de farinha de trigo',
      '1 xícara de leite em pó',
      '1/2 xícara de açúcar',
      '2 ovos',
      '1/2 xícara de leite',
      '1 colher de sopa de fermento'
    ],
    preparo: [
      'Misture a farinha, o leite em pó, o açúcar e o fermento.',
      'Adicione os ovos e o leite até formar a massa.',
      'Modele roscas e disponha em uma assadeira.',
      'Asse em forno quente até dourar.',
      'Polvilhe com leite em pó e sirva.'
    ]
  },
  {
    id: 33,
    titulo: 'Bolo de Abacaxi',
    categoria: 'doces',
    emoji: '🍍',
    descricao: 'Bolo úmido com pedaços de abacaxi e sabor tropical.',
    tempo: '55 min',
    dificuldade: 'Média',
    ingredientes: [
      '2 xícaras de farinha de trigo',
      '1 xícara de açúcar',
      '2 ovos',
      '1/2 xícara de óleo',
      '1 xícara de abacaxi picado',
      '1 colher de sopa de fermento'
    ],
    preparo: [
      'Misture bem os ingredientes secos e líquidos separadamente.',
      'Junte tudo até obter uma massa homogênea.',
      'Adicionar o abacaxi picado na massa.',
      'Asse em forno a 180 °C por 30 a 35 minutos.',
      'Sirva em fatias com café.'
    ]
  },
  {
    id: 34,
    titulo: 'Bolinho de Chuva',
    categoria: 'doces',
    emoji: '🍩',
    descricao: 'Crocante, macio e irresistível, especialmente com canela.',
    tempo: '30 min',
    dificuldade: 'Fácil',
    ingredientes: [
      '2 xícaras de farinha de trigo',
      '1/2 xícara de açúcar',
      '1 ovo',
      '1 xícara de leite',
      '1 colher de sopa de manteiga',
      'Canela para polvilhar'
    ],
    preparo: [
      'Misture a massa até ficar homogênea.',
      'Frita pequenas porções em óleo quente.',
      'Retire e escorra em papel-toalha.',
      'Polvilhe com açúcar e canela.',
      'Sirva em seguida.'
    ]
  },
  {
    id: 35,
    titulo: 'Bolo de Banana com Canela',
    categoria: 'doces',
    emoji: '🍌',
    descricao: 'Bolo macio com banana caramelizada e perfume de canela.',
    tempo: '50 min',
    dificuldade: 'Fácil',
    ingredientes: [
      '3 bananas maduras',
      '2 ovos',
      '1/2 xícara de açúcar',
      '1/2 xícara de óleo',
      '1 xícara de farinha de trigo',
      '1 colher de chá de canela'
    ],
    preparo: [
      'Amasse as bananas e misture com os ovos e o açúcar.',
      'Adicione o óleo e em seguida a farinha com a canela.',
      'Despeje em forma untada.',
      'Asse em forno a 180 °C por 30 minutos.',
      'Sirva em fatias quentes ou em temperatura ambiente.'
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
