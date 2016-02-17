'use strict';

describe("Test Driven Development in AngularJS", function (){
	it("sould say Hello TDD AngularJS", function (){
        var result;
        result = greeting();
        expect(result).toEqual("Hello TDD AngularJS");
	});


});
