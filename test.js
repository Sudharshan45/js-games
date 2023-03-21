// $Id$


// Object.defineProperty(Array.prototype, 'includes', { //NO i18n
// 	value: function(valueToFind, fromIndex) {
// 		if (this == null) {
// 			throw new TypeError('"this" is null or not defined'); //NO i18n
// 		}
// 		var o = Object(this);
// 		var len = o.length >>> 0;
// 		if (len === 0) {
// 			return false;
// 		}
// 		var n = fromIndex | 0;
// 		var k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);
// 		function sameValueZero(x, y) {
// 			return x === y || typeof x === 'number' && typeof y === 'number' && isNaN(x) && isNaN(y); //NO i18n
// 		}
// 		while (k < len) {
// 			if (sameValueZero(o[k], valueToFind)) {
// 				return true;
// 			}
// 			k++;
// 		}
// 		return false;
// 	}
// });
var text = "Cats"
text = text.replaceAll("Cats","Dogs");

text = text.trimStart();

const iterator = text.matchAll(/Cats/g);
