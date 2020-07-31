var queenB = {
    position: {
        x: 0,
        y: 0
    }
};

var queenW = {
    position1: {
        x: 7,
        y: 1
    }
}

var board = [
    ["a8", "b8", "c8", "d8", "e8", "f8", "g8", "h8"],
    ["a7", "b7", "c7", "d7", "e7", "f7", "g7", "h7"],
    ["a6", "b6", "c6", "d6", "e6", "f6", "g6", "h6"],
    ["a5", "b5", "c5", "d5", "e5", "f5", "g5", "h5"],
    ["a4", "b4", "c4", "d4", "e4", "f4", "g4", "h4"],
    ["a3", "b3", "c3", "d3", "e3", "f3", "g3", "h3"],
    ["a2", "b2", "c2", "d2", "e2", "f2", "g2", "h2"],
    ["a1", "b1", "c1", "d1", "e1", "f1", "g1", "h1"]
];

/*Queen Black*/


function move(numberOfSteps, direction) {
    let temp;
    let temp1;
    switch (direction) {
        case "E":
            temp = queenB.position.y + numberOfSteps;
            if (temp >= 8 || temp <= 0) {
                console.log("error message: Out of Board Boundary");
                /*    document.write("Out of Boundary");*/
            } else {
                queenB.position.y = temp;
            }
            break;

        case "W":
            temp = queenB.position.y - numberOfSteps;
            if (temp >= 8 || temp <= 0) {
                console.log("error message: Out of Board Boundary");
                /*document.write("Out of Boundary");*/
            } else {
                queenB.position.y = temp;
            }
            break;

        case "S":
            temp = queenB.position.x + numberOfSteps;
            if (temp >= 8 || temp <= 0) {
                console.log("error message: Out of Board Boundary");
                /*document.write("Out of Boundary");*/
            } else {
                queenB.position.x = temp;
            }
            break;

        case "N":
            temp = queenB.position.x - numberOfSteps;
            if (temp >= 8 || temp <= 0) {
                console.log("error message: Out of Board Boundary");
                /*document.write("Out of Boundary");*/
            } else {
                queenB.position.x = temp;
            }
            break;

        case "SE":
            temp = queenB.position.x + numberOfSteps;
            temp1 = queenB.position.y + numberOfSteps;

            if ((temp >= 8 || temp < 0) && (temp1 >= 8 || temp1 < 0)) {
                console.log("error message: Out of Board Boundary");
                /*document.write("Out of Boundary");*/
            } else {
                queenB.position.x = temp;
                queenB.position.y = temp1;
            }
            break;

        case "NW":
            temp = queenB.position.x - numberOfSteps;
            temp1 = queenB.position.y - numberOfSteps;

            if ((temp >= 8 || temp < 0) && (temp1 >= 8 || temp1 < 0)) {
                console.log("error message: Out of Board Boundary");
                /*document.write("Out of Boundary");*/
            } else {
                queenB.position.x = temp;
                queenB.position.y = temp1;
            }
            break;

        case "SW":
            temp = queenB.position.x + numberOfSteps;
            temp1 = queenB.position.y - numberOfSteps;

            if ((temp >= 8 || temp < 0) && (temp1 >= 8 || temp1 < 0)) {
                console.log("error message: Out of Board Boundary");
                /*document.write("Out of Boundary");*/
            } else {
                queenB.position.x = temp;
                queenB.position.y = temp1;
            }
            break;

        case "NE":
            temp = queenB.position.x - numberOfSteps;
            temp1 = queenB.position.y + numberOfSteps;

            if ((temp >= 8 || temp < 0) && (temp1 >= 8 || temp1 < 0)) {
                console.log("error message: Out of Board Boundary");
                /*document.write("Out of Boundary");*/
            } else {
                queenB.position.x = temp;
                queenB.position.y = temp1;
            }
            break;
    }
}

function move1(numberOfSteps, direction) {
    let temp2;
    let temp3;

    switch (direction) {
        case "E":
            temp2 = queenW.position1.y + numberOfSteps;
            if (temp2 >= 8 || temp2 <= 0) {
                console.log("error message: Out of Board Boundary");
                // document.write("Out of Boundary");
            } else {
                queenW.position1.y = temp2;
            }
            break;

        case "W":
            temp2 = queenW.position1.y - numberOfSteps;
            if (temp2 >= 8 || temp2 <= 0) {
                console.log("error message: Out of Board Boundary");
                //document.write("Out of Boundary");
            } else {
                queenW.position1.y = temp2;
            }
            break;

        case "S":
            temp2 = queenW.position1.x + numberOfSteps;
            if (temp2 >= 8 || temp2 <= 0) {
                console.log("error message: Out of Board Boundary");
                //*document.write("Out of Boundary");
            } else {
                queenW.position1.x = temp2;
            }
            break;

        case "N":
            temp2 = queenW.position1.x - numberOfSteps;
            if (temp2 >= 8 || temp2 <= 0) {
                console.log("error message: Out of Board Boundary");
                //*document.write("Out of Boundary");
            } else {
                queenW.position1.x = temp2;
            }
            break;

        case "SE":
            temp2 = queenW.position1.x + numberOfSteps;
            temp3 = queenW.position1.y + numberOfSteps;

            if ((temp2 >= 8 || temp2 < 0) && (temp3 >= 8 || temp3 < 0)) {
                console.log("error message: Out of Board Boundary");
                //*document.write("Out of Boundary");
            } else {
                queenW.position1.x = temp2;
                queenW.position1.y = temp3;
            }
            break;

        case "NW":
            temp2 = queenW.position1.x - numberOfSteps;
            temp3 = queenW.position1.y - numberOfSteps;

            if ((temp2 >= 8 || temp2 < 0) && (temp3 >= 8 || temp3 < 0)) {
                console.log("error message: Out of Board Boundary");
                //*document.write("Out of Boundary");
            } else {
                queenW.position1.x = temp2;
                queenW.position1.y = temp3;
            }
            break;

        case "SW":
            temp2 = queenW.position1.x + numberOfSteps;
            temp3 = queenW.position1.y - numberOfSteps;

            if ((temp2 >= 8 || temp2 < 0) && (temp3 >= 8 || temp3 < 0)) {
                console.log("error message: Out of Board Boundary");
                //*document.write("Out of Boundary");
            } else {
                queenW.position1.x = temp2;
                queenW.position1.y = temp3;
            }
            break;

        case "NE":
            temp2 = queenW.position1.x - numberOfSteps;
            temp3 = queenW.position1.y + numberOfSteps;

            if ((temp2 >= 8 || temp2 < 0) && (temp3 >= 8 || temp3 < 0)) {
                console.log("error message: Out of Board Boundary");
                //*document.write("Out of Boundary");
            } else {
                queenW.position1.x = temp2;
                queenW.position1.y = temp3;
            }
            break;
    }
}

function play() {
    var value = document.getElementById("position").value;
    var input = value.split(" ");
    input.forEach(num => {
        let number = Number(num.slice(num.length - 1));
        let dir = num.slice(0, num.length - 1);
        move1(number, dir);
    });
    console.log("QueenW's current postion ->" + board[queenW.position1.x][queenW.position1.y]);
}

//Try out using single input for both queen from here



//try out ended



/* Note:{open this if remove the try out}
function play() {
    var value = document.getElementById("position").value;
    var input = value.split(" ");
    input.forEach(num => {
        let number = Number(num.slice(num.length - 1));
        let dir = num.slice(0, num.length - 1);
        move(number, dir);
    });
    console.log("QueenB's current postion ->" + board[queenB.position.x][queenB.position.y]);
}

//QueenW
var player2;

function move1(numberOfSteps, direction) {
    let temp2;
    let temp3;

    switch (direction) {
        case "E":
            temp2 = queenW.position1.y + numberOfSteps;
            if (temp2 >= 8 || temp2 <= 0) {
                console.log("error message: Out of Board Boundary");
                // document.write("Out of Boundary");
            } else {
                queenW.position1.y = temp2;
            }
            break;

        case "W":
            temp2 = queenW.position1.y - numberOfSteps;
            if (temp2 >= 8 || temp2 <= 0) {
                console.log("error message: Out of Board Boundary");
                //document.write("Out of Boundary");
            } else {
                queenW.position1.y = temp2;
            }
            break;

        case "S":
            temp2 = queenW.position1.x + numberOfSteps;
            if (temp2 >= 8 || temp2 <= 0) {
                console.log("error message: Out of Board Boundary");
                //*document.write("Out of Boundary");
            } else {
                queenW.position1.x = temp2;
            }
            break;

        case "N":
            temp2 = queenW.position1.x - numberOfSteps;
            if (temp2 >= 8 || temp2 <= 0) {
                console.log("error message: Out of Board Boundary");
                //*document.write("Out of Boundary");
            } else {
                queenW.position1.x = temp2;
            }
            break;

        case "SE":
            temp2 = queenW.position1.x + numberOfSteps;
            temp3 = queenW.position1.y + numberOfSteps;

            if ((temp2 >= 8 || temp2 < 0) && (temp3 >= 8 || temp3 < 0)) {
                console.log("error message: Out of Board Boundary");
                //*document.write("Out of Boundary");
            } else {
                queenW.position1.x = temp2;
                queenW.position1.y = temp3;
            }
            break;

        case "NW":
            temp2 = queenW.position1.x - numberOfSteps;
            temp3 = queenW.position1.y - numberOfSteps;

            if ((temp2 >= 8 || temp2 < 0) && (temp3 >= 8 || temp3 < 0)) {
                console.log("error message: Out of Board Boundary");
                //*document.write("Out of Boundary");
            } else {
                queenW.position1.x = temp2;
                queenW.position1.y = temp3;
            }
            break;

        case "SW":
            temp2 = queenW.position1.x + numberOfSteps;
            temp3 = queenW.position1.y - numberOfSteps;

            if ((temp2 >= 8 || temp2 < 0) && (temp3 >= 8 || temp3 < 0)) {
                console.log("error message: Out of Board Boundary");
                //*document.write("Out of Boundary");
            } else {
                queenW.position1.x = temp2;
                queenW.position1.y = temp3;
            }
            break;

        case "NE":
            temp2 = queenW.position1.x - numberOfSteps;
            temp3 = queenW.position1.y + numberOfSteps;

            if ((temp2 >= 8 || temp2 < 0) && (temp3 >= 8 || temp3 < 0)) {
                console.log("error message: Out of Board Boundary");
                //*document.write("Out of Boundary");
            } else {
                queenW.position1.x = temp2;
                queenW.position1.y = temp3;
            }
            break;
    }
}

function play1() {
    var value = document.getElementById("position").value;
    var value = document.getElementById("position1").value;
    var input = value.split(" ");
    input.forEach(num => {
        let number = Number(num.slice(num.length - 1));
        let dir = num.slice(0, num.length - 1);
        move1(number, dir);
    });
    console.log("QueenW's current postion ->" + board[queenW.position1.x][queenW.position1.y]);
}  */