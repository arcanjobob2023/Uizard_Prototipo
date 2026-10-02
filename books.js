const BOOKS = {
  1: {
    category: 'FICÇÃO',
    title: 'O Guardião do Tempo',
    author: 'Marina Cabral',
    price: 42.90,
    description: 'Em uma cidade onde os relógios param sem explicação, uma jovem relojoeira descobre que é a única capaz de restaurar o tempo perdido — mas o preço dessa jornada pode custar suas próprias lembranças.',
    editora: 'Folha Editora',
    paginas: '312',
    disponibilidade: 'Em estoque',
    cover: 'c1',
    image: 'img/guardiao_do_tempo.png'
  },
  2: {
    category: 'ROMANCE',
    title: 'Cartas de Outono',
    author: 'Helena Duarte',
    price: 35.00,
    description: 'Entre folhas que caem e cartas nunca enviadas, duas irmãs reencontram segredos de família guardados por décadas em uma pequena cidade à beira do rio.',
    editora: 'Editora Bosque',
    paginas: '256',
    disponibilidade: 'Em estoque',
    cover: 'c2',
    image: 'img/cartas_de_outono.png'
  },
  3: {
    category: 'FICÇÃO CIENTÍFICA',
    title: 'Trilha das Estrelas',
    author: 'Rafael Nunes',
    price: 39.90,
    description: 'Uma tripulação perdida nos confins da galáxia precisa decifrar um mapa estelar milenar antes que sua nave — e sua última esperança de voltar para casa — se apague para sempre.',
    editora: 'Nova Órbita',
    paginas: '384',
    disponibilidade: 'Em estoque',
    cover: 'c3',
    image: 'img/trilhas_das_estrelas.png'
  },
  4: {
    category: 'POESIA',
    title: 'Vida em Versos',
    author: 'Ana Beatriz Lima',
    price: 28.50,
    description: 'Uma coletânea intimista de poemas sobre memória, afeto e recomeços, escritos ao longo de uma década de cartas nunca enviadas.',
    editora: 'Editora Alma',
    paginas: '128',
    disponibilidade: 'Em estoque',
    cover: 'c4',
    image: 'img/vida_em_versos.png'
  }
};

function formatPrice(value) {
  return 'R$ ' + value.toFixed(2).replace('.', ',');
}
