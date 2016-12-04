//Run this directly in the browser console for the input
var text = document.body.textContent.split('\n');
var checksums = [];
var answer = 0;
for (var i = 0; i < text.length; i++) {
    var curText = text[i];
    var cs = curText.match(/[^[\]]+(?=])/g);
    if (cs) {
        checksums.push(cs);
    }
    curText = curText.substring(0, curText.indexOf('\['));
    var finalString = getFrequency(curText).substring(0, 5);
    // finalString = reverseString(finalString);
    console.log(finalString);
    if (cs == finalString) {
        console.log("wat" + finalString);
        console.log(cs[0]);
        answer += Number(curText.split("-")[curText.split("-").length - 1]);
        console.log(answer);
    }
}

console.log(answer);

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
        console.log("WAT " + final);
    }
    console.log(final);
    return final;
}

function reverseString(str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}
