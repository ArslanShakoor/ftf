const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const bodyParser = require('body-parser');

require('./models/Stocks');

mongoose.Promise = global.Promise;
mongoose.connect(
  'mongodb://arslan121:csvimport@ds159926.mlab.com:59926/csv-import'
);

const app = express();

app.use(bodyParser.json());

//authentication in our app via cookies
//middle wares

// call the authroutes and pass the app object

require('./routes/restaurantRoutes')(app);

if (process.env.NODE_ENV === 'production') {
  // express will serve up prodction assets like
  // like our main.js file or main.css file
  app.use(express.static('client'));

  // express will server up index.html file
  // if it doesnot recoginize the routes
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'index.html'));
  });
}
const PORT = process.env.PORT || 5000;
app.listen(PORT);
