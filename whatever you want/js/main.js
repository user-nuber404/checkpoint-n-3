/*alert("Wifi doesn't work");
console.log("Game over");
var x=8;
var y=2;
var z=x+y;
alert(z);
alert(x*y);
alert(z-x);
var mystring="wifi is wifi";
alert(mystring.length);
alert(mystring.toLowerCase());
var parts=mystring.split(" ");
alert(parts);
var myarray = [1,2,3,4,5];
myarray.pop();
alert(myarray);
var array = [6,7,8,9,10];
array.push(0);
alert(array);
var i;
for(i=0;i<4;i++){
    alert(i);
}
function mean(a,b,c,d){
    return((a+b+c)/3);
}
    alert (mean(1,2,3,4));*/
/*var getId=document.getElementById("myPara").innerHTML;
var getclass=document.getElementsByClassName("Tracks");
var getParagraph=document.getElementsByTagName("p");
console.log(getId);
console.log(getclass);
console.log(getParagraph);
var getId=document.getElementById("myPara").innerHTML;
var getParagraph=document.getElementsByTagName("p");
var getId=document.getElementById("myPara").style.color="blue";
document.getElementById("myBtn").addEventListener("click",function(){
    document.getElementById("78kL").style.color="red";
})*/
function changeColor(){
    var getText=document.getElementById("7Kd");
    if(getText.style.color=="black"){
        getText.style.color="green";

    } 
    else{

        getText.style.color="black";  
          
    }
}
setTimeout(function(){
    document.getElementById("78kL").style.color="green";
},3000)
var i=0
setInterval(function(){
    console.log(i++);
},3000)
document.getElementById("8Lo").innerHTML="a b c d";
/*document.getElementById('F4e').setAttribute("src","url");*/