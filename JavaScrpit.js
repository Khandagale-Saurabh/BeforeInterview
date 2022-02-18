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
