const express = require('express');
const { use } = require('./routers/userRoutes');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World from Express!');
});


app.use('/api', use);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

