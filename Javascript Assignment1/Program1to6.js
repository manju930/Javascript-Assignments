function Sum1() {
    var num = document.getElementById("inputnum1").value;//--Should have used prompt() to take input
    console.log("the value you gave was:" + num);

    var sum = 0;
    for (i = 0; i <= num; i++) {
        sum = sum + i;
    }
    console.log("The sum of numbers till " + num + " is: " + sum);
    alert("The sum of numbers till " + num + " is: " + sum);
}

function Sum2() {
    var num = document.getElementById("inputnum2").value;
    console.log("the value you gave was:" + num);

    var sum = 0;
    for (i = 0; i <= num; i++) {
        if (i % 3 == 0 || i % 5 == 0) {
            sum = sum + i;
        }
    }
    console.log("The sum of multiples of 3, 5 till " + num + " is: " + sum);
    alert("The sum of numbers till " + num + " is: " + sum);

}

function OddEven() {
    var num = document.getElementById("inputnum3").value;
    if (num % 2 == 0) {
        alert(num + " is Even");
    }
    else {
        alert(num + " is Odd");
    }
}

function HeadFrac() {
    var flips = document.getElementById("inputnum4").value;
    var heads = Math.floor((Math.random() * flips) + 1);
    var headRatio = heads / flips;
    console.log("this is headratio : " + headRatio.toFixed(2));
    alert("head ratio is :" + headRatio.toFixed(2));
}

function Leapyear() {
    // var year = prompt("please input a year to find out the next 20 years");
    var currentTime = new Date()
    var year = currentTime.getFullYear()
    var counter = 20;

    while (counter >= 0) {

        if ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)) {
            console.log(year);
            year++;
            counter--;
        } 
        else
         {
            year++;
        }

    }
}

function Pattern(){
    const myList =[];
    for(i=0;i<5;i++){
       myList[i]= prompt("Enter element number: "+i);
    }
    console.log("*************");
    console.log("* "+myList[0]+" *");
    console.log("* "+myList[1]+" *");
    console.log("* "+myList[2]+" *");
    console.log("* "+myList[3]+" *");
    console.log("* "+myList[4]+" *");
    console.log("*************");
    
}
