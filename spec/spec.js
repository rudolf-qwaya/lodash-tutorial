describe("Lo-Dash", function () {
    it("removes duplicates", function () {
        var result = removeDuplicates([1, 2, 1, 3, 1]);
        expect(result).toEqual([1, 2, 3]);
    });
});