import {
  Sequelize
} from "sequelize";


export const sqlite = new Sequelize("sqlite://global_airports_sqlite.db");

export const postgres = new Sequelize(process.env.DATABASE_URL || "postgres://wchen@127.0.0.1:5432/wchen", {
  dialectOptions: {
    ssl: process.env.DATABASE_URL ? {
      require: true,
      rejectUnauthorized: false
    } : false
  }
}
);

postgres
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
