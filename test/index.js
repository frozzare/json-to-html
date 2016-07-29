var json2html = require('..');
require('should');

describe('json2html(object)', function () {
  it ('should return html', function () {
    var html = json2html({'hello': 'world'});
    html.should.equal('{\n\
  <span class="string key">"hello"</span>: <span class="string value">"world"</span>\n\
}');
  });
});

