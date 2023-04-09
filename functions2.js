function send()
{
    number1 = document.getElementById("num1");
    number2 = document.getElementById("num2");
    actual_number = parseInt(number1)*(number2);

    question_number = "<h4>" + number1 + "X" + number2 + "</h4>";
    input_box = "<br>Answer: <input type ='text' id='input_check_box'> ";
    check_button = "<br><br><button class = 'btn btn-info'onclick = 'check()'>Check </button>";
    row = question_number + input_box + check_button
    document.getElementById("output").innerHTML = row;
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    
}
