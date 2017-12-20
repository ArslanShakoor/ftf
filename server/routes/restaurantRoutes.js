const mongoose = require('mongoose');
const Stock = mongoose.model('Stocks');

module.exports = app => {
  app.get('/api/one_stock/:date_created/:ticker', async (req, res) => {
    console.log('asd');
    let date = req.params.date_created;
    const ticker = req.params.ticker;

    console.log(ticker);

    var newDate = date.split('-').join('/');
    console.log(newDate);

    Stock.findOne({ symbol: ticker }, function(err, user) {
      if (!user) {
        return err;
      }
      let stockArray = [];
      let stock1 = user.stock.filter(function(stock) {
        return stock.date === newDate;
      });

      console.log(stock1);
      res.send(stock1);

      //logs { src: '/path/to/photo.png', title: 'My awesome photo' }
    });
  });

  app.get('/api/two_stock/:date1/:date2/:ticker', async (req, res) => {
    console.log('asd');
    let date1 = req.params.date1;
    let date2 = req.params.date2;
    const ticker = req.params.ticker;

    console.log(ticker);

    var newDate1 = date1.split('-').join('/');
    console.log(newDate1);

    var newDate2 = date2.split('-').join('/');
    console.log(newDate2);

    Stock.findOne({ symbol: ticker }, function(err, user) {
      if (!user) {
        return err;
      }
      let stockArray = [];
      let stock1 = user.stock.filter(function(stock) {
        return stock.date === newDate1;
      });
      let stock2 = user.stock.filter(function(stock) {
        return stock.date === newDate2;
      });

      stockArray.push(stock1);
      stockArray.push(stock2);

      console.log(stockArray);
      res.send(stockArray);

      //logs { src: '/path/to/photo.png', title: 'My awesome photo' }
    });
  });

  app.get('/api/list_stock/:date1/:date2/:ticker', async (req, res) => {
    console.log('asd');
    let date1 = req.params.date1;
    let date2 = req.params.date2;
    const ticker = req.params.ticker;

    console.log(ticker);

    var newDate1 = date1.split('-').join('/');
    console.log(newDate1);

    var newDate2 = date2.split('-').join('/');
    console.log(newDate2);

    Stock.findOne({ symbol: ticker }, function(err, user) {
      if (!user) {
        return err;
      }
      let stockArray = [];
      let stock1 = user.stock.filter(function(stock) {
        return stock.date >= newDate1 && stock.date <= newDate2;
      });

      console.log(stock1);
      res.send(stock1);

      //logs { src: '/path/to/photo.png', title: 'My awesome photo' }
    });
  });

  app.post('/api/ticker', async (req, res) => {
    const { symbol } = req.body;

    const _id = new mongoose.Types.ObjectId();
    const validStock = new Stock({
      _id,
      symbol
    });

    try {
      await validStock.save();
      res.send(validStock);
    } catch (err) {
      res.status(422).send(err);
    }
  });

  app.post('/api/newrecord', async (req, res) => {
    var { high, low, open, close, date, volume, ticker } = req.body;
    var date = date.split('-').join('/');
    console.log(req.body);
    const newValue = {
      high,
      low,
      open,
      close,
      date,
      volume
    };

    const validStock = await Stock.findOne({ symbol: ticker });
    try {
      await validStock.stock.push(newValue);
      await validStock.save();
      res.send(newValue);
    } catch (err) {
      res.status(400).send(err);
    }
  });
};
