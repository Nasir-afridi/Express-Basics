import express from 'express';
const app = express();

const port  = 4000;


//Middleware
app.use((req, res, next) => {
  console.log('middleware 1');
  next(); // agrr ye na chalaya to control next route prr nahe jayga.
});

//Routes
app.get('/home', (req, res) => {
  res.send('hello world');
});

app.get('/profile/:username', (req, res) => { // :username is a parameter we can write any name we want to store in username.
  res.send(`hello this is me ${req.params.username}`); // if we want to print the same name of the url in the body we use this.
});

app.listen(4000, () => {
  console.log(`Server is running on port : ${port}`);
});