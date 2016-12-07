var text = document.body.textContent.split('\n');
var answer = 0;
for (var i = 0; i < text.length; i++) {
    var cs = text[i].match(/[^[\]]+(?=])/g);
    var wd = text[i].replace(/\[.*?\]/g, "-").split("-");
    var isReal = false;
    wd.forEach(function(entry) {
        for (var a = 0; a < entry.length; a++) {
            var test = entry.substring(a, a + 3);
            if (test.length == 3 && test.charAt(0) == test.charAt(2) && test.charAt(0) != test.charAt(1)) {
                for (var b = 0; b < cs.length; b++) {
                    for (var c = 0; c < cs[b].length; c++) {
                        var inbr = cs[b].substring(c, c + 3);
                        var recon = test.charAt(1) + test.charAt(0) + test.charAt(1);
                        if (inbr.length == 3 && inbr.charAt(0) == inbr.charAt(2) && inbr.charAt(0) != inbr.charAt(1) && recon == inbr) {
                            isReal = true;
                        }
                    }
                }
            }
        }
    });
    if (isReal) {
        answer++;
        isReal = false;
    }
}
console.log(answer);
