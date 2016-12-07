var text = document.body.textContent.split('\n');
var answer = 0;
for (var i = 0; i < text.length; i++) {
    var cs = text[i].match(/[^[\]]+(?=])/g);
    var wd = text[i].replace(/\[.*?\]/g, "-").split("-");
    var isReal = false;
    wd.forEach(function(entry) {
        for (var a = 0; a < entry.length; a++) {
            var test = entry.substring(a, a + 4);
            if (test.length == 4 && test.split("").reverse().join("") == test && !/^([a-z])\1+$/.test(test)) {
                if (!cs.indexOf(test) > -1) {
                    isReal = true;
                } else {
                    console.log(test);
                }
            }
        }
    });
    if (cs) {
        for (var b = 0; b < cs.length; b++) {
            for (var c = 0; c < cs[b].length; c++) {
                var par = cs[b].substring(c, c + 4);
                if (par.length == 4 && par.split("").reverse().join("") == par && !/^([a-z])\1+$/.test(cs[b])) {
                    isReal = false;
                }
            }
        }
    }
    if (isReal) {
        answer++;
        isReal = false;
    }
}
console.log(answer);
