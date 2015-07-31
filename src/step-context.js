/*global module, require*/
module.exports = function StepContext(result) {
	'use strict';
	var self = this,
			ListUtil = require('./list-util'),
			TableUtil = require('./table-util'),
			Assertion = require('./assertion'),
			tableUtil = new TableUtil(),
			listUtil = new ListUtil();
	self.assertEquals = function (expected, actual, optionalOutputIndex) {
		var	passed = expected == actual;
		result.assertions.push(new Assertion(expected,
					actual,
					passed, optionalOutputIndex));
	};
	self.assertUnorderedTableEquals = function (expected, actual) {
		var comparisonObject;
		if (!expected.titles) {
			comparisonObject = actual;
			if (actual.type === 'table' && Array.isArray(actual.items)) {
				comparisonObject = actual.items;
			}
		} else {
			if (actual.type === 'table' && Array.isArray(actual.items)) {
				comparisonObject = tableUtil.tableValuesForTitles(actual, expected.titles);
			}	else {
				comparisonObject = tableUtil.objectArrayValuesForTitles(actual, expected.titles);
			}
		}
		return self.assertSetEquals(expected.items, comparisonObject);
	};
	self.assertSetEquals = function (expected, actual) {
		var listResult = listUtil.unorderedMatch(expected, actual);
		result.assertions.push(new Assertion(expected,
					listResult,
					listResult.matches));
	};
};