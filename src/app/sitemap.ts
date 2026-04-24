import type { MetadataRoute } from 'next';

const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || 'https://finmile.co').replace(/\/$/, '');

const staticRoutes = [
  '/',
  '/about',
  '/3pl-networks',
  '/ai-agents',
  '/automotive-logistics-towing',
  '/automotive-parts',
  '/blog/all',
  '/case-studies/all',
  '/contact',
  '/control-tower',
  '/deliveries',
  '/delivery-software',
  '/driver-app',
  '/dsps',
  '/faqs',
  '/field-service',
  '/guides/all',
  '/integrations',
  '/logistics-delivery',
  '/medical-pharmacy',
  '/optimization',
  '/privacy',
  '/resources/all',
  '/retail-ecommerce',
  '/retailers',
  '/returns-optimization',
  '/solutions',
  '/sustainable-delivery',
  '/sustainable-operators',
  '/terms',
  '/track-parcel',
  '/whitepapers',
  '/whitepapers/all',
  '/wholesale-b2b',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return staticRoutes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: now,
    changeFrequency: route === '/' ? 'weekly' : 'monthly',
    priority: route === '/' ? 1 : 0.7,
  }));
}
