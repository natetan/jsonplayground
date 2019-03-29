let parseString = require('xml2js').parseString;
let fs = require('fs');

fs.readFile('./priority-codes-qa.xml', (err, xml) => {
  // let options = {
  //   'compact': false,
  //   'spaces': 2
  // };
  // let json = converter.xml2json(xml, options);
  // fs.writeFileSync('p-codes.json', json, (fsErr) => {
  //   console.log(`Error with fs: ${fsErr}`);
  //   console.log(`Error with parsing: ${err}`);
  // })

  parseString(xml, { explicitArray: false, ignoreAttrs: true }, (e, res) => {
    fs.writeFileSync('p-codes.json', JSON.stringify(res, null, 2), (fsErr) => {
      console.log(`Error with fs: ${fsErr}`);
      console.log(`Error with parsing: ${e}`);
    })
  });
});
