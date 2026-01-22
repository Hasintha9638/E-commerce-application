const express = require('express');
const  useRouter = require('./routers/userRoutes');
const app = express();
const port = 3000;
const cors = require('cors');


app.use(cors());
app.use('/api', useRouter);
app.get('/', (req, res) => {
  res.send('Hello World from Express!');
});


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

