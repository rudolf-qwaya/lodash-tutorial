function removeDuplicates(a) {
    var r = [];

    for (var i = 0; i < a.length; i++) {
        var obj = a[i];
        if (r.indexOf(obj) === -1) {
            r.push(obj);
        }
    }

    return r;
}