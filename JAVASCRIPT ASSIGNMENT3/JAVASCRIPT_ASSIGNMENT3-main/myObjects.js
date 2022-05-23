//Question 1-----------------------------------------------------------------------------------------.

var Rectangle = function(width,height) 
{
    this.width = width;
    this.height = height;
    this.area = function()
    {
        console.log("Area of the Rectangle is : " +this.width * this.height);
    }
} 

var myRect1 = new Rectangle(15,25); //calling objects/making intances
var myRect2 = new Rectangle(20,30);
var myRect3 = new Rectangle(45,65);
var myRect4 = new Rectangle(25,50);

console.log(myRect1.width); //calling object's properties
console.log(myRect1.height);
myRect1.area();
console.log("---------------------");

console.log(myRect2.width); //calling object's properties
console.log(myRect2.height);
myRect2.area();
console.log("---------------------")
console.log(myRect3.width); //calling object's properties
console.log(myRect3.height);
myRect3.area();
console.log("---------------------")
console.log(myRect4.width); //calling object's properties
console.log(myRect4.height);
myRect4.area();
console.log("---------------------")




//Question 2---------------------------------------------------------------------------------------------------
Rectangle.prototype.getArea = function()
{
    console.log("Getting Area using prototype property : " +this.width * this.height);
}

console.log(Rectangle.prototype);
myRect1.getArea(); 
myRect2.getArea();
myRect3.getArea();
myRect4.getArea();


//Question 3-----------------------------------------------------------------------------------------------------

Rectangle.prototype.getAreaForRect = function(width,height)  //this is because of Global scope and Local scope.
{
    console.log("Getting Area using prototype property : " +width * height);
}

console.log(Rectangle.prototype);
myRect1.getAreaForRect(4,5); //calling method which is created using prototype property
myRect2.getAreaForRect(5,6);
myRect3.getAreaForRect(7,8);
myRect4.getAreaForRect(11,2);


//Question 4-------------------------------------------------------------------------------------------------
var obj = {
    firstName : "Manjunath",
    lastName : "Mallela"
};
console.log(obj);

//Question 5---------------------------------------------------------------------------------------------------

var obj1 = {
    firstName : "Manjunatha",
    middleName : "Reddy",
    lastName : "Mallela"
};
console.log(obj1);


//Question 6 = Create a string with what looks like an object with firstName and lastName,use eval() property.

var myString = new String('2 + 2')
eval(myString.toString());
console.log(eval(myString.toString()));




//Question 8 = Creating a Person dynamic object
function Person(firstName,lastName,age,skills,dateOfbirth,address,married,profession)
{
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.skills = skills;
    this.dateOfbirth = dateOfbirth;
    this.address = address;
    this.married = married;
    this.profession = profession;
}

Person1 = new Person("Manjunath","Mallela",24,['javascript','C#'],"19/02/1999",{city:"Kodur",pincode:515601},"false","Developer");
Person2 = new Person("Dinesh","Mallela",23,["Nodejs","Javascript"],"16/1/1997",{city:"Kodur",pincode:515601},"false","Developer");

console.log(Person1);
console.log(Person2);

print=function()       //printing the object using Global print method.
{
    console.log(Person1);
    console.log(Person2);
}();



//Question 9 = Ram and Chiru program
function Person(firstName,lastName,age,skills,dateOfbirth,address,married,profession)
{
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.skills = skills;
    this.dateOfbirth = dateOfbirth;
    this.address = address;
    this.married = married;
    this.profession = profession;
}
Chiru = new Person("Chiru","Konidela",76,['java','c#'],"01/08/1967",{city:"Bangalore",pincode:543219},"false","AnalystA4");
Ram = new Person("Ram",55,["html","css"],"05/08/1985","false","JrAnalyst");
Jeevana = new Person("Jeevana",10,"05/01/2004","false","film");

var Ram = Object.create(Chiru); //inheriting the common properties/storing Chiru object in Ram
var Jeevana = Object.create(Ram);  //it has become Heirarchical inheritance now--> Chiru is a supermost class 

print = function()
{
    console.log(Chiru);
    console.log(Ram.lastName);
    console.log(Ram.address);
    console.log(Jeevana.lastName);
    console.log(Jeevana.skills);
    console.log(Jeevana.address);
    console.log(Jeevana.firstName);
}();



//Question 10 = Bank Account Application

function Account(accountNumber,accountHolderName,accountBalance) 
{
    this.accountNumber = accountNumber;
    this.accountHolderName = accountHolderName;
    this.accountBalance = accountBalance;
}
function Savings(isSalary,accountNumber,accountHolderName,accountBalance)
{
    this.isSalary = isSalary;
    this.accountNumber = accountNumber;
    this.accountHolderName = accountHolderName;
    this.accountBalance = accountBalance;
    this.withdraw = function(amount)
    {
        if(this.accountBalance > 0 && this.accountBalance < 100)
        {
            console.log("Insuffient balance! You have less than 100 rs.");
        } 
        if((this.accountBalance >= 100 && this.accountBalance <= 500) && amount === 200)
        {
            this.accountBalance = this.accountBalance - amount;
            console.log("Your money after debiting : " + this.accountBalance);
        }
        if((this.accountBalance > 500 && this.accountBalance <= 5000) && amount === 500 || amount === 2000);
        {
            this.accountBalance = this.accountBalance - amount;
            console.log("Your money after debiting : " + this.accountBalance);
        }
        if((this.accountBalance > 5000) && amount === 200 || amount === 500 || amount ===2000)
        {
            this.accountBalance = this.accountBalance - amount;
            console.log("Your money after debiting : " + this.accountBalance);
        }
        if(this.accountBalance <= 0)
        {
            console.log("ATM says! I cant give you the money, Please deposit some amount to withdraw later, Now Please goo!");
        }
      
    };
    this.getCurrentBalance = function()
    {
        console.log("Your current Account balance is : " + this.accountBalance);
    };
}
function Current(odLimit,accountNumber,accountHolderName,accountBalance)
{
    this.odLimit = odLimit;
    this.accountNumber = accountNumber;
    this.accountHolderName = accountHolderName;
    this.accountBalance = accountBalance;
    this.withdraw = function(amount)
    {
        if(odLimit > 500)
        {
            if((this.accountBalance > 500 && this.accountBalance < 2000) && amount === 200 || amount === 500)
            {
                this.accountBalance = this.accountBalance - amount;
                console.log("Your balance after debiting the money is : " +this.accountBalance);
            }
            if((this.accountBalance > 2000) && amount=== 200 || amount === 500 || amount === 2000)
            {
                this.accountBalance = this.accountBalance - amount;
                console.log("Your balance after debiting the money is : " +this.accountBalance);
            }
        } 
        else
        {  
            console.log("Your odLimit for Current acocunt is less than 500");
        }  
    };
    this.getCurrentBalance = function()
    {
        console.log("Your current Account balance is : " + this.accountBalance);
    };
       
}

var obj1 = new Account(12678,"Manjunath",65546);
console.log(obj1);


var objSavings = new Savings("true",98765,"kishan",546776); //creating Savings object
console.log(objSavings);
console.log(objSavings.withdraw(500));
console.log(objSavings.getCurrentBalance());

var objCurrent = new Current(550,9876543,"jeevan",5467878); //creating Current object
console.log(objCurrent);
console.log(objCurrent.withdraw(2000));
console.log(objCurrent.getCurrentBalance());
