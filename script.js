//Fucntion to dynamically change the span value
function updateRate(){
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").textContent = rateval;
}

//Fucntion to calculate and display total amount
function compute()
{
    //Variable declaration and assignment
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate/100;
    var year = new Date().getFullYear()+parseInt(years);

    //Displaying the result
    var result_string = `<br>If you deposit <mark>${principal}</mark>,<br>at an interest rate of <mark>${rate}%</mark>.<br>You will receive an amount of <mark>${principal + interest}</mark>,<br>in the year <mark>${year}</mark>`

    //Input validation
    if (principal <= 0){
        alert("Enter a positive non zero value");
    }
    else{
        document.getElementById("result").innerHTML = result_string;
        document.getElementById("principal").focus();
    }

}
        
