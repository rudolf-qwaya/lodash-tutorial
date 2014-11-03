function monolith2001(a) {
    var r = [];

    for (var i = 0; i < a.length; i++) {
        var obj = a[i];
        r.push(obj * obj);
    }

    return r;
}

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

function getElements(a) {
    var r = [];

    for (var i = 0; i < a.length; i++) {
        var obj = a[i];

        for (var j = 0; j < obj.length; j++) {
            var obj1 = obj[j];
            r.push(obj1);
        }
    }

    return r;
}

function firstTruthy(a) {
    return _.find(a);
}