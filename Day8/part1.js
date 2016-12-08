String.prototype.replaceAt = function(index, character) {
    return this.substr(0, index) + character + this.substr(index + character.length);
}

var instructions = document.body.textContent.split('\n');
var grid = [];
//create grid
for (var a = 0; a < 6; a++) {
    grid.push(Array(51).join("0"));
}

instructions.forEach(function(item) {
    switch (item.split(' ')[0]) {
        case "rotate":
            if (item.split(" ")[1] == "row") {
                var row = Number(item.charAt(item.indexOf("=") + 1));
                var dis = Number(item.split(" ")[item.split(" ").length - 1]);
                shiftRowRight(row, dis);
            } else {
                var row = Number(item.charAt(item.indexOf("=") + 1));
                var dis = Number(item.split(" ")[item.split(" ").length - 1]);
                shiftRowDown(row, dis);
            }
            break;
        case "rect":
            var p1 = item.split(' ')[1].split('x')[0];
            var p2 = item.split(' ')[1].split('x')[1];
            makeRect(p1, p2);
            break;
    }
});

function makeRect(w, h) {
    for (var b = 0; b < h; b++) {
        for (var c = 0; c < w; c++) {
            grid[b] = grid[b].replaceAt(c, "1");
        }
    }
}

function shiftRowRight(row, dis) {
    var ar = grid[row].split('');
    ar = ar.concat(ar.splice(0, ar.length - dis));
    grid[row] = ar.join("");
}

function shiftRowDown(col, dis) {
    var arr = [];
    grid.forEach(function(row) {
        arr.push(row.charAt(col));
    });
    arr = arr.concat(arr.splice(0, arr.length - dis));
    console.log(grid);
    console.log(arr.length + " " + grid.length);
    for (var d = 0; d < grid.length; d++) {
        grid[d] = grid[d].replaceAt(col, arr[d]);
    }
}

//find answer
var answer = 0;
grid.forEach(function(finalRow) {
    console.(finalRow.match(/1/g) || []).length);
});
