//Run this directly in the browser console for the input
var text = document.body.textContent.match(/(.+\n)/g);
var triangles = [];
var part2Triangles = [];
var noCount = 0;
var numberOfTriangles = 0;
for (var i = 0; i < text.length; i++) {
    var parts = text[i].trim().split('  ');
    for (var p = 0; p < parts.length; p++) {
        parts[p] = parts[p].replace(" ", "");
        if (!parts[p].trim()) {
            parts.splice(p, 1);
        }
    }
    console.log(parts);
    //check if triangle
    var s1 = Number(parts[0]);
    var s2 = Number(parts[1]);
    var s3 = Number(parts[2]);
    triangles.push([s1, s2, s3]);

}

for (var i = 0; i < triangles.length - 1; i += 3) {
    var tri1 = triangles[i][0];
    var tri2 = triangles[i + 1][0];
    var tri3 = triangles[i + 2][0];

    var tri4 = triangles[i][1];
    var tri5 = triangles[i + 1][1];
    var tri6 = triangles[i + 2][1];

    var tri7 = triangles[i][2];
    var tri8 = triangles[i + 1][2];
    var tri9 = triangles[i + 2][2];

    part2Triangles.push([tri1, tri2, tri3]);
    part2Triangles.push([tri4, tri5, tri6]);
    part2Triangles.push([tri7, tri8, tri9]);
}

for (var i = part2Triangles.length - 1; i >= 0; i--) {
    //check if triangle
    var s1 = part2Triangles[i][0];
    var s2 = part2Triangles[i][1];
    var s3 = part2Triangles[i][2];

    if ((s1 + s2 > s3) && (s2 + s3 > s1) && (s1 + s3 > s2)) {
        numberOfTriangles++;
    } else {
        // console.log("No " + s1 + " : " + s2 + " : " + s3);
        // console.log(part2Triangles[i]);
        noCount++
    }
}
console.log(noCount);

console.log(numberOfTriangles);