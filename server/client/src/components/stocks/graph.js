import react from 'react';

const graph = (stocks) => {



  function getMinClose(data) {
  return data.reduce((min, p) => p.close < min ? p.close : min, data[0].close);
  }

  function getMaxClose(data) {
  return data.reduce((max, p) => p.close > max ? p.close : max, data[0].close);
  }

  var max = getMaxClose(stocks);
  console.log(max);


  var data = [
    { Word: '11/13/2017', Awesomeness: 1013.56 },
    { Word: '11/14/2017', Awesomeness: 1014 },
    { Word: '11/15/2017', Awesomeness: 1015.4 },
    { Word: '11/16/2017', Awesomeness: 1012 },
    { Word: '11/17/2017', Awesomeness: 1013.47 },
    { Word: '11/18/2017', Awesomeness: 1014 },
    { Word: '11/19/2017', Awesomeness: 1015 },
    { Word: '11/20/2017', Awesomeness: 1012 }
  ];
  var margin = 0,
    width = 1000,
    height = 300;

  d3.select("svg").remove();  

  var svg = dimple.newSvg('.linear-graph', 1000, 300);
  /*
      Dimple.js Chart construction code
    */

  var myChart = new dimple.chart(svg, stocks);

  var y = myChart.addMeasureAxis('y', 'close');
  y.ticks = 5;
  y.tickFormat = ',.2f';
  y.overrideMin = Math.floor(getMinClose(stocks)) - 5;
  y.overrideMax = Math.floor(getMaxClose(stocks)) + 5;

  myChart.addTimeAxis('x', 'date', '%Y/%m/%d', '%Y/%m/%d');
  myChart.addSeries(null, dimple.plot.line);
  myChart.addSeries(dimple.plot.scatter);
  myChart.draw();

};
export default graph;
