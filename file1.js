// Q.1:
console.log(2 + '2'); //=> 22
console.log(2-'2');   //=> 4
// Q.2: How can remove duplicate number from array.

let num = [1,2,2,3] //=> Ans: [1,2,3] 
   //  Solution :
       console.log([...new Set(num)]); //=> [1,2,3] (In array)
       console.log(new Set(num));      //=> {1,2,3} (In Object)   
// Q.3:  
let func = function(){
 { let l = 'let'; var v = 'var';} 
//  console.log(v); var 
//  console.log(l); undefined  
}
  func();

// Answer:
   // var 
   // l is not defined
  
//    Solution:
let func1 = function(){
{(function(){let l = 'let'; var v = 'var'; }())} 
//  console.log(v); undefined
//  console.log(l); undefined  
}
  func1();
// Q.3:
console.log(5<6<7); // => true 
console.log(5<6<2); // => true
console.log(5<6<1); // => false
console.log(5<6<7); // => false
//  Solution :

//5<6<7 => 5<6 = true & true means 1
// 1<7   = true          
// 5<6<1 => 5<6 = true & true means 1
// 1<1   = false
// Q.4://
//   (1). 
let a =()=> arguments;
   console.log(a('Hello'));

//    Answer : argument is not defined
//    (2). 
let a1 = function(){ return arguments} 
    console.log(a1('Hello'))    

//    Answer : Arguments ["hi", callee: ƒ, Symbol(Symbol.iterator): ƒ]
//   (3). 
let a2 =(...n)=> {return n};
   console.log(a2('Hello'));
   
   //  Answer : ['Hello'] 
//   (4). 
let a3 =(...n)=> {return n};
   console.log(a3('Hello','Hi'));
//  Answer : ['Hello','Hi']

// Q.5: How to convert string to Array

var str = "Hello I am Amit";
   //  Solution:
     var str = "Hello I am Amit";
             var arr1 = str.split(' ');
             console.log(arr1);
   //  Answer : ['Hello','I','am','Amit']
// Q.6: How can get Object from array by value match

   var arr2 = [{a:'One',b:"Yes"},{a:'Two',b:'No'}];

// Solution:
    var arr1 = [{a:'One',b:"Yes"},{a:'Two',b:'No'}];
            var select = arr2[arr2.findIndex((obj)=> obj['a'] === 'Two')];
            console.log(select);
//    Answer :
   // {a: "Two", b: "No"}
// Q.7:
let a4 = function(){
   return
   {
   //   message:'Hi'
   }   
}
   console.log(a4());
//   Answer: undefined
//   Solution:

   let a5 = function(){
       return {
         message:'Hi'
       }   
   }
   console.log(a5());
   // Answer : {message: "Hi"}
// Q.8: How can fixed object value Means we cant change value in any conditions.

// (1).
 let Obj1 = { text:'demo'}
     Object.freeze(Obj1);
     Obj1.text = 'ChangeDemoText';
     console.log(Obj1.text);

//  Answer: demo    

// Q.9: We can change object Value    
     let Obj2 = { text:'demo'}
     Object.seal(Obj2);
     Obj2.text = 'ChangeDemoText';
 Obj2.age = 2;
     console.log(Obj2);

//  Answer: {text: "ChangeDemoText"}   
//  Note : Not add age variable in obj because we are using seal function before age

// Q.10: We can change all varible but we cant change age value in object

let Obj3 = { text:'demo'}
     Object.defineProperty(Obj3,'age',{value:3,writable:false});
     Obj3.text = 'ChangeDemoText';
 Obj3.age = 2;
     console.log(Obj3);

//  Answer: {text: "ChangeDemoText", age: 3}


// Q.11:
console.log(Math.max())             //=> infinity
  console.log(Math.max(2,31,32,2,4)); //=> 32
  console.log(Math.imul(2,3));        // => 6
  console.log(Math.min(2,3,1,0));    //=> 0  

// Q.12:  How can reduce value in array 

  var dataArr= [{
    _id:'43234234',
    price:128361.2312,
    amount : 0.012312
}]

function buildCumulativeObj(dataArr) {
     var newarr = [];
    dataArr.reduce(function (a, b, i) {
       if (a === 0) {
           var amount = Number((a + b.amount).toFixed(6));
           b['vol'] = amount;
          } else {
             var amount = Number((a.vol + b.amount).toFixed(6));
                 b['vol'] = amount;
           }
   return newarr[i] = b
          }, 0);
       return newarr;
}

// Q.13. What are JavaScript Data Types?

// Ans:    Following are the JavaScript Data types:
// 1. Number
// 2. String
// 3. Boolean
// 4. Object
// 5. Undefined

// Q.14: What is the use of isNaN function?

// Ans:  isNan function returns true if the argument is not a number otherwise it is false.
// EX: 
Number.isNaN(123) //false
Number.isNaN(-1.23) //false
Number.isNaN(5-2) //false
Number.isNaN(0) //false
Number.isNaN('123') //false
Number.isNaN('Hello') //false
Number.isNaN('2005/12/12') //false
Number.isNaN('') //false
Number.isNaN(true) //false
Number.isNaN(undefined) //false
Number.isNaN('NaN') //false
Number.isNaN(NaN) //true
Number.isNaN(0 / 0) //true  
// Q.14: What is the difference between ViewState and SessionState?
// Ans:  'ViewState' is specific to a page in a session.
//   'SessionState' is specific to user specific data that can be accessed across all pages in the web application.

// Q.15:   How can the style/class of an element be changed?
// Ans:  It can be done in the following way:
// document.getElementById("myText").style.fontSize = "20?;
// or
// document.getElementById("myText").className = "anyclass";
// Q.16.  parseInt ("4F", 17);
// Ans:   83
//    Solution:
   // F = 15
   // 4*17 = 68
   // -----------
       // 83 Answer
// Q.17. What is the function of delete operator?
// Ans: The delete keyword is used to delete the property as well as its value.
// Example
   var student= {age:20, batch:"ABC"};
   delete student.age;
           console.log(student);
  Answer: {batch: "ABC"}
// Q.18:  What are all the types of Pop up boxes available in JavaScript?
Ans:
// Alert
// Confirm and
// Prompt

// Q.19. What is the use of Void(0)?

// Ans:    Void(0) is used to prevent the page from refreshing and parameter "zero" is passed while calling.
// Void(0) is used to call another method without refreshing the page.
// Q.20: 
var cloths = ["Shirt", "Pant", "TShirt"];
cloths.pop();
 console.log(cloths);
// Answer : ["Shirt", "Pant"]

// Q.21:
if (true && fun()){ console.log("HI")}; function fun(){ console.log("how are you"); return false}
// Ans: how are you

/**
 * Q.22: How to find the pin code form the given address.
 */
var address = "New York City, New York 10024, United States";
var locationArr = address.split(',');

let pinCode = locationArr.filter(element => {
    return element.match(/\d+/g)
});
let pin = pinCode.toString()

console.log(pin.match(/\d+/g));

/**
 *  Q.23: Reverce String with out any js method
 */
let strngData = 'saif ali gour '
let newString = ''
let arr = []
function reverseString(string, len) {
    for (let i = 0; i < len; i++) {
        newString += string[i]

        if (string[i] == ' ') {

            arr.push(newString);
            newString = ''
        }


    }
}
reverseString(strngData, strngData.length);

for (let i = 0; i < Math.floor(arr.length / 2); i++) {


    let temp = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = arr[i];
    arr[i] = temp;
}


console.log(arr.toString());
/**
 *Q.24: What will be the output of following code.
 * @param {any} params 
 */

function hostLocal(params = 40) {
    var params = 20;
    console.log(params);

}
hostLocal(30);

/**
 * Q.25: Reverce string without any js method.
 */

let string = 'saif ali gour';
let newString1 = '';
let i = 0;
let stringArr = [];
let temp = '';
function reverceString(string) {
    if (string[i] == undefined) {
        stringArr.unshift(temp)
        return
    }
    else {
        if (string[i] == ' ') {
            stringArr.unshift(temp);
            temp = '', i++;
        }
        else {
            temp += string[i], i++
        }

        reverceString(string)
    }
    return stringArr.join(' ')
}
let reverce = reverceString(string)
console.log(reverce); // gour ,ali ,saif 

//  Q.26: what will be the output of folling code.
console.log('"1"+"2"+"3"',"1"+"2"+"3")  // 123
console.log('1+2+"3"',1+2+"3")          // 33
console.log("'a'-'b'+2",'a'-'b'+2)     //  NaN 
console.log("('a'+'b'-2",'a'+'b'-2)    //  NaN
console.log("2-'a'",2-'a')            //   NaN

//Q.27:
/**
 * What will be the value of this with arrow functiona and regular function
 * @param {} params 
 */
function valueOffthis(params) {
    console.log('valueOffthis',this);
    
   setTimeout(function () {
       console.log('setTimeout',this);// if this keyword is is inside the nested regular function then this keyword will be refred prent function output : global

   }, 1000);

   setTimeout(() => {
       console.log(this);// if this is in arrow function and and arrow in either regular function or arrow  function then the this will be referd to the prent this keyword.  putput : global

   }, 500);

}
// valueOffthis()

//Q.28:

/**
 * Value of this keyword inside the object 
 */
console.log(global);

let obj = {                             // object 
    age: 20,
    bojthis: this.hi = 30,                      // {}
    name: {                             // nested Object
        nestedObjThis: this,            // {} 
        settime: setTimeout(() => {     // settimeout  functon
            let func = () => {
                let func1 = () => {
                    console.log(this); // here is nested arrow function, the func1 this is referd to the func this and func this refered to the callback this
                    // and calback referd to the setTimeout this and setTimeout this referd to the obj this thtat is refered to empty object, hance func1 this will be refered 
                    //to the empty object   output : { }
                }
                func1()

            }
            func()

        }, 1000)
    }
}

console.log(obj);
//Q.29:
let obj1 = {                              // Object 
    obj1This: this,                      // { } it will bw referd to the empty Object
    settime: () => {                     // arrow function 
        console.log(this);               // {} it will be referd to the prent this 
        function func() {
            // console.log(this);       // nameed function will be the global object 
            let func1 = () => {
                // console.log(this);   // this arrow function this will be refered to the prent this function and that will be referd to the global this function
            }
            func1()

        }
        func()
    }
}
// obj1.settime();

//Q.30:

/**
 *  What will be  the output
 */

setTimeout(function () {
    for (var index = 0; index < 10; index++) {
        // console.log(index+'\\');

    }
}, 1000)

//Q.31:
/**
 *  How to find the length of the bufer 
 */
function f1(params) {
    let buf = new Buffer(150);
    let len = buf.write("Welcome to Node.js");
    console.log("sentence length is : " + len); // 18  
}

//Q.32:
/**
 *  How to copy 1 buffer value into other buffer 
 */
function f2(params) {
    var buf1 = new Buffer('india')
var buf2 = new Buffer(3);
buf1.copy(buf2);
console.log(buf2.toString()); // ind
}
//Q.33:
/**
 *  what will be the output of this.
 */

function f3(params) {
    var buf1 = new Buffer('india')
    var buf2 = new Buffer();
    buf1.copy(buf2);
    console.log(buf2.toString()); // TypeError [ERR_INVALID_ARG_TYPE]: The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type undefined
 }

 function f4(params) {
     
 }
 f4()
//Q.34:
/**
 * Q.1: what will be output of the folloing code.
 */
function async(params,cb) {
    console.log('do somthing with \''+params+'\',');
    setTimeout(() => {
        cb(params *2)
    }, 1000);
    
 }
 var item = [1,2,3,4,5,6]
 var reuslts = []
 function series(params) {
    async(params, function (reuslt) {
        reuslts.push(reuslt)
          return series(item.shift())
 
    });
 }
 console.log(series (item.shift())); 
 console.log(reuslts);
  /**
   * Output :
   * do somthing with '2',
     do somthing with '3',
     do somthing with '4',
     do somthing with '5',
     do somthing with '6',
     do somthing with 'undefined',
     do somthing with 'undefined',
     do somthing with 'undefined',
     do somthing with 'undefined',
     do somthing with 'undefined',
   */
 
//Q.35:
/**
 * what will be type of this 
 */
console.log(typeof this);          // object
console.log(typeof typeof 20);     // string
console.log(typeof  function(){}); // string
console.log('\n');

//Q.36:
/**
 * Copy Object 
 */

let Obj = {name :'saif', age:24, education :"graduation"};

let Obj1 = { id :1,name:'ali', age:23,...Obj}; //es6 if both object hvae the same key then key will be replece with copied object value 
let Obj3 = {rolNo:20, addresss: 'Noida '};
let Obj4 = {} ;
Object.assign(Obj4,Obj3,Obj1, Obj )
console.log(Object.assign({},Obj3));
console.log('obj1',Obj1);
console.log('obj4',Obj4);
console.log('\n');

//Q.37:
/**
 *  refrence on object ot other object;
 * 
 */
 
let obj1 = {name: "suhail", age:18}
let obj2 = obj1;
obj2.rollNo = 12;
console.log('obj1',obj1);
console.log('\n');

//Q.38:
/**
 * Copy value one objrct to other without use any method.
 */
let obj3 = {}
function copyObject(obj1, obj2) {
    for(let key in obj2){
      obj1[key] = obj2[key]
    }
        
    return obj1
}
copyObject(obj3,obj1)
console.log(obj3);
console.log('\n');

//Q.39:
/**
 * Q.1: To checke given no is  perfect squre or not 
 * @param {Number} num 
 */

function isPowerOf3(squre, value) {
    let isPerfectSqure = squre
        ;
    let flag = 0;
    /*check power of any no*/
    while (isPerfectSqure != 1) {
        if (isPerfectSqure % value != 0) {
            flag = 1;
            break;
        }
        isPerfectSqure = isPerfectSqure / value;
    }

    if (flag == 0)
        console.log("%d is a number that is the power of 3.", squre);
    else
        console.log("%d is not the power of 3.", squre);
}
isPowerOf3(16, /** is perfect squre of*/ 4);

//Q.40: Replace {name} from any value.

String.prototype.replaceAll = function(str1, str2, ignore) {
    let abc = str1.replace(/([\/\,\!\\\^\$\{\}\[\]\(\)\.\*\+\?\|\<\>\-\&])/g, "\\$&")
    console.log(abc);

    let regs = new RegExp(abc, (ignore ? "gi" : "g"));
    console.log(regs);
    console.log(this);
    console.log(typeof(str2) == "string");
    console.log(str2.replace(/\$/g, "$$$$"))
    return this.replace(regs, (typeof(str2) == "string") ? str2.replace(/\$/g, "$$$$") : str2);
}


let strings = "Hi my name is {name} and my father name is {name} and my brother name is also {name}"

let newstrings = strings.replaceAll("{name}", "Saif", )

console.log(newstrings)

//Q.41:  copy object value with out any method and for loop;

//Q.42:
//Q.43:
//Q.44:
//Q.45:
//Q.46:
//Q.47:
//Q.48:
//Q.49:
//Q.50:
//Q.51:
//Q.52:
//Q.53:
//Q.54:
//Q.55:
//Q.56:
//Q.57:
//Q.58:
//Q.59:
//Q.60:
//Q.61:
//Q.62:
//Q.63:
//Q.64:
//Q.65:
//Q.66:
//Q.67:
//Q.68:
//Q.69:
//Q.70:
//Q.71:
//Q.72:
//Q.73:
//Q.74:
//Q.75:
//Q.76:
//Q.77:
//Q.78:
//Q.79:
//Q.80:
//Q.81:
//Q.82:
//Q.83:
//Q.84:
//Q.85:
//Q.86:
//Q.87:
//Q.88:
//Q.89:
//Q.90:
//Q.91:
//Q.92:
//Q.93:
//Q.94:
//Q.95:
//Q.96:
//Q.97:
//Q.98:
//Q.99:

