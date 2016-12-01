var string = "R4, R3, R5, L3, L5, R2, L2, R5, L2, R5, R5, R5, R1, R3, L2, L2, L1, R5, L3, R1, L2, R1, L3, L5, L1, R3, L4, R2, R4, L3, L1, R4, L4, R3, L5, L3, R188, R4, L1, R48, L5, R4, R71, R3, L2, R188, L3, R2, L3, R3, L5, L1, R1, L2, L4, L2, R5, L3, R3, R3, R4, L3, L4, R5, L4, L4, R3, R4, L4, R1, L3, L1, L1, R4, R1, L4, R1, L1, L3, R2, L2, R2, L1, R5, R3, R4, L5, R2, R5, L5, R1, R2, L1, L3, R3, R1, R3, L4, R4, L4, L1, R1, L2, L2, L4, R1, L3, R4, L2, R3, L1, L5, R4, R5, R2, R5, R1, R5, R1, R3, L3, L2, L2, L5, R2, L2, R5, R5, L2, R3, L5, R5, L2, R4, R2, L1, R3, L5, R3, R2, R5, L1, R3, L2, R2, R1";
//var string = "R8, R4, R4, R8";
var array = string.split(", ");
var xcoord = Number(0);
var ycoord = Number(0);
//0 = N, 1 = E, 2 = S, 3 = W
var direction = 0;
var value;
var stop = false;
var values = [];
for (j = 0; j < array.length; j++) {
    value = String(array[j]);
    var ar = value.match(/[a-zA-Z]+|[0-9]+/g);
    var d = ar[0];
    var num = Number(ar[1]);
    if(stop==true){
      break;
    }
    if (direction == 0) {
        if (d == "L") {
            for (i = 0; i < num; i++) {
                checkAdd(xcoord - i, ycoord);
            }
            xcoord -= num;
            direction = 3;
        }
        if (d == "R") {
            for (i = 0; i < num; i++) {
                checkAdd(xcoord + i, ycoord);
            }
            xcoord += num;
            direction = 1;
        }
    } else if (direction == 1) {
        if (d == "L") {
            for (i = 0; i < num; i++) {
                checkAdd(xcoord, ycoord + i);
            }
            ycoord += num;
            direction = 0;
        }
        if (d == "R") {
            for (i = 0; i < num; i++) {
                checkAdd(xcoord, ycoord - i);
            }
            ycoord -= num;
            direction = 2;
        }
    } else if (direction == 2) {
        if (d == "L") {
            for (i = 0; i < num; i++) {
                checkAdd(xcoord + i, ycoord);
            }
            xcoord += num;
            direction = 1;
        }
        if (d == "R") {
            for (i = 0; i < num; i++) {
                checkAdd(xcoord - i, ycoord);
            }
            xcoord -= num;
            direction = 3;
        }
    } else if (direction == 3) {
        if (d == "L") {
            for (i = 0; i < num; i++) {
                checkAdd(xcoord, ycoord - i);
            }
            ycoord -= num;
            direction = 2;
        }
        if (d == "R") {
            for (i = 0; i < num; i++) {
                checkAdd(xcoord, ycoord + i);
            }
            ycoord += num;
            direction = 0;
        }
    }    
}

function checkAdd(xcoord, ycoord){
    var arraystring = xcoord + ", " + ycoord;
    if (values.indexOf(arraystring) > -1) {
        console.log(arraystring);
        stop = true;
    } else {
        values.push(arraystring);
    }
}