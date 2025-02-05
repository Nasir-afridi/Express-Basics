import express from 'express';
const app = express();
const port  = 4000;


//*******************Middleware
app.use((req, res, next) => {
  console.log('middleware 1');
  next(); // agrr ye na chalaya to control next route prr nahe jayga.
});

// *****************configure ejs
app.set("view engine", "ejs");

// ********************path for the static files.
app.use(express.static('public'));

//Routes
app.get('/home', (req, res) => {
  res.send('hello world');
});

app.get('/profile/:username', (req, res) => { // :username is a parameter we can write any name we want to store in username.
  res.send(`hello this is me ${req.params.username}`); // if we want to print the same name of the url in the body we use this.
});

// **********************ejs api
app.get('/', (req, res) => {
  res.render("index", {age:12});  // we also pass data from it 
});

app.get('/contact', (req, res) => {
  res.render("contact", {name:"Muhammad Nasir"});
});

app.get('/error', (req, res, next) => {
throw Error("something went wrong")}
);

//***************** */ Error handling
app.use(function errorHandler (err, req, res, next) {
  if (res.headersSent) {
    return next(err)
  }
  res.status(500)
  res.render('error', { error: err })
});

app.listen(4000, () => {
  console.log(`Server is running on port : ${port}`);
});