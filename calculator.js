$(document).ready(function() {
    var result = 0;
    var stringchain = "";
    var bottom_text = $("#bottom_text");
    var top_text = $("#top_text");
    var digits = [1,2,3,4,5,6,7,8,9,0];
    var operator = "+";
    var current_query = "";
    $("button").click(function() {
        var fired_button = $(this).val();
        updateResult(fired_button);
        updateChain(fired_button);
        checkClear(fired_button);
    });
    function updateResult(fired_button) {
        if(digits.indexOf(Number(fired_button)) !== -1) {
            current_query+=fired_button;
        } else if(fired_button !== "=") {
            performOperation(current_query);
            operator = fired_button;
            current_query ="";
            console.log(result);
        } else {
            performOperation(current_query);
            current_query = "";
        }
    }
    function updateChain(fired_button) {

        if(fired_button!=="=") {
            stringchain+=fired_button;
            bottom_text.html(stringchain);
        } else {
            stringchain="";
            bottom_text.html(stringchain);
            top_text.html(result);
            result = 0;
            operator = "+";
        }
    }
    function performOperation(next) {
        switch(operator) {
            case "/":
                result /= Number(next);
                operator = null;
                break;
            case "*":
                result*= Number(next);
                operator = null;
                break;
            case "+":
                result+= Number(next);
                operator = null;
                break;
            case "-":
                result -= Number(next);
                operator = null;
                break;
            case "%":
                result %= Number(next);
                operator = null;
                break;
        }
    }
    function checkClear(fired_button) {
        if(fired_button == "AC") {
            top_text.html("0");
            bottom_text.html("0");
            result = 0;
            stringchain = "";
            operator = "+";
            current_query = "";
        } else if(fired_button == "CE") {
            bottom_text.html("0");
            stringchain = "";
            current_query = "";
        } 
    }
});




