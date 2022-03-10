function compute(){
    var principal = document.getElementById("principal").value;      
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;   
    var amount = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);
    document.getElementById("result").innerHTML="If you deposit <mark>"+principal+"</mark>,\<br\>at an interest rate of <mark>"+rate+"%</mark>\<br\>You will receive an amount of <mark>"+amount+"</mark>,\<br\>in the year <mark>"+year+"</mark>\<br\>"
    
    
    if(parseInt(principal)<1){
        alert("Enter a positive number");
        document.getElementById("principal").focus();
        return;
    }
    else if(principal==''){
        alert('Enter a number');
        document.getElementById("principal").focus();
        return;
    }
    else if(!letters.test(principal)){
        alert('Enter a number');
        document.getElementById("principal").focus();
        return;
    }
// old code I used to have valid input of numbers
    // if (principal==''){
    //     alert('Enter a number');
    //     document.getElementById("principal").focus();
    //     return;
    // }
    // else if(!letters.test(principal)){
    //     alert('Enter a number');
    //     document.getElementById("principal").focus();
    //     return;
    // }

}

function updateRate(){
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}