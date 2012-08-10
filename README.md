# json-to-html

Convert JSON Object to HTML.

## Installation

	npm install json-to-html

## Usage

```javascript	
var json2html = require('json-to-html')
  , html = json2html({ 'hello': 'world' });

console.log(html);
```

output:

```html  
{
  <span class="string">"hello"</span>: <span class="string">"world"</span>
}
```

2 space indentation is default. Change it by adding a numeric argument to `json2html`.

```javascript
var html = json2html(object, 4);
```

Every operand has a span added around it self with different classnames.

`string`, `boolean`, `number` or `null`.
  
## License 

See [MIT-LICENSE](https://github.com/frozzare/json-to-html/blob/master/MIT-LICENSE)
