let sign = "X";
let display = document.getElementById("player");

function print(number) {
    let boxelement = document.getElementById("b" + number);
    console.log(boxelement);

    if (boxelement.innerText == "") {
        boxelement.innerHTML = sign;
        winner();
        checks();
        document.getElementById("player").innerHTML = sign + " It's Your turn"
    }
}

function checks() {
    if (sign == "X") {
        sign = "O";
    }
    else {
        sign = "X";
    }
}

function getbox(num) {
    return document.getElementById("b" + num).innerHTML;
}

function checkmove(a, b, c, m) {
    if (getbox(a) == m && getbox(b) == m && getbox(c) == m) {
        return true;
    }
    else {
        return false;
    }
}

function winner() {
    if (checkmove(1, 2, 3, sign) || checkmove(4, 5, 6, sign) || checkmove(7, 8, 9, sign) || checkmove(1, 4, 7, sign) || checkmove(2, 5, 8, sign) || checkmove(3, 6, 9, sign) || checkmove(1, 5, 9, sign) || checkmove(3, 5, 7, sign)) {
        document.getElementById("player").innerHTML = sign + " Wins!!";
        for (let i = 0; i <= 9; i++) {
            document.getElementById("b" + i).innerHTML = "";
        }
        throw "Game End";
    }
    else {
        if (getbox(1) != "" && getbox(2) != "" && getbox(3) != "" && getbox(4) != "" && getbox(5) != "" && getbox(6)!= "" && getbox(7)!= "" && getbox(8)!= "" && getbox(9)!= "") {
            document.getElementById("player").innerHTML = "Game Tied...";
            throw "It's a tie";
        }
    }
}