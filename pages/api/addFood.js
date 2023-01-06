import query from './_query';

export default function handler(req, res) {
  console.log('req.body',req.body)
  const config = {
    method:'post',
    url:'https://data.mongodb-api.com/app/data-frard/endpoint/data/v1/action/insertOne',
    document: req.body
  }

  query(config)
  .then(function (response) {
      let res2 = JSON.stringify(response.data)
      res.status(200).json(res2)
  })
  .catch(function (error) {
      return {props: {error}}
  });  
}
