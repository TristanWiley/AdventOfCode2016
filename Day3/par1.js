//Run this directly in the browser console for the input

var text = document.body.textContent.split('\n');
var triangles = [];
var numberOfTriangles = 0;
for (var i = 0; i < text.length; i++) {
    var parts = text[i].split('  ');
    for (var p = 0; p < parts.length; p++) {
        parts[p] = parts[p].trim();
        if (!parts[p].trim()) {
            parts.splice(p, 1);
        }
    }

    //check if triangle
    var s1 = Number(parts[0]);
    var s2 = Number(parts[1]);
    var s3 = Number(parts[2]);

    if (s1 + s2 > s3 && s2 + s3 > s1 && s1 + s3 > s2) {
        console.log("Yes " + parts);
        numberOfTriangles++;
    } else {
        console.log(parts);

    }
}

console.log(numberOfTriangles);
