
const DB_HOST = process.env.DB_HOST;
const DB_PORT = process.env.DB_PORT;
const DB_DATABASE = process.env.DB_DATABASE;

console.log('DB_HOST', DB_HOST)
console.log('DB_PORT', DB_PORT)
console.log('DB_DATABASE', DB_DATABASE)

const URI = `mongodb://${DB_HOST}:${DB_PORT}`;

module.exports = {
  DATABASE: DB_DATABASE,
  URI,
}
