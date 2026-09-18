import type { CaseStudy } from '../types';

/* Traduction intégrale de twoHands.en.ts. Les chiffres proviennent de l'article
   (public/papers/two-hands-one-policy.pdf), tableau 1 et section 6. */
export const twoHandsFr: CaseStudy = {
  lang: 'fr',
  slug: 'two-hands-one-policy',
  meta: {
    title: 'Deux mains, une politique — Pedram Aminharati',
    description:
      'Étude contrôlée de la factorisation de la distribution d’actions à deux mains dans Diffusion Policy : conjointe, indépendante et meneur–suiveur, sous une seule recette et un seul jeu de démonstrations.',
  },
  back: { href: '/fr/#work', label: 'Retour aux travaux' },
  switchTo: { label: 'EN', name: 'Read in English', href: '/en/work/two-hands-one-policy/' },

  hero: {
    kicker: 'Étude compagnon de Chi et al., Diffusion Policy (RSS 2023, IJRR 2024)',
    title: 'Deux mains, une politique',
    standfirst:
      'Diffusion Policy passe à deux bras en les concaténant dans un seul vecteur d’action. Ce choix n’est jamais ablaté, et la littérature bimanuelle ne s’accorde pas dessus. J’ai construit une version à deux mains de Push-T, écrit un expert scripté fondé sur des couples de forces, puis entraîné trois factorisations de la même distribution sous une seule recette et des données identiques, de sorte que la seule variable soit le couplage des deux mains.',
    paperLabel: 'Lire l’article (PDF)',
    paperHref: '/papers/two-hands-one-policy.pdf',
    arxivHref: null,
    arxivLabel: 'arXiv',
    repoHref: 'https://github.com/pedram-aminharati/two-hands-one-policy',
    repoLabel: 'Code sur GitHub',
  },

  stats: [
    { value: '0,964', label: 'couverture moyenne, factorisation conjointe, sur 50 états initiaux inédits' },
    { value: '0,941', label: 'échantillonnage indépendant, à marginales et données identiques' },
    { value: '100×', label: 'réduction de latence de DDPM-100 à un seul pas d’Euler en flow matching' },
    { value: '968', label: 'démonstrations expertes conservées, 303 398 pas' },
  ],

  video: {
    title: 'Six politiques, un même état initial',
    intro:
      'Les six partent de la graine d’évaluation 100000, qu’aucune politique n’a vue à l’entraînement ni pendant l’agrégation. Le budget est de 800 pas. Comparez le deuxième panneau de la rangée du haut au troisième : les deux mains restent coordonnées dans la politique conjointe, tandis que l’échantillonnage indépendant envoie les deux disques vers des plans qui n’appartiennent pas à la même stratégie, et n’aboutit jamais.',
    src: '/work/two-hands/compare-five-methods.mp4',
    caption:
      'Les disques bleu et orange sont les deux mains, le T est en gris, la zone objectif en vert. Rendu à 512 px, dix images par seconde, en temps réel.',
    keyTitle: 'Ce que montre chaque panneau',
    stepsLabel: 'pas',
    panels: [
      { variant: 'Expert scripté', coverage: 0.95, steps: 246 },
      { variant: 'Conjointe, DDIM-10', coverage: 0.95, steps: 327 },
      { variant: 'Indépendante, DDIM-10', coverage: 0.94, steps: 800, budget: true },
      { variant: 'Meneur–suiveur, DDIM-10', coverage: 0.96, steps: 251 },
      { variant: 'Flow matching, Euler-4', coverage: 0.95, steps: 800, budget: true },
      { variant: 'Conjointe + DAgger, ronde 3', coverage: 0.95, steps: 359 },
    ],
    budgetNote: 'A épuisé le budget de 800 pas sans terminer.',
  },

  sections: [
    {
      id: 'question',
      title: 'La question',
      paragraphs: [
        'Diffusion Policy représente une politique visuomotrice comme un processus de débruitage conditionnel sur une séquence d’actions. Ses expériences bimanuelles — batteur à œufs, déroulage de tapis, pliage de chemise — étendent l’espace d’action aux poses et aux ouvertures de pince des deux effecteurs, et rapportent que la méthode a fonctionné telle quelle, sans réglage d’hyperparamètres. Les deux bras n’apparaissent donc qu’à un seul endroit : dans un vecteur d’action plus long qu’un unique débruiteur produit conjointement.',
        'C’est un choix de modélisation, pas un détail d’implémentation neutre. Écrit comme une probabilité, il dit que la politique tire les deux mains d’une seule distribution conjointe conditionnée à l’observation, si bien qu’un plan échantillonné pour une main est automatiquement cohérent avec celui de l’autre. La littérature propose des alternatives. Les politiques décentralisées entraînent une politique de diffusion par agent et l’exécutent à partir d’observations locales. Les décompositions par rôle séparent un bras stabilisateur d’un bras agissant et rapportent des gains importants sur des tâches réelles.',
        'À ma connaissance, personne n’avait fixé le modèle, la recette et les données pour ne faire varier que la factorisation. C’est ce que fait cette étude, sur une tâche assez petite pour que chaque variable soit contrôlée et chaque déroulé observable.',
      ],
    },
    {
      id: 'testbed',
      title: 'Le banc d’essai et son expert',
      paragraphs: [
        'PushTTwoHandsEnv ajoute un second disque cinématique au PushTEnv des auteurs. La physique, la pose objectif et la récompense sont inchangées, et l’action est le couple de positions cibles des deux disques, suivies par le même correcteur PD : l’espace d’action à quatre dimensions est donc l’analogue exact de la conception « concaténer les deux bras ». Les graines reproduisent les tirages d’origine, si bien que la graine 100000 ici correspond à la pose du bloc de la graine 100000 là-bas.',
        'Il n’existe pas de démonstrations humaines à deux mains pour Push-T : elles proviennent donc d’un correcteur scripté en boucle fermée, construit sur trois prises exprimées dans le repère du bloc — les deux disques derrière la barre pour translater le long de la tige, un couple avec un disque sur le flanc de la tige et l’autre au bout de la barre pour tourner sur place, et des poussées d’un seul disque passant par le centroïde pour les derniers centimètres.',
        'Le couple est la raison pour laquelle deux mains sont nécessaires. Deux contacts appliquant des forces opposées ne produisent aucune résultante et un moment qui ne dépend que de leur écartement : le bloc tourne sans se translater. Un disque seul ne peut pousser qu’en un point : il produit un moment mais aussi une force, et traîne donc le bloc en le faisant tourner. La même équation dicte la géométrie — les contacts sont placés à bras de levier égaux de part et d’autre du centroïde, car avec des bras inégaux le plus court se décolle en premier et une force résiduelle apparaît. Cela a été vérifié numériquement avant d’écrire l’expert.',
        'Mille tentatives sur les graines 0 à 999 donnent 968 épisodes réussis et 303 398 pas, conservés selon la règle appliquée au jeu Push-T humain. Les échecs restants de l’expert, environ trois pour cent des départs aléatoires, sont des blocs plaqués contre un mur où aucune prise à deux disques n’existe — un angle mort dont hérite toute politique entraînée dessus.',
      ],
    },
    {
      id: 'factorisations',
      title: 'Trois façons d’écrire une même distribution',
      paragraphs: [
        'Les trois modèles ne diffèrent que par la façon d’écrire la distribution d’actions à deux mains, et donc par ce que produit l’échantillonneur. Le modèle conjoint débruite le tenseur seize par quatre dans un seul réseau. Le modèle indépendant fait tourner deux réseaux sur la moitié qui revient à chaque main — les deux voient l’état complet, si bien que la différence ne tient pas à l’observabilité mais à l’indépendance des deux tirages de bruit au moment de l’échantillonnage. Le modèle meneur–suiveur ajoute le plan de la main une au conditionnement de la main deux, forcé par l’enseignant à l’entraînement et utilisant le plan échantillonné au déploiement, ce qui coûte deux évaluations séquentielles du réseau par décision.',
        'Tous partagent la recette basse dimension de l’article : ConditionalUnet1D avec conditionnement FiLM sur les deux dernières observations, un horizon de seize actions dont huit sont exécutées, l’ordonnancement cosinus carré, la prédiction du bruit, des poids EMA et cent époques. Deux choix de représentation rendent le problème apprenable à partir de quelques centaines d’épisodes : des observations exprimées dans le repère du bloc, version faite à la main de l’équivariance SO(2) qu’Equivariant Diffusion Policy apprend, et des actions exprimées comme décalages depuis les positions courantes des mains dans ce repère.',
        'La factorisation compte, et le choix de l’article est judicieux. Conjointe et meneur–suiveur sont indiscernables en couverture moyenne, 0,964 contre 0,963. L’échantillonnage indépendant est nettement moins bon à 0,941, et c’est aussi le plus lent des trois. L’échec est celui que prédit la littérature multi-agents : deux plans individuellement plausibles ne forment pas nécessairement une paire plausible. Conditionner la main deux sur la main une récupère ce que perd l’échantillonnage indépendant, au prix de 176 millisecondes par décision contre 91. Sur cette tâche, le vecteur conjoint achète donc la même coordination pour moitié moins de latence, ce qui est un argument concret en faveur de la conception que l’article a adoptée sans l’ablater.',
        'Les politiques apprises finissent aussi plus robustes que leur enseignant. L’expert a le meilleur taux de réussite et les épisodes les plus courts, mais son pire épisode est un échec complet — l’angle mort du bloc contre le mur, qu’il possède par construction. Conjointe, meneur–suiveur et flow matching à dix pas d’Euler ne descendent jamais sous 0,92 de couverture sur aucune des cinquante graines. Le clonage comportemental à partir de mille démonstrations a lissé un mode de défaillance du démonstrateur.',
      ],
    },
    {
      id: 'sampling',
      title: 'Ce que coûte l’échantillonnage',
      paragraphs: [
        'DDPM à cent itérations et DDIM à dix atteignent la même couverture pour un dixième du coût, de 894 à 91 millisecondes, ce qui reproduit la raison même pour laquelle l’article utilise DDIM sur matériel. Le flow matching conditionnel prolonge cette courbe. Dix pas d’Euler égalent DDIM. Quatre pas coûtent quatre points de couverture. Un seul pas atteint encore 0,941 de couverture en 8,9 millisecondes — une réduction d’un facteur cent par rapport à DDPM — même si la réussite s’effondre à 0,54 : la politique à un pas s’approche du but et franchit rarement le seuil strict.',
        'L’ensemblage temporel n’aide pas ici. Moyenner des plans qui se recouvrent coûte deux points de couverture et transforme le pire épisode en échec, ce qui rejoint des résultats récents montrant que la moyenne pondérée exponentiellement floute les distributions d’actions multimodales. Sur une tâche dont tout l’intérêt est que deux prises sont également valables, moyenner entre les plans est la mauvaise opération.',
      ],
    },
    {
      id: 'dagger',
      title: 'Un résultat négatif plus utile que les positifs',
      paragraphs: [
        'Un expert scripté peut être interrogé dans n’importe quel état, ce que la téléopération humaine ne permet pas et ce dont DAgger a besoin. J’ai appliqué la version du manuel à la politique conjointe : déroulés purement politiques, cent graines inédites par ronde, l’expert étiquetant chaque état visité, agrégation avec les démonstrations, trois rondes.',
        'La politique s’est dégradée de façon monotone. La couverture moyenne est passée de 0,964 à 0,926, puis 0,805 et 0,765 ; la réussite de 0,94 à 0,42. J’ai testé trois explications plutôt que de régler des hyperparamètres.',
        'La première est la normalisation. Ma première implémentation recalculait les statistiques min–max et de percentile sur les données agrégées, dont les décalages d’action sont plus larges parce que l’expert étiquette des états que les démonstrations ne visitent jamais : chaque entrée et chaque sortie du réseau pré-entraîné était donc silencieusement remise à l’échelle. Conserver les statistiques du point de contrôle de base est correct et a fait passer la réussite en déroulé de la deuxième ronde de 0,52 à 0,62, mais l’effondrement est resté.',
        'La deuxième est que l’expert n’est pas une fonction d’étiquetage. DAgger suppose qu’il est fonction de l’état ; le mien est un correcteur en boucle fermée doté de mémoire — la prise qu’il a choisie, le sens dans lequel ses mains contournent le bloc, les prises qu’il a temporairement écartées. Sur sa propre trajectoire cela reste invisible, puisqu’un expert neuf répond à l’identique dans 96 pour cent des états, mais sur des déroulés perturbés de vingt pixels un expert neuf choisit une prise différente dans 21 pour cent des cas. Étiqueter chaque état avec un expert neuf est strictement mieux posé et aide à chaque ronde, et la politique se dégrade quand même. Un facteur réel, mais pas la cause dominante.',
        'La troisième tranche la question : les étiquettes sont dominées par le repositionnement. Mesurer la phase de l’expert aux états qu’il étiquette montre que, sur sa propre trajectoire, la distribution est de 61 pour cent d’approche, 20 pour cent de rotation et 6 pour cent de poussée, alors que sur un déroulé ayant dérivé de trente-cinq pixels elle est à 98 pour cent d’approche et pratiquement aucune des phases qui déplacent le bloc. Agréger quarante à soixante mille états de ce type avec trois cent mille pas de démonstration déplace le mélange d’entraînement vers le déplacement. Les symptômes correspondent exactement : les politiques affinées prennent bien plus de pas et gardent leurs mains loin du bloc jusqu’à épuiser le budget. La politique n’a pas oublié comment pousser. Elle a appris à se repositionner.',
        'Le remède est le coefficient de mélange que j’avais fixé à zéro. Avec une valeur positive, le déroulé est un mélange : les états visités, et donc la composition des étiquettes, restent proches de la distribution des démonstrations. Je considère cet épisode comme la partie la plus transposable de l’étude : sur une ligne réelle, la panne se serait manifestée par une politique qui ralentit mystérieusement, et le diagnostic est venu de la mesure de la composition des données d’entraînement, pas du réglage de l’optimiseur.',
      ],
    },
    {
      id: 'limitations',
      title: 'Ce que cette étude ne montre pas',
      paragraphs: [
        'Deux disques dans un plan ne sont pas deux bras à sept degrés de liberté : il n’y a ni portée, ni préhension, ni contrôle en effort, ni perception. Les démonstrations viennent d’un correcteur scripté, donc chaque politique hérite de son style et de son angle mort contre les murs ; les résultats avec des démonstrations humaines, plus multimodales, pourraient différer — et la multimodalité est précisément là où la factorisation devrait le plus compter.',
        'La comparaison repose sur deux graines d’entraînement. Trois ou plus, avec intervalles de confiance, seraient nécessaires pour la métrique de réussite, et c’est la première chose que j’ajouterais. L’étude ne porte en outre que sur une tâche. Les suites naturelles sont une seconde tâche à couplage plus fort, comme deux disques portant une barre ou un passage d’objet, un balayage d’échelle de données pour trouver où l’échantillonnage indépendant décroche, et les mêmes trois factorisations sur une référence à deux bras établie telle que robomimic Transport.',
      ],
    },
  ],

  table: {
    title: 'Toutes les variantes sur les mêmes cinquante états inédits',
    intro:
      'Horizon glissant avec huit actions exécutées par plan, budget de 800 pas, graines 100000 à 100049 — jamais utilisées pour les démonstrations ni pour l’agrégation. La couverture minimale est le pire épisode des cinquante, et c’est là que l’enseignant scripté se trahit.',
    caption:
      'La latence est en millisecondes par décision sur une A100. L’enseignant a le meilleur taux de réussite et les épisodes les plus courts, et c’est aussi la seule méthode ici qui échoue complètement sur un épisode.',
    head: {
      variant: 'Variante',
      coverage: 'Couverture',
      success: 'Réussite',
      min: 'Pire épisode',
      steps: 'Pas',
      ms: 'ms / décision',
    },
    rows: [
      { variant: 'Expert scripté à deux mains (enseignant)', coverage: 0.945, success: 0.98, min: 0.0, steps: 315, ms: null, teacher: true },
      { variant: 'Conjointe, DDPM-100', coverage: 0.962, success: 0.96, min: 0.924, steps: 379, ms: 894 },
      { variant: 'Conjointe, DDIM-10', coverage: 0.964, success: 0.94, min: 0.942, steps: 397, ms: 91 },
      { variant: 'Meneur–suiveur, DDIM-10', coverage: 0.963, success: 0.96, min: 0.928, steps: 360, ms: 176 },
      { variant: 'Indépendante, DDIM-10', coverage: 0.941, success: 0.84, min: 0.0, steps: 409, ms: 176 },
      { variant: 'Conjointe, DDIM-10 avec ensemblage temporel', coverage: 0.94, success: 0.94, min: 0.0, steps: 382, ms: 87 },
      { variant: 'Flow matching, Euler-10', coverage: 0.96, success: 0.9, min: 0.926, steps: 394, ms: 82 },
      { variant: 'Flow matching, Euler-4', coverage: 0.95, success: 0.84, min: 0.499, steps: 435, ms: 34 },
      { variant: 'Flow matching, Euler-1', coverage: 0.941, success: 0.54, min: 0.844, steps: 551, ms: 8.9 },
      { variant: 'Conjointe + DAgger, ronde 1', coverage: 0.926, success: 0.52, min: 0.764, steps: 574, ms: 87 },
      { variant: 'Conjointe + DAgger, ronde 2', coverage: 0.805, success: 0.48, min: 0.0, steps: 611, ms: 87 },
      { variant: 'Conjointe + DAgger, ronde 3', coverage: 0.765, success: 0.42, min: 0.0, steps: 627, ms: 87 },
    ],
  },

  coverageChart: {
    title: 'Couverture moyenne pour chaque variante',
    caption:
      'Cinquante états initiaux inédits. L’enseignant scripté figure en gris, comme référence que les politiques apprises imitent.',
  },

  daggerChart: {
    title: 'Trois rondes de DAgger, deux façons d’étiqueter',
    caption:
      'La ronde 0 est la politique de base. Étiqueter chaque état avec un expert neuf aide à chaque ronde et n’arrête pourtant pas la dégradation.',
    roundLabel: 'Ronde DAgger',
    series: [
      { name: 'Un expert par épisode', values: [0.964, 0.926, 0.805, 0.765] },
      { name: 'Un expert neuf par état', values: [0.964, 0.951, 0.892, 0.789] },
    ],
  },

  figures: [
    {
      id: 'environment',
      src: '/work/two-hands/fig-environment.png',
      alt: 'L’environnement Push-T à deux mains sur la graine 100000, montrant les disques bleu et orange, le bloc en T gris et la pose objectif verte.',
      caption:
        'Graine 100000 : le bleu est la main une, l’orange la main deux, le gris le T et le vert l’objectif. L’état à sept dimensions réunit les positions des deux mains, le centre du bloc et son angle.',
    },
  ],

  testbedClip: {
    src: '/work/two-hands/expert-seed100000.mp4',
    caption:
      'L’expert scripté sur la graine 100000 : 0,952 de couverture en 246 pas. Il choisit une prise dans le repère du bloc, s’y rend par des arcs testés en collision, fait tourner le T par un couple de forces, pousse le long de la tige et termine par des poussées d’un seul disque.',
  },

  close: {
    title: 'Ce que l’étude conclut',
    text:
      'À modèle, recette et démonstrations fixés, le vecteur d’action conjoint qu’adopte Diffusion Policy est un choix par défaut solide : il égale une factorisation meneur–suiveur explicite et bat nettement l’échantillonnage indépendant par main, pour moitié moins de latence. Les politiques apprises finissent plus robustes que l’enseignant scripté qu’elles imitent. Et le résultat le plus utile fut un échec. Deux disques dans un plan ne sont pas deux bras à sept degrés de liberté — ni portée, ni préhension, ni contrôle en effort, ni perception — mais la question statistique de l’écriture de la distribution conjointe des actions de deux actionneurs est la part qui se transpose.',
    cta: 'Lire l’article (PDF)',
  },

  footer: '© 2026 Pedram Aminharati',
};
