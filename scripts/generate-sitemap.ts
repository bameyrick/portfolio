import sitemap from 'nextjs-sitemap-generator';

sitemap({
  baseUrl: 'https://bameyrick.co.uk',
  pagesDirectory: `${__dirname}/../dist/apps/portfolio/.next`,
  targetDirectory: `${__dirname}/../dist/apps/portfolio/.next`,
  ignoredExtensions: ['js', 'map', 'txt', 'png', 'xml', 'svg', 'ico', 'webmanifest'],
  ignoredPaths: ['fonts', 'images', 'svg', '_next'],
});
