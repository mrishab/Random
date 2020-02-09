const { Random } = require("../src/random");

describe("RandomSpec", () => {

    let random;

    beforeEach(() => {
        random = new Random();
    });

    it("int returns random integer between the range", () => {
        const randomSpy = spyOn(Math, 'random');

        randomSpy.and.returnValue(0.98763438);
        let n = random.int(5, 10);
        expect(n).toBe(10);

        randomSpy.and.returnValue(0.468834);
        n = random.int(0, 999);
        expect(n).toBe(468);

        randomSpy.and.returnValue(0.6547);
        n = random.int(34, 35);
        expect(n).toBe(35);
    });

});