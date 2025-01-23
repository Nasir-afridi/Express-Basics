import express from 'express';
const app = express();

//Middleware
app.use((req, res, next) => {
  console.log('middleware 1');
  next(); // agrr ye na chalaya to control next route prr nahe jayga.
});

//Routes
app.get('/home', (req, res) => {
  res.send('hello world');
});

app.listen(4000);