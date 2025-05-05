const { Pool, Client } = require('pg')
const connectionString = "postgres://postgres.ogzgvpqnjbjzxjsvscjh:UK0oIrfNf3axF5Cb@aws-0-ap-southeast-2.pooler.supabase.com:5432/postgres";

const db = new Client({
  connectionString,
})
db.connect()

module.exports = db