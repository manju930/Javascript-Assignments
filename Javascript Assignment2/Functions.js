alert("hey block the incoming virus");

function composedValue(square, double , value)
{
    var res1 = square(value);
    var res2 = double(res1);
    console.log("Composed value is : " +res2);
}
function square(x)
{
    return x*x;
}
function double(x)
{
    return x*2;
}
composedValue(square,double,3);




//2) question number 2
var square = (x) => x*x;  //using arrow function
var double = (x) => x*2;
square(double(5));
console.log();
var Compose = function(square,double)
{
    console.log("The value of the square is : " +square);
}

console.log(Compose(10,20));




//3)Third question

var find = function(array1,isEven)
{
    array1 = [],
    test = function()
    {
        for(i=1 ; i<array1.length ; i++)
        {
            console.log("The value returned is : " +i);
        }
        if(array1[0]===1 && array1.length > 1)
        {
            console.log(array1[i]);
        }
        else 
        {
            return array1[0];
        }
    }
}

function isEven(num)
{
    return(num%2==0);
}
var var1 = isEven(3);
var var2 = isEven(4);

var result = find([1,3,5,4,2],isEven(3));
console.log("The final result of this function is : " +result);



//4) question number 4
var numbers = [1,2,3,4,5];
var newArray = [];
var square = function(numbers)
{
    for(i=0;i< numbers.length; i++)
    {
        newArray.push(math.pow(numbers[i],2));
    }
    console.log(newArray);
}



















