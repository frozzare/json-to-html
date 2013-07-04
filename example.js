
var html = require('./');

var obj = {
  id: 'iwWby24aqAT',
  title: 'Nikon D7100 vs D7000',
  description: 'A hands-on review of the D7100 vs the D7000',
  tags: ['photography', 'dslr', 'camera', 'nikon'],
  creator_id: 'uQI0IpdBN8r',
  created_at: new Date,
  updated_at: new Date,
  views: 523,
  related: [
    { id: 'iwWby24aqasd', title: 'Nikon D7100 ISO performance' },
    { id: 'iwW123132sse', title: 'Nikon D7100 dynamic range' }
  ]
};

console.log(html(obj));
