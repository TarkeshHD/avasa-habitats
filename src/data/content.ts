import { IMAGES } from './images';

export const heroMetrics = [
  { value: 60, suffix: '', label: 'Day Delivery System', sublabel: 'Target construction system' },
  { value: 18, suffix: '', label: 'Standard Design Configurations', sublabel: 'Engineered catalogue' },
  { value: 2, suffix: ',000', label: 'Sq Ft Home Format', sublabel: 'Approximate built-up area' },
  { value: 4, suffix: '', label: 'Mandatory Quality Checkpoints', sublabel: 'Stage-wise inspections' },
];

export const comparisonData = {
  traditional: [
    'Uncertain timelines',
    'Fragmented contractors',
    'Cost variations',
    'Limited visibility',
    'Inconsistent quality',
    'Difficult coordination',
  ],
  avasa: [
    'Standardized designs',
    'Defined execution stages',
    'Integrated project tracking',
    'Engineered structural system',
    'Central quality checkpoints',
    'Coordinated delivery',
  ],
};

export const modelCards = [
  {
    number: '01',
    title: '60-Day Delivery System',
    icon: 'timer',
    description: 'Traditional construction can extend for months. AVASA uses a tightly structured sequence of design, approvals, structural construction, finishing and handover.',
    points: ['Structured sequence', 'Defined milestones', 'Rapid structural execution'],
  },
  {
    number: '02',
    title: '18 Standard Configurations',
    icon: 'modules',
    description: 'A controlled catalogue reduces repetitive design work and improves material planning, procurement, execution, cost visibility and quality consistency.',
    points: ['Material planning', 'Procurement efficiency', 'Quality consistency'],
  },
  {
    number: '03',
    title: 'Distributed Execution',
    icon: 'network',
    description: 'Local execution teams operate close to customers while being supported by centralized processes, technology and quality systems.',
    points: ['Local operations', 'Central support', 'Technology-enabled'],
  },
  {
    number: '04',
    title: 'Capital-Efficient Operations',
    icon: 'blocks',
    description: 'Standardized procurement, repeatable construction processes and disciplined project sequencing enable efficient deployment of operational capital.',
    points: ['Repeatable processes', 'Disciplined sequencing', 'Efficient deployment'],
  },
];

export const configSteps = {
  plan: [
    { id: 'A', name: 'Plan A', description: 'Compact efficient layout with optimized circulation' },
    { id: 'B', name: 'Plan B', description: 'Expanded layout with additional living space' },
  ],
  facade: [
    { id: 'contemporary', name: 'Contemporary', description: 'Clean lines with warm material palette' },
    { id: 'modern', name: 'Modern', description: 'Sharp geometry with bold proportions' },
    { id: 'minimal', name: 'Minimal', description: 'Reduced surfaces and restrained detailing' },
  ],
  orientation: [
    { id: '01', name: 'Option 01', description: 'North-facing entrance' },
    { id: '02', name: 'Option 02', description: 'East-facing entrance' },
    { id: '03', name: 'Option 03', description: 'South-facing entrance' },
  ],
};

export const collections = [
  {
    id: 'nele',
    name: 'NELE',
    tagline: 'Smart Entry',
    position: 'Smart Entry',
    priceStart: '₹60L',
    pricePerSqFt: '₹2,200',
    idealFor: ['First-time homeowners', 'Middle-income professionals', 'Peripheral growth markets', 'Buyers seeking practical space'],
    characteristics: ['Efficient', 'Practical', 'Optimized'],
    config: '2 BHK duplex-oriented layout',
    image: IMAGES.townhouse1,
    floorPlan: IMAGES.blueprint1,
    bedrooms: 2,
    bathrooms: 2,
    floors: 2,
    area: '1,200 sq ft',
    facade: 'Contemporary',
    features: ['Optimized circulation', 'Natural ventilation', 'Efficient kitchen layout', 'Compact utility spaces'],
  },
  {
    id: 'nivasa',
    name: 'NIVASA',
    tagline: 'Elevated Living',
    position: 'Elevated Living',
    priceStart: '₹80L',
    pricePerSqFt: '₹2,800',
    idealFor: ['Upgrading families', 'Professionals', 'Remote property owners', 'Satellite growth markets'],
    characteristics: ['Upgraded materials', 'Refined finishes', 'Greater personalization'],
    config: '3 BHK duplex layout',
    image: IMAGES.villaExterior2,
    floorPlan: IMAGES.blueprint4,
    bedrooms: 3,
    bathrooms: 3,
    floors: 2,
    area: '1,600 sq ft',
    facade: 'Modern',
    features: ['Upgraded material palette', 'Refined interior finishes', 'Expanded living areas', 'Enhanced natural light'],
  },
  {
    id: 'nilaya',
    name: 'NILAYA',
    tagline: 'Premium Living',
    position: 'Premium Living',
    priceStart: '₹98L',
    pricePerSqFt: '₹3,400',
    idealFor: ['Senior professionals', 'Investors', 'Premium residential corridors', 'High-growth markets'],
    characteristics: ['Premium interiors', 'Elevated facade', 'Higher specification'],
    config: '3 BHK premium duplex',
    image: IMAGES.villaLuxury1,
    floorPlan: IMAGES.blueprint3,
    bedrooms: 3,
    bathrooms: 4,
    floors: 2,
    area: '2,000 sq ft',
    facade: 'Minimal',
    features: ['Premium interior specification', 'Elevated facade design', 'Higher-end fixtures', 'Expanded outdoor spaces'],
  },
];

export const timelineStages = [
  {
    stage: '01',
    days: 'Days 1–15',
    title: 'Design & Planning',
    items: ['Client brief', 'Plot survey', 'Configuration selection', 'Design finalization', 'Construction planning'],
    image: IMAGES.blueprint2,
  },
  {
    stage: '02',
    days: 'Days 16–30',
    title: 'Approvals & Readiness',
    items: ['Documentation', 'Required approvals', 'Site readiness', 'Execution scheduling'],
    image: IMAGES.constructionPlanning,
  },
  {
    stage: '03',
    days: 'Days 31–37',
    title: 'Structural Build',
    items: ['Aluminium formwork methodology', 'Rapid structural execution', 'Engineered structural system'],
    image: IMAGES.formwork1,
    note: 'Target: approximately 7-day structural execution stage after prerequisites are completed.',
  },
  {
    stage: '04',
    days: 'Days 38–58',
    title: 'Finishing & Services',
    items: ['Flooring', 'Electrical', 'Plumbing', 'MEP', 'Painting', 'Fixtures', 'Interior finishing'],
    image: IMAGES.interior3,
  },
  {
    stage: '05',
    days: 'Day 60',
    title: 'Handover',
    items: ['Final inspection', 'Customer handover'],
    image: IMAGES.keysHandover2,
  },
];

export const executionEngines = [
  {
    number: '01',
    title: 'Local Execution Network',
    subtitle: 'Growth Engine',
    items: ['Customer relationships', 'Local operations', 'Construction execution', 'Site coordination', 'Sales'],
  },
  {
    number: '02',
    title: 'Cluster Development',
    subtitle: 'Pipeline Engine',
    items: ['Plot opportunities', 'Micro-market development', 'Project clustering', 'Pipeline creation'],
  },
  {
    number: '03',
    title: 'Central Platform',
    subtitle: 'Enablement Engine',
    items: ['Strategy', 'Construction technology', 'ERP', 'Design systems', 'Procurement standards', 'Quality control', 'Performance visibility'],
  },
];

export const executionFlow = [
  'Cluster Development',
  'Structural Pipeline',
  'Finishing Teams',
  'Quality Control',
  'Delivery',
];

export const clusterTypes = [
  { type: '01', name: 'Plotted Communities', count: '10–20 clusters per layout', description: 'Organized residential layouts with multiple cluster opportunities' },
  { type: '02', name: 'Expansion Corridors', count: '30–50 clusters across a concentrated growth area', description: 'Growth corridor development with concentrated execution' },
  { type: '03', name: 'Redevelopment Pockets', count: '5–10 clusters per pocket', description: 'Redevelopment zones with cluster-based execution' },
  { type: '04', name: 'Individual Plot Networks', count: '1–2 clusters per street or micro-location', description: 'Street-level execution in established neighborhoods' },
];

export const clusterQualifications = [
  'Suitable plot dimensions',
  'Road accessibility',
  'Utility / MEP accessibility',
  'Clear legal documentation',
  'Construction feasibility',
];

export const marketMatching = [
  { market: 'Growth / Peripheral Zones', collection: 'NELE', description: 'Affordability-led / first-time ownership' },
  { market: 'Satellite / Redevelopment Markets', collection: 'NIVASA', description: 'Upgrading households and professionals' },
  { market: 'Premium / Coastal / Urban Growth Corridors', collection: 'NILAYA', description: 'Premium professionals, investors and remote property owners' },
];

export const qualityCheckpoints = [
  {
    number: '01',
    title: 'Foundation Check',
    target: 'Before structural execution',
    verify: ['Dimensions', 'Reinforcement', 'Levels', 'Readiness'],
  },
  {
    number: '02',
    title: 'Structure Check',
    target: 'Structural milestone',
    verify: ['Alignment', 'Structural dimensions', 'Formwork', 'Concrete quality'],
  },
  {
    number: '03',
    title: 'Finishing Mid-Check',
    target: 'During finishing stage',
    verify: ['Services', 'Flooring', 'Electrical', 'Plumbing', 'Surface quality'],
  },
  {
    number: '04',
    title: 'Pre-Handover Inspection',
    target: 'Approximately Day 55–58',
    verify: ['Final workmanship', 'Functionality', 'Finishes', 'Snag closure', 'Readiness for handover'],
  },
];

export const dashboardFeatures = [
  'Project progress',
  'Construction milestones',
  'Material tracking',
  'Quality status',
  'Site updates',
  'Procurement visibility',
  'Documentation',
  'Customer communication',
  'Schedule tracking',
];

export const factoryTeam = [
  { role: 'Dealer / Business Principal', description: 'Owns the local operating unit and drives market presence' },
  { role: 'City / Market Sales Lead', description: 'Manages sales strategy and customer acquisition' },
  { role: 'Sales Executives', description: 'Engages with prospective homeowners and manages relationships' },
  { role: 'Site Engineers', description: 'Oversees construction execution and quality on site' },
  { role: 'Procurement', description: 'Manages material sourcing and supply chain' },
  { role: 'CRM / Customer Operations', description: 'Coordinates customer experience and communication' },
];

export const factoryInfrastructure = [
  'Local office',
  'Customer experience area',
  'Technology / ERP access',
  'Project management capability',
  'Site engineering capability',
];

export const centralHierarchy = [
  { level: 'Central Platform', description: 'Strategy, technology, design systems, quality' },
  { level: 'Regional Operating Network', description: 'Multi-region coordination and oversight' },
  { level: 'City / Market Clusters', description: 'Market-level execution and pipeline' },
  { level: 'Local Execution Units', description: 'On-site construction and delivery teams' },
  { level: 'Customer Homes', description: 'Delivered, quality-controlled homes' },
];

export const whyAvasa = [
  { number: '01', title: 'Speed', description: 'Structured delivery instead of open-ended construction.' },
  { number: '02', title: 'Standardization', description: 'Repeatable designs and processes.' },
  { number: '03', title: 'Visibility', description: 'Technology-enabled project tracking.' },
  { number: '04', title: 'Local Execution', description: 'Teams operate near the customer.' },
  { number: '05', title: 'Quality Control', description: 'Mandatory stage-wise inspections.' },
  { number: '06', title: 'Scalability', description: 'Repeatable operating units designed for multi-market expansion.' },
];

export const customerJourney = [
  { step: 1, title: 'Tell Us About Your Plot', description: 'Share your plot details, location context and ownership status to begin the conversation.' },
  { step: 2, title: 'Choose Your Home Collection', description: 'Select from Nele, Nivasa or Nilaya based on your lifestyle and budget preferences.' },
  { step: 3, title: 'Select Your Configuration', description: 'Pick your floor plan, facade language and orientation from 18 standardized configurations.' },
  { step: 4, title: 'Site Assessment', description: 'Our engineers visit your plot to assess dimensions, accessibility and construction feasibility.' },
  { step: 5, title: 'Scope & Proposal', description: 'Receive a detailed scope of work and proposal based on your selections and site conditions.' },
  { step: 6, title: 'Design Confirmation', description: 'Finalize your home design with any configuration adaptations within the standardized framework.' },
  { step: 7, title: 'Approvals & Readiness', description: 'Documentation, required approvals and site preparation are completed before construction begins.' },
  { step: 8, title: 'Construction Begins', description: 'The 60-day production system is initiated with structural execution using aluminium formwork.' },
  { step: 9, title: 'Quality Checkpoints', description: 'Mandatory stage-wise inspections ensure quality at foundation, structure, finishing and pre-handover.' },
  { step: 10, title: 'Final Handover', description: 'Final inspection, snag closure and customer handover of your completed home.' },
];

export const galleryTabs = [
  { id: 'plot', label: 'Plot', images: [IMAGES.plotLand, IMAGES.materialConcrete] },
  { id: 'structure', label: 'Structure', images: [IMAGES.formwork1, IMAGES.foundation1, IMAGES.formworkMono, IMAGES.rebarFormwork] },
  { id: 'finishing', label: 'Finishing', images: [IMAGES.concreteFinish, IMAGES.constructionInspect2, IMAGES.materialBricks] },
  { id: 'completed', label: 'Completed Home', images: [IMAGES.villaExterior1, IMAGES.villaExterior2, IMAGES.villaExterior3, IMAGES.townhouse2] },
  { id: 'interiors', label: 'Interiors', images: [IMAGES.interior1, IMAGES.interior2, IMAGES.interior4, IMAGES.interior5] },
];

export const partnerBenefits = [
  'Standardized housing catalogue',
  'Central technology platform',
  'Engineering systems',
  'Procurement standards',
  'Quality frameworks',
  'Marketing support',
  'Training',
  'Operating playbooks',
];

export const faqItems = [
  { q: 'How does the 60-day construction system work?', a: 'The 60-Day Delivery System follows a structured sequence: design and planning (Days 1–15), approvals and readiness (Days 16–30), structural build using aluminium formwork (Days 31–37), finishing and services (Days 38–58), and handover (Day 60). Timelines are subject to approvals, site readiness, scope and project conditions.' },
  { q: 'What is aluminium formwork?', a: 'Aluminium formwork is a reusable moulding system used for casting concrete walls and slabs. It enables rapid, repetitive and dimensionally accurate structural construction, which is central to our standardized production approach.' },
  { q: 'Can I customize my home?', a: 'Configurations can be adapted to project requirements while maintaining a standardized construction framework. You can choose from 18 configurations across plan families, facade languages and orientations, with further adaptation within the system.' },
  { q: 'What plot sizes are suitable?', a: 'The reference minimum plot is approximately 30 × 40 ft where configuration permits. Plot suitability is assessed during the site assessment stage, considering dimensions, accessibility, utilities and construction feasibility.' },
  { q: 'Are approvals included in the timeline?', a: 'Approvals are part of the structured sequence (Days 16–30), but approval timelines depend on local authorities, documentation readiness and project conditions. The overall schedule is subject to approval status.' },
  { q: 'Can I build on an existing plot?', a: 'Yes. If you own or have access to a suitable plot, the process begins with a site assessment to determine feasibility, followed by configuration selection and project planning.' },
  { q: 'What is included in the quoted price?', a: 'Indicative pricing covers the standardized construction package. Final pricing varies based on location, plot conditions, specifications, taxes and selected configuration. A detailed scope is provided in the proposal stage.' },
  { q: 'How are quality checks performed?', a: 'Four mandatory quality checkpoints are built into the process: Foundation Check, Structure Check, Finishing Mid-Check and Pre-Handover Inspection. Each verifies specific dimensions of construction quality before proceeding.' },
  { q: 'Can I track construction progress?', a: 'Yes. Our technology platform provides visibility into project progress, construction milestones, material tracking, quality status and site updates throughout the build.' },
  { q: 'What happens if site conditions change?', a: 'Site conditions are assessed before construction begins. If conditions change during execution, the project team evaluates the impact and communicates adjustments to the schedule and scope as needed.' },
  { q: 'What are Nele, Nivasa and Nilaya?', a: 'These are our three home collections. Nele is positioned for smart entry and first-time ownership. Nivasa offers elevated living for upgrading families. Nilaya delivers premium living for senior professionals and investors.' },
  { q: 'Do you support projects across multiple cities and regions?', a: 'Yes. AVASA operates as a multi-region housing platform with a decentralized execution network. Local execution teams operate across growth corridors, peripheral zones, satellite towns and emerging residential markets.' },
];

export const navLinks = [
  { label: 'Home', href: '#/' },
  { label: 'Designs', href: '#/#designs' },
  { label: '60-Day Build', href: '#/#timeline' },
  { label: 'How It Works', href: '#/#engines' },
  { label: 'Quality', href: '#/#quality' },
  { label: 'About', href: '#/#about' },
  { label: 'Partners', href: '#/partners' },
];

export const homeCatalogue = [
  { id: 'nele-2bhk-contemp', collection: 'Nele', layout: '2 BHK', facade: 'Contemporary', area: '1,200 sq ft', budget: '₹55–65L', bedrooms: 2, bathrooms: 2, floors: 2, image: IMAGES.townhouse1, floorPlan: IMAGES.blueprint1, methodology: 'Aluminium formwork', features: ['Optimized circulation', 'Natural ventilation', 'Efficient kitchen'], price: '₹60L*' },
  { id: 'nele-2bhk-modern', collection: 'Nele', layout: '2 BHK', facade: 'Modern', area: '1,200 sq ft', budget: '₹58–68L', bedrooms: 2, bathrooms: 2, floors: 2, image: IMAGES.townhouse3, floorPlan: IMAGES.blueprint2, methodology: 'Aluminium formwork', features: ['Sharp geometry', 'Bold proportions', 'Efficient layout'], price: '₹62L*' },
  { id: 'nele-2bhk-minimal', collection: 'Nele', layout: '2 BHK', facade: 'Minimal', area: '1,200 sq ft', budget: '₹56–66L', bedrooms: 2, bathrooms: 2, floors: 2, image: IMAGES.urbanAlley, floorPlan: IMAGES.blueprint3, methodology: 'Aluminium formwork', features: ['Reduced surfaces', 'Restrained detailing', 'Clean aesthetic'], price: '₹60L*' },
  { id: 'nivasa-3bhk-contemp', collection: 'Nivasa', layout: '3 BHK', facade: 'Contemporary', area: '1,600 sq ft', budget: '₹75–85L', bedrooms: 3, bathrooms: 3, floors: 2, image: IMAGES.villaExterior1, floorPlan: IMAGES.blueprint4, methodology: 'Aluminium formwork', features: ['Upgraded materials', 'Refined finishes', 'Expanded living'], price: '₹80L*' },
  { id: 'nivasa-3bhk-modern', collection: 'Nivasa', layout: '3 BHK', facade: 'Modern', area: '1,600 sq ft', budget: '₹78–88L', bedrooms: 3, bathrooms: 3, floors: 2, image: IMAGES.villaExterior2, floorPlan: IMAGES.blueprint1, methodology: 'Aluminium formwork', features: ['Modern facade', 'Open plan', 'Enhanced light'], price: '₹82L*' },
  { id: 'nivasa-3bhk-minimal', collection: 'Nivasa', layout: '3 BHK', facade: 'Minimal', area: '1,600 sq ft', budget: '₹76–86L', bedrooms: 3, bathrooms: 3, floors: 2, image: IMAGES.villaExterior3, floorPlan: IMAGES.blueprint2, methodology: 'Aluminium formwork', features: ['Minimal exterior', 'Clean lines', 'Functional spaces'], price: '₹80L*' },
  { id: 'nilaya-3bhk-contemp', collection: 'Nilaya', layout: '3 BHK', facade: 'Contemporary', area: '2,000 sq ft', budget: '₹92–102L', bedrooms: 3, bathrooms: 4, floors: 2, image: IMAGES.villaLuxury1, floorPlan: IMAGES.blueprint3, methodology: 'Aluminium formwork', features: ['Premium interiors', 'Elevated facade', 'High specification'], price: '₹98L*' },
  { id: 'nilaya-3bhk-modern', collection: 'Nilaya', layout: '3 BHK', facade: 'Modern', area: '2,000 sq ft', budget: '₹95–105L', bedrooms: 3, bathrooms: 4, floors: 2, image: IMAGES.villaLuxury2, floorPlan: IMAGES.blueprint4, methodology: 'Aluminium formwork', features: ['Premium finishes', 'Bold modern design', 'Expanded outdoors'], price: '₹100L*' },
  { id: 'nilaya-3bhk-minimal', collection: 'Nilaya', layout: '3 BHK', facade: 'Minimal', area: '2,000 sq ft', budget: '₹94–104L', bedrooms: 3, bathrooms: 4, floors: 2, image: IMAGES.villaModern1, floorPlan: IMAGES.blueprint1, methodology: 'Aluminium formwork', features: ['Minimal luxury', 'Premium materials', 'Refined details'], price: '₹98L*' },
];

export const simulatorOptions = {
  plotReadiness: [
    { id: 'ready', label: 'Plot ready for construction', days: 0 },
    { id: 'clearing', label: 'Plot needs clearing', days: 5 },
    { id: 'partial', label: 'Partial preparation needed', days: 10 },
  ],
  collection: [
    { id: 'nele', label: 'Nele — Smart Entry' },
    { id: 'nivasa', label: 'Nivasa — Elevated Living' },
    { id: 'nilaya', label: 'Nilaya — Premium Living' },
  ],
  configuration: [
    { id: 'contemporary', label: 'Contemporary Facade' },
    { id: 'modern', label: 'Modern Facade' },
    { id: 'minimal', label: 'Minimal Facade' },
  ],
  approval: [
    { id: 'approved', label: 'Approvals in place', days: 0 },
    { id: 'pending', label: 'Approvals pending', days: 15 },
    { id: 'not-started', label: 'Approvals not started', days: 30 },
  ],
};
