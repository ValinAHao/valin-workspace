const lib = 'prettier';
const rootDir = `packages/${lib}`;

module.exports = {
  extends: '.releaserc.base.js',
  pkgRoot: `dist/${rootDir}`,
  tagFormat: lib + '-v${version}',
  commitPaths: [`${rootDir}/*`],
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    [
      '@semantic-release/changelog',
      {
        changelogFile: `${rootDir}/CHANGELOG.md`,
      },
    ],
    '@semantic-release/npm',
    [
      '@semantic-release/git',
      {
        assets: [`${rootDir}/package.json`, `${rootDir}/CHANGELOG.md`],
        message:
          'chore(version): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}',
      },
    ],
  ],
};
