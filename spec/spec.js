describe("Lo-Dash", function () {
    it("squares", function () {
        var result = monolith2001([1, 2, 3]);
        expect(result).toEqual([1, 4, 9]);
    });

    it("removes duplicates", function () {
        var result = removeDuplicates([1, 2, 1, 3, 1]);
        expect(result).toEqual([1, 2, 3]);
    });

    it("gets elements", function () {
        var result = getElements([[1, 2], [1], [3, 1]]);
        expect(result).toEqual([1, 2, 1, 3, 1]);
    });

    it("finds elements", function () {
        var result = firstTruthy({a: 0, b: 1, c: 2});
        expect(result).toEqual(1);
    });
});