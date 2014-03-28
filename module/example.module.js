/**
 * Example Module
 * 
 */

/**
 * abs
 * 
 * Get number and return absolute value
 */
exports.abs = function(number) {
	if(0 < number) {
		return number;
	} else {
		return -number;
	}
};


/**
 * circleArea
 * 
 * Get radius and return area
 */
exports.circleArea = function(radius) {
	return radius * radius * Math.PI;
};
