module.exports = {
  HOST: process.env.HOST,
  USER: process.env.DB_USR_NAME,
  PASSWORD: process.env.DB_PASS,
  DB: process.env.DB_NAME,
  dialect: process.env.DATABASE_DIALECT,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
