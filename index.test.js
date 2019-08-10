const bowling = require('./index');


test("Rejects negative numbers", () => {
	expect(bowling.validRoll([-7,1,2,3,4,5,4,2,2,1,1,7,1,2,3,2,3,1,3,2])).toBe(false);
});

test("Rejects numbers greater than 10", () => {
	expect(bowling.validRoll([17,1,2,3,4,5,4,2,2,1,1,7,1,2,3,2,3,1,3,2])).toBe(false);
});

test("Adds all 0s to equal 0", () => {
	expect(bowling.scoreKeeper([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0])).toBe(0);
});

test("Adds all 1s to equal 20", () => {
	expect(bowling.scoreKeeper([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1])).toBe(20);
});

//test fails when ran, but not when used in sandbox mode  results equal 44
test("Cann add a strike", () => {
	expect(bowling.scoreKeeper([10,4,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0])).toBe(24);
});

