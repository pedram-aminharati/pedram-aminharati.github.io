import type { SiteContent } from './types';

export const fr: SiteContent = {
  lang: 'fr',
  meta: {
    title: 'Pedram Aminharati, ingénieur en IA et robotique',
    description:
      'Docteur en mécatronique et IA. Robotique de manipulation sur matériel réel, politiques de diffusion, apprentissage informé par la physique et commande. Basé à Paris.',
  },
  nav: {
    about: 'À propos',
    projects: 'Travaux',
    experience: 'Expérience',
    publications: 'Publications',
    contact: 'Contact',
    downloadCv: 'Télécharger le CV',
    switchTo: { label: 'EN', name: 'Read in English', href: '/en/' },
  },
  hero: {
    role: 'Ingénieur en IA et robotique',
    degree: 'Docteur en mécatronique et intelligence artificielle, Arts et Métiers et CNRS, Paris',
    pitch:
      'Je conçois des robots qui associent modèles physiques et apprentissage automatique, des trajectoires corrigées par IA sur une cellule industrielle KUKA aux politiques de diffusion entraînées en simulation.',
    ctaContact: 'Me contacter',
    armCaption:
      'Déplacez le pointeur sur ce panneau. Un bras à trois articulations résout sa cinématique inverse en temps réel.',
    armLabel: 'Bras robotique plan interactif qui suit le pointeur',
  },
  about: {
    title: 'À propos',
    paragraphs: [
      'Je travaille à la rencontre de l’ingénierie fondée sur les modèles et de l’apprentissage automatique. Ma thèse à Arts et Métiers ParisTech et au CNRS a couplé modélisation physique et IA, avec une validation sur un banc d’essai instrumenté que j’ai conçu et construit moi-même.',
      'En près de cinq ans de robotique, j’ai adapté un robot KUKA au placement automatisé de fibres avec correction de trajectoire en temps réel, travaillé sur des bras Franka Emika Panda et un manipulateur mobile, et entraîné des politiques de diffusion dans MuJoCo, Isaac Sim et PyBullet. Ce travail repose en grande partie sur des jeux de données capteurs soigneusement construits : synchronisés, horodatés et nettoyés avant qu’un modèle ne les utilise.',
      'J’enseigne aussi la robotique et l’IA industrielle à Arts et Métiers. Je suis ouvert à des postes en apprentissage robotique, manipulation et commande, dans l’industrie comme dans la recherche.',
    ],
    facts: [
      { value: '5 ans', label: 'de robotique sur matériel réel' },
      { value: '2', label: 'articles dans des revues internationales' },
      { value: '2026', label: 'doctorat, Arts et Métiers et CNRS' },
      { value: 'C1', label: 'en anglais, persan langue maternelle, français en cours d’apprentissage' },
    ],
  },
  projects: {
    title: 'Travaux choisis',
    intro: 'Projets de recherche et d’ingénierie, des robots de production aux politiques apprises.',
    items: [
      {
        title: 'Trajectoires corrigées par IA pour le placement automatisé de fibres',
        context: 'AMVALOR, laboratoires PIMM et LCFC, depuis 2023',
        summary:
          'Adaptation d’un robot industriel KUKA au placement automatisé de fibres. Le retour capteurs ajuste en ligne la trajectoire de dépose et les paramètres du procédé pour maintenir la qualité en production.',
        tags: ['KUKA', 'Commande temps réel', 'Retour capteurs', 'Composites'],
      },
      {
        title: 'Politiques de diffusion entraînées en simulation',
        context: 'Recherche en apprentissage robotique',
        summary:
          'Entraînement de politiques de diffusion pour la manipulation dans MuJoCo, Isaac Sim et PyBullet, et comparaison des simulateurs selon leur fidélité à la physique réelle des contacts.',
        tags: ['Apprentissage par imitation', 'MuJoCo', 'Isaac Sim', 'PyBullet', 'PyTorch'],
      },
      {
        title: 'Manipulation sur Franka Emika Panda et manipulateur mobile',
        context: 'Projets sur matériel réel',
        summary:
          'Planification de mouvement, génération et exécution de trajectoires sur bras Panda, et commande d’un manipulateur mobile, à partir de la cinématique et de la dynamique de chaque plateforme.',
        tags: ['ROS 2', 'Planification de mouvement', 'Cinématique', 'Dynamique'],
      },
      {
        title: 'Modèles informés par la physique sur un banc d’essai conçu sur mesure',
        context: 'Thèse de doctorat, 2023 à 2026',
        summary:
          'Une approche hybride qui couple modélisation physique et réseaux de neurones pour analyser des structures composites en conditions extrêmes, validée expérimentalement sur un banc que j’ai conçu et instrumenté.',
        tags: ['PINN', 'Optimisation numérique', 'Conception de bancs d’essai', 'Traitement du signal'],
      },
      {
        title: 'Jeux de données capteurs multimodaux synchronisés',
        context: 'Infrastructure de données pour l’apprentissage',
        summary:
          'Architecture d’acquisition temps réel qui enregistre plusieurs flux capteurs avec un horodatage commun, suivie du nettoyage, de la correction et de l’augmentation des données pour l’entraînement.',
        tags: ['Acquisition de données', 'Horodatage', 'Augmentation', 'Python'],
      },
      {
        title: 'Imprimantes 3D FDM d’une précision de 25 µm',
        context: 'Université de technologie K. N. Toosi, 2020 à 2022',
        summary:
          'Conception mécanique, commande des axes, instrumentation et réglage expérimental d’imprimantes 3D atteignant une précision de 25 µm. Le même laboratoire a aussi réalisé un distributeur de médicaments intelligent pour des patients atteints de démence.',
        tags: ['Mécatronique', 'Commande de mouvement', 'Instrumentation'],
      },
    ],
  },
  experience: {
    title: 'Expérience',
    items: [
      {
        role: 'Ingénieur de recherche et doctorant, robotique, IA et commande',
        org: 'AMVALOR, laboratoires PIMM (CNRS UMR 8006) et LCFC',
        place: 'Paris',
        dates: 'Depuis nov. 2023',
        points: [
          'Robot KUKA pour le placement automatisé de fibres avec correction de trajectoire par IA en temps réel.',
          'Manipulation sur bras Franka Emika Panda et manipulateur mobile.',
          'Politiques de diffusion dans MuJoCo, Isaac Sim et PyBullet ; détection d’objets pour pièces industrielles.',
          'Réseaux de neurones informés par la physique, validés sur un banc d’essai instrumenté conçu sur mesure.',
          'Algorithmes de détection, d’identification et de gradation de sévérité à partir de signaux capteurs.',
        ],
      },
      {
        role: 'Responsable du laboratoire de mécatronique et robotique',
        org: 'Université de technologie K. N. Toosi',
        place: 'Téhéran',
        dates: 'Nov. 2020 à août 2022',
        points: [
          'Direction des activités robotiques et gestion des équipements expérimentaux.',
          'Développement d’imprimantes 3D FDM d’une précision de 25 µm et d’un distributeur de médicaments intelligent pour patients atteints de démence.',
        ],
      },
      {
        role: 'Apprenti, automatisation industrielle avancée',
        org: 'Festo',
        place: 'Téhéran',
        dates: 'Oct. 2020 à mars 2021',
        points: ['Dépannage de systèmes de commande pneumatiques et électriques, programmation de PLC.'],
      },
      {
        role: 'Assistant d’enseignement, robotique et mécatronique',
        org: 'Université de technologie K. N. Toosi',
        place: 'Téhéran',
        dates: 'Oct. 2019 à août 2022',
        points: ['Travaux dirigés et travaux pratiques de robotique et d’introduction à la mécatronique.'],
      },
      {
        role: 'Responsable R&D, en parallèle des études d’ingénieur',
        org: 'skipad',
        place: 'Téhéran',
        dates: 'Sept. 2014 à oct. 2016',
        points: ['Assemblage de pièces automobiles : spécifications dimensionnelles, lecture de plans et contrôle qualité.'],
      },
    ],
  },
  publications: {
    title: 'Publications',
    readLabel: 'Lire l’article',
    items: [
      {
        authors: 'Aminharati P., Shirinbayan M., Fitoussi J., Benfriha K., Meraghni F.',
        title: 'AI-driven advances in composite materials for hydrogen storage vessels: a review',
        venue: 'International Journal of Hydrogen Energy, vol. 171, 151288, 2025',
        url: 'https://www.sciencedirect.com/science/article/pii/S0360319925042909',
      },
      {
        authors:
          'Nikooharf M. H., Shirinbayan M., Ghodsian N., Aminharati P., Bahlouli N., Fitoussi J., Benfriha K.',
        title:
          'Toward advance/digitalized FFF: real-time multimodal synchronized data acquisition and ML/DL-driven process optimization',
        venue: 'Progress in Additive Manufacturing, 10, 9195–9212, 2025',
        url: 'https://doi.org/10.1007/s40964-025-01187-1',
      },
    ],
  },
  skills: {
    title: 'Compétences',
    groups: [
      {
        name: 'Robotique et manipulation',
        items: ['KUKA', 'Franka Emika Panda', 'Manipulateurs mobiles', 'Planification de mouvement', 'Génération de trajectoires', 'Cinématique et dynamique', 'ROS et ROS 2'],
      },
      {
        name: 'Simulation',
        items: ['MuJoCo', 'Isaac Sim', 'PyBullet', 'Gazebo', 'CoppeliaSim', 'Jumeaux numériques'],
      },
      {
        name: 'IA et apprentissage',
        items: ['Politiques de diffusion', 'Apprentissage par imitation', 'Apprentissage par renforcement', 'Réseaux de neurones informés par la physique', 'Apprentissage profond', 'Construction de jeux de données'],
      },
      {
        name: 'Programmation',
        items: ['Python (PyTorch, TensorFlow, scikit-learn, NumPy, pandas)', 'C++', 'MATLAB', 'Git', 'Tests automatisés'],
      },
      {
        name: 'Commande et calcul',
        items: ['Automatique', 'Observateurs et correcteurs', 'Optimisation numérique', 'Algèbre linéaire'],
      },
      {
        name: 'Vision et signaux',
        items: ['Détection d’objets', 'Extraction de caractéristiques', 'Traitement du signal', 'Analyse vibratoire'],
      },
      {
        name: 'Instrumentation',
        items: ['Conception de bancs d’essai', 'Acquisition synchronisée', 'Capteurs de vibration, pression, position et température', 'Programmation de PLC'],
      },
      {
        name: 'Conception mécanique',
        items: ['SolidWorks', 'CATIA V5', 'AutoCAD', 'Abaqus'],
      },
    ],
  },
  education: {
    title: 'Formation',
    items: [
      {
        degree: 'Doctorat en mécatronique et intelligence artificielle',
        school: 'Arts et Métiers ParisTech (ENSAM Paris) et CNRS',
        dates: '2023 à 2026',
        note: 'Modélisation hybride physique et IA de structures composites en conditions extrêmes, validée expérimentalement.',
      },
      {
        degree: 'Master en intelligence artificielle et cybersécurité',
        school: 'Universität Klagenfurt, Autriche',
        dates: '2022 à 2024',
        note: 'Apprentissage supervisé, non supervisé et par renforcement, réseaux de neurones profonds, vision par ordinateur.',
      },
      {
        degree: 'M.Sc. en génie mécatronique, robotique et automatisation',
        school: 'Université de technologie K. N. Toosi, Téhéran',
        dates: '2019 à 2022',
        note: 'Mémoire sur l’optimisation des paramètres d’impression 3D à l’aide d’un réseau de neurones.',
      },
      {
        degree: 'B.Sc. en génie mécatronique, robotique et automatisation',
        school: 'Université de technologie Sharif, Téhéran',
        dates: '2013 à 2018',
      },
    ],
    teachingTitle: 'Enseignement',
    teaching: [
      'Robotique, Arts et Métiers',
      'Applications industrielles de l’IA et jumeaux numériques, Arts et Métiers',
      'Robotique et introduction à la mécatronique (assistant), Université de technologie K. N. Toosi',
    ],
  },
  contact: {
    title: 'Contact',
    text: 'Je recherche des postes en apprentissage robotique, manipulation et commande, dans l’industrie ou la recherche. Écrivez-moi, ou retrouvez-moi sur LinkedIn et GitHub.',
    email: 'pedram.aminharati@ensam.eu',
    cvNote: 'Le CV est disponible en anglais.',
  },
  footer: 'Pedram Aminharati, Paris',
};
