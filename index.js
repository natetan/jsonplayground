let _ = require('lodash');
let fs = require('fs');

let client = require('./clients/RestClient');
let auth = require('./auth.json');
let config = require('./config.json');

async function main() {
  let flightNumber = config.flightNumber;
  let date = config.date;
  let origin = config.origin;

  let url = `https://api.alaskaair.com/gds/1/flights/${flightNumber}/priorityList?date=${date}&origin=${origin}&asgds-appid=${auth['asgds-appid']}`;
  let json = await client.Get(url);

  let upgradeCodes = ['AUPG', 'AUPGT', 'DSRF', 'DSRFT', 'DS75', 'DS75T', 'DSRG', 'DSRGT', 'DSRM', 'DSRMT', 'DSP1', 'DSP2', 'DSP3', 'DSR', 'DSRT'];

  let res = _.filter(json.priorityList, (person) => {
    return !upgradeCodes.includes(person.priorityCode)
  })

  fs.writeFileSync('results.json', JSON.stringify(res, null, 2), (err) => {
    console.log(`Error during file save: ${err}`);;
  });

  console.log(`Number of objects: ${res.length}`);
}


main();
