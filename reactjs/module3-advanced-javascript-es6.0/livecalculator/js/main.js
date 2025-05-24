// create a function for clear all data 
function clearData() 
{
document.getElementById("result").value="";
}
// create a function to input button values in result textbox
function inputButton(val) 
{
document.getElementById("result").value+=val;
}
//create a function for slice values from end of result textbox

function sliceValue() 
{
 var slc=document.getElementById("result").value;
 var res=slc.slice(0,-1);
 document.getElementById("result").value=res;
}

// create a function for performing arithmetic operations or finalResult 
function finalResult()
{
    var x=document.getElementById("result").value;
    var res=eval(x);
    document.getElementById("result").value=res;
}
//create a function for sqaure root operation

function squareRoot()
{
   var x=document.getElementById("result").value;
   var res=Math.sqrt(x);
   document.getElementById("result").value=res;

}

//create a  function for percentage operation

function percentage()
{
   var x=document.getElementById("result").value;
   var res=(x/100);
   document.getElementById("result").value=res;

}

// create a function for square operation

function sq()
{
    var x=document.getElementById("result").value;
    var res=Math.pow(x,2);
    document.getElementById("result").value=res;
}