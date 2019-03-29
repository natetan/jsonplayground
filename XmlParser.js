let parseString = require('xml2js').parseString;
let fs = require('fs');

fs.readFile('./priority-codes-qa.xml', (err, xml) => {
  console.log(`Error with fs read: ${err}`);
  parseString(xml, { explicitArray: false, ignoreAttrs: true }, (e, res) => {
    fs.writeFileSync('p-codes.json', JSON.stringify(res, null, 2), (fsErr) => {
      console.log(`Error with fs write: ${fsErr}`);
      console.log(`Error with parsing: ${e}`);
    })
  });
});
