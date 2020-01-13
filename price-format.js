function priceFormat(price, delimiter, fraction) {

	fraction = [0,1,2].indexOf(fraction) !== -1 ? fraction : 0;
	delimiter = delimiter || ' ';	
	price = (price = parseFloat(price)) && isFinite(price) && price.toFixed(fraction) || false;

	if (price === false) throw new TypeError('Price should be a valid integer.');

	var reverseString = function(string) {

		return string.split('').reverse().join('');

	};

	return reverseString(reverseString(price).replace(/(\d{3})/g, '$&' + delimiter));

}
