var text = document.body.textContent.split('\n');
var rows = [[], [], [], [], [], [], [], []];

for (var i = 0; i < text.length; i++) {
	for (var a = 0; a < text[i].length; a++) {
		rows[a].push(text[i][a]);
	}
}

var answer = "";
for (var c = 0; c < rows.length; c++) {
	answer += mode(rows[c]);
}
console.log(answer);

function mode(array) {
    var count = {};
    array.forEach(function (a) {
        count[a] = (count[a] || 0) + 1;
    });
    return Object.keys(count).reduce(function (r, k, i) {
        if (!i || count[k] < count[r[0]]) {
            return [k];
        }
        if (count[k] === count[r[0]]) {
            r.push(k);
        }
        return r;
    }, []);
}
