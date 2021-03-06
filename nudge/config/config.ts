import dotenv from 'dotenv'

dotenv.config()

module.exports = {
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  host: process.env.DB_HOSTNAME,
  dialect: 'postgres',
  operatorsAliases: false,
  web3ProviderHost: process.env.WEB3_PROVIDER_HOST,
  wedlocksURI: process.env.WEDLOCKS_URI,
  graphQLEndpoint: process.env.GRAPHQL_BASE_URL,
}
