import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://rivals.robloxwikihub.com';

  const routes = [
    '',
    '/crosshair-generator',
    '/weapons',
    '/tier-list',
    '/codes',
    '/maps',
    '/guides'
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '/codes' || route === '/crosshair-generator' ? 'daily' : 'weekly',
    priority: route === '' ? 1.0 : 0.8
  }));
}
