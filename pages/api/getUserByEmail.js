import query from './_query';

export default function handler(req, res) {
  const config = {
    collection: 'users',
    method:'post',
    url:'https://data.mongodb-api.com/app/data-frard/endpoint/data/v1/action/findOne',
    document: '',
    filter: {email: req.body.email}
  }

  return query(config)
  .then(function (response) {
      
      let res2 = JSON.stringify(response.data)
      console.log(`res2`, res2)
      res.send(res2);
      
  })
  .catch(function (error) {
      console.log('error',error);
      return {props: {error}}
  });  
}
