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
