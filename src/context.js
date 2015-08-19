/*global module, require, global*/
module.exports = function Context() {
	'use strict';
	var self = this,
		StepExecutor =  require('./step-executor'),
		ExpectationBuilder =  require('./expectation-builder'),
		steps = [],
		expectationMatchers = [],
		matchingSteps = function (stepText) {
			return steps.filter(function (step) {
				return step.match(stepText);
			});
		},
		builder,
		globalOverrides = {} ;
	self.addMatchers = function (matcherObject) {
		expectationMatchers.push(matcherObject);
	};
	self.getMatchers = function () {
		return expectationMatchers;
	};
	self.overrideGlobal = function (propname, value) {
		if (!globalOverrides[propname]) {
			globalOverrides[propname] = global[propname];
		}
		global[propname] = value;
		//TODO write tests
	};
	self.resetGlobal = function () {
		var propname;
		for (propname in globalOverrides) {
			global[propname] = globalOverrides[propname];
		}
		globalOverrides = {};
	};
	self.setExpectationBuilder = function (builderArg) {
		builder = builderArg;
	};
	self.expect = function (actual) {
		if (!builder) {
			builder = new ExpectationBuilder([], expectationMatchers);
		}
		return builder.expect(actual);
	};
	self.defineStep = function (regexMatcher, processFunction) {
		if (!regexMatcher) {
			throw new Error('Empty matchers are not supported');
		}
		if (regexMatcher.source.indexOf('(?:') >= 0) {
			throw new Error('Non-capturing regex groups are not supported');
		}
		var matching = matchingSteps(regexMatcher);
		if (matching.length > 0) {
			throw new Error('The matching step is already defined');
		}
		steps.push(new StepExecutor(regexMatcher, processFunction, self));
	};
	self.getStepForLine = function (stepText) {
		var matching = matchingSteps(stepText);
		if (matching.length === 0) {
			return false;
		} else if (matching.length > 1) {
			throw new Error('multiple steps match line ' + stepText);
		}
		return matching[0];
	};
};
