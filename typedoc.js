module.exports = {
  out: './docs/',
  readme: 'README.md',
  name: 'Sentry JavaScript SDKs',
  includes: './',
  exclude: [
    '**/test/**/*',
    '**/*.js',
    '**/dist/**/*',
    '**/esm/**/*',
    '**/build/**/*',
    '**/packages/opentracing/**/*',
    '**/packages/typescript/**/*',
    '**/dangerfile.ts',
  ],
  mode: 'modules',
  excludeExternals: true,
  excludeNotExported: true,
  excludePrivate: true,
  'external-modulemap': '.*/packages/([^/]+)/.*',
};
