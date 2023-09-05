import NextAuth from "next-auth"
import query from '../_query';
import GoogleProvider from "next-auth/providers/google"
import axios from "axios";

export const authOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    }),
  ],
  callbacks: {
    session: async (data) => {

      if (!data) return;
      console.log('data', data)
      let email = data.session.user.email;

      console.log('email:', email);

      let config = {
        method: 'post',
        url: 'https://data.mongodb-api.com/app/data-frard/endpoint/data/v1/action/findOne',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Request-Headers': '*',
          'api-key': 'OQr3ucXFf58QWUUb3d1Kgmxt5IFDYeGzoyNwZD0daZkh04cCscwxCGDU2qhfymsr',
        },
        data: {
          "collection": 'users',
          "database": "hero-main",
          "dataSource": "hero-db",
          "filter": { email }
        }
      }

      let res = await axios(config);

      let response = await JSON.stringify(res.data)
      console.log(response.document)
      response = JSON.parse(response);
      if (!response.document) {

        const config2 = {
          collection: 'users',
          method: 'post',
          url: 'https://data.mongodb-api.com/app/data-frard/endpoint/data/v1/action/insertOne',
          document: {
            email
          }
        }

        const qry = await query(config2)
        console.log('query', qry)
        let qryString = await JSON.stringify(qry.data);

        console.log('query', qryString)
      }


      console.log('response', response.document)
      return {
        user: {
          email: response.document.email,
          id: response.document._id
        }
      };
    },
  },
}
export default NextAuth(authOptions)