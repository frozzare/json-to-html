# json-to-html

Convert JSON Object to HTML. This works in the browser too.

## Installation

	npm install json-to-html

## Example
	
	var json2html = require('json-to-html')
      , html = json2html({ 'hello': 'world' });

	console.log(html);

output:
  
	{
	  <span class="string">"hello"</span>: <span class="string">"world"</span>
	}
  
Every operand has a span added around it self with different classnames.

`string`, `boolean`, `number` or `null`.
  
## License 

See [MIT-LICENSE](https://github.com/frozzare/json-to-html/blob/master/MIT-LICENSE)
