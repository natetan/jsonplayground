let fetch = require('node-fetch');
let base64 = require('base-64');
let auth = require('./auth.json');

let flightNumber = '380';
let date = '2019-03-28';
let origin = 'SEA';

let url = `https://api.alaskaair.com/gds/1/flights/${flightNumber}/priorityList?date=${date}&origin=${origin}&asgds-appid=${auth.asgds-appid}`;

async function Get() {
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