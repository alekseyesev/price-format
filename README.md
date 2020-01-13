# priceFormat.js

This is a small javascript utility function that converts number to financial-friendly format.

## Installation

You can include the utility inside `<script>` tag, then it will be available as a global variable.

## Syntax

> priceFormat(price[, delimiter][, fraction])

### Arguments

#### price

_Required. Number or string. Value to be formatted._

#### delimiter

_Optional. String. Separator for price._

#### fraction

_Optional. Number. Length of a price fraction part._

## Usage

```javascript
var number_1 = 10000000000;
var number_2 = 10000000000000.45;
var number_3 = '1234567890';

priceFormat(number_1); // returns '10 000 000 000'
priceFormat(number_2, ' ', 2); // returns '10 000 000 000 000.45'
priceFormat(number_3, ',', 2); // returns '1,234,567,890.00'
```
## License
GNU GENERAL PUBLIC LICENSE
