let fetch = require('node-fetch');
let base64 = require('base-64');
let auth = require('../auth.json');

async function Get(url) {
  let options = {
    headers: {
      'Authorization': `Basic ${base64.encode(`${auth.username}:${auth.password}`)}`
    }
  }
  let res = await fetch(url, options);
  return res.json();
}

module.exports = {
  Get: Get
}