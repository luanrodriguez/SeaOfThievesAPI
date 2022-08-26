let configs = {
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  port: process.env.POSTGRES_PORT,
  host: process.env.POSTGRES_HOST,
  dialect: process.env.POSTGRES_DIALECT,
  database: process.env.POSTGRES_DATABASE,
  logging: false,
  define: {
    timestamps: false,
  },
};
const environment = process.env.ENVIRONMENT;

if (environment === "PROD") {
  configs = {
    ...configs,
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false,
      },
    },
  };
}
console.log(configs);
export { configs };
