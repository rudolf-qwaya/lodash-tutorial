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

function firstLongName(obj) {
    for (var key in obj) {
        var v = obj[key];
        if (v.name && v.name.length > 5) {
            return v;
        }
    }
}

function firstWithName(obj) {
    for (var key in obj) {
        var v = obj[key];
        if (v.name) {
            return v;
        }
    }
}

function firstEmperor(obj) {
    for (var key in obj) {
        var v = obj[key];
        if (v.name === 'Caesar') {
            return v;
        }
    }
}