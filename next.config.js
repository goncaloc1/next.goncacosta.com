const ContentSecurityPolicy = `
  default-src 'none';
  script-src 'self' 'unsafe-eval';
  connect-src 'self' https://vitals.vercel-insights.com/v1/vitals;
  prefetch-src 'self';
  style-src 'self' 'unsafe-inline';
  font-src data:;
  img-src 'self' data:;
  upgrade-insecure-requests;
  block-all-mixed-content;
  frame-ancestors 'none';
  form-action 'none';
`;

const securityHeaders = [
  {
    key: 'Content-Security-Policy',
    value: ContentSecurityPolicy.replace(/\s{2,}/g, ' ').trim()
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff'
  },
  {
    key: 'Referrer-Policy',
    value: 'no-referrer-when-downgrade'
  }
];

module.exports = {
  eslint: {
    dirs: ['pages', 'components', 'lib', 'hooks']
  },
  reactStrictMode: true,
  async headers() {
    return [
      {
        // Apply these headers to all routes in the application.
        source: '/:path*',
        headers: securityHeaders,
      },
    ]
  },
}
