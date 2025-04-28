import { supabase } from '$lib/supabaseClient';

// Define the base URL of your site
const siteUrl = 'https://bradleywalker.net';

// List your static pages here
const staticPages = [
  '/',
  '/sketches',
  '/texts',
  '/biodata',
  // Add other static pages if needed, e.g., '/about', '/contact'
  // '/art_records' might be implicitly covered if it lists records, or add if it's a distinct page
  '/hoofdkantoor2024' // Assuming this is a static project page
];

export async function GET() {
  const { data: art_records, error } = await supabase
    .from('art_records')
    .select('slug, updated_at'); // Assuming you have an 'updated_at' field for lastmod

  if (error) {
    console.error('Error fetching art records for sitemap:', error);
    // Return a basic sitemap or an error response
    // For simplicity, returning just static pages on error
    const staticUrls = staticPages.map(path => `
    <url>
      <loc>${siteUrl}${path}</loc>
      <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
      <changefreq>monthly</changefreq>
      <priority>${path === '/' ? '1.0' : '0.8'}</priority>
    </url>`).join('');

    const sitemapXml = `<?xml version="1.0" encoding="UTF-8" ?>
<urlset
  xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xhtml="https://www.w3.org/1999/xhtml"
  xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
  xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
  xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
  xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
>
  ${staticUrls}
</urlset>`;
    return new Response(sitemapXml, {
      headers: {
        'Content-Type': 'application/xml',
        'Cache-Control': 'max-age=0, s-maxage=3600', // Cache for 1 hour
      }
    });
  }

  // Generate URLs for static pages
  const staticUrls = staticPages.map(path => `
    <url>
      <loc>${siteUrl}${path}</loc>
      <lastmod>${new Date().toISOString().split('T')[0]}</lastmod> <!-- Use current date or fetch specific lastmod -->
      <changefreq>monthly</changefreq>
      <priority>${path === '/' ? '1.0' : '0.8'}</priority>
    </url>`).join('');

  // Generate URLs for dynamic art record pages
  const dynamicUrls = art_records.map(record => `
    <url>
      <loc>${siteUrl}/art_records/${record.slug}</loc>
      <lastmod>${record.updated_at ? new Date(record.updated_at).toISOString().split('T')[0] : new Date().toISOString().split('T')[0]}</lastmod>
      <changefreq>weekly</changefreq>
      <priority>0.9</priority>
    </url>`).join('');

  // Combine all URLs into the sitemap XML
  const sitemapXml = `<?xml version="1.0" encoding="UTF-8" ?>
<urlset
  xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xhtml="https://www.w3.org/1999/xhtml"
  xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
  xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
  xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
  xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
>
  ${staticUrls}
  ${dynamicUrls}
</urlset>`;

  return new Response(sitemapXml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'max-age=0, s-maxage=3600', // Cache for 1 hour
    }
  });
}
