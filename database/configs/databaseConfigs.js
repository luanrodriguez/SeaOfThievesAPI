const configs = {
  dev: {
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
  },
};

export { configs };
