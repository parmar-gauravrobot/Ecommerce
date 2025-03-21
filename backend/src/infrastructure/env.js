import dotenv from "dotenv"
dotenv.config()
const env= {
  port: process.env.port ||8080,
  salt: parseInt(process.env.salt)||parseInt(0),
  mongo_uri: process.env.mongo_uri ||"",
  secret_key:process.env.secret_key ||"",
  AWS_ACCESS_KEY: process.env.AWS_ACCESS_KEY,
AWS_SECRET_KEY: process.env.AWS_SECRET_KEY,
AWS_REGION: process.env.AWS_REGION,
AWS_DOMAIN: process.env.AWS_DOMAIN
}

 export default env