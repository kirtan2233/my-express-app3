const express = require('express');  // load express
const app = express();               // start app

const PORT = 3000;                   // port number

// single route
app.get('/', (req, res) => {
  res.send('Hello from Express!');
});

// start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
