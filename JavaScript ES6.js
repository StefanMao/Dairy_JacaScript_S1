// ES6 Feature

//1 Default Parameters
function foo (a = 0,b = a + 100)
{
	console.log(a+b);
}

//foo(); //100
//foo(1); //102
//foo(2); //3

//------------------------------------

function go(x){
	return x+10
}

function foo(a=1,b=go(a))
{
	console.log(a+b)
}
//foo()
//foo(1)
//foo(1,2)
//============================================

//2 Template Literals
var first = `1`
var last =`2`

var name = `Your name is ${first} ${last}.`
//console.log(name)

//3 Destructuring Assignment

var o = {p:42 , q:true}
var {p,q}= o

//console.log(p)
//console.log(q)

//3 object literal extension

let website ="stefan_mao"
let country = "Taiwan"

let obj ={
	[website]:"welcome",
	country,
};
console.log(obj)

//在 ES6 中允許將表達式作為屬性名稱，以達到動態賦值的效果
