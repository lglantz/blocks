/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const execSync = require('child_process').execSync;

exports.onCreateWebpackConfig = ({ stage, actions, loaders, getConfig }) => {
  if (stage !== 'develop' && stage !== 'build-javascript') return;

  console.log('blocks-base: building...');
  const buildBase = execSync('cd ../blocks-base; gulp build', {stdio: 'inherit'});
  console.log('blocks-base: complete');
  console.log('blocks-react: building...');
  const buildReact = execSync('cd ../blocks-react; gulp build', {stdio: 'inherit'});
  console.log('blocks-react: complete');

  return;
}