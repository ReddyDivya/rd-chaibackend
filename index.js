require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 4000;

const githubData = {
    "login": "ReddyDivya",
    "id": 34181144,
    "node_id": "MDQ6VXNlcjM0MTgxMTQ0",
    "avatar_url": "https://avatars.githubusercontent.com/u/34181144?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/ReddyDivya",
    "html_url": "https://github.com/ReddyDivya",
    "followers_url": "https://api.github.com/users/ReddyDivya/followers",
    "following_url": "https://api.github.com/users/ReddyDivya/following{/other_user}",
    "gists_url": "https://api.github.com/users/ReddyDivya/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/ReddyDivya/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/ReddyDivya/subscriptions",
    "organizations_url": "https://api.github.com/users/ReddyDivya/orgs",
    "repos_url": "https://api.github.com/users/ReddyDivya/repos",
    "events_url": "https://api.github.com/users/ReddyDivya/events{/privacy}",
    "received_events_url": "https://api.github.com/users/ReddyDivya/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Reddy Divya",
    "company": "TeleServices International",
    "blog": "https://reddy-divya-portfolio.netlify.app/",
    "location": "Hyderabad,Telangana",
    "email": null,
    "hireable": null,
    "bio": "React JS | RTK | TailwindCSS | JavaScript |  Node | Express | HTML | CSS | Bootstrap | Sanity | Core Java |  GITHUB | JSP | Servlets | jQuery.",
    "twitter_username": "thedivyareddyy",
    "public_repos": 53,
    "public_gists": 0,
    "followers": 24,
    "following": 49,
    "created_at": "2017-12-02T06:38:29Z",
    "updated_at": "2024-03-31T11:29:54Z"
  };

app.get('/', (req, res) => {
    res.send("Hello World!");
})

app.get('/twitter', (req, res) => {
    res.send("thedivyareddyy");
})

app.get('/login', (req, res) => {
    res.send("<h1>Please, login at chai aur code</h1>")
})

app.get("/youtube", (req, res) => {
    res.send("<h2>Chai aur code</h2>")
})  

app.get('/github', (req, res) => {
    res.json(githubData);//sending json object
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})