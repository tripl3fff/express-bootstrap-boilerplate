const express = require('express');
const path = require('path');
const baseRoute = require('./routes/baseRoute');
const app = express();

app.listen(8000, () => {
  console.log('Server is running at port 8000');
});

// * view engine
app.set('view engine', 'ejs');

// * static file
app.use('/public', express.static(path.join(__dirname, 'public')));

// * web routing
app.use(baseRoute);

// * middleware for 404 page
app.use((req, res) => {
  res.status(404).render('404');
});