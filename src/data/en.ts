import type { SiteContent } from './types';

export const en: SiteContent = {
  lang: 'en',
  meta: {
    title: 'Pedram Aminharati, AI and robotics engineer',
    description:
      'PhD in mechatronics and AI. Manipulation robotics on real hardware, diffusion policies, physics-informed learning and control. Based in Paris.',
  },
  nav: {
    about: 'About',
    projects: 'Work',
    experience: 'Experience',
    publications: 'Publications',
    contact: 'Contact',
    downloadCv: 'Download CV',
    switchTo: { label: 'FR', name: 'Lire en français', href: '/fr/' },
  },
  hero: {
    role: 'AI and robotics engineer',
    degree: 'PhD in mechatronics and artificial intelligence, Arts et Métiers and CNRS, Paris',
    pitch:
      'I build robots that combine physics-based models with machine learning, from AI-corrected trajectories on an industrial KUKA cell to diffusion policies trained in simulation.',
    ctaContact: 'Get in touch',
    armCaption:
      'Move your pointer over this panel. A three-joint arm solves inverse kinematics for it in real time.',
    armLabel: 'Interactive planar robot arm that follows the pointer',
    portraitAlt: 'Portrait of Pedram Aminharati',
  },
  about: {
    title: 'About',
    paragraphs: [
      'I work where model-based engineering meets machine learning. My PhD at Arts et Métiers ParisTech and CNRS coupled physics-based modelling with AI, validated on an instrumented test bench I designed and built myself.',
      'Over about five years of robotics I have adapted a KUKA robot for automated fiber placement with real-time trajectory correction, worked on Franka Emika Panda arms and a mobile manipulator, and trained diffusion policies in MuJoCo, Isaac Sim and PyBullet. Much of that work rests on carefully built sensor datasets: synchronized, timestamped and cleaned before any model sees them.',
      'I also teach robotics and industrial AI at Arts et Métiers, and I am open to roles in robot learning, manipulation and control, in industry or in research.',
    ],
    facts: [
      { value: '5 years', label: 'of robotics on real hardware' },
      { value: '4', label: 'international journal papers, plus a conference paper' },
      { value: '2026', label: 'PhD, Arts et Métiers and CNRS' },
      { value: 'C1', label: 'English, with Persian native and French in progress' },
    ],
  },
  teachingBand: {
    alt: 'Pedram Aminharati lecturing in a full amphitheatre at Arts et Métiers, a robot simulation projected on the screen behind him.',
    caption: 'Teaching a robotics session at Arts et Métiers ParisTech. The screen shows the simulator students use to build up kinematics and trajectory tracking before they touch the hardware.',
    place: 'Robotics, Arts et Métiers ParisTech, Paris',
  },
  projects: {
    title: 'Selected work',
    intro: 'Research and engineering projects, from production robots to learned policies.',
    items: [
      {
        title: 'Two hands, one policy',
        context: 'Companion study to Diffusion Policy, 2026',
        summary:
          'Diffusion Policy handles two arms by concatenating them into one action vector, and never ablates that choice. I built a two-hand Push-T with a scripted force-couple expert and compared three factorisations of the two-hand action distribution under one recipe on identical data. Joint and leader–follower are indistinguishable at 0.964 coverage; independent sampling loses ten points of success with the same marginals. A single flow-matching step cuts latency a hundredfold, and three rounds of DAgger made the policy worse in a way that took measurement rather than tuning to explain.',
        tags: ['Diffusion policy', 'Flow matching', 'Imitation learning', 'DAgger', 'PyTorch'],
        href: '/en/work/two-hands-one-policy/',
        hrefLabel: 'Read the case study',
        preview: {
          src: '/work/two-hands/expert-seed100000.mp4',
          label: 'Watch two hands rotate the block with a force couple',
        },
      },
      {
        title: 'AI-corrected trajectories for automated fiber placement',
        context: 'AMVALOR, PIMM and LCFC laboratories, since 2023',
        summary:
          'Adapted a KUKA industrial robot for automated fiber placement. Sensor feedback drives online adjustment of the lay-up path and process parameters, holding deposition quality during production.',
        tags: ['KUKA', 'Real-time control', 'Sensor feedback', 'Composites'],
      },
      {
        title: 'Diffusion policies trained in simulation',
        context: 'Robot learning research',
        summary:
          'Trained diffusion policies for manipulation in MuJoCo, Isaac Sim and PyBullet, and compared the simulators on how faithfully they reproduce real contact physics.',
        tags: ['Imitation learning', 'MuJoCo', 'Isaac Sim', 'PyBullet', 'PyTorch'],
      },
      {
        title: 'Manipulation on Franka Emika Panda and a mobile manipulator',
        context: 'Real-hardware projects',
        summary:
          'Motion planning, trajectory generation and execution on Panda arms, and control of a mobile manipulator, grounded in the kinematics and dynamics of each platform.',
        tags: ['ROS 2', 'Motion planning', 'Kinematics', 'Dynamics'],
      },
      {
        title: 'Physics-informed models on a self-built test bench',
        context: 'PhD thesis, 2023 to 2026',
        summary:
          'A hybrid approach that couples physics-based modelling with neural networks to analyse composite structures under extreme conditions, validated experimentally on a bench I designed and instrumented.',
        tags: ['PINNs', 'Numerical optimisation', 'Test bench design', 'Signal processing'],
      },
      {
        title: 'Synchronized multimodal sensor datasets',
        context: 'Data infrastructure for learning',
        summary:
          'Real-time acquisition architecture that records several sensor streams with shared timestamps, followed by cleaning, correction and augmentation so the data is ready for training.',
        tags: ['Data acquisition', 'Timestamping', 'Augmentation', 'Python'],
      },
      {
        title: 'FDM 3D printers with 25 µm accuracy',
        context: 'K. N. Toosi University of Technology, 2020 to 2022',
        summary:
          'Mechanical design, axis motion control, sensor instrumentation and experimental tuning of 3D printers that reach 25 µm accuracy. The same lab also produced a smart pill dispenser for dementia patients.',
        tags: ['Mechatronics', 'Motion control', 'Instrumentation'],
      },
    ],
  },
  experience: {
    title: 'Experience',
    items: [
      {
        role: 'Research engineer and doctoral researcher, robotics, AI and control',
        org: 'AMVALOR, PIMM (CNRS UMR 8006) and LCFC laboratories',
        place: 'Paris',
        dates: 'Nov 2023 to present',
        points: [
          'KUKA robot for automated fiber placement with AI-driven real-time trajectory correction.',
          'Manipulation on Franka Emika Panda arms and a mobile manipulator.',
          'Diffusion policies in MuJoCo, Isaac Sim and PyBullet; object detection for industrial parts.',
          'Physics-informed neural networks, validated on a self-built instrumented test bench.',
          'Detection, identification and severity-grading algorithms from sensor signals.',
        ],
      },
      {
        role: 'Mechatronics and robotics laboratory manager',
        org: 'K. N. Toosi University of Technology',
        place: 'Tehran',
        dates: 'Nov 2020 to Aug 2022',
        points: [
          'Led the robotics activities and managed the experimental equipment.',
          'Developed FDM 3D printers with 25 µm accuracy and a smart pill dispenser for dementia patients.',
        ],
      },
      {
        role: 'Apprentice, advanced industrial automation',
        org: 'Festo',
        place: 'Tehran',
        dates: 'Oct 2020 to Mar 2021',
        points: ['Troubleshot pneumatic and electric control systems and programmed PLCs.'],
      },
      {
        role: 'Teaching assistant, robotics and mechatronics',
        org: 'K. N. Toosi University of Technology',
        place: 'Tehran',
        dates: 'Oct 2019 to Aug 2022',
        points: ['Tutorials and lab sessions for Robotics and Introduction to Mechatronics.'],
      },
      {
        role: 'R&D manager, alongside engineering studies',
        org: 'skipad',
        place: 'Tehran',
        dates: 'Sep 2014 to Oct 2016',
        points: ['Vehicle parts assembly: dimensional specifications, blueprints and quality control.'],
      },
    ],
  },
  publications: {
    title: 'Publications',
    readLabel: 'Read the article',
    profilesLabel: 'Also indexed on',
    orcidLabel: 'ORCID',
    orcidUrl: 'https://orcid.org/0009-0008-2062-8571',
    scholarLabel: 'Google Scholar',
    scholarUrl: 'https://scholar.google.com/citations?user=YiT53J4AAAAJ&hl=en',
    items: [
      {
        authors: 'Aminharati P., Shirinbayan M., Benfriha K., Meraghni F., Fitoussi J.',
        title:
          'Optimization of composite overwrapped pressure vessel stacking sequences via genetic algorithms: a triadic evaluation of Tsai-Wu, Hashin and Puck failure criteria',
        venue: 'Composites Part C: Open Access, vol. 21, 100796, 2026',
        url: 'https://doi.org/10.1016/j.jcomc.2026.100796',
      },
      {
        authors: 'Nikooharf M. H., Benfriha K., Aminharati P., Bahlouli N., Shirinbayan M.',
        title:
          'Kinematics-driven machine learning framework for predictive optimization of geometrical accuracy and mechanical properties in fused filament fabrication',
        venue: 'The International Journal of Advanced Manufacturing Technology, published online August 2026',
        url: 'https://doi.org/10.1007/s00170-026-19039-9',
      },
      {
        authors: 'Aminharati P.',
        title: 'Physics-informed and data-driven modelling of composite hydrogen pressure vessels under extreme loading',
        venue: 'PhD thesis, Arts et Métiers (ENSAM Paris), defended January 2026',
        url: 'https://theses.fr/2026ENAME009',
        kind: 'PhD thesis',
      },
      {
        authors: 'Aminharati P., Shirinbayan M., Benfriha K., Meraghni F., Fitoussi J.',
        title: 'AI-driven advances in composite materials for hydrogen storage vessels: A review',
        venue: 'International Journal of Hydrogen Energy, vol. 171, 151288, 2025',
        url: 'https://doi.org/10.1016/j.ijhydene.2025.151288',
        kind: 'Review',
      },
      {
        authors:
          'Nikooharf M. H., Shirinbayan M., Ghodsian N., Aminharati P., Bahlouli N., Fitoussi J., Benfriha K.',
        title:
          'Toward advance/digitalized FFF: real-time multimodal synchronized data acquisition and ML/DL-driven process optimization',
        venue: 'Progress in Additive Manufacturing, vol. 10, issue 11, 9195–9212, 2025',
        url: 'https://doi.org/10.1007/s40964-025-01187-1',
      },
      {
        authors: 'Mehran N., Haghighi A., Aminharati P., Nikolov N., Soylu A., Roman D., Prodan R.',
        title: 'Comparison of microservice call rate predictions for replication in the cloud',
        venue: 'IEEE/ACM 16th International Conference on Utility and Cloud Computing (UCC), 1–7, 2023',
        url: 'https://doi.org/10.1145/3603166.3632566',
        kind: 'Conference paper',
      },
    ],
  },
  skills: {
    title: 'Skills',
    groups: [
      {
        name: 'Robotics and manipulation',
        items: ['KUKA', 'Franka Emika Panda', 'Mobile manipulators', 'Motion planning', 'Trajectory generation', 'Kinematics and dynamics', 'ROS and ROS 2'],
      },
      {
        name: 'Simulation',
        items: ['MuJoCo', 'Isaac Sim', 'PyBullet', 'Gazebo', 'CoppeliaSim', 'Digital twins'],
      },
      {
        name: 'AI and learning',
        items: ['Diffusion policies', 'Imitation learning', 'Reinforcement learning', 'Physics-informed neural networks', 'Deep learning', 'Dataset construction'],
      },
      {
        name: 'Programming',
        items: ['Python (PyTorch, TensorFlow, scikit-learn, NumPy, pandas)', 'C++', 'MATLAB', 'Git', 'Automated testing'],
      },
      {
        name: 'Control and computation',
        items: ['Control theory', 'Observers and controllers', 'Numerical optimisation', 'Linear algebra'],
      },
      {
        name: 'Vision and signals',
        items: ['Object detection', 'Feature extraction', 'Signal processing', 'Vibration analysis'],
      },
      {
        name: 'Instrumentation',
        items: ['Test bench design', 'Synchronized acquisition', 'Vibration, pressure, position and temperature sensors', 'PLC programming'],
      },
      {
        name: 'Mechanical design',
        items: ['SolidWorks', 'CATIA V5', 'AutoCAD', 'Abaqus'],
      },
    ],
  },
  education: {
    title: 'Education',
    items: [
      {
        degree: 'PhD in mechatronics and artificial intelligence',
        school: 'Arts et Métiers ParisTech (ENSAM Paris) and CNRS',
        dates: '2023 to 2026',
        note: 'Hybrid physics and AI modelling of composite structures under extreme conditions, validated experimentally.',
      },
      {
        degree: 'Master’s in artificial intelligence and cybersecurity',
        school: 'Universität Klagenfurt, Austria',
        dates: '2022 to 2024',
        note: 'Supervised, unsupervised and reinforcement learning, deep neural networks, computer vision.',
      },
      {
        degree: 'M.Sc. in mechatronics, robotics and automation engineering',
        school: 'K. N. Toosi University of Technology, Tehran',
        dates: '2019 to 2022',
        note: 'Thesis on optimising 3D printing process parameters with a neural network model.',
      },
      {
        degree: 'B.Sc. in mechatronics, robotics and automation engineering',
        school: 'Sharif University of Technology, Tehran',
        dates: '2013 to 2018',
      },
    ],
    teachingTitle: 'Teaching',
    teaching: [
      'Robotics, Arts et Métiers',
      'Industrial applications of AI and digital twins, Arts et Métiers',
      'Robotics and Introduction to Mechatronics (teaching assistant), K. N. Toosi University of Technology',
    ],
  },
  contact: {
    title: 'Contact',
    text: 'I am looking for roles in robot learning, manipulation and control, in industry or research. Write to me, or find me on LinkedIn and GitHub.',
    email: 'pedram.aminharati@ensam.eu',
    cvNote: '',
  },
  footer: 'Pedram Aminharati, Paris',
};
