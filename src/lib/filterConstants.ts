// Shared filter options for whitepapers, blogs, case studies, and resources

export const TOPICS = [
  'AI & Automation',
  'AI & Machine Learning',
  'Delivery Software',
  'Last-Mile Delivery',
  'Logistics Software',
  'Predictive Analytics',
  'ROI & Economics',
] as const;

export const INDUSTRIES = [
  'E-commerce',
  'EV Fleets',
  'Field Service',
  'Medical & Pharma',
  'Retail & Brands',
] as const;

export type Topic = (typeof TOPICS)[number];
export type Industry = (typeof INDUSTRIES)[number];
