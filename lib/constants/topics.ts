export const TOPICS = [
  {
    id: 'erp_tally',
    label: 'ERP & Tally',
    segment: 'trust_code',
    group: 'Trust Code Solutions',
    description: 'ERP, Tally, accounting software',
  },
  {
    id: 'tax_compliance',
    label: 'Tax & Compliance',
    segment: 'trust_code',
    group: 'Trust Code Solutions',
    description: 'Tax & compliance services',
  },
  {
    id: 'crm_consulting',
    label: 'CRM & Consulting',
    segment: 'trust_code',
    group: 'Trust Code Solutions',
    description: 'CRM & business consulting',
  },
  {
    id: 'domestic_tours',
    label: 'Domestic Tours',
    segment: 'arvi_yatra',
    group: 'Arvi Yatra',
    description: 'Domestic travel packages',
  },
  {
    id: 'international_tours',
    label: 'International Tours',
    segment: 'arvi_yatra',
    group: 'Arvi Yatra',
    description: 'International travel packages',
  },
  {
    id: 'spiritual_tours',
    label: 'Spiritual Tours',
    segment: 'arvi_yatra',
    group: 'Arvi Yatra',
    description: 'Spiritual travel packages',
  },
  {
    id: 'group_packages',
    label: 'Group Packages',
    segment: 'arvi_yatra',
    group: 'Arvi Yatra',
    description: 'Group travel packages',
  },
  {
    id: 'ai_tools',
    label: 'AI Tools & Agents',
    segment: 'easy_pc',
    group: 'Easy to PC',
    description: 'AI tools & agents',
  },
  {
    id: 'automation',
    label: 'Automation',
    segment: 'easy_pc',
    group: 'Easy to PC',
    description: 'Automation solutions',
  },
  {
    id: 'saas',
    label: 'SaaS',
    segment: 'easy_pc',
    group: 'Easy to PC',
    description: 'Software as a Service',
  },
  {
    id: 'web_app_dev',
    label: 'Web & App Development',
    segment: 'easy_pc',
    group: 'Easy to PC',
    description: 'Web & app development',
  },
  {
    id: 'ecommerce',
    label: 'eCommerce',
    segment: 'easy_pc',
    group: 'Easy to PC',
    description: 'eCommerce solutions',
  },
] as const;

export type TopicId = typeof TOPICS[number]['id'];

export const TOPIC_GROUPS = {
  'Trust Code Solutions': TOPICS.filter(t => t.group === 'Trust Code Solutions'),
  'Arvi Yatra': TOPICS.filter(t => t.group === 'Arvi Yatra'),
  'Easy to PC': TOPICS.filter(t => t.group === 'Easy to PC'),
};