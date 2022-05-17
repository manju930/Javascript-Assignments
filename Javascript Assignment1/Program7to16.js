//Program 7----------------------------------------------------------------------
function ToInr() {
    var dollars = document.getElementById("amount").value;
    var inr = dollars / 77;
    document.write(dollars + " dollars = " + inr + " INR");
}

function ToYen() {
    var dollars = document.getElementById("amount").value;
    var yen = dollars / 130;
    document.write(dollars + " dollars = " + yen + " Yen");
}

function ToEuro() {
    var dollars = document.getElementById("amount").value;
    var euro = dollars * 20 / 19;
    document.write(dollars + " dollars = " + euro + " Euros");
}

function ToPound() {
    var dollars = document.getElementById("amount").value;
    var pound = dollars / 0.82;
    document.write(dollars + " dollars = " + pound + " Pounds")
}

//Program 8-----------------------------------------------------------------------
function Concat() {
    const arr1 = ["a", "b", "c"];
    const arr2 = ["1", "2", "3", "4"];
    const children = arr1.concat(arr2);
    console.log("concatinated")
    document.write("Concatinated array is: " + children);
}

//Program 9-----------------------------------------------------------------------
function AlterMerge() {
    let arr1 = ['a', 'b', 'c', 'd', 'e', 'f'];
    let n1 = arr1.length;

    let arr2 = [2, 4, 6, 8];
    let n2 = arr2.length;

    let arr3 = new Array(n1 + n2)

    let i = 0, j = 0, k = 0;

    // Traverse both array
    while (i < n1 && j < n2) {
        arr3[k++] = arr1[i++];
        arr3[k++] = arr2[j++];
    }

    // Store remaining elements of first array
    while (i < n1)
        arr3[k++] = arr1[i++];

    // Store remaining elements of second array
    while (j < n2)
        arr3[k++] = arr2[j++];

    document.write("Array after merging" + "<br>");
    for (let i = 0; i < n1 + n2; i++)
        document.write(arr3[i] + " ");
}

//Program 10-----------------------------------------------------------------------
function fibonacci() {
    var n1 = 1;
    var n2 = 1;
    var count = 0;
    while (count < 100) {
        var n3 = n1 + n2;
        console.log("number is " + n3);
        document.write(n3 + ", ");
        n1 = n2;
        n2 = n3;
        count++;
    }
}

//Program 11-----------------------------------------------------------------------
function ReverseArray() {
    var a = [3, 5, 7, 8]
    const len = a.length;
    var revArr = new Array;
    var k = 0;
    for (var i = len - 1; i >= 0; i--) {
        revArr.push(a[i]);
        // console.log(revArr[k]) 
        document.write(revArr[k] + " ");
        k++;

    }
}

//Program 12-----------------------------------------------------------------------
// function longestToken(){
//     const str = prompt("Please enter the string", "here");
//     var len = str.length;
//     while(){
//         if(str[0]!='a'||'b'){
//             let c1=
//         }

//     }
// }

//Program 13-----------------------------------------------------------------------
function usingWhile() {
    var arr = [12, 22, 1, 6, 18, 9];
    const len = arr.length;
    var i = 0;
    var sum = 0;
    while (i < len) {
        sum += arr[i];
        i++;
    }
    document.write("The sum of array using While is :" + sum);
}

function usingDoWhile() {
    var arr = [12, 22, 1, 6, 18, 9];
    const len = arr.length;
    var i = 0;
    var sum = 0;
    do {
        sum += arr[i];
        i++;
    } while (i < len)
    document.write("The sum of array using do While is :" + sum);
}

function usingFor() {
    var arr = [12, 22, 1, 6, 18, 9];
    const len = arr.length;
    var i = 0;
    var sum = 0;
    for (i = 0; i < len; i++) {
        sum += arr[i];
    }
    document.write("The sum of array using For is :" + sum);
}

//Program 14-----------------------------------------------------------------------
function LargeSmall() {
    var Myarray = new Array;
    var k = 0;
    for (i = 0; i < 100; i++) {
        var randNum = Math.floor((Math.random() * 10000) + 1); //generates random numbers between 1 to 10000
        Myarray[k] = randNum;
        k++;
    }
    const max = Math.max(...Myarray);
    // console.log("maximum number is :"+max);
    document.write("max num is : " + max);
}

function HighCount() {
    var Myarray = new Array;
    var k = 0;
    for (i = 0; i < 100; i++) {
        var randNum = Math.floor((Math.random() * 10000) + 1); //generates random numbers between 1 to 10000
        Myarray[k] = randNum;
        k++;
    }
    var evenCount = 0;
    var oddCount = 0;
    var n = 0, m = 1;
    while (n < 100) {
        oddCount += Myarray[n]
        n = n + 2;
    }
    while (m < 100) {
        evenCount += Myarray[m]
        m = m + 2;
    }
    if (evenCount > oddCount) {
        document.write("Even count is higher and it is : " + evenCount);
    }
    else {
        cument.write("Odd count is higher and it is : " + oddCount);
    }
}

function BubbleSort() {
    const inputArr = [55, 20, 1, 34, 66, 55, 81, 60, 99, 11, 10, 30, 50, 44, 23, 14, 17, 29, 68, 100]

    let len = 20;
    for (let i = 0; i < len; i++) {     //resposible for all passes
        for (let j = 0; j < len; j++) {     //executes for each pass means puts largest number at last
            if (inputArr[j] > inputArr[j + 1]) {
                let tmp = inputArr[j];
                inputArr[j] = inputArr[j + 1];
                inputArr[j + 1] = tmp;
            }
        }
    }
    console.log(inputArr);
    document.write(inputArr);

}

function CreateTable()
{
rn = window.prompt("Input number of rows", 1);
cn = window.prompt("Input number of columns",1);
  
 for(var r=0;r<parseInt(rn,10);r++)
  {
   var x=document.getElementById('myTable').insertRow(r);
   for(var c=0;c<parseInt(cn,10);c++)  
    {
     var y=  x.insertCell(c);
     y.innerHTML="("+r+","+c+")"; 
    }
   }
}





