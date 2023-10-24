const express = require("express");
const { PORT } = require("./config/serverConfig");
const setupStaterServer = async () => {
  const app = express();

  app.listen(PORT, () => [console.log(` Server listening at ${PORT}`)]);
};

setupStaterServer();
