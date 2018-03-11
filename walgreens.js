const cheerio = require('cheerio');
const rp = require('request-promise');
const axios = require('axios');
const zipcodes = require('zipcodes');
const zips = require('./data/zips-ny.json');

// const options = {
//   uri: 'https://www.walgreens.com/storelocator/find.jsp?zipecode=10003',
//   transform: function(body) {
//     return cheerio.load(body);
//   }
// };
//
// rp(options).then((cheers) => {
//   console.log(cheers);
// }).catch((err) => {
//   console.log(err);
// })

// const apiReq = {
//   apiKey: 'l9ozhlJRs9OoL4hzJnkCNUoHLTzUUg3m',
//   afflId: 'storesapi',
//   lat: `${zip.latitude}`,
//   lng: `${zip.longitude}`,
//   requestType: 'locator',
//   act: 'fndStore',
//   view: 'fndStoreJSON'
// }

const zip = zipcodes.lookup(10003);

axios.post('https://services.walgreens.com/api/stores/search', {
  apiKey: 'l9ozhlJRs9OoL4hzJnkCNUoHLTzUUg3m',
  afflId: 'storesapi',
  lat: `${zip.latitude}`,
  lng: `${zip.longitude}`,
  requestType: 'locator',
  act: 'fndStore',
  view: 'fndStoreJSON'
}).then(res => {
  console.log(res.data);
}).catch(err => console.error(err))
