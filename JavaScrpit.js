
##############################################################################################################################
                                                  Dom Manipulation:
##############################################################################################################################

/**
 * 1. Append created element into the parent
 */

var parent = document.getElementById('practice1');

var new1 = document.createElement('div');
var new2 = document.createElement('div');
new1.innerHTML = "Hellow DOM!";
new2.innerHTML='Hello Child2';
parent.appendChild(new1);
parent.appendChild(new2);
/**
 * 2. Select the child node and change the color
 */

var parent2 = document.getElementById('practice2');
parent2.innerHTML = "<ul></ul>";
ul_parent2 = parent2.getElementsByTagName('ul')[0];

for (var i = 0; i < 10; i++) {
  var child = document.createElement('li');
  child.innerHTML = "Element No." + (i+1); 
  ul_parent2.appendChild(child);
}

li5 = ul_parent2.childNodes[4];
li5.style.color = 'blue';



##############################################################################################################################
                               JavaScript
##############################################################################################################################
check isuues
lexical scpoing matlap top to down aur scpoe wise value change hoti hai
======================================================
impure function: affected by outter value
let n=10;
fun(a)
{
  return n+a
}//depends on n so it is impure function

pure function : it no affected by outter value

fun(a,n)
{
  return n+a
}// not depends on outter values so it is pure function


//PolyFill
to create out own map,reducer and filter


let movies=[{title: 'a', year:2018,rate:7.5},
{title: 'b', year:2018,rate:4.5},
{title: 'c', year:2020,rate:3},
{title: 'd', year:2012,rate:5}
]

//movies with 2018 
//sorted
//decending rating
//only title
console.log(movies);
let ans=movies.filter(m18=>{
    return m18.year===2018
}).sort((a,b)=>{
    return a.rate -b.rate
}).reverse()
.map((g)=>{return g.title})

console.log(ans);


==========================================
  
  Bind it is use to to bind with value so that values can be used after wards also; 


[Bind ka pollyfills]
let obj={
    pers:'Saurabh',
    id:10,
    abc:function(bb)
    {
        console.log('Name '+this.pers +'  Id '+this.id+" "+bb) 
    }

}

Function.prototype.myBind=function(...args) 
{
let obj1=this
  return function()
  {
     obj1.call(args[0])
  }  
}


let data=obj.abc.myBind(obj);
data()
