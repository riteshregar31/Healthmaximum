
function Sum() {
    //let x=prompt('enter no of lab tests');
    let arr=[];
    arr[0]=500;
    arr[1]=250;
    arr[2]=500;
    arr[3]=400;
    arr[4]=300;
    arr[5]=450;
    arr[6]=550;
    arr[7]=550;
    arr[8]=400;
    arr[9]=700;
let sum=0;
let x=10;
let t=0;
let id=prompt('enter id of test');
while(t<10&&id>=0&&id<10){
sum=sum+arr[id];
id=prompt('enter id of test OR for no other test enter -1');
}
alert("your total bill amount is: "+sum+" Rs");
}
    //let input=[];
/*for(let i=0;i<x;i++){
input[i]=prompt('enter ids of test');
}*/
//let input = prompt("Enter a list of items separated by commas:");
//let array = input.split(",");

//let x=array.length;     

//array.sort();
//input.sort();
/*
let sum=0;
for(let i=0;i<x;i++){
if(array[i]==i){
sum=sum+arr[i];
}
}
//console.log("sum is "+sum);
alert("your total bill amount is: "+sum+" Rs");

}*/


