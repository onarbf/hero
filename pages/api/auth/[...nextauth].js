import NextAuth from "next-auth"
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
      let email = 'onarbf@gmail.com';

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
      let response = JSON.stringify(res.data)
      response = JSON.parse(response);
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