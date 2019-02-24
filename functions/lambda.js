const https = require('https');

export function handler(event, context, callback) {
  const apikey = process.env.APIKEY;
  const query = event.queryStringParameters.q;
  const url = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apikey}&tags=${query}&sort=interestingness-desc&per_page=24&format=json&nojsoncallback=1`;
  const request = https.get(url, res => {
    let body = '';
    res.on('data', data => {
      body += data;
    });
    res.on('end', () => {
      callback(null, {
        statusCode: 200,
        body: JSON.stringify({data: body}),
      });
    })
  });
}