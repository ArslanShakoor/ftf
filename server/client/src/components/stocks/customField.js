export default [
  {
    name: 'ticker',
    label: 'Ticker',
    type: 'text',
    design: 'col-md-12 col-xs-12',
    min_length: 2,
    max_length: 10,
    req: true
  },
  {
    name: 'date',
    label: 'Date',
    type: 'date',
    design: 'col-md-12 col-xs-12',
    req: true
  },
  {
    name: 'low',
    label: 'Low',
    type: 'text',
    design: 'col-md-12 col-xs-12',
    min_length: 1,
    max_length: 10,
    req: true
  },
  {
    name: 'high',
    label: 'High',
    type: 'text',
    design: 'col-md-12 col-xs-12',
    min_length: 1,
    max_length: 10,
    req: true
  },
  {
    name: 'open',
    label: 'Open',
    type: 'text',
    design: 'col-md-12 col-xs-12',
    min_length: 1,
    max_length: 10,
    req: true
  },
  {
    name: 'volume',
    label: 'Volume',
    type: 'text',
    design: 'col-md-12 col-xs-12',
    min_length: 1,
    max_length: 12,
    req: true
  },
  {
    name: 'close',
    label: 'Close',
    type: 'text',
    design: 'col-md-12 col-xs-12',
    min_length: 1,
    max_length: 10,
    req: true
  }
];
