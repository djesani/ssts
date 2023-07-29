const { Pool, Client } = require('pg')
const connectionString = "postgresql://postgres:UK0oIrfNf3axF5Cb@db.ogzgvpqnjbjzxjsvscjh.supabase.co:5432/postgres"

const db = new Client({
  connectionString,
})
db.connect()

module.exports = db