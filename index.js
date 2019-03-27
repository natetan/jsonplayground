let _ = require('lodash');
let fs = require('fs');

let json = require('./test_file.json');

let upgradeCodes = ['AUPG', 'AUPGT', 'DSRF', 'DSRFT', 'DS75', 'DS75T', 'DSRG', 'DSRGT', 'DSRM', 'DSRMT', 'DSP1', 'DSP2', 'DSP3', 'DSR', 'DSRT'];

let res = _.filter(json.priorityList, (person) => {
  return !upgradeCodes.includes(person.priorityCode)
})

fs.writeFileSync('results.json', JSON.stringify(res, null, 2), (err) => {
  console.log(`Error during file save: ${err}`);;
});

console.log(`Number of objects: ${res.length}`);
