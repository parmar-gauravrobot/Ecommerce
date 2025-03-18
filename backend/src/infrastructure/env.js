import dotenv from "dotenv"
dotenv.config()
const env= {
  port: process.env.port ||8080,
  salt: parseInt(process.env.salt)||parseInt(0),
  mongo_uri: process.env.mongo_uri ||"",
  secret_key:process.env.secret_key ||""
}

 export default env