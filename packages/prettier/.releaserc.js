const lib = 'prettier';
const rootDir = `packages/${lib}`;

module.exports = {
  extends: '.releaserc.base.js',
  pkgRoot: `dist/${rootDir}`,
  tagFormat: lib + '-v${version}',
  commitPaths: [`${rootDir}/*`],
  branches: ['main'],
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    '@semantic-release/changelog',
    [
      '@semantic-release/git',
      {
        assets: [`${rootDir}/package.json`, `${rootDir}/CHANGELOG.md`],
        message:
          `release(version): Release ${lib} ` +
          '${nextRelease.version} [skip ci]\n\n${nextRelease.notes}',
      },
    ],
  ],
};
