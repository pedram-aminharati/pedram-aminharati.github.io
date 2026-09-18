import type { CaseStudy } from '../types';

/*
  Every number here comes from the paper (public/papers/two-hands-one-policy.pdf),
  Table 1 and section 6. Coverage leads throughout: the study's own variance note
  records coverage stable to ~0.02 across two training seeds while success moved by
  up to 0.28, so success is reported as secondary and gaps under ten points are
  treated as noise.
*/
export const twoHandsEn: CaseStudy = {
  lang: 'en',
  slug: 'two-hands-one-policy',
  meta: {
    title: 'Two hands, one policy — Pedram Aminharati',
    description:
      'A controlled study of how to factorise the two-hand action distribution in bimanual Diffusion Policy: joint, independent and leader–follower, under one recipe and one demonstration set.',
  },
  back: { href: '/en/#work', label: 'Back to selected work' },
  switchTo: { label: 'FR', name: 'Lire en français', href: '/fr/work/two-hands-one-policy/' },

  hero: {
    kicker: 'Companion study to Chi et al., Diffusion Policy (RSS 2023, IJRR 2024)',
    title: 'Two hands, one policy',
    standfirst:
      'Diffusion Policy extends to two arms by concatenating both into a single action vector. The decision is never ablated, and the bimanual literature disagrees about it. I built a two-hand Push-T, wrote a scripted expert that uses force couples, and trained three factorisations of the same distribution under one recipe on identical data, so that the only variable is how the hands are coupled.',
    paperLabel: 'Read the paper (PDF)',
    paperHref: '/papers/two-hands-one-policy.pdf',
    arxivHref: null,
    arxivLabel: 'arXiv',
  },

  stats: [
    { value: '0.964', label: 'mean coverage, joint factorisation, on 50 unseen initial states' },
    { value: '0.941', label: 'independent sampling, with identical marginals and the same data' },
    { value: '100×', label: 'latency reduction from DDPM-100 to a single flow-matching Euler step' },
    { value: '968', label: 'expert demonstrations kept, 303 398 steps' },
  ],

  video: {
    title: 'Six policies, one initial state',
    intro:
      'All six run from evaluation seed 100000, which no policy saw during training or data aggregation. The step budget is 800. Watch the second panel of the top row against the third: both hands stay coordinated in the joint policy, while independent sampling sends the two discs to plans that do not belong to the same strategy and never finishes.',
    src: '/work/two-hands/compare-five-methods.mp4',
    caption:
      'Blue and orange discs are the two hands, grey is the T, green is the goal region. Rendered at 512 px, ten frames per second, real time.',
    keyTitle: 'What each panel shows',
    stepsLabel: 'steps',
    panels: [
      { variant: 'Scripted expert', coverage: 0.95, steps: 246 },
      { variant: 'Joint, DDIM-10', coverage: 0.95, steps: 327 },
      { variant: 'Independent, DDIM-10', coverage: 0.94, steps: 800, budget: true },
      { variant: 'Leader–follower, DDIM-10', coverage: 0.96, steps: 251 },
      { variant: 'Flow matching, Euler-4', coverage: 0.95, steps: 800, budget: true },
      { variant: 'Joint + DAgger round 3', coverage: 0.95, steps: 359 },
    ],
    budgetNote: 'Ran out the 800-step budget without terminating.',
  },

  sections: [
    {
      id: 'question',
      title: 'The question',
      paragraphs: [
        'Diffusion Policy represents a visuomotor policy as a conditional denoising process over an action sequence. Its bimanual experiments — egg beater, mat unrolling, shirt folding — extend the action space to the poses and gripper widths of both end effectors, and report that the method worked out of the box without hyperparameter tuning. The two arms therefore appear in exactly one place: as a longer action vector that a single denoiser produces jointly.',
        'That is a modelling choice, not a neutral implementation detail. Written as a probability it says the policy draws both hands from one joint distribution conditioned on the observation, so a sampled plan for one hand is automatically consistent with the plan for the other. The literature offers alternatives. Decentralised policies train one diffusion policy per agent and execute from local observations. Role decompositions split the task into a stabilising arm and an acting arm, and report large gains over an unstructured joint baseline on real tasks.',
        'As far as I can find, nobody had held the model, the recipe and the data fixed and changed only the factorisation. That is what this study does, on a task small enough that every variable is controlled and every rollout can be watched.',
      ],
    },
    {
      id: 'testbed',
      title: 'The testbed and its expert',
      paragraphs: [
        'PushTTwoHandsEnv adds a second kinematic disc to the authors’ PushTEnv. Physics, goal pose and reward are untouched, and the action is the pair of target positions of both discs tracked by the same PD controller, so the four-dimensional action space is the exact analogue of the concatenate-both-arms design. Seeds reproduce the original random draws, so seed 100000 here is the block pose of seed 100000 there.',
        'There are no human two-hand demonstrations for Push-T, so the demonstrations come from a scripted feedback controller built on three grasps expressed in the block frame: both discs behind the bar to translate along the stem, a couple with one disc on the stem’s flank and one on the bar’s end to rotate in place, and single-disc nudges through the centroid for the last few centimetres.',
        'The couple is the reason two hands are necessary. Two contacts applying opposite forces produce no resultant force and a moment that depends only on their separation, so the block turns without translating. A single disc can only push through one point: it produces a moment but also a force, so it drags the block while turning it. The same equation dictates the geometry — contacts sit at equal lever arms either side of the centroid, because with unequal arms the shorter one separates first and a residual force appears. That was verified numerically before the expert was written.',
        'A thousand attempts on seeds 0 to 999 yield 968 successful episodes and 303 398 steps, kept on the same rule the human Push-T set uses. The expert’s remaining failures, about three per cent of random starts, are blocks lying flat against a wall where no two-disc grasp exists — a blind spot every policy trained on it inherits.',
      ],
    },
    {
      id: 'factorisations',
      title: 'Three ways to write one distribution',
      paragraphs: [
        'The three models differ only in how the two-hand action distribution is written, and therefore in what the sampler produces. The joint model denoises the whole sixteen-by-four tensor in one network. The independent model runs two networks on the half that belongs to each hand — both still see the full state, so the difference is not observability but the independence of the two noise draws at sampling time. The leader–follower model adds hand one’s plan to hand two’s conditioning, teacher-forced during training and using hand one’s sampled plan at deployment, which costs two sequential network evaluations per decision.',
        'All of them share the paper’s low-dimensional recipe: ConditionalUnet1D with FiLM conditioning on the last two observations, a horizon of sixteen actions of which eight are executed, the squared-cosine schedule, epsilon-prediction, EMA weights and a hundred epochs. Two representation choices make the problem learnable from a few hundred episodes — observations expressed in the block frame, which is the hand-made version of the SO(2) equivariance that Equivariant Diffusion Policy learns, and actions as offsets from the current hand positions in that frame.',
        'The factorisation matters, and the paper’s choice is sound. Joint and leader–follower are indistinguishable in mean coverage, 0.964 against 0.963. Independent sampling is clearly worse at 0.941 and is also the slowest of the three. The failure is the one the multi-agent literature predicts: two individually plausible plans need not be a plausible pair. Conditioning hand two on hand one recovers what independent sampling loses, at the price of 176 milliseconds per decision against 91. On this task the joint vector buys the same coordination for half the latency, which is a concrete argument for the design the paper adopted without ablating it.',
        'The learned policies also end up more robust than their teacher. The expert has the best success rate and the fastest episodes, but its worst episode is a complete failure — the wall-jammed blind spot it has by construction. Joint, leader–follower and flow matching at ten Euler steps never drop below 0.92 coverage on any of the fifty seeds. Behaviour cloning from a thousand demonstrations has smoothed a failure mode of the demonstrator.',
      ],
    },
    {
      id: 'sampling',
      title: 'What sampling costs',
      paragraphs: [
        'DDPM at a hundred iterations and DDIM at ten reach the same coverage at a tenth of the cost, 894 milliseconds down to 91, which reproduces the paper’s own reason for using DDIM on hardware. Conditional flow matching extends that curve. Ten Euler steps match DDIM. Four steps cost four points of coverage. A single step still reaches 0.941 coverage at 8.9 milliseconds — a hundredfold reduction from DDPM — although success collapses to 0.54, meaning the one-step policy gets close to the goal and rarely crosses the strict threshold.',
        'Temporal ensembling does not help here. Averaging overlapping plans costs two points of coverage and turns the worst episode into a failure, which is consistent with recent evidence that exponentially weighted ensembling blurs multimodal action distributions. On a task whose whole point is that two grasps are equally valid, averaging across plans is the wrong operation.',
      ],
    },
    {
      id: 'dagger',
      title: 'A negative result worth more than the positive ones',
      paragraphs: [
        'A scripted expert can be queried at any state, which is exactly what human teleoperation cannot provide and what DAgger needs. I ran the textbook version on the joint policy: pure policy rollouts, a hundred fresh seeds per round, the expert labelling every visited state, aggregation with the demonstrations, three rounds.',
        'The policy got monotonically worse. Mean coverage fell from 0.964 to 0.926, 0.805 and 0.765; success from 0.94 to 0.42. I tested three explanations rather than tuning.',
        'The first was normalisation. My first implementation recomputed the min–max and percentile statistics on the aggregated data, whose action offsets are wider because the expert labels states the demonstrations never visit, so every input and output of the pretrained network was silently rescaled. Keeping the base checkpoint’s statistics is correct and lifted second-round rollout success from 0.52 to 0.62, but the collapse remained.',
        'The second was that the expert is not a labelling function. DAgger assumes it is a function of the state; mine is a feedback controller with memory — the grasp it has committed to, the direction its hands are travelling, the grasps it has temporarily blacklisted. On its own trajectory this is invisible, because a fresh expert answers identically at 96 per cent of states, but on rollouts perturbed by twenty pixels a fresh expert picks a different grasp at 21 per cent of states. Labelling every state with a fresh expert is strictly better posed and helps at every round, and the policy still degrades. A real contributing factor, not the dominant cause.',
        'The third settles it: the labels are dominated by recovery. Measuring the expert’s phase at the states it labels shows that on its own trajectory the distribution is 61 per cent approach, 20 per cent rotate and 6 per cent push, while on a rollout that has drifted thirty-five pixels it is 98 per cent approach and essentially none of the phases that move the block. Aggregating forty to sixty thousand such states with three hundred thousand demonstration steps shifts the training mixture towards travelling. The symptoms match precisely — the fine-tuned policies take far more steps and keep their hands away from the block until the budget runs out. The policy did not forget how to push. It learned to reposition.',
        'The remedy is the mixing coefficient I had set to zero. With a positive value the rollout is a mixture, so the visited states, and therefore the label composition, stay near the demonstration distribution. I regard this episode as the most transferable part of the study: on a real line the failure would have looked like a policy that mysteriously slows down, and the diagnosis came from measuring the composition of the training data, not from tuning the optimiser.',
      ],
    },
    {
      id: 'limitations',
      title: 'What this does not show',
      paragraphs: [
        'Two discs on a plane are not two seven-degree-of-freedom arms: there is no reach, no grasp, no force control and no perception. The demonstrations come from a scripted controller, so every policy inherits its style and its wall-jammed blind spot; results with human demonstrations, which are more multimodal, could differ — and multimodality is precisely where factorisation should matter most.',
        'The comparison uses two training seeds. Three or more with confidence intervals are needed for the success metric, and that is the first thing I would add. The study also tests one task. The natural next steps are a second task with tighter coupling, such as two discs carrying a bar or a hand-over, a data-scaling sweep to find where independent sampling breaks, and the same three factorisations on an established two-arm benchmark such as robomimic Transport.',
      ],
    },
  ],

  table: {
    title: 'Every variant on the same fifty unseen states',
    intro:
      'Receding horizon with eight executed actions per plan, step budget 800, seeds 100000 to 100049 — never used for demonstrations or aggregation. Minimum coverage is the worst single episode of the fifty, which is where the scripted teacher gives itself away.',
    caption:
      'Latency is milliseconds per decision on an A100. The teacher has the best success rate and the fastest episodes, and is also the only method here that fails an episode outright.',
    head: {
      variant: 'Variant',
      coverage: 'Coverage',
      success: 'Success',
      min: 'Worst episode',
      steps: 'Steps',
      ms: 'ms / decision',
    },
    rows: [
      { variant: 'Scripted two-hand expert (teacher)', coverage: 0.945, success: 0.98, min: 0.0, steps: 315, ms: null, teacher: true },
      { variant: 'Joint, DDPM-100', coverage: 0.962, success: 0.96, min: 0.924, steps: 379, ms: 894 },
      { variant: 'Joint, DDIM-10', coverage: 0.964, success: 0.94, min: 0.942, steps: 397, ms: 91 },
      { variant: 'Leader–follower, DDIM-10', coverage: 0.963, success: 0.96, min: 0.928, steps: 360, ms: 176 },
      { variant: 'Independent, DDIM-10', coverage: 0.941, success: 0.84, min: 0.0, steps: 409, ms: 176 },
      { variant: 'Joint, DDIM-10 with temporal ensembling', coverage: 0.94, success: 0.94, min: 0.0, steps: 382, ms: 87 },
      { variant: 'Flow matching, Euler-10', coverage: 0.96, success: 0.9, min: 0.926, steps: 394, ms: 82 },
      { variant: 'Flow matching, Euler-4', coverage: 0.95, success: 0.84, min: 0.499, steps: 435, ms: 34 },
      { variant: 'Flow matching, Euler-1', coverage: 0.941, success: 0.54, min: 0.844, steps: 551, ms: 8.9 },
      { variant: 'Joint + DAgger round 1', coverage: 0.926, success: 0.52, min: 0.764, steps: 574, ms: 87 },
      { variant: 'Joint + DAgger round 2', coverage: 0.805, success: 0.48, min: 0.0, steps: 611, ms: 87 },
      { variant: 'Joint + DAgger round 3', coverage: 0.765, success: 0.42, min: 0.0, steps: 627, ms: 87 },
    ],
  },

  coverageChart: {
    title: 'Mean coverage across every variant',
    caption:
      'Fifty unseen initial states. The scripted teacher is shown in grey as the reference the learned policies are imitating.',
  },

  daggerChart: {
    title: 'Three rounds of DAgger, two ways of labelling',
    caption:
      'Round 0 is the base policy. Labelling every state with a fresh expert helps at every round and still does not stop the degradation.',
    roundLabel: 'DAgger round',
    series: [
      { name: 'One expert per episode', values: [0.964, 0.926, 0.805, 0.765] },
      { name: 'A fresh expert per state', values: [0.964, 0.951, 0.892, 0.789] },
    ],
  },

  figures: [
    {
      id: 'environment',
      src: '/work/two-hands/fig-environment.png',
      alt: 'The two-hand Push-T environment on seed 100000, showing the blue and orange discs, the grey T block and the green goal pose.',
      caption:
        'Seed 100000: blue is hand one, orange is hand two, grey is the T and green is the goal. The seven-dimensional state is both hand positions, the block centre and the block angle.',
    },
  ],

  testbedClip: {
    src: '/work/two-hands/expert-seed100000.mp4',
    caption:
      'The scripted expert on seed 100000, reaching 0.952 coverage in 246 steps. It picks a grasp in the block frame, travels there on collision-checked arcs, rotates the T with a force couple, pushes along the stem and finishes with single-disc nudges.',
  },

  close: {
    title: 'What the study concluded',
    text:
      'Holding the model, the recipe and the demonstrations fixed, the joint action vector that Diffusion Policy adopts is a sound default: it matches an explicit leader–follower factorisation and clearly beats independent per-hand sampling, at half the latency. The learned policies end up more robust than the scripted teacher they imitate. And the most useful outcome was a failure. Two discs on a plane are not two seven-degree-of-freedom arms — there is no reach, no grasp, no force control and no perception — but the statistical question of how to write the joint distribution of two actuators’ actions is the part that transfers.',
    cta: 'Read the paper (PDF)',
  },

  footer: '© 2026 Pedram Aminharati',
};
