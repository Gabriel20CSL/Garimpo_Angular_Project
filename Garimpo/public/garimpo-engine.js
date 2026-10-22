/* garimpo — brechó online */
(function () {
  'use strict';

  /*  DADOS */
  var ESTADOS = { 4: 'Nova com etiqueta', 3: 'Ótimo estado', 2: 'Bom estado', 1: 'Com marcas de uso' };
  var CATEGORIAS = { roupas: 'Roupas', casacos: 'Casacos', acessorios: 'Acessórios', calcados: 'Calçados' };
  var IMG = 'img/';

  var PRODUTOS = [
    { id: 1, nome: 'Jaqueta jeans lavagem média', marca: 'Vintage', cat: 'casacos', tipo: 'Jaquetas', tam: 'M', estado: 3, preco: 149, img: 'jaqueta-jeans', pos: 'center top', badge: 'Novo', vintage: true,
      fotos: [['jaqueta-jeans', 'frente'], ['jaqueta-gola', 'gola'], ['jaqueta-bolso', 'bolso'], ['jaqueta-botoes', 'botões'], ['jaqueta-punho', 'punho']],
      medidas: [['Busto (axila a axila)', 52], ['Comprimento', 58], ['Ombro a ombro', 42], ['Manga', 60]],
      desc: 'Jaqueta jeans lavagem média, modelagem regular, punhos dobráveis e dois bolsos frontais com botão.',
      uso: 'Leve desbotado natural na gola e nos punhos (fotos 2 e 5). Sem furos, manchas ou botões faltando.', comp: '100% algodão.' },
    { id: 2, nome: 'Vestido midi floral', marca: 'Sem etiqueta', cat: 'roupas', tipo: 'Vestidos', tam: 'P', estado: 3, preco: 119, img: 'vestido-floral', pos: 'center', badge: 'Novo',
      medidas: [['Busto', 42], ['Cintura', 34], ['Comprimento', 98]], desc: 'Vestido de alça larga, saia evasê com estampa floral em fundo claro.', uso: 'Sem marcas de uso aparentes.', comp: 'Viscose.' },
    { id: 3, nome: 'Luvas de couro preto', marca: 'Couro legítimo', cat: 'acessorios', tipo: 'Luvas', tam: 'Único', estado: 3, preco: 89, img: 'luvas-couro', pos: 'center',
      medidas: [['Comprimento', 24], ['Largura da palma', 10]], desc: 'Par de luvas de couro macio com forro, punho com elástico.', uso: 'Couro com brilho natural, sem rasgos.', comp: 'Couro bovino, forro de poliéster.' },
    { id: 4, nome: 'Calça pantalona marrom', marca: 'Alfaiataria', cat: 'roupas', tipo: 'Calças e saias', tam: '38', estado: 3, preco: 129, img: 'calca-pantalona', pos: 'center',
      medidas: [['Cintura', 38], ['Quadril', 50], ['Comprimento', 104], ['Gancho', 28]], desc: 'Calça de alfaiataria com perna ampla e cintura média.', uso: 'Sem marcas de uso aparentes.', comp: 'Poliéster e viscose.' },
    { id: 5, nome: 'Blazer risca de giz', marca: 'Alfaiataria', cat: 'casacos', tipo: 'Blazers', tam: 'G', estado: 4, preco: 159, img: 'blazer-risca', pos: 'center top', badge: 'Com etiqueta',
      medidas: [['Busto (axila a axila)', 56], ['Comprimento', 76], ['Ombro a ombro', 46], ['Manga', 63]], desc: 'Blazer marrom risca de giz, dois botões, bolsos com lapela.', uso: 'Nunca usado, ainda com a etiqueta original.', comp: 'Lã e poliéster.' },
    { id: 6, nome: 'Camisa estampada azul', marca: 'Vintage', cat: 'roupas', tipo: 'Blusas e camisas', tam: 'M', estado: 3, preco: 79, img: 'blusa-estampada', pos: 'center 30%', badge: 'Anos 90', vintage: true,
      medidas: [['Busto', 50], ['Comprimento', 66], ['Manga', 58]], desc: 'Camisa fluida com estampa paisley azul, gola padre.', uso: 'Sem marcas de uso aparentes.', comp: 'Viscose.' },
    { id: 7, nome: 'Sandália estampa de cobra', marca: 'Sem etiqueta', cat: 'calcados', tipo: 'Sandálias', tam: '37', estado: 2, preco: 69, img: 'sandalia', pos: 'center',
      medidas: [['Palmilha', 24.5], ['Salto', 6]], desc: 'Sandália anabela com tiras em estampa de cobra.', uso: 'Palmilha com marca de uso leve. Solado em bom estado.', comp: 'Material sintético.' },
    { id: 8, nome: 'Boina de tweed cinza', marca: 'Vintage', cat: 'acessorios', tipo: 'Chapéus', tam: 'Único', estado: 3, preco: 59, img: 'boina', pos: 'center', vintage: true,
      medidas: [['Circunferência', 57]], desc: 'Boina estilo inglesa em tweed cinza claro, forrada.', uso: 'Sem marcas de uso aparentes.', comp: 'Lã.' },
    { id: 9, nome: 'Vestido floral manga longa', marca: 'Sem etiqueta', cat: 'roupas', tipo: 'Vestidos', tam: 'M', estado: 3, preco: 119, img: 'vestido-manga-longa', pos: 'center 25%',
      medidas: [['Busto', 48], ['Comprimento', 104], ['Manga', 44]], desc: 'Vestido midi azul-marinho com estampa floral e manga 3/4.', uso: 'Sem marcas de uso aparentes.', comp: 'Viscose.' },
    { id: 10, nome: 'Blazer verde-limão', marca: 'Vintage', cat: 'casacos', tipo: 'Blazers', tam: 'M', estado: 3, preco: 109, img: 'blazer-limao', pos: 'center', badge: 'Anos 90', vintage: true,
      medidas: [['Busto', 46], ['Comprimento', 54], ['Manga', 58]], desc: 'Blazer curto sem gola, cor verde-limão, fechamento por zíper.', uso: 'Sem marcas de uso aparentes.', comp: 'Poliéster.' },
    { id: 11, nome: 'Camisa jeans clara', marca: 'Sem etiqueta', cat: 'roupas', tipo: 'Blusas e camisas', tam: 'G', estado: 3, preco: 69, img: 'camisa-jeans', pos: 'center',
      medidas: [['Busto', 56], ['Comprimento', 74], ['Manga', 62]], desc: 'Camisa jeans lavagem clara com dois bolsos e botões de pressão.', uso: 'Desbotado uniforme, típico da lavagem.', comp: '100% algodão.' },
    { id: 12, nome: 'Vestido verde decote V', marca: 'Sem etiqueta', cat: 'roupas', tipo: 'Vestidos', tam: 'P', estado: 3, preco: 95, img: 'vestido-verde', pos: 'center 30%', badge: 'Novo',
      medidas: [['Busto', 42], ['Cintura', 35], ['Comprimento', 90]], desc: 'Vestido verde-petróleo sem manga, decote V profundo e saia rodada.', uso: 'Sem marcas de uso aparentes.', comp: 'Poliéster com elastano.' },
    { id: 13, nome: 'Camisa xadrez manga curta', marca: 'Nacional', cat: 'roupas', tipo: 'Blusas e camisas', tam: 'M', estado: 3, preco: 49, img: 'camisa-xadrez', pos: 'center 30%',
      medidas: [['Busto', 54], ['Comprimento', 74], ['Manga', 24]], desc: 'Camisa xadrez vermelho e azul-marinho, manga curta.', uso: 'Sem marcas de uso aparentes.', comp: '100% algodão.' },
    { id: 14, nome: 'Blusa de renda gola bordada', marca: 'Feito à mão', cat: 'roupas', tipo: 'Blusas e camisas', tam: 'P', estado: 3, preco: 89, img: 'blusa-renda', pos: 'center', badge: 'Feito à mão', vintage: true,
      medidas: [['Busto', 44], ['Comprimento', 58], ['Manga', 56]], desc: 'Blusa de renda off-white com gola aplicada e bordado de pedrarias.', uso: 'Uma pedra a menos na gola, quase imperceptível.', comp: 'Renda de algodão.' },
    { id: 15, nome: 'Casaco de lã trespassado', marca: 'Alfaiataria', cat: 'casacos', tipo: 'Casacos', tam: 'M', estado: 3, preco: 189, img: 'casaco-la', pos: 'center top',
      medidas: [['Busto', 54], ['Comprimento', 84], ['Ombro a ombro', 44], ['Manga', 62]], desc: 'Casaco cinza mescla, fechamento trespassado e dragonas nos ombros.', uso: 'Sem bolinhas, forro íntegro.', comp: 'Lã e poliéster.' },
    { id: 16, nome: 'Blusa transpassada off-white', marca: 'Importada', cat: 'roupas', tipo: 'Blusas e camisas', tam: 'P', estado: 4, preco: 59, img: 'blusa-transpassada', pos: 'center',
      medidas: [['Busto', 46], ['Comprimento', 60], ['Manga', 60]], desc: 'Blusa de crepe com decote transpassado e punhos franzidos.', uso: 'Nunca usada.', comp: 'Poliéster.' },
    { id: 17, nome: 'Saia floral azul', marca: 'Sem etiqueta', cat: 'roupas', tipo: 'Calças e saias', tam: 'M', estado: 3, preco: 55, img: 'saia-floral', pos: 'center',
      medidas: [['Cintura', 36], ['Comprimento', 48]], desc: 'Saia reta com estampa de folhagens azuis em fundo cru.', uso: 'Sem marcas de uso aparentes.', comp: 'Linho e algodão.' },
    { id: 18, nome: 'Jaqueta de couro ajustada', marca: 'Couro legítimo', cat: 'casacos', tipo: 'Jaquetas', tam: 'P', estado: 2, preco: 199, img: 'jaqueta-couro', pos: 'center', badge: 'Anos 90', vintage: true,
      medidas: [['Busto', 44], ['Comprimento', 50], ['Manga', 60]], desc: 'Jaqueta de couro azul-marinho, gola com zíper assimétrico.', uso: 'Marcas leves de dobra nas mangas, couro hidratado.', comp: 'Couro ovino.' },
    { id: 19, nome: 'Regata preta bordada', marca: 'Feito à mão', cat: 'roupas', tipo: 'Blusas e camisas', tam: 'M', estado: 3, preco: 45, img: 'regata-bordada', pos: 'center',
      medidas: [['Busto', 44], ['Comprimento', 52]], desc: 'Regata preta com bordado floral vermelho no decote e nas alças.', uso: 'Sem marcas de uso aparentes.', comp: 'Algodão.' },
    { id: 20, nome: 'Camiseta marrom básica', marca: 'Nacional', cat: 'roupas', tipo: 'Blusas e camisas', tam: 'G', estado: 3, preco: 29, img: 'camiseta-marrom', pos: 'center',
      medidas: [['Busto', 54], ['Comprimento', 70]], desc: 'Camiseta gola careca em malha encorpada.', uso: 'Sem marcas de uso aparentes.', comp: '100% algodão.' },
    { id: 21, nome: 'Camisa floral escura', marca: 'Importada', cat: 'roupas', tipo: 'Blusas e camisas', tam: 'M', estado: 3, preco: 69, img: 'camisa-floral', pos: 'center 20%',
      medidas: [['Busto', 50], ['Comprimento', 68], ['Manga', 58]], desc: 'Camisa de manga longa com estampa floral miúda em fundo escuro.', uso: 'Sem marcas de uso aparentes.', comp: 'Viscose.' },
    { id: 22, nome: 'Parka com gola de pelúcia', marca: 'Sem etiqueta', cat: 'casacos', tipo: 'Casacos', tam: 'M', estado: 2, preco: 179, img: 'parka', pos: 'center',
      medidas: [['Busto', 56], ['Comprimento', 72], ['Manga', 62]], desc: 'Parka bege acolchoada com cordão na cintura e gola removível.', uso: 'Punhos com leve desgaste. Zíper funcionando.', comp: 'Poliéster.' },
    { id: 23, nome: 'Sandália de salto roxa', marca: 'Sem etiqueta', cat: 'calcados', tipo: 'Sandálias', tam: '36', estado: 3, preco: 99, img: 'sandalia-salto', pos: 'center', vendida: true,
      medidas: [['Palmilha', 23.5], ['Salto', 10]], desc: 'Sandália chanel de salto fino com estampa zebrada roxa.', uso: 'Solado com marca leve.', comp: 'Material sintético.' },
    { id: 24, nome: 'Casaco longo de pele sintética', marca: 'Vintage', cat: 'casacos', tipo: 'Casacos', tam: 'M', estado: 2, preco: 249, img: 'casaco-pele', pos: 'center 15%', badge: 'Anos 80', vintage: true,
      medidas: [['Busto', 54], ['Comprimento', 118], ['Manga', 60]], desc: 'Casaco longo de pele sintética caramelo com faixa na cintura.', uso: 'Pelo um pouco mais baixo nos punhos.', comp: 'Pele sintética, forro de cetim.' }
  ];

  var CATEGORIA_FOTOS = [
    { slug: 'roupas', nome: 'Roupas', img: 'camisa-floral', pos: 'center 20%' },
    { slug: 'casacos', nome: 'Casacos', img: 'parka', pos: 'center' },
    { slug: 'acessorios', nome: 'Acessórios', img: 'boina', pos: 'center' },
    { slug: 'calcados', nome: 'Calçados', img: 'sandalia-salto', pos: 'center' },
    { slug: 'vintage', nome: 'Vintage', img: 'casaco-pele', pos: 'center 15%' }
  ];

  var CUPONS = { GARIMPO10: 0.10 };
  var RESERVA_MIN = 15;
  var POR_PAGINA = 12;

  /* ÍCONES */
  var I = {
    seta: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
    coracao: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" aria-hidden="true"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1.1L12 21l7.8-7.5 1-1.1a5.5 5.5 0 0 0 0-7.8z"/></svg>',
    sacola: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" aria-hidden="true"><path d="M6 7h12l1 14H5L6 7z"/><path d="M9 7a3 3 0 0 1 6 0"/></svg>',
    tag: '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" aria-hidden="true"><path d="M3 12V4h8l10 10-8 8L3 12z"/><circle cx="7.5" cy="8" r="1.5"/></svg>',
    camera: '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" aria-hidden="true"><path d="M4 8h3l2-3h6l2 3h3v11H4z"/><circle cx="12" cy="13" r="3.5"/></svg>',
    regua: '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" aria-hidden="true"><path d="M3 17L17 3l4 4L7 21z"/><path d="M7 13l2 2M10 10l2 2M13 7l2 2"/></svg>',
    olho: '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" aria-hidden="true"><path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/></svg>',
    x: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg>',
    lixo: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13"/></svg>',
    relogio: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
    caminhao: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" aria-hidden="true"><path d="M3 6h11v10H3zM14 10h4l3 3v3h-7"/><circle cx="7" cy="18" r="2"/><circle cx="17" cy="18" r="2"/></svg>',
    check: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12l5 5L20 7"/></svg>',
    filtro: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M4 6h16M7 12h10M10 18h4"/></svg>',
    sacolaGrande: '<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" aria-hidden="true"><path d="M6 7h12l1 14H5L6 7z"/><path d="M9 7a3 3 0 0 1 6 0"/></svg>'
  };

  /* UTILITÁRIOS */
  function $(sel, ctx) { return (ctx || document).querySelector(sel); }
  function $$(sel, ctx) { return Array.prototype.slice.call((ctx || document).querySelectorAll(sel)); }
  function brl(n) { return n.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }); }
  function precoCurto(n) { return 'R$ ' + (Number.isInteger(n) ? n : n.toFixed(2).replace('.', ',')); }
  function esc(s) { return String(s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
  function porId(id) { return PRODUTOS.find(function (p) { return p.id === Number(id); }); }
  function foto(nome) { return IMG + nome + '.jpg'; }
  function parcelas(v) { var n = v >= 100 ? 3 : v >= 60 ? 2 : 1; return n > 1 ? 'ou ' + n + 'x de ' + brl(v / n) + ' sem juros' : 'à vista no Pix'; }

  var armazenamento = {
    ler: function (chave, padrao) { try { var v = localStorage.getItem('garimpo:' + chave); return v ? JSON.parse(v) : padrao; } catch (e) { return padrao; } },
    gravar: function (chave, valor) { try { localStorage.setItem('garimpo:' + chave, JSON.stringify(valor)); } catch (e) { /* sem armazenamento: segue só na memória */ } }
  };

  /* =========================================================
     ESTADO
     ========================================================= */
  var estado = {
    favoritos: armazenamento.ler('favoritos', []),
    sacola: armazenamento.ler('sacola', { ids: [], reservaAte: null }),
    cupom: null,
    frete: null,
    filtros: null,
    busca: '',
    fotoAtual: 0
  };
  estado.sacola.ids = estado.sacola.ids.filter(function (id) { var p = porId(id); return p && !p.vendida; });

  function salvar() {
    armazenamento.gravar('favoritos', estado.favoritos);
    armazenamento.gravar('sacola', estado.sacola);
    atualizarContadores();
  }
  function ehFavorito(id) { return estado.favoritos.indexOf(id) !== -1; }
  function naSacola(id) { return estado.sacola.ids.indexOf(id) !== -1; }

  function alternarFavorito(id) {
    if (ehFavorito(id)) estado.favoritos = estado.favoritos.filter(function (x) { return x !== id; });
    else estado.favoritos.push(id);
    salvar();
    $$('[data-fav="' + id + '"]').forEach(function (b) {
      b.setAttribute('aria-pressed', ehFavorito(id) ? 'true' : 'false');
    });
    if (rotaAtual().nome === 'favoritos') renderResultados();
  }

  function adicionar(id) {
    var p = porId(id);
    if (!p || p.vendida || naSacola(id)) return;
    estado.sacola.ids.push(id);
    estado.sacola.reservaAte = Date.now() + RESERVA_MIN * 60000;
    salvar();
    toast('<span>' + esc(p.nome) + ' está reservada para você.</span><a href="#sacola">Ver sacola</a>');
  }

  function remover(id) {
    estado.sacola.ids = estado.sacola.ids.filter(function (x) { return x !== id; });
    if (!estado.sacola.ids.length) { estado.sacola.reservaAte = null; estado.frete = null; }
    salvar();
  }

  function atualizarContadores() {
    var cs = $('#cont-sacola'), cf = $('#cont-fav');
    var n = estado.sacola.ids.length, f = estado.favoritos.length;
    cs.textContent = n; cs.hidden = n === 0;
    cf.textContent = f; cf.hidden = f === 0;
    $('#link-sacola').setAttribute('aria-label', 'Sacola, ' + n + (n === 1 ? ' peça' : ' peças'));
  }

  var toastTimer;
  function toast(html) {
    var t = $('#toast');
    t.innerHTML = html;
    t.hidden = false;
    t.classList.remove('toast'); void t.offsetWidth; t.classList.add('toast');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { t.hidden = true; }, 4200);
  }

  /* =========================================================
     COMPONENTES
     ========================================================= */
  function card(p) {
    var badge = p.vendida ? '<span class="badge badge--escuro">Vendida</span>' : (p.badge ? '<span class="badge">' + esc(p.badge) + '</span>' : '');
    return '<article class="card' + (p.vendida ? ' card--vendida' : '') + '">' +
      '<a class="card__link" href="#produto-' + p.id + '">' +
        '<div class="card__foto"><img src="' + foto(p.img) + '" alt="' + esc(p.nome) + '" loading="lazy" style="object-position:' + p.pos + '">' + badge + '</div>' +
        '<div class="card__info">' +
          '<span class="card__marca">' + esc(p.marca) + '</span>' +
          '<span class="card__nome">' + esc(p.nome) + '</span>' +
          '<span class="card__meta">Tam. ' + p.tam + ' · ' + ESTADOS[p.estado] + '</span>' +
          '<span class="card__preco">' + precoCurto(p.preco) + '</span>' +
        '</div>' +
      '</a>' +
      '<button class="fav-btn" type="button" data-fav="' + p.id + '" aria-pressed="' + ehFavorito(p.id) + '" aria-label="Favoritar ' + esc(p.nome) + '">' + I.coracao + '</button>' +
    '</article>';
  }

  function migalha(itens) {
    return '<nav class="migalha" aria-label="Você está em">' + itens.map(function (it, i) {
      return (i ? '<span aria-hidden="true">/</span>' : '') + (it[1] ? '<a href="#' + it[1] + '">' + esc(it[0]) + '</a>' : '<span>' + esc(it[0]) + '</span>');
    }).join('') + '</nav>';
  }

  /* =========================================================
     PÁGINAS
     ========================================================= */
  function paginaInicio() {
    var novidades = PRODUTOS.filter(function (p) { return !p.vendida; }).slice(0, 8);
    var j = porId(1), v = porId(2);
    return '' +
    '<section class="wrap hero">' +
      '<div class="hero__texto">' +
        '<span class="badge">Brechó online · curadoria semanal</span>' +
        '<h1>Roupa boa não tem <span>prazo de validade.</span></h1>' +
        '<p>Peças garimpadas uma a uma, com fotos reais e medidas em centímetros. Achou, gostou, é sua, porque aqui cada peça é única.</p>' +
        '<div class="hero__acoes"><a class="btn btn--primario" href="#novidades">Ver novidades ' + I.seta + '</a><a class="btn btn--secundario" href="#vender">Vender minhas peças</a></div>' +
      '</div>' +
      '<div class="hero__fotos">' +
        '<a class="hero__foto hero__foto--a" href="#produto-1"><img src="' + foto('jaqueta-jeans') + '" alt="Jaqueta jeans pendurada em um cabide" style="object-position:center top"></a>' +
        '<a class="hero__foto hero__foto--b" href="#produto-2"><img src="' + foto('vestido-floral') + '" alt="Vestido floral claro" style="object-position:center 30%"></a>' +
        '<a class="hero__foto hero__foto--c" href="#produto-3"><img src="' + foto('luvas-couro') + '" alt="Par de luvas de couro preto"></a>' +
        '<a class="preco-tag preco-tag--a" href="#produto-1"><small>Jaqueta jeans · ' + j.tam + '</small><b>' + precoCurto(j.preco) + '</b></a>' +
        '<a class="preco-tag preco-tag--b" href="#produto-2"><small>Vestido floral · ' + v.tam + '</small><b>' + precoCurto(v.preco) + '</b></a>' +
      '</div>' +
    '</section>' +
    '<section class="diferenciais" aria-label="Por que comprar aqui"><div class="wrap diferenciais__grid">' +
      '<div class="diferencial">' + I.tag + '<div><b>Peça única</b><span>Cada item tem uma unidade só. Gostou, garanta.</span></div></div>' +
      '<div class="diferencial">' + I.camera + '<div><b>Fotos reais</b><span>Você vê exatamente a peça que vai receber.</span></div></div>' +
      '<div class="diferencial">' + I.regua + '<div><b>Medidas em cm</b><span>Etiqueta engana. A fita métrica, não.</span></div></div>' +
      '<div class="diferencial">' + I.olho + '<div><b>Estado transparente</b><span>Toda marca de uso é descrita e fotografada.</span></div></div>' +
    '</div></section>' +
    '<section class="wrap secao"><h2 class="titulo-2">Garimpe por categoria</h2><div class="categorias">' +
      CATEGORIA_FOTOS.map(function (c) {
        return '<a class="categoria" href="#' + c.slug + '"><div class="categoria__foto"><img src="' + foto(c.img) + '" alt="" loading="lazy" style="object-position:' + c.pos + '"></div>' +
          '<div class="categoria__nome">' + c.nome + ' ' + I.seta + '</div></a>';
      }).join('') +
    '</div></section>' +
    '<section class="wrap secao"><div class="secao__topo"><div><span class="rotulo rotulo--azul">Entrou esta semana</span><h2 class="titulo-2">Acabou de chegar</h2></div><a href="#novidades">Ver todas as novidades →</a></div>' +
      '<div class="grade">' + novidades.map(card).join('') + '</div>' +
    '</section>' +
    '<section class="vender-cta"><div class="wrap vender-cta__grid">' +
      '<div class="vender-cta__texto"><span class="rotulo rotulo--amarelo">Venda com a gente</span><h2>Tem peça parada no armário? Ela merece uma segunda volta.</h2><p>Mande as fotos, a gente avalia e faz uma proposta. Você não precisa sair de casa.</p><a class="btn btn--destaque" href="#vender">Quero vender minhas peças ' + I.seta + '</a></div>' +
      passosVenda() +
    '</div></section>' +
    '<section class="wrap newsletter">' +
      '<div><h2 class="titulo-2">Novidade aqui some rápido.</h2><p>Receba um aviso quando entrar peça nova. Sem spam, só garimpo.</p></div>' +
      '<form id="form-news" novalidate><label class="campo-label" for="news-email">Seu e-mail</label><div class="linha-form"><input class="campo campo--pill" id="news-email" type="email" placeholder="voce@email.com" autocomplete="email"><button class="btn btn--escuro" type="submit">Me avise</button></div><p class="msg" id="news-msg" aria-live="polite"></p></form>' +
    '</section>';
  }

  function passosVenda() {
    return '<ol class="passos">' +
      '<li><span>01</span><div><b>Envie as fotos</b><span>Preencha o formulário com fotos e detalhes de cada peça.</span></div></li>' +
      '<li><span>02</span><div><b>Receba a avaliação</b><span>A curadoria responde com o que aceitamos e o valor proposto.</span></div></li>' +
      '<li><span>03</span><div><b>Receba o pagamento</b><span>[Defina: Pix na aprovação, consignação ou crédito na loja].</span></div></li>' +
    '</ol>';
  }

  /* Catálogo */
  var TITULOS = { novidades: 'Novidades', roupas: 'Roupas', casacos: 'Casacos', acessorios: 'Acessórios', calcados: 'Calçados', vintage: 'Vintage', favoritos: 'Favoritos', busca: 'Busca' };

  function baseDoCatalogo(nome) {
    if (CATEGORIAS[nome]) return PRODUTOS.filter(function (p) { return p.cat === nome; });
    if (nome === 'vintage') return PRODUTOS.filter(function (p) { return p.vintage; });
    if (nome === 'favoritos') return PRODUTOS.filter(function (p) { return ehFavorito(p.id); });
    if (nome === 'busca') {
      var q = normalizar(estado.busca);
      if (!q) return PRODUTOS.slice();
      return PRODUTOS.filter(function (p) { return normalizar([p.nome, p.marca, p.tipo, CATEGORIAS[p.cat]].join(' ')).indexOf(q) !== -1; });
    }
    return PRODUTOS.slice();
  }
  function normalizar(s) { return String(s).toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, ''); }

  function novosFiltros(nome) {
    return { nome: nome, tipos: [], tams: [], estados: [], min: '', max: '', ordem: 'recentes', limite: POR_PAGINA };
  }

  function contar(lista, campo) {
    var c = {};
    lista.forEach(function (p) { c[p[campo]] = (c[p[campo]] || 0) + 1; });
    return c;
  }

  var ORDEM_TAM = ['PP', 'P', 'M', 'G', 'GG', '34', '36', '37', '38', '40', '42', '44', 'Único'];

  function paginaCatalogo(nome) {
    if (!estado.filtros || estado.filtros.nome !== nome) estado.filtros = novosFiltros(nome);
    var f = estado.filtros;
    var base = baseDoCatalogo(nome);
    var tipos = contar(base, 'tipo');
    var tams = Object.keys(contar(base, 'tam')).sort(function (a, b) { return ORDEM_TAM.indexOf(a) - ORDEM_TAM.indexOf(b); });
    var ests = contar(base, 'estado');
    var titulo = nome === 'busca' && estado.busca ? 'Busca: “' + esc(estado.busca) + '”' : TITULOS[nome] || 'Catálogo';

    var filtrosHTML = base.length ? '' +
      '<aside class="filtros" id="filtros" aria-label="Filtros">' +
        '<fieldset><legend>Tipo de peça</legend>' + Object.keys(tipos).sort().map(function (t, i) {
          return '<label class="check"><input type="checkbox" id="f-tipo-' + i + '" data-filtro="tipos" value="' + esc(t) + '"' + (f.tipos.indexOf(t) !== -1 ? ' checked' : '') + '>' + esc(t) + '<span>' + tipos[t] + '</span></label>';
        }).join('') + '</fieldset>' +
        '<fieldset><legend>Tamanho</legend><div class="pills">' + tams.map(function (t) {
          return '<button type="button" class="pill" data-tam="' + esc(t) + '" aria-pressed="' + (f.tams.indexOf(t) !== -1) + '">' + esc(t) + '</button>';
        }).join('') + '</div><a href="#ajuda" style="font-size:14px;color:var(--cobalto);padding-top:8px">Prefere medidas? Veja como medimos</a></fieldset>' +
        '<fieldset><legend>Estado da peça</legend>' + [4, 3, 2, 1].filter(function (e) { return ests[e]; }).map(function (e) {
          return '<label class="check"><input type="checkbox" id="f-est-' + e + '" data-filtro="estados" value="' + e + '"' + (f.estados.indexOf(String(e)) !== -1 ? ' checked' : '') + '>' + ESTADOS[e] + '<span>' + ests[e] + '</span></label>';
        }).join('') + '</fieldset>' +
        '<fieldset><legend>Preço</legend><div class="precos">' +
          '<label for="f-min">De (R$)<input class="campo" id="f-min" type="number" min="0" inputmode="numeric" placeholder="0" value="' + f.min + '"></label>' +
          '<label for="f-max">Até (R$)<input class="campo" id="f-max" type="number" min="0" inputmode="numeric" placeholder="500" value="' + f.max + '"></label>' +
        '</div></fieldset>' +
      '</aside>' : '';

    return '<div class="wrap pagina">' +
      '<div class="cat-topo">' + migalha([['Início', 'inicio'], [TITULOS[nome] || 'Catálogo']]) +
        '<div class="cat-topo__linha"><h1 class="titulo-1">' + titulo + '</h1>' +
          '<div style="display:flex;gap:10px;flex-wrap:wrap;align-items:center">' +
            (base.length ? '<button class="btn btn--secundario filtros-btn" type="button" id="btn-filtros" aria-expanded="false" aria-controls="filtros" style="height:44px;padding:0 18px">' + I.filtro + ' Filtros</button>' : '') +
            '<label class="ordenar" for="ordenar">Ordenar por <select id="ordenar">' +
              [['recentes', 'Mais recentes'], ['menor', 'Menor preço'], ['maior', 'Maior preço'], ['estado', 'Melhor estado']].map(function (o) {
                return '<option value="' + o[0] + '"' + (f.ordem === o[0] ? ' selected' : '') + '>' + o[1] + '</option>';
              }).join('') +
            '</select></label>' +
          '</div>' +
        '</div>' +
      '</div>' +
      '<div class="catalogo">' + filtrosHTML + '<section class="resultados" id="resultados" aria-label="Peças" aria-live="polite"></section></div>' +
    '</div>';
  }

  function aplicarFiltros() {
    var f = estado.filtros;
    var lista = baseDoCatalogo(f.nome).filter(function (p) {
      if (f.tipos.length && f.tipos.indexOf(p.tipo) === -1) return false;
      if (f.tams.length && f.tams.indexOf(p.tam) === -1) return false;
      if (f.estados.length && f.estados.indexOf(String(p.estado)) === -1) return false;
      if (f.min !== '' && p.preco < Number(f.min)) return false;
      if (f.max !== '' && p.preco > Number(f.max)) return false;
      return true;
    });
    var ord = {
      recentes: function (a, b) { return a.id - b.id; },
      menor: function (a, b) { return a.preco - b.preco; },
      maior: function (a, b) { return b.preco - a.preco; },
      estado: function (a, b) { return b.estado - a.estado || a.preco - b.preco; }
    }[f.ordem];
    lista.sort(ord);
    // Peças vendidas vão para o fim.
    lista.sort(function (a, b) { return (a.vendida ? 1 : 0) - (b.vendida ? 1 : 0); });
    return lista;
  }

  function renderResultados() {
    var alvo = $('#resultados');
    if (!alvo) return;
    var f = estado.filtros;
    var base = baseDoCatalogo(f.nome);
    var lista = aplicarFiltros();
    var visiveis = lista.slice(0, f.limite);

    var chips = [];
    f.tipos.forEach(function (t) { chips.push(['tipos', t, t]); });
    f.tams.forEach(function (t) { chips.push(['tams', t, 'Tam. ' + t]); });
    f.estados.forEach(function (e) { chips.push(['estados', e, ESTADOS[e]]); });
    if (f.min !== '') chips.push(['min', '', 'A partir de R$ ' + f.min]);
    if (f.max !== '') chips.push(['max', '', 'Até R$ ' + f.max]);

    if (!base.length) {
      alvo.innerHTML = f.nome === 'favoritos'
        ? '<div class="vazio">' + I.coracao.replace('width="20" height="20"', 'width="48" height="48"') + '<h2>Nenhum favorito ainda</h2><p>Toque no coração das peças que você gostar para guardar aqui.</p><a class="btn btn--primario" href="#novidades">Ver novidades</a></div>'
        : '<div class="vazio"><h2>Nada encontrado</h2><p>Tente outra palavra, como “jaqueta”, “vestido” ou “couro”.</p><a class="btn btn--primario" href="#novidades">Ver todas as peças</a></div>';
      return;
    }

    var html = '<div class="chips"><span class="chips__total">' + lista.length + (lista.length === 1 ? ' peça encontrada' : ' peças encontradas') + '</span>' +
      chips.map(function (c) {
        return '<button type="button" class="chip" data-chip="' + c[0] + '" data-valor="' + esc(c[1]) + '" aria-label="Remover filtro ' + esc(c[2]) + '">' + esc(c[2]) + I.x + '</button>';
      }).join('') +
      (chips.length ? '<button type="button" class="link-btn" data-limpar>Limpar tudo</button>' : '') + '</div>';

    if (!lista.length) {
      html += '<div class="vazio"><h2>Nenhuma peça com esses filtros</h2><p>Tire um filtro ou dois. Peças novas entram toda semana.</p><button type="button" class="btn btn--secundario" data-limpar>Limpar filtros</button></div>';
    } else {
      html += '<div class="grade">' + visiveis.map(card).join('') + '</div>';
      if (lista.length > POR_PAGINA) {
        html += '<div class="mais"><span class="chips__total">Você viu ' + visiveis.length + ' de ' + lista.length + ' peças</span>' +
          '<div class="mais__barra"><div style="width:' + Math.round(visiveis.length / lista.length * 100) + '%"></div></div>' +
          (visiveis.length < lista.length ? '<button type="button" class="btn btn--secundario" data-mais>Carregar mais peças</button>' : '') + '</div>';
      }
    }
    alvo.innerHTML = html;
  }

  /* Produto  */
  function paginaProduto(id) {
    var p = porId(id);
    if (!p) return paginaNaoEncontrada();
    var fotos = p.fotos || [[p.img, 'frente']];
    var idx = Math.min(estado.fotoAtual, fotos.length - 1);
    var rel = PRODUTOS.filter(function (x) { return x.id !== p.id && !x.vendida && (x.cat === p.cat || x.cat === 'acessorios'); }).slice(0, 4);
    var botao = p.vendida
      ? '<button class="btn btn--bloco" type="button" disabled>Peça vendida</button>'
      : naSacola(p.id)
        ? '<a class="btn btn--escuro btn--bloco" href="#sacola">' + I.check + ' Está na sacola · ver sacola</a>'
        : '<button class="btn btn--primario btn--bloco" type="button" data-add="' + p.id + '">' + I.sacola + ' Adicionar à sacola</button>';

    return '<div class="wrap pagina">' +
      migalha([['Início', 'inicio'], [CATEGORIAS[p.cat], p.cat], [p.nome]]) +
      '<div class="produto">' +
        '<div class="galeria">' +
          '<div class="galeria__principal"><img id="foto-principal" src="' + foto(fotos[idx][0]) + '" alt="' + esc(p.nome) + ': ' + fotos[idx][1] + '" style="object-position:' + (idx === 0 ? p.pos : 'center') + '">' +
            '<span class="badge">' + (p.vendida ? 'Vendida' : 'Peça única') + '</span>' +
            (fotos.length > 1 ? '<span class="galeria__contagem" id="foto-contagem">' + (idx + 1) + ' / ' + fotos.length + ' · ' + fotos[idx][1] + '</span>' : '') +
          '</div>' +
          (fotos.length > 1 ? '<div class="miniaturas">' + fotos.map(function (fo, i) {
            return '<button type="button" class="miniatura" data-thumb="' + i + '" aria-pressed="' + (i === idx) + '" aria-label="Ver foto ' + (i + 1) + ': ' + fo[1] + '"><img src="' + foto(fo[0]) + '" alt=""></button>';
          }).join('') + '</div>' : '') +
        '</div>' +
        '<div class="info">' +
          '<div class="info__cabeca"><span class="rotulo texto-2">' + esc(p.marca) + '</span><h1>' + esc(p.nome) + '</h1>' +
            '<div class="info__preco"><b>' + brl(p.preco) + '</b><span>' + parcelas(p.preco) + '</span></div></div>' +
          (p.vendida
            ? '<div class="aviso">' + I.tag + '<span><strong>Essa já foi.</strong> Alguém garimpou primeiro. Veja peças parecidas abaixo.</span></div>'
            : '<div class="aviso">' + I.tag + '<span><strong>Só existe 1.</strong> Quando alguém compra, ela sai do site.</span></div>') +
          '<div class="blocos">' +
            '<div class="bloco"><span class="rotulo texto-2">Tamanho na etiqueta</span><b>' + p.tam + '</b><small>Confira as medidas abaixo</small></div>' +
            '<div class="bloco"><span class="rotulo texto-2">Estado</span><b>' + ESTADOS[p.estado].replace(' estado', '') + '</b>' +
              '<div class="escala" role="img" aria-label="Estado ' + p.estado + ' de 4">' + [1, 2, 3, 4].map(function (n) { return '<span' + (n <= p.estado ? ' class="on"' : '') + '></span>'; }).join('') + '</div></div>' +
          '</div>' +
          '<div class="medidas"><div class="medidas__topo"><h2>Medidas reais (cm)</h2><a href="#ajuda" style="font-size:14px;color:var(--cobalto)">Como medimos</a></div>' +
            '<table><tbody>' + p.medidas.map(function (m) { return '<tr><th scope="row">' + m[0] + '</th><td>' + String(m[1]).replace('.', ',') + '</td></tr>'; }).join('') + '</tbody></table>' +
            '<p>Peça medida aberta, na horizontal. Compare com uma peça sua que veste bem.</p></div>' +
          '<div class="acoes">' + botao +
            '<button class="fav-grande" type="button" data-fav="' + p.id + '" aria-pressed="' + ehFavorito(p.id) + '" aria-label="Favoritar">' + I.coracao.replace('width="20" height="20"', 'width="22" height="22"') + '</button></div>' +
          formFrete('produto') +
          '<div class="detalhes">' +
            '<details open><summary>Marcas de uso</summary><p>' + esc(p.uso) + '</p></details>' +
            '<details><summary>Descrição</summary><p>' + esc(p.desc) + '</p></details>' +
            '<details><summary>Composição e cuidados</summary><p>' + esc(p.comp) + ' Lavar à mão ou no ciclo delicado, secar à sombra.</p></details>' +
            '<details><summary>Trocas e devoluções</summary><p>[Descreva sua política: prazo de arrependimento, quem paga o frete de volta e como solicitar.]</p></details>' +
          '</div>' +
        '</div>' +
      '</div>' +
      (rel.length ? '<section class="secao" style="padding-top:56px"><h2 class="titulo-2">Combina com essa peça</h2><div class="grade">' + rel.map(card).join('') + '</div></section>' : '') +
    '</div>';
  }

  function formFrete(origem) {
    return '<form class="frete" data-frete="' + origem + '" novalidate>' +
      '<label for="cep-' + origem + '">' + I.caminhao + ' Calcular frete e prazo</label>' +
      '<div class="linha-form"><input class="campo" id="cep-' + origem + '" inputmode="numeric" autocomplete="postal-code" placeholder="00000-000" maxlength="9" value="' + (estado.frete ? estado.frete.cep : '') + '"><button class="btn btn--escuro" type="submit">Calcular</button></div>' +
      '<p class="msg" data-frete-msg aria-live="polite">' + (estado.frete ? textoFrete(estado.frete) : '') + '</p>' +
    '</form>';
  }

 
  function simularFrete(cep) {
    var d = Number(cep[0]);
    var t = d <= 3 ? [18.9, '4 a 6'] : d <= 5 ? [26.9, '7 a 10'] : d === 6 ? [34.9, '9 a 14'] : d === 7 ? [24.9, '6 a 9'] : [22.9, '5 a 8'];
    return { cep: cep.slice(0, 5) + '-' + cep.slice(5), valor: t[0], prazo: t[1] };
  }
  function textoFrete(fr) { return 'Envio padrão para ' + fr.cep + ': <strong>' + brl(fr.valor) + '</strong>, ' + fr.prazo + ' dias úteis. <span class="texto-2">(valor simulado)</span>'; }

  /*  Sacola */
  function totais() {
    var itens = estado.sacola.ids.map(porId).filter(Boolean);
    var sub = itens.reduce(function (s, p) { return s + p.preco; }, 0);
    var desc = estado.cupom ? Math.round(sub * CUPONS[estado.cupom] * 100) / 100 : 0;
    var frete = estado.frete && itens.length ? estado.frete.valor : 0;
    return { itens: itens, sub: sub, desc: desc, frete: frete, total: sub - desc + frete };
  }

  function paginaSacola() {
    var t = totais();
    var topo = '<div class="wrap pagina"><h1 class="titulo-1">Sua sacola</h1>';
    if (!t.itens.length) {
      return topo + '<div class="vazio">' + I.sacolaGrande + '<h2>Sua sacola está vazia</h2><p>Toda semana entra peça nova. Bora garimpar?</p><a class="btn btn--primario" href="#novidades">Ver novidades</a></div></div>';
    }
    return topo + '<div class="sacola">' +
      '<section class="sacola__itens" aria-label="Peças na sacola">' +
        '<div class="aviso">' + I.relogio + '<span id="aviso-reserva">' + textoReserva() + '</span></div>' +
        '<ul class="itens">' + t.itens.map(function (p) {
          return '<li class="item"><a class="item__foto" href="#produto-' + p.id + '" aria-label="' + esc(p.nome) + '"><img src="' + foto(p.img) + '" alt="" style="object-position:' + p.pos + '"></a>' +
            '<div class="item__corpo"><div><span class="card__marca">' + esc(p.marca) + '</span><a class="item__nome" href="#produto-' + p.id + '">' + esc(p.nome) + '</a>' +
            '<span class="card__meta">Tam. ' + p.tam + ' · ' + ESTADOS[p.estado] + ' · Peça única</span>' +
            '<button type="button" class="remover" data-remove="' + p.id + '">' + I.lixo + ' Remover</button></div>' +
            '<span class="item__preco">' + brl(p.preco) + '</span></div></li>';
        }).join('') + '</ul>' +
        '<a href="#novidades" style="align-self:flex-start;font-weight:600;padding:10px 0">← Continuar garimpando</a>' +
      '</section>' +
      '<aside class="resumo" aria-label="Resumo do pedido">' +
        '<h2>Resumo</h2>' +
        '<dl class="resumo__linhas" id="resumo-linhas">' + linhasResumo(t) + '</dl>' +
        formFrete('sacola') +
        '<form id="form-cupom" novalidate><label class="campo-label" for="cupom">Cupom de desconto</label><div class="linha-form" style="margin-top:6px"><input class="campo" id="cupom" placeholder="Digite o código" autocomplete="off" style="text-transform:uppercase" value="' + (estado.cupom || '') + '"><button class="btn btn--secundario" type="submit">Aplicar</button></div><p class="msg" id="cupom-msg" aria-live="polite">' + (estado.cupom ? 'Cupom ' + estado.cupom + ' aplicado.' : '') + '</p></form>' +
        '<div class="total"><span>Total</span><b id="total">' + brl(t.total) + '</b></div>' +
        '<button class="btn btn--primario btn--bloco" type="button" data-finalizar>Finalizar compra ' + I.seta + '</button>' +
        '<div class="selos"><span>' + I.check + 'Pagamento: [Pix · cartão de crédito]</span><span>' + I.check + 'Trocas: [sua política em uma linha]</span></div>' +
      '</aside>' +
    '</div></div>';
  }

  function linhasResumo(t) {
    return '<div><dt>Subtotal (' + t.itens.length + (t.itens.length === 1 ? ' peça' : ' peças') + ')</dt><dd>' + brl(t.sub) + '</dd></div>' +
      (t.desc ? '<div class="desconto"><dt>Cupom ' + estado.cupom + '</dt><dd>− ' + brl(t.desc) + '</dd></div>' : '') +
      '<div><dt>Frete</dt><dd>' + (estado.frete ? brl(t.frete) : 'Informe o CEP') + '</dd></div>';
  }

  function atualizarResumo() {
    var t = totais();
    var l = $('#resumo-linhas'), tot = $('#total');
    if (l) l.innerHTML = linhasResumo(t);
    if (tot) tot.textContent = brl(t.total);
  }

  function textoReserva() {
    var ate = estado.sacola.reservaAte;
    if (!ate) return 'Suas peças ficam reservadas enquanto você finaliza.';
    var resto = Math.max(0, ate - Date.now());
    if (!resto) return '<strong>A reserva expirou.</strong> As peças continuam aqui enquanto ninguém comprar, mas finalize logo.';
    var m = Math.floor(resto / 60000), s = Math.floor(resto % 60000 / 1000);
    return 'Suas peças ficam reservadas por <strong class="relogio">' + String(m).padStart(2, '0') + ':' + String(s).padStart(2, '0') + '</strong>. Depois disso, voltam para a vitrine.';
  }

  function paginaPedido(num, t) {
    return '<div class="wrap pagina"><div class="vazio" style="max-width:620px">' + I.sacolaGrande +
      '<span class="rotulo rotulo--azul">Pedido nº ' + num + '</span>' +
      '<h1 class="titulo-1">Pedido recebido!</h1>' +
      '<p>' + t.itens.length + (t.itens.length === 1 ? ' peça' : ' peças') + ' · total de ' + brl(t.total) + '. As peças saíram da vitrine e estão separadas para você.</p>' +
      '<p class="texto-2" style="font-size:15px">Este é um site de demonstração: nenhum pagamento foi cobrado. Para vender de verdade, conecte um meio de pagamento (Pix ou cartão) neste passo.</p>' +
      '<a class="btn btn--primario" href="#novidades">Continuar garimpando</a></div></div>';
  }

  /* Vender */
  function paginaVender() {
    return '<div class="wrap pagina">' + migalha([['Início', 'inicio'], ['Vender peças']]) +
      '<div class="dupla">' +
        '<div style="display:flex;flex-direction:column;gap:22px">' +
          '<span class="rotulo rotulo--azul">Venda com a gente</span>' +
          '<h1 class="titulo-1">Sua peça parada pode ser o achado de alguém.</h1>' +
          '<p class="texto-2" style="font-size:18px;margin:0">Aceitamos roupas, casacos, calçados e acessórios em bom estado, limpos e sem defeitos graves. Peças vintage têm prioridade.</p>' +
          '<div style="background:var(--cobalto);border-radius:12px;padding:8px;color:var(--branco)">' + passosVenda() + '</div>' +
        '</div>' +
        '<form class="form-vender" id="form-vender" novalidate>' +
          '<h2 style="margin:0;font-family:var(--f-display);font-size:26px;letter-spacing:-.02em">Enviar peças para avaliação</h2>' +
          '<label class="campo-label" for="v-nome">Seu nome<input class="campo" id="v-nome" autocomplete="name" required></label>' +
          '<label class="campo-label" for="v-whats">WhatsApp<input class="campo" id="v-whats" type="tel" inputmode="tel" autocomplete="tel" placeholder="(11) 90000-0000" required></label>' +
          '<label class="campo-label" for="v-pecas">Quais peças você quer vender?<textarea class="campo" id="v-pecas" placeholder="Ex.: 2 vestidos de viscose tam. M, 1 jaqueta jeans, 1 par de botas 37" required></textarea></label>' +
          '<label class="campo-label" for="v-fotos">Fotos das peças<input class="campo" id="v-fotos" type="file" accept="image/*" multiple style="padding:10px 12px;height:auto"></label>' +
          '<p class="msg texto-2" id="v-fotos-info">Envie frente, costas e detalhes de cada peça.</p>' +
          '<button class="btn btn--primario btn--bloco" type="submit">Enviar para avaliação</button>' +
          '<p class="msg" id="v-msg" aria-live="polite"></p>' +
        '</form>' +
      '</div></div>';
  }

  /* Ajuda */
  function paginaAjuda() {
    return '<div class="wrap pagina">' + migalha([['Início', 'inicio'], ['Ajuda']]) +
      '<h1 class="titulo-1">Ajuda</h1>' +
      '<div class="texto-longo">' +
        '<h2>Como medimos as peças</h2>' +
        '<p>Cada peça é medida aberta, na horizontal, sem esticar. Busto é a medida de axila a axila, de um lado só; cintura e quadril também. Multiplique por dois para ter a circunferência.</p>' +
        '<p>Para acertar o tamanho, pegue uma peça sua que veste bem, meça do mesmo jeito e compare.</p>' +
        '<h2>Escala de estado</h2>' +
        '<p><strong>Nova com etiqueta:</strong> nunca usada. <strong>Ótimo estado:</strong> usada poucas vezes, sem defeitos visíveis. <strong>Bom estado:</strong> sinais leves de uso, descritos no anúncio. <strong>Com marcas de uso:</strong> desgaste visível, fotografado e com preço ajustado.</p>' +
        '<h2>Envio e prazos</h2>' +
        '<p>[Descreva prazo de postagem, transportadoras e se há retirada.]</p>' +
        '<h2>Trocas e devoluções</h2>' +
        '<p>[Descreva sua política: prazo de arrependimento, condições e como solicitar.]</p>' +
      '</div></div>';
  }

  function paginaNaoEncontrada() {
    return '<div class="wrap pagina"><div class="vazio"><h1 class="titulo-1">Página não encontrada</h1><p>Esse endereço não existe ou a peça saiu do site.</p><a class="btn btn--primario" href="#inicio">Voltar ao início</a></div></div>';
  }

  /* ROTEADOR */
  function rotaAtual() {
    var h = decodeURIComponent(location.hash.slice(1)) || 'inicio';
    var m = h.match(/^produto-(\d+)$/);
    if (m) return { nome: 'produto', id: Number(m[1]) };
    return { nome: h };
  }

  var rotaAnterior = null;
  function render() {
    var r = rotaAtual();
    if (r.nome === 'conteudo') { $('#conteudo').focus(); return; }
    var main = $('#conteudo');
    var html;
    var catalogo = ['novidades', 'roupas', 'casacos', 'acessorios', 'calcados', 'vintage', 'favoritos', 'busca', 'catalogo'];

    if (r.nome === 'produto' && (!rotaAnterior || rotaAnterior.id !== r.id)) estado.fotoAtual = 0;

    if (r.nome === 'inicio') html = paginaInicio();
    else if (catalogo.indexOf(r.nome) !== -1) html = paginaCatalogo(r.nome === 'catalogo' ? 'novidades' : r.nome);
    else if (r.nome === 'produto') html = paginaProduto(r.id);
    else if (r.nome === 'sacola') html = paginaSacola();
    else if (r.nome === 'vender') html = paginaVender();
    else if (r.nome === 'ajuda') html = paginaAjuda();
    else html = paginaNaoEncontrada();

    main.innerHTML = '<div class="entrar">' + html + '</div>';
    if (catalogo.indexOf(r.nome) !== -1) renderResultados();

    $$('#nav a').forEach(function (a) {
      if (a.getAttribute('data-nav') === r.nome) a.setAttribute('aria-current', 'page'); else a.removeAttribute('aria-current');
    });
    $('#nav').classList.remove('aberto');
    $('#menu-btn').setAttribute('aria-expanded', 'false');

    var mudouPagina = !rotaAnterior || rotaAnterior.nome !== r.nome || rotaAnterior.id !== r.id;
    if (mudouPagina) window.scrollTo(0, 0);
    document.title = (r.nome === 'produto' && porId(r.id) ? porId(r.id).nome + ' · ' : TITULOS[r.nome] ? TITULOS[r.nome] + ' · ' : '') + 'garimpo brechó';
    rotaAnterior = r;
  }

  function ir(hash) {
    if (location.hash === '#' + hash) render(); else location.hash = hash;
  }

  /*  EVENTO  */
  document.addEventListener('click', function (e) {
    var el;
    if ((el = e.target.closest('[data-fav]'))) { alternarFavorito(Number(el.getAttribute('data-fav'))); return; }
    if ((el = e.target.closest('[data-add]'))) { adicionar(Number(el.getAttribute('data-add'))); render(); return; }
    if ((el = e.target.closest('[data-remove]'))) {
      var p = porId(el.getAttribute('data-remove'));
      remover(p.id); render();
      toast('<span>' + esc(p.nome) + ' voltou para a vitrine.</span>');
      return;
    }
    if ((el = e.target.closest('[data-thumb]'))) {
      var r = rotaAtual(), prod = porId(r.id), i = Number(el.getAttribute('data-thumb'));
      estado.fotoAtual = i;
      var img = $('#foto-principal');
      img.src = foto(prod.fotos[i][0]);
      img.alt = prod.nome + ': ' + prod.fotos[i][1];
      img.style.objectPosition = i === 0 ? prod.pos : 'center';
      $('#foto-contagem').textContent = (i + 1) + ' / ' + prod.fotos.length + ' · ' + prod.fotos[i][1];
      $$('[data-thumb]').forEach(function (b) { b.setAttribute('aria-pressed', b === el ? 'true' : 'false'); });
      return;
    }
    if ((el = e.target.closest('[data-tam]'))) {
      var t = el.getAttribute('data-tam'), f = estado.filtros;
      var on = f.tams.indexOf(t) !== -1;
      f.tams = on ? f.tams.filter(function (x) { return x !== t; }) : f.tams.concat(t);
      el.setAttribute('aria-pressed', String(!on));
      f.limite = POR_PAGINA; renderResultados(); return;
    }
    if ((el = e.target.closest('[data-chip]'))) {
      var campo = el.getAttribute('data-chip'), valor = el.getAttribute('data-valor'), fl = estado.filtros;
      if (campo === 'min' || campo === 'max') fl[campo] = '';
      else fl[campo] = fl[campo].filter(function (x) { return x !== valor; });
      render(); return;
    }
    if (e.target.closest('[data-limpar]')) { var n = estado.filtros.nome; estado.filtros = novosFiltros(n); render(); return; }
    if (e.target.closest('[data-mais]')) { estado.filtros.limite += POR_PAGINA; renderResultados(); return; }
    if ((el = e.target.closest('#btn-filtros'))) {
      var painel = $('#filtros'), aberto = painel.classList.toggle('aberto');
      el.setAttribute('aria-expanded', String(aberto)); return;
    }
    if (e.target.closest('[data-finalizar]')) {
      var tot = totais();
      var num = 'GR' + String(Date.now()).slice(-6);
      tot.itens.forEach(function (p) { p.vendida = true; });
      estado.sacola = { ids: [], reservaAte: null };
      estado.cupom = null; estado.frete = null;
      salvar();
      $('#conteudo').innerHTML = '<div class="entrar">' + paginaPedido(num, tot) + '</div>';
      window.scrollTo(0, 0);
      return;
    }
  });

  document.addEventListener('change', function (e) {
    var el = e.target;
    if (el.matches('[data-filtro]')) {
      var campo = el.getAttribute('data-filtro'), f = estado.filtros;
      f[campo] = el.checked ? f[campo].concat(el.value) : f[campo].filter(function (x) { return x !== el.value; });
      f.limite = POR_PAGINA; renderResultados(); return;
    }
    if (el.id === 'ordenar') { estado.filtros.ordem = el.value; renderResultados(); return; }
    if (el.id === 'v-fotos') {
      var n = el.files.length;
      $('#v-fotos-info').textContent = n ? n + (n === 1 ? ' foto selecionada.' : ' fotos selecionadas.') : 'Envie frente, costas e detalhes de cada peça.';
    }
  });

  document.addEventListener('input', function (e) {
    var el = e.target;
    if (el.id === 'f-min' || el.id === 'f-max') {
      estado.filtros[el.id === 'f-min' ? 'min' : 'max'] = el.value.trim();
      estado.filtros.limite = POR_PAGINA; renderResultados(); return;
    }
    if (el.id && el.id.indexOf('cep-') === 0) {
      var d = el.value.replace(/\D/g, '').slice(0, 8);
      el.value = d.length > 5 ? d.slice(0, 5) + '-' + d.slice(5) : d;
    }
  });

  document.addEventListener('submit', function (e) {
    var form = e.target;
    e.preventDefault();

    if (form.id === 'busca-form') {
      estado.busca = $('#busca').value.trim();
      estado.filtros = null;
      ir('busca');
      return;
    }
    if (form.hasAttribute('data-frete')) {
      var cep = $('input', form).value.replace(/\D/g, '');
      var msg = $('[data-frete-msg]', form);
      if (cep.length !== 8) { msg.className = 'msg msg--erro'; msg.textContent = 'Digite os 8 números do CEP.'; return; }
      estado.frete = simularFrete(cep);
      msg.className = 'msg'; msg.innerHTML = textoFrete(estado.frete);
      atualizarResumo();
      return;
    }
    if (form.id === 'form-cupom') {
      var cod = $('#cupom').value.trim().toUpperCase();
      var m = $('#cupom-msg');
      if (!cod) { estado.cupom = null; m.className = 'msg'; m.textContent = ''; }
      else if (CUPONS[cod]) { estado.cupom = cod; m.className = 'msg msg--ok'; m.textContent = 'Cupom ' + cod + ' aplicado: ' + (CUPONS[cod] * 100) + '% de desconto.'; }
      else { estado.cupom = null; m.className = 'msg msg--erro'; m.textContent = 'Esse cupom não existe ou expirou. Confira se digitou certo.'; }
      atualizarResumo();
      return;
    }
    if (form.id === 'form-news') {
      var email = $('#news-email').value.trim();
      var nm = $('#news-msg');
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { nm.className = 'msg msg--erro'; nm.textContent = 'Digite um e-mail válido, como voce@email.com.'; return; }
      nm.className = 'msg msg--ok';
      nm.textContent = 'Pronto! (Demonstração: conecte este formulário a um serviço de e-mail para salvar inscrições.)';
      form.reset();
      return;
    }
    if (form.id === 'form-vender') {
      var vm = $('#v-msg');
      var faltando = ['v-nome', 'v-whats', 'v-pecas'].filter(function (id) { return !$('#' + id).value.trim(); });
      if (faltando.length) { vm.className = 'msg msg--erro'; vm.textContent = 'Preencha nome, WhatsApp e as peças que você quer vender.'; $('#' + faltando[0]).focus(); return; }
      vm.className = 'msg msg--ok';
      vm.textContent = 'Recebemos sua proposta! A curadoria responde pelo WhatsApp. (Demonstração: conecte este formulário ao seu e-mail ou planilha.)';
      form.reset();
      $('#v-fotos-info').textContent = 'Envie frente, costas e detalhes de cada peça.';
    }
  });

  $('#menu-btn').addEventListener('click', function () {
    var aberto = $('#nav').classList.toggle('aberto');
    this.setAttribute('aria-expanded', String(aberto));
    this.setAttribute('aria-label', aberto ? 'Fechar menu' : 'Abrir menu');
  });

  
  setInterval(function () {
    var el = $('#aviso-reserva');
    if (el && estado.sacola.reservaAte) el.innerHTML = textoReserva();
  }, 1000);

  window.addEventListener('hashchange', render);
  atualizarContadores();
  render();
})();
