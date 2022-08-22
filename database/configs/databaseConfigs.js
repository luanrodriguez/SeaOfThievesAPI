const configs = {
  dev: {
    username: "postgres",
    password: "postgrespw",
    port: "5432",
    host: "localhost",
    dialect: "postgres",
    database: "seaofthieves",
    logging: false,
    define: {
      timestamps: false,
    },
  },
};

export { configs };
