//Run this directly in the browser console for the input
var text = document.body.textContent.split('\n');
var checksums = [];
var answer = 0;
var alphabet = "abcdefghijklmnopqrstuvwxyz";
var realRooms = [];
for (var i = 0; i < text.length; i++) {
    var curText = text[i];
    var cs = curText.match(/[^[\]]+(?=])/g);
    if (cs) {
        checksums.push(cs);
    }
    curText = curText.substring(0, curText.indexOf('\['));
    var finalString = getFrequency(curText).substring(0, 5);
    if (cs == finalString) {
        answer += Number(curText.split("-")[curText.split("-").length - 1]);
        realRooms.push(text[i]);
    }
}


realRooms.forEach(function(entry) {
    var newAnswer = "";
    var text = entry.substring(0, entry.search(/\d/) - 1);
    // var text = "qzmt-zixmtkozy-ivhz";
    for (var e = 0; e < text.length; e++) {
        var char = text[e];
        if (char != "-") {
            var num = 0;
            newAnswer += alphabet.charAt((alphabet.indexOf(char) + 343) % 26);
        } else {
            newAnswer += " ";
        }
    }
    if(newAnswer.indexOf("north") !== -1){
        console.log(entry);
        console.log(newAnswer);
    }
});

function getFrequency(frequencyString) {
    var stringArray = frequencyString.split("");
    var frequencies = {};
    for (var k in stringArray) {
        var nowLetter = stringArray[k];
        if (nowLetter != "-" && isNaN(nowLetter)) {
            if (stringArray.hasOwnProperty(k)) {
                if (!frequencies[nowLetter]) {
                    frequencies[nowLetter] = 0;
                }

                frequencies[nowLetter] += 1;
            }
        }
    }
    var sortable = [];
    for (var number in frequencies)
        sortable.push([number, frequencies[number]])

    sortable.sort(function(a, b) {
        return a[1] - b[1]
    })
    return blah(sortable.reverse());
}

function blah(array) {
    var freq = {};
    var final = "";
    for (var b = 0; b < array.length; b++) {
        freq[array[b][1]] = "";
    }
    for (var b = 0; b < array.length; b++) {
        if (array[b][0] && array[b][1]) {
            freq[array[b][1]] += array[b][0];
        }
    }
    for (var c in freq) {
        final = freq[c].split('').sort().join('') + final;
    }
    return final;
}

function reverseString(str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}
