// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import query from './_query';

export default function handler(req, res) {
  const config = {
    method:'post',
    url:'https://data.mongodb-api.com/app/data-frard/endpoint/data/v1/action/find',
    document: '',
    filter: {date: req.body.date , owner: req.body.owner }
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
