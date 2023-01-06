import axios from 'axios';

export default async function query({method, url, document,filter}){
  
  const data =  {
            "collection": "foods",
            "database": "hero-main",
            "dataSource": "hero-db"
          }

  if(document){
    data.document = document
  } 
  if(filter){
    data.filter = filter
  } 

  JSON.stringify(data);
  const config = {
    method,
    url,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Request-Headers': '*',
      'api-key': 'OQr3ucXFf58QWUUb3d1Kgmxt5IFDYeGzoyNwZD0daZkh04cCscwxCGDU2qhfymsr',
    },
    data
  };
  return await axios(config);
}