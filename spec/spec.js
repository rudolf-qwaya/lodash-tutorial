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
        var database = {
            alfa: {},
            a: {name: 'Adam'},
            b: {name: 'Bertil'},
            c: {name: 'Caesar'}
        };

        expect(firstLongName(database)).toEqual({name: 'Bertil'});
        expect(firstWithName(database)).toEqual({name: 'Adam'});
        expect(firstEmperor(database)).toEqual({name: 'Caesar'});
    });

    it("groups objects", function () {
        var database = [
            {type: 'a', id: 1},
            {type: 'a', id: 2},
            {type: 'b', id: 1},
            {type: 'b', id: 2},
            {type: 'b', id: 3},
            {type: 'c', id: 1},
            {type: 'c', id: 3}
        ];

        expect(categorized(database)).toEqual({
            a: [{type: 'a', id: 1}, {type: 'a', id: 2}],
            b: [{type: 'b', id: 1}, {type: 'b', id: 2}, {type: 'b', id: 3}],
            c: [{type: 'c', id: 1}, {type: 'c', id: 3}]
        });
    });

    it("sums evens", function () {
        var result = sumEvens([1, 2, 4, 3, 2]);
        expect(result).toEqual(8);
    });
});