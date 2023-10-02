import { Octokit, App } from "https://esm.sh/octokit?dts";
require('dotenv').config();
console.log(process.env.PUBLIC_TOKEN);
const octokit = new Octokit({
    auth: process.env.PUBLIC_TOKEN
  });

function searchUsers() {
    var input = document.querySelector('.search-box');
    var query = input.value;

    if (query.length >= 3) {
        octokit.request('GET /search/users', {
            headers: {
                'X-GitHub-Api-Version': '2022-11-28'
            },
            q: query + ' in:login',
            sort: 'followers',
            order: 'desc'
        })
        .then(response => displayResults(response.data.items))
        .catch(error => console.error('Error:', error));
    }
}

function displayResults(users) {
    var resultsContainer = document.getElementById('results-list');
    resultsContainer.innerHTML = '';

    users.forEach(user => {
        var listItem = document.createElement('li');
        listItem.innerHTML = `<a href="${user.html_url}" target="_blank">${user.login}</a> (Followers: ${user.followers})`;
        resultsContainer.appendChild(listItem);
    });
}
