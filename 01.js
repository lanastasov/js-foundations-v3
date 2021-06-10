var x = "5";
x = x + 1; //  "51"

var y = "5";

y++;        // 5
y;          // 6

/////////////////////////////////////
// Primitive Types
// undefined
// string
// number
// booleawn
// object
// symbol 

/////////////////////////////////////
// Primitive Types: typeof
var v;
typeof v;                       // "undefined"
v = "1";
typeof v;                       // "string"
v = 2;
typeof v;                       // "number";
v = true;
typeof v;                       // "boolean"
v = {};
typeof v;                       // "object"
v = Symbol();
typeof v;                       // "symbol";
typeof doesntExist;             // "undefined"

var v = null;
typeof v;                       // "object" OOPS!

v = function(){};
typeof v;                       // "function" hmmmm?

v = [1,2,3];
typeof v;                       // "object" hmmm?

/////////////////////////////////////
// Special Values: NaN
var myAge = Number("0o46");     // 38
var myNextAge = Number("39");   // 39
var myCatsAge = Number("n/a");  // NaN
myAge - "my son's age";         // NaN

myCatsAge === myCatsAge;        // false OOPS!

isNaN(myAge);                   // false
isNaN(myCatsAge);               // true
isNaN("my son's age");          // true OOPs!

Number.isNaN(myCatsAge);        // true
Number.isNaN("my son's age");   // false

/////////////////////////////////////
// Special Values: -0
var trendRate = -0;
trendRate === -0;               // true

trendRate.toString();           // "0" OOPS!
trendRate === 0;                // true OOPS!
trendRate < 0;                  // false
trendRate > 0;                  // false

Object.is(trendRate,-0);        // true
Object.is(trendRate,0)          // false;

Math.sign(-3);                  // -1
Math.sign(3);                   // 1
Math.sign(-0);                  // -0 WTF?
Math.sign(0);                   // 0 WTF?

// "fix" Math.sign(..)
function sign(v) {
    return v !== 0 ? Math.sign(v) : Object.is(v,-0) ? -1 : 1;
}

sign(-3);                        // -1
sign(3);                         // 1
sign(-0);                        // -1
sign(0);                         // 1