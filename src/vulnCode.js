const fetch = require('node-fetch');

async function fetchGitHubUserCount(pat, orgName) {
  try {
    const response = await fetch(`https://api.github.com/orgs/${orgName}/members`, {
      headers: {
        Authorization: `token ${pat}`
      }
    });
    const members = await response.json();
    const memberCount = members.length;
    console.log(`Total members in ${orgName} organization:`, memberCount);
  } catch (error) {
    console.error('Error fetching GitHub user count:', error);
  }
}

// Replace 'YOUR_PAT' and 'YOUR_ORG_NAME' with your personal access token and GitHub organization name respectively
const pat = 'YOUR_PAT';
const orgName = 'YOUR_ORG_NAME';

fetchGitHubUserCount(pat, orgName);
