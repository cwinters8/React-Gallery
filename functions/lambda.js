export function handler(event, context, callback) {
  const apikey = process.env.APIKEY;
  const query = event.queryStringParameters.q;
  callback(null, {
    statusCode: 200,
    body: JSON.stringify({ data: query }),
  });
}