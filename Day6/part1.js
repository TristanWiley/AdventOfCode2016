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
function mode(array){
    if(array.length == 0)
        return null;
    var modeMap = {};
    var maxEl = array[0], maxCount = 1;
    for(var i = 0; i < array.length; i++)
    {
        var el = array[i];
        if(modeMap[el] == null)
            modeMap[el] = 1;
        else
            modeMap[el]++;  
        if(modeMap[el] > maxCount)
        {
            maxEl = el;
            maxCount = modeMap[el];
        }
    }
    return maxEl;
}
