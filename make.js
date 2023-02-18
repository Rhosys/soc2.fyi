/* eslint-disable no-console */

const aws = require('aws-sdk');
const commander = require('commander');
const fs = require('fs-extra');
const AwsArchitect = require('aws-architect');

aws.config.update({ region: 'us-east-1' });

function getVersion() {
  let release_version = '0.0';
  const pull_request = '';
  const branch = process.env.GITHUB_REF;
  const build_number = `${process.env.GITHUB_RUN_NUMBER}`;

  // Builds of pull requests
  if (pull_request && !pull_request.match(/false/i)) {
    release_version = `0.${pull_request}`;
  } else if (!branch || !branch.match(/^(refs\/heads\/)?release[/-]/i)) {
    // Builds of branches that aren't master or release
    release_version = '0.0';
  } else {
    // Builds of release branches (or locally or on server)
    release_version = branch.match(/^(?:refs\/heads\/)?release[/-](\d+(?:\.\d+){0,3})$/i)[1];
  }
  return `${release_version}.${(build_number || '0')}.0.0.0.0`.split('.').slice(0, 3).join('.');
}
const version = getVersion();
commander.version(version);

const packageMetadata = require('./package.json');
packageMetadata.version = version;

/**
  * Build
  */
commander
  .command('setup')
  .description('Setup require build files for npm package.')
  .action(async () => {
    await fs.writeJson('./package.json', packageMetadata, { spaces: 2 });

    console.log('Building package %s (%s)', packageMetadata.name, version);
    console.log('');
  });

/**
  * After Build
  */
commander
.command('after_build')
.description('Publishes git tags and reports failures.')
.action(async () => {
  console.log('After build package %s (%s)', packageMetadata.name, version);
  console.log('');
  
  try {
    const awsArchitect = await new AwsArchitect(packageMetadata, {}, {});
    const template = require('./template/cloudformationTemplate').getTemplate();
    const isMainBranch = process.env.CI_COMMIT_REF_SLUG === 'main';
    if (isMainBranch) {
      const stackConfiguration = {
        changeSetName: `${process.env.CI_COMMIT_REF_SLUG}-${process.env.CI_PIPELINE_ID || '1'}`,
        stackName: packageMetadata.name,
        automaticallyProtectStack: true
      };
      const result = await awsArchitect.deployTemplate(template, stackConfiguration, {});
      console.log('Publish Result', result);
    }
  } catch (error) {
    console.log('Failed to push new application version', error);
    process.exit(1);
  }
});

commander.on('*', () => {
  if (commander.args.join(' ') === 'tests/**/*.js') { return; }
  console.log(`Unknown Command: ${commander.args.join(' ')}`);
  commander.help();
  process.exit(0);
});
commander.parse(process.argv[2] ? process.argv : process.argv.concat(['build']));
