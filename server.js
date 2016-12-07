const path = require('path');
const express = require('express');

const server = {
  app: function () {
    const app = express();
    const indexPath = path.join(__dirname, 'dist/index.html');
    const publicPath = express.static(path.join(__dirname, 'dist'));
    app.use('/', publicPath);
    app.get('/', function (_, res) {
      res.sendFile(indexPath);
    });
    return app;
  }
};

const port = (process.env.PORT || 8080);
const app = server.app();
app.listen(port);
console.log(`Listening at http://localhost:${port}`);