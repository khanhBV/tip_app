
function calcTip() {
    var money = document.getElementById("inputMoney").value;
    var people = document.getElementById("inputNumberPeople").value;

    var persentOptions = document.getElementById("persentTip");
    var persentIndex = persentOptions.selectedIndex;
    var persent = 0;
    var result = 0;

    switch (persentIndex) {
        case 1:
            persent = 0.3
            break;
        case 2:
            persent = 0.2
            break;
        case 3:
            persent = 0.15
            break;
        case 4:
            persent = 0.1
            break;
        case 5:
            persent = 0.05
            break;

        default:
            break;
    }
    
    return result = (money * persent)/people;
    
}

function main(event) {
    event.preventDefault();
    var result = calcTip();
    document.getElementById("calcButton").addEventListener(
        "click", calcTip);
    if (result > 0) {
        document.getElementById("result").style.display = "flex";
        document.getElementById("tipMoney").innerHTML = "$"+result;
    } 
}





