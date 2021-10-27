const {
  utils: { getPackages },
} = require('@commitlint/config-lerna-scopes');

const {
  utils: { getPackages: getComposerPackages },
} = require('@itcig/config-composer-scopes');

module.exports = {
  extends: ['@commitlint/config-conventional', '@commitlint/config-lerna-scopes'],
  rules: {
    'scope-enum': async (ctx) => [
      2,
      'always',
      [
        ...(await getPackages(ctx)),
        ...(await getComposerPackages(ctx)),
        // Insert custom scopes below (aside from the Lerna + Composer packages):
        'changelog',
        'release',
        'prerelease',
        'packages',
        'deps',
        'dependencies',
      ],
    ],
  },
};
